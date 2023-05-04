/*
 * @Author: xs
 * @Date: 2023-04-28 13:31:46
 */
// 泛型
class ArrayListD<T = any> {
  arrayList: Array<T> = [];
}
class ArrayListA<T = any> {
  array: Array<T>;
  index: number = 0;
  order: string = "1";
  constructor() {
    this.array = [];
  }
  add(ele: T) {
    this.array[this.index++] = ele;
  }
  get(index: number) {
    console.log("this.index :>>> ", this.index); //xs
    return this.array[index];
  }
}

let list = new ArrayListA<string>();
list.add("abc");

type OrderInitState = ArrayListA[keyof ArrayListA];

// 约束为object类型
type InstacKeys<T extends object> = keyof T;
type orderKeys = InstacKeys<ArrayListA>;
