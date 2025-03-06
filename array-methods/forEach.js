import { shortenUrl } from '../utilities/utilities.js';
import {arr, arr2, arr3, arr4, arr5} from './array-methods.js';

console.log('ForEach');

/**
 * A function that uses a for loop to iterate through an array
 * url:
 * [mermaid diagram example](https://mermaid.live/edit#pako:eNqVUbFuwjAU_JUnswYp7eiqrQphYGkr0aUlDK7zTCwcO7IdAQX-vc8EEK3UoTdYucv53ul5x6SrkHGmjFvLWvgIb0VpgfA0n1odtTD6C0HDPeQLznmIyTMcPsBoNw2kGwwBYi0sHQjCe7ElzS5j_Xggf4VSB-1snzlKN_fvk9kexvNX9Mr5BoJrEFyLXkQyLnrn-DijoA7SY4M20qjPLdycfhd9hevU55c9TOaTjY7HJsa5NhVGEsrTeGlECAUqSCIobQwfKCUJWYjerTDRnHCiw7WuYs1v200mnXGeD_Ij7n7F9Uvp86RMiZe8PE-J_8w7L-2qolI_Kl7on5EsYw36RuiKXneXBpSM9tJgyTh9VsKvSlbaA_lEF91sayXj0XeYMe-6Zc24EiYQ69pKRCy0WHrRXNRW2A_nzvzwDUQ4vuU)
 * @note
 * iterating through the array, using the length of the array as the
 * stopping point and the array index as the starting point
 * - runtime: O(n) - linear time complexity
 * @param arr {any}- an array of anything
 */
const exampleForLoop = (arr) => {
    console.log('\x1b[32mindex:\telement\x1b[0m')
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i}:\t${arr[i]}`);
    }
}

/**
 * A function that uses the forEach method to iterate through an array
 * url:
 * [mermaid diagram example](https://mermaid.live/edit#pako:eNqVkjFvwjAQhf_KyaxBijq6UqtCMnRoO9ClTRiuzplYODZynBIE_PfaBCLoUKk3-Vkv33u2s2fCVsQ4k9puRY3Ow3tWGgjzVMxRa5DW5ShqsAbQOdwtOeetj8bp9AFm--cWfE2OAMFQ74E0NWT84zH4KhKqVdYMwFn84vCRLw4wL_KeROcJRMj4QrEG2Rnhgxe2ytcXSgLKVNQnMXo5UOan3Kx4sd8E3t6Eni3ZUO069fXtAHmRm2o8D50KhMB4IOqVL881hca2zUhC3ASptOYTKUWYpPXOrinKNMxZTreq8jW_2_SJsNo6PklPc_8LN1zawBMiEkdemkbiP3mXy72qKOVNxVH-gWQJa8g1qKrwE-xjRMnCezZUMh6WFbp1yUpzDD7svF3sjGDcu44S5my3qhmXqNuguk2FnjKFK4fNuLtB82ntRR9_AJxLziQ)
 * @note
 * The forEach method is a higher order function that takes a callback function as an argument
 * - runtime: O(n) - linear time complexity
 * @param arr
 */
const exampleForEach = (arr) => {
    console.log('\x1b[32mindex:\telement\t-\t[array]\x1b[0m')
    arr.forEach((element, index, arr) => {
        console.log(`${index}:\t${element}\t-\t[${arr}]`);
    });
}

/**
 * A function that uses the forEach method to iterate through an array with conditional logic
 * url:
 * [mermaid diagram example](https://mermaid.live/edit#pako:eNqVUstu2zAQ_JUFc5UBo0cWSNFYSmogbYG6l1bKgaCWEmGKa1BULcP2v5e0HrFzSvakoWZnZpc8MkklMs6Uob2shfPwOy0shPqar4QxoMhlQtZAFoRz4vDCOW99JC4W9_BwXLfga3QIAiz2HtBgg9Z_OQdeiVK3muwg-BA7Tn-yzQlW-S_0TuM_nPgJaFtin4Cw5Wg0dK0uPmn0GakQ2uyN_loN3PTVIcufqZo0Z49ZHDyBJNuSwZfr3h8_T_CYb7Z6B4aqSttq_J1dYjzl3ylkDs3Xs46Ux4EygKdhPdeTR-1veRYiTDvFHmXnwwBxqdhrX4yrkka0bYoK4iEobQy_U0qGSlrvaIsRLkONcLHXpa_5p12fSDLk-N3yUp_fyA0XN-hJGRVnveUyKn5Qb7qAq4hK3USc4Ucl12oWvckZ4XtysoQ16Bqhy_C6j9GkYOGhNlgwHj5L4bYFK-w58ETnaXOwknHvOkyYo66qGVfCtAF1u1J4TLWonGjm052wf4kmfP4PGoYS0w)
 * @note
 * The forEach method is a higher order function that takes a callback function as an argument
 * - runtime: O(n) - linear time complexity
 * @param arr
 */
const exampleForEachConditional = (arr) => {
    console.log('Condition is: element % 2 === 0, or in english terms, if the element is even, log it to the console.')
    console.log('\x1b[32mindex:\telement\t-\t[array]\x1b[0m')
    arr.forEach((element, index, arr) => {
        if (element % 2 === 0) {
            console.log(`${index}:\t${element}\t-\t${arr}`);
        }
    });
}

const arrayPrinter = () => {
    console.log('\nArray 1');
    exampleForLoop(arr);
    exampleForEach(arr);
    exampleForEachConditional(arr);
    console.log('\n\nArray 2');
    exampleForLoop(arr2);
    exampleForEach(arr2);
    exampleForEachConditional(arr2);
    console.log('\nArray 3');
    exampleForLoop(arr3);
    exampleForEach(arr3);
    exampleForEachConditional(arr3);
    console.log('\nArray 4');
    exampleForLoop(arr4);
    exampleForEach(arr4);
    exampleForEachConditional(arr4);
    console.log('\nArray 5');
    exampleForLoop(arr5);
    exampleForEach(arr5);
    exampleForEachConditional(arr5);
}

arrayPrinter();

try {
    console.group('\x1b[31mmermaid diagram examples\x1b[0m')
    await shortenUrl('standard for Loop', 'https://mermaid.live/edit#pako:eNqVUbFuwjAU_JUnswYp7eiqrQphYGkr0aUlDK7zTCwcO7IdAQX-vc8EEK3UoTdYucv53ul5x6SrkHGmjFvLWvgIb0VpgfA0n1odtTD6C0HDPeQLznmIyTMcPsBoNw2kGwwBYi0sHQjCe7ElzS5j_Xggf4VSB-1snzlKN_fvk9kexvNX9Mr5BoJrEFyLXkQyLnrn-DijoA7SY4M20qjPLdycfhd9hevU55c9TOaTjY7HJsa5NhVGEsrTeGlECAUqSCIobQwfKCUJWYjerTDRnHCiw7WuYs1v200mnXGeD_Ij7n7F9Uvp86RMiZe8PE-J_8w7L-2qolI_Kl7on5EsYw36RuiKXneXBpSM9tJgyTh9VsKvSlbaA_lEF91sayXj0XeYMe-6Zc24EiYQ69pKRCy0WHrRXNRW2A_nzvzwDUQ4vuU')
    await shortenUrl('for each array method', 'https://mermaid.live/edit#pako:eNqVkjFvwjAQhf_KyaxBijq6UqtCMnRoO9ClTRiuzplYODZynBIE_PfaBCLoUKk3-Vkv33u2s2fCVsQ4k9puRY3Ow3tWGgjzVMxRa5DW5ShqsAbQOdwtOeetj8bp9AFm--cWfE2OAMFQ74E0NWT84zH4KhKqVdYMwFn84vCRLw4wL_KeROcJRMj4QrEG2Rnhgxe2ytcXSgLKVNQnMXo5UOan3Kx4sd8E3t6Eni3ZUO069fXtAHmRm2o8D50KhMB4IOqVL881hca2zUhC3ASptOYTKUWYpPXOrinKNMxZTreq8jW_2_SJsNo6PklPc_8LN1zawBMiEkdemkbiP3mXy72qKOVNxVH-gWQJa8g1qKrwE-xjRMnCezZUMh6WFbp1yUpzDD7svF3sjGDcu44S5my3qhmXqNuguk2FnjKFK4fNuLtB82ntRR9_AJxLziQ')
    await shortenUrl('for each array with conditional logic', 'https://mermaid.live/edit#pako:eNqVUstu2zAQ_JUFc5UBo0cWSNFYSmogbYG6l1bKgaCWEmGKa1BULcP2v5e0HrFzSvakoWZnZpc8MkklMs6Uob2shfPwOy0shPqar4QxoMhlQtZAFoRz4vDCOW99JC4W9_BwXLfga3QIAiz2HtBgg9Z_OQdeiVK3muwg-BA7Tn-yzQlW-S_0TuM_nPgJaFtin4Cw5Wg0dK0uPmn0GakQ2uyN_loN3PTVIcufqZo0Z49ZHDyBJNuSwZfr3h8_T_CYb7Z6B4aqSttq_J1dYjzl3ylkDs3Xs46Ux4EygKdhPdeTR-1veRYiTDvFHmXnwwBxqdhrX4yrkka0bYoK4iEobQy_U0qGSlrvaIsRLkONcLHXpa_5p12fSDLk-N3yUp_fyA0XN-hJGRVnveUyKn5Qb7qAq4hK3USc4Ucl12oWvckZ4XtysoQ16Bqhy_C6j9GkYOGhNlgwHj5L4bYFK-w58ETnaXOwknHvOkyYo66qGVfCtAF1u1J4TLWonGjm052wf4kmfP4PGoYS0w')
}
catch (e) {
    console.error(e);
}finally {
    console.groupEnd();
}