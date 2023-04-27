/*
 * @Author: xs
 * @Date: 2023-04-27 15:22:45
 */
type InfoType = (name: string, age: number, ...rest: any) => number;

let info: InfoType = function (name, age) {
  return 3;
};

interface a1 {
  name: string;
}
interface b1 {
  name: string;
}

interface c2 extends a1, b1 {
  age: number;
  // name:age, 同属性类型不能重复
}
// 元组

let ddd: [string, number] = ["1", 2];

// 可变元组
let [names, age, ...rest]: [string, number, ...any[]] = ["1", 1, 4444321, 2];

class DataUtil {
  static formate() {}
  static diffDataByTime() {}
}
// 如何避免创建多个类 只需要创建一个对象
// let dataUtil = new DataUtil();
// let dataUti2 = new DataUtil();
// 静态方法static
DataUtil.formate();
