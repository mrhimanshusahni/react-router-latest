const array = [
  {
    id: 1,
    value: "Item 1",
  },
  {
    id: 2,
    value: "Item 2",
  },
  {
    id: 3,
    value: "Item 3",
  },
];

const array2: any = [];

const handleDelete = <T = Record<string, string>>(arr: T[], index: number) => {
  arr.splice(index, 1);
};

handleDelete<{ id: number; value: string }>(array, 1);
handleDelete(array2, 0);

console.log("array :>> ", array);

console.log("array2 :>> ", array2);
