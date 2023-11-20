var myArray: any[] = [1, true, 3, false];

const rdm = (array: any[]): void => {
  for (let i: number = 0; i < 10; i++) {
    var random: number = Math.floor(Math.random() * 10);
    array.push(random);
  }
  for (let j: number = 0; j < array.length; j++) {
    console.log(array[j]);
  }
};

rdm(myArray);

const numStr = (num: number, str: string) => {
  var converter: number = parseInt(str);
  var result: number = num * converter;
  return result;
};

console.log(numStr(5, "5"));
