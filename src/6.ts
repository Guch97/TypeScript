/*
 * @Author: xs
 * @Date: 2023-04-28 13:31:46
 */
class ArrayListD<T> {
  arrayList: Array<T> = [];
}

class ArrayListA<T> {
  array: Array<T>;
  index: number = 0;
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
console.log("list.get(0) :>>> ", list.get(0)); //xs
