import {arr,arr2,arr3,arr4,arr5} from './array-methods.js';
import {shortenUrl} from "../utilities/utilities.js";

console.log('Array Methods - reduce');

//this one is fun, I am going to show you both the traditional and modern way to do this
//but in this file I am first going to show you the modern way as I find it WAY more simple
//and then I will show you the traditional way

//modern javascript array reduce example
/**
 * A function that uses the reduce method to reduce an array to a single value
 * @param array
 * @notes
 * runtime complexity: O(n)
 */
const modernReduceExample = (array) => {
    console.log('input\t',array);
    const result = array.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log('output\t',result);
}

//traditional array reduce example
/**
 * A function that uses a for loop (traditional) to reduce an array to a single value
 * @param array
 * @notes
 * runtime complexity: O(n)
 */
const traditionalReduceExample = (array) => {
    console.log('input\t', array);
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    console.log('output\t', result);
}

const printExamples = () => {
    console.log('Modern Reduce Example');
    modernReduceExample(arr);
    modernReduceExample(arr2);
    modernReduceExample(arr3);
    modernReduceExample(arr4);
    modernReduceExample(arr5);
    console.log('\nTraditional Reduce Example');
    traditionalReduceExample(arr);
    traditionalReduceExample(arr2);
    traditionalReduceExample(arr3);
    traditionalReduceExample(arr4);
    traditionalReduceExample(arr5);
}

printExamples();