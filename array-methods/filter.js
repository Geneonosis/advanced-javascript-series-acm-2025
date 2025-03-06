import {arr,arr2,arr3,arr4,arr5} from './array-methods.js';
import {shortenUrl} from "../utilities/utilities.js";

console.log('Array Methods - filter');

//traditional array filtering example
/**
 * A function that uses a for loop (traditional) to filter an array
 * @param array
 * @notes
 * runtime complexity: O(n)
 */
const traditionalFilterExample = (array) => {
    console.log('original',array);
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 2) {
            result.push(array[i]);
        }
    }
    console.log('filter > 2',result);
};

//modern javascript array filtering example
/**
 * A function that uses the filter method to filter an array
 * @param array
 * @notes
 * runtime complexity: O(n)
 */
const modernFilterExample = (array) => {
    console.log('original',array);
    const result = array.filter((item) => item > 2);
    console.log('filter > 2',result);
}

const printExamples = () => {
    console.log('Traditional Filter Example');
    traditionalFilterExample(arr);
    traditionalFilterExample(arr2);
    console.log('\nModern Filter Example');
    modernFilterExample(arr);
    modernFilterExample(arr2);
}

printExamples();