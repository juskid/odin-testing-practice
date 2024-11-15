const exp = require("constants");
const { reverse } = require("dns");

//capitalize
test('Capitalize Happy', () => {
    expect(capitalize()).toBe('');
});
test('Capitalize Happy v2', () => {
    expect(capitalize('test')).toBe('Test');
});

test('reverseString Happy empty', () => {
    expect(reverseString()).toBe('');
});

test('revereStrign Happy', () => {
    expect(reverseString('Test')).toBe('tseT');
});

test('calculator New Object', () => {
    const calculatorObject = new Calculator();
    expect(calculatorObject).toBeDefined();
});
test('calculator happy path', () => {
    const calculatorObject = new Calculator();
    expect(calculatorObject.add(1,2)).toBe(3);
});

test('cypher exist', () => {
    expect(caesarCipher());
});
test('cypher happy', () => {
    expect(caesarCipher('hello world', 3)).toMatch('khoor zruog');
});
test('cypher Capital', () => {
    expect(caesarCipher('Hello World', 3)).toMatch('Khoor Zruog');
});

test('analyzeArray Exists', () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.average).toBeDefined();
    expect(object.min).toBeDefined();
    expect(object.max).toBeDefined();
    expect(object.length).toBeDefined();
});
test('analyzeArray Happy Path', () => {
    const object = analyzeArray([1,8,3,4,2,6]);
    expect(object.average).toBe(4);
    expect(object.min).toBe(1);
    expect(object.max).toBe(8);
    expect(object.length).toBe(6);
});

//Functions and shit
function capitalize(word) {
    return word ? word.charAt(0).toUpperCase() + word.slice(1): '';
}

function reverseString(word) {
    return word ? word.split('').reverse().join('') : '';
}

class Calculator {
    constructor() {
    }
    add(num1, num2) {
        return num1 + num2;
    }
}

function caesarCipher(str, shift) {
    if (str) {
        let result = "";
  
        for (let i = 0; i < str.length; i++) {
          let char = str[i];
          let code = char.charCodeAt(0);
      
          // Check if it's a letter
          if (char.match(/[a-zA-Z]/i)) {
            // Get the correct character code range
            let base = char.charCodeAt(0) <= 90 ? 65 : 97;
      
            // Shift the character code
            code = ((code - base + shift) % 26) + base;
          }
      
          result += String.fromCharCode(code);
        }
      
        return result;
    }
    return;
}

function analyzeArray(array) {
    array.sort();
    const analzyeObject = new Object();

    analzyeObject.average = array[array.length/2];
    analzyeObject.min = array[0];
    analzyeObject.max = array[array.length-1];
    analzyeObject.length = array.length;




    return analzyeObject;
}