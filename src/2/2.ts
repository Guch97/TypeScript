/*
 * @Author: xs
 * @Date: 2023-04-26 15:41:29
 */

interface student {
  name: string;
  age: number;
}

interface ss extends student {}

// 类型注解
let data: number = 0;

// 类型推倒
let money = "str";

// 基本类型
// number string  boolean symbol null undefined

// 对象类型
// Array object function

// 枚举
// enum

// 其他
// any unknown never void 元组tuple

// 联合类型  交叉类型

// 根类型
let a: Object = "2";
let abb: {} = "2";

// 对象类型
let c: object = "3";

// 联合类型
let str: string | number = "abc";

// 交叉类型
type a = { username: string };
type b = { age: number };

let obj: a = { username: "3" };
let obj2: b = { age: 3 };

let obj3: a & b = { username: "222", age: 4 };

// 字面量类型
type aaa = number;
let test: aaa = 3;

// never 什么时候会呈现
// 避免出现新的类没有对应类的实现
type test3 = number | string;
function test1(params: test3) {
  if (typeof params === "number") {
  } else if (typeof params === "string") {
  } else {
    let b = params;
  }
}

// enum
enum Week {
  Monday = 10,
  Tuesday,
  ThirdDay = "test",
}
Week.ThirdDay = "3";
Week["Tuesday"];

function test44(status: Week) {
  if (status === Week.ThirdDay) {
  }
}

let data111: any = 44;
let bbb: Array<number> = [4, 1];

// any是任何类的子类,unknown不能当作子类，不能获取任何属性和方法
// unknown一般用于接受参数后 不允许做任何操作，只负责接受参数然后传递

// interface 接口
interface aabc {
  add(): void;
}
class ArrayList implements aabc {
  add() {}
}
