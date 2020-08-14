use std::time::{SystemTime};
use std::{fs::read_to_string, fs::read_dir};
use prettytable::{row, cell, Table};

use boa::{
    exec::Interpreter,
    forward,
    forward_val,
    realm::Realm,
    builtins::value::Value,
    builtins::value::ResultValue,
    builtins::function::Function
};

struct TestResult{
    pub name: String,
    pub status: bool,
    pub time: String
}

impl TestResult{
    fn default() -> TestResult{
        return TestResult{
            name: String::from(""),
            status: false,
            time: String::from("")
        }
    }
}

fn main() {
    let start = SystemTime::now();
    let realm = Realm::create();
    
    //Adding custom global variable
    realm.global_obj.set_field("globaltest", "Hello There");

    //Adding custom global function
    //let rfn: fn() = rusty_hello;
    let rfn = Function::builtin(Vec::new(), rusty_hello);
    realm.global_obj.set_field("rusty_hello", Value::from_func(rfn));

    //Adding module import
    let requirefn = Function::builtin(Vec::new(), require);
    realm.global_obj.set_field("require", Value::from_func(requirefn));

    //let moduleobj = Value::new_object(Some(&realm.global_obj));
    //moduleobj.set_field("exports", Value::from("Hello Module!"));
    //realm.global_obj.set_field("module", moduleobj);
    let windowobj = Value::new_object(Some(&realm.global_obj));
    realm.global_obj.set_field("window", windowobj);

    //Adding custom object
    let gobj = Value::new_object(Some(&realm.global_obj));
    let addfn = Function::builtin(Vec::new(), add);
    gobj.set_field("add", Value::from_func(addfn));
    realm.global_obj.set_field("rustobj", gobj);

    let mut engine = Interpreter::new(realm);
    let folder_res = read_dir("scripts");
    let scripts_folder = folder_res.unwrap();

    let mut files_cnt = 0;
    let mut success_cnt = 0;
    let mut failed_cnt = 0;
    let mut results = Vec::new();
    for files in scripts_folder{
        files_cnt += 1;
        let mut result = TestResult::default();
        let file_name = files.unwrap().path();
        let file = file_name.to_str().unwrap();
        result.name = String::from(file);
        println!("\r\n=======================");
        println!("Test: {}\r\n", file);
        let now = SystemTime::now();
        let buffer = read_to_string(file);
        if buffer.is_err(){
            result.status = false;
            println!("Error: {}", buffer.unwrap_err());
        }else{
            match forward_val(&mut engine, &buffer.unwrap()) {
                Ok(v) => {
                    if v.is_boolean() && v.to_boolean() == true{
                        result.status = true;
                    }else{
                        result.status = false;
                    }
                    print!("{}", v)
                },
                Err(v) => {
                    result.status = false;
                    eprint!("{}", v)
                }
            }
        }
        
        if result.status {
            success_cnt += 1;
        }else{
            failed_cnt += 1;
        }

        result.time = format!("{} ms", now.elapsed().unwrap().as_millis());
        println!("\r\n\r\nTime Taken: {}", result.time);
        println!("=======================\r\n");
        results.push(result);
    }
    let total_time = start.elapsed().unwrap().as_millis();
    let mut table = Table::new();
    table.add_row(row!["Test Name", "Status", "Time Taken"]);

    println!("=========== Results ===============");
    for result in results{
        //println!("{}\t\t\t- {}\t- {}", result.name, result.status, result.time);
        table.add_row(row![result.name, result.status, result.time]);
    }
    table.printstd();
    println!("Total Tests: {}", files_cnt);
    println!("Total Success: {}", success_cnt);
    println!("Total Failed: {}", failed_cnt);
    println!("Total Time Taken: {} ms", total_time);
}

fn rusty_hello(_:&Value, args:&[Value], _:&mut Interpreter) -> ResultValue{
    let arg = args.get(0).unwrap();
    let val = format!("Hello from Rust! You passed {}", arg);
    return ResultValue::from(Ok(Value::from(val)));
}

fn require(_:&Value, args:&[Value], engine:&mut Interpreter) -> ResultValue{
    let arg = args.get(0).unwrap();
    println!("Loading: {}", arg);
    let buffer = read_to_string(arg.to_string());
    if buffer.is_err(){
        println!("Error: {}", buffer.unwrap_err());
        return ResultValue::from(Ok(Value::from(-1)));
    }else{
        forward(engine, &buffer.unwrap());
        //let module_exports = engine.realm.global_obj.get_field("module").get_field("exports");
        //println!("{:?}", module_exports.type);
        let return_value = ResultValue::from(Ok(Value::from(0)));
        return return_value;
    }
}

fn add(_:&Value, args:&[Value], _engine:&mut Interpreter) -> ResultValue{
    let arg0 = args.get(0).unwrap();
    let arg1 = args.get(1).unwrap();
    return ResultValue::from(Ok(Value::from(arg0.to_integer() + arg1.to_integer())));
}
