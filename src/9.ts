/*
 * @Author: xs
 * @Date: 2023-05-05 14:31:47
 */
// infer
// infer 关键字用于从一个类型中推断出其他类型，
// 并将其赋值给一个新的类型变量。
// infer 关键字通常用于条件类型中，它可以帮助我们推断出一个类型中的某个属性或成员的类型，并将其应用到另一个类型中。
// 占位符

type Person = { name: string; age: number };
type NameType<T> = T extends { name: infer U; age: number } ? U : never;

type PersonName = NameType<Person>;

// 类型体操

interface ab {
  name: string;
  age: number;
}
type ccd = {
  [P in keyof ab]: ab[P];
};

// 条件类型
type test1 = string extends string ? string : never;

// 追加属性 不知道什么属性 怎么办？
type addAttr<T, K extends string, V> = {
  [P in keyof T | K]: P extends keyof T ? T[P] : V;
};
interface Customer {
  name: string;
  degree: number;
  phone: string;
}
type test = addAttr<Customer, "address", string>;

// 模板字符类型
type TestTemplate<T, U> = `${T & string}/${U & string}`;

type test2 = TestTemplate<"menu", "setActiveIndex" | "setCollsapce">;

// TS 高级类型
// Extract 源码
// type Extract<T, U> = T extends U ? T : never;
type StringProps<T> = {
  [K in keyof T]: Extract<T[K], string>;
};
// Exclude
// type Exclude<T, U> = T extends U ? never : T;

let objTest = {
  name: "wangwu",
};

// Record类型  不想定义接口
function addObj(rec: Record<"name" | "age", string | number>) {}
addObj({ name: "wangwu", age: 23 });

type MyObject = Record<string, any>;
const myObj: MyObject = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
};

// Partial 所有属性变成可选

// Pick 提取对象类型
type pick_ = Pick<Customer, "name" | "phone">;

// 和Pick 相反 排除法
// type OmitTest<T, K extends keyof T> = {
//   [P in keyof T as P extends K ? never : P]: T[P];
// };
// type myOmitTest = OmitTest<Customer, "degree">;
// as 可以理解成 是 的意思
type OmitTest<T, K extends keyof T> = {
  [P in keyof T as Exclude<P, K>]: T[P];
};
type myOmitTest = OmitTest<Customer, "degree" | "name">;

interface TODOTest {
  readonly title: string;
  complated: boolean;
  description: string;
  data?: Date;
  publisher?: string;
}
// 去掉？ 改为必选
type RequireTest<T> = {
  [P in keyof T]-?: T[P];
};
type todotest = RequireTest<TODOTest>;

// 添加？ 改为非必选
type AddRequireTest<T> = {
  [P in keyof T]+?: T[P];
};
type addtodotest = AddRequireTest<TODOTest>;
type addtodotest3 = Partial<TODOTest>;

// 去掉只读
type ReadyOnlyTest<T> = {
  -readonly [P in keyof T]: T[P];
};
type ReadyOnlyTest1 = ReadyOnlyTest<Partial<TODOTest>>;
let todo: ReadyOnlyTest1 = { title: "333" };
