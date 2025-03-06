import {arr, arr2, arr3, arr4, arr5} from './array-methods.js';
import {shortenUrl} from "../utilities/utilities.js";

console.log('Array Methods - includes');

/**
 * A function that uses a for loop (traditional) to determine if a value is in an array
 * @param array
 * @param value
 */
const exampleIncludesTraditional = (array, value) => {
    console.log('original',array);
    let result = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            result = true;
            break;
        }
    }
    console.log('includes',value,result);
};

/**
 * A function that uses the includes method to determine if a value is in an array
 * @param array
 * @param value
 */
const exampleIncludes = (array, value) => {
    console.log('original',array);
    const result = array.includes(value);
    console.log('includes',value,result);
};

const printExamples = () => {
    console.log('Traditional Includes Example');
    exampleIncludesTraditional(arr, 3);
    exampleIncludesTraditional(arr2, 'c');
    console.log('\nIncludes Example');
    exampleIncludes(arr, 3);
    exampleIncludes(arr2, 'c');
};

printExamples();

try {
    console.group('mermaid diagram examples:');
}catch(e){
    console.log(e);
}finally {
    console.groupEnd();
}