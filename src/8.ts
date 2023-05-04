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

// 泛型函数 和 重载结合使用
