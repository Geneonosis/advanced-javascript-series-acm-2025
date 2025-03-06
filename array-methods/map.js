import { shortenUrl } from '../utilities/utilities.js';
import {arr, arr2, arr3, arr4, arr5} from './array-methods.js';

console.log('Map');

/**
 * Example of a traditional array transformation, modifies and produces a new array
 * @param array
 */
const traditionalArrayTransformation = (array) => {
    console.log('original',array)
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * 2);
    }
    console.log('modified',result);
}

/**
 * Example of a basic use of map, modifies and produces a new array
 * @param array
 */
const exampleBasicMap = (array) => {
    console.log('original',array);
    const result = array.map((item) => item * 2);
    console.log('modified',result);
};

const printExamples = () => {
    console.log('Traditional Array Transformation')
    traditionalArrayTransformation(arr);
    traditionalArrayTransformation(arr2);
    console.log('\nBasic Map Example')
    exampleBasicMap(arr);
    exampleBasicMap(arr2);
}

printExamples();

try {
    console.group('mermaid diagram examples:')
    await shortenUrl('traditional array transformation', 'https://mermaid.live/edit#pako:eNqVkttu2zAMhl-FUO-KZHB7qe6Atk7bFDth2c1qD4MmU7ZQWTIkeqmX5N0nH5I2uxgwXpnUx5-_KG-YdAUyzpRxa1kJT_A1zS3EuMy-oET9C0HbpiUQ3ovuO-c8UI_N52_hKnvvSnBel9oKMxFj99UAXGdLq0kLo38jYN1QBx5Da-iIvR7YNFshgYY3kEz1dKgvNssQy6_HllcGbUnVu100UqDUQTs70oue3n5brLZwk32IM3RjurHph4ZTOJ9UbwbV2-xzG6q9G23JgcX1ka3bAbyLV5Aea7S9uZ8dnE3Hd6O7l8M_ftrCctgJeWGDcr7G4nlx-KRpxJdD733cMLXegvKuBtVaSfE2z-TISiNCSFFBXwSljeEnSskYs0DePWKfJjGmdL7WBVX8vHmaSWec5yfJEBd_yY3POOpJ2Sse9JKkV_xPvf1rvLCo1JHFQ_oPSTZjNfpa6CL-lJt-RM6oiuvPGY-fhfCPOcvtLnKiJbfqrGScfIsz5l1bVowrYULM2qYQhKkWpRf1odoI--DcPt_9AYID-KI')
    await shortenUrl('basic map example', 'https://mermaid.live/edit#pako:eNqVUk1r4zAQ_SuDeisJhB5V2NLG6QeULjR72bV7GORRIiprjCw3CUn--0p2auKyh-6cNNJ7b97MaC8UlySk0JY3ao0-wK-scBDjNn8lReaDwLi6DYDe4-5NStmEBJtOf8Bd_swrYG9WxqE9IXr2XQeY53O0Fiqsgd3ofd69Z_unBsKaPAGCo20AslSRCzfHWKgkZRrDrmdkiXH4vVgeYBGtBW8oejvhky-uyWMY8Iuuwn1-W9d2B8GjazT7qkNIMIEquISrfxDvO-JDvgwcfQ1EKuEDbZvGEa1uRt089N2cG335eYDHbj4Vl0abSD9nPHaMp9RI692oyjBo2ppQnEwpi02TkYZ0CdpYKy-0VjEmTfD8TimdxTil040pw1pe1duJYsteXsy6uP4i1y-z11MqKQ56s1lS_E-9z52dWdR6ZHFIvys5rGfQHNnUGvE7NsVEVBT3b8r43fepRiHi16uoEDIeS_TvhSjcMeKwDbzcOSVk8C1NhOd2tRZSo21i1tYlBsoMrjxWw22N7g_zZ378C8zTGvw');
}catch(e){
    console.log(e);
}finally {
    console.groupEnd();
}