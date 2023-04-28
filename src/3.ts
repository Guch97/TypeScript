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
  static timeCoverVersion() {}
}
// 如何避免创建多个类 只需要创建一个对象

// 静态方法static
DataUtil.formate();
DataUtil.formate();

// 单件模式
class DataUtil1 {
  static dataUtil: DataUtil1;
  static getInstance() {
    if (!this.dataUtil) {
      this.dataUtil = new DataUtil1();
    }
    return this.dataUtil;
  }
  private constructor() {}
  formate() {}
  diffDataByTime() {}
  timeCoverVersion() {}
}
export const aaa = DataUtil1.getInstance();

class DataUtil2 {
  _age: number = 0;
  static dataUtil = new DataUtil2();
  private constructor() {}
  formate() {}
  diffDataByTime() {}
  timeCoverVersion() {}
  doEat(who: string, where: string) {
    console.log(who + "is", where, "eat");
  }
  set age(val: number) {
    if (val === 0) {
      this._age = val;
    } else {
      throw new Error("错误");
    }
  }
  get age() {
    return this._age;
  }
}
const dataop = Object.getOwnPropertyDescriptor(DataUtil2.prototype, "doEat");
export const bbb = DataUtil2.dataUtil;
