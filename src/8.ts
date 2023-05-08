/*
 * @Author: xs
 * @Date: 2023-05-04 11:26:22
 */
// 函数重载

type Message = {
  id: number;
  type: TypeDefaultMessage;
  defaultMessage: string;
};
enum TypeDefaultMessage {
  "image" = "1",
  "audio" = "2",
}
let message: Message[] = [
  {
    id: 1,
    type: TypeDefaultMessage.image,
    defaultMessage: "222",
  },
  {
    id: 2,
    type: TypeDefaultMessage.audio,
    defaultMessage: "333",
  },
];

function searchMessage(condaton: number): Message | undefined;
function searchMessage(condaton: TypeDefaultMessage): Message[] | undefined;

function searchMessage(condaton: TypeDefaultMessage | number) {
  if (typeof condaton === "number") {
    return message.find((item) => item.id === condaton);
  } else {
    return message.filter((item) => item.type === condaton);
  }
}

searchMessage(1);
searchMessage(TypeDefaultMessage.image)?.forEach((item) => {
  console.log("item :>>> ", item); //xs
});

// 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

function print<T>(arg: T): T {
  console.log(arg);
  return arg;
}

// 工程模式

class CoomercialBack {
  public address: string = "1";
  public name: string = "wo";
  static count: number = 18;
  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
  loan(): void {}
}
type CoomercialBacktype = new (...args: any) => CoomercialBack;

// 交叉类型

type o1 = { a: string };
type o2 = { b: string };
type o3 = o1 & o2;
type o4 = string & number;

// 通用交叉方法
function cross<T extends object, U extends object>(t: T, u: U): T & U {
  const comibe = {} as T & U;
  for (let key in t) (comibe as any)[key] = t[key];
  for (let key in u) (comibe as any)[key] = u[key];
  return comibe;
}

function mergeObjects<T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 } as T & U;
}
let Person3 = {
  name: 1,
  age: "2",
};
let Person4 = {
  department: "1",
  id: "2",
};

let aaabcd = cross(Person3, Person4);
let aaabcd1 = mergeObjects(Person3, Person4);

interface Person2 {
  name: string;
  age: number;
}

interface Employee extends Person2 {
  id: number;
  department: string;
}
let abcd: Employee = {};
