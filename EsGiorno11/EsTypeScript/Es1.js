var myArray = [1, true, 3, false];
var rdm = function (array) {
    for (var i = 0; i < 10; i++) {
        var random = Math.floor(Math.random() * 10);
        array.push(random);
    }
    for (var j = 0; j < array.length; j++) {
        console.log(array[j]);
    }
};
rdm(myArray);
var numStr = function (num, str) {
    var converter = parseInt(str);
    var result = num * converter;
    return result;
};
console.log(numStr(5, "5"));
