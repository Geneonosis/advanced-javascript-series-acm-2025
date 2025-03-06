//this file uses a little bit of all the array methods in order to solve a potentially real world problem
const bigArray = [
    212, 914, 994, 863, 468, 779, 758, 151, 61, 109, 384, 149, 357, 343, 29, 767, 802, 845, 370,
    673, 617, 738, 577, 445, 693, 632, 341, 787, 308, 587, 377, 734, 897, 60, 840, 672, 829, 10,
    596, 395, 970, 55, 193, 817, 454, 924, 21, 158, 77, 609, 265, 539, 606, 566, 235, 891, 977,
    102, 632, 8, 432, 656, 616, 375, 182, 492, 663, 284, 326, 565, 76, 142, 141, 924, 136, 993,
    265, 16, 856, 878, 220, 357, 972, 320, 82, 944, 85, 930, 905, 943, 746, 652, 437, 609, 867,
    118, 453, 879, 884, 389, 189, 9, 892, 37, 324, 619, 922, 164, 240, 175, 864, 785, 774, 114,
    910, 13, 965, 762, 332, 249, 269, 508, 28, 698, 673, 829, 514, 805, 596, 34, 781, 522, 612,
    232, 689, 25, 359, 425, 720, 806, 61, 87, 703, 81, 349, 359, 656, 940, 111, 845, 586, 63,
    966, 15, 819, 850, 677, 241, 563, 125, 164, 131, 922, 707, 678, 827, 787, 998, 690, 346,
    274, 554, 872, 635, 15, 283, 460, 571, 860, 312, 263, 755, 821, 731, 524, 427, 69, 844,
    325, 490, 774, 52, 206, 644, 913, 959, 102, 976, 491, 0, 980, 142, 610, 135, 210, 620,
    462, 552, 449, 16, 270, 221, 128, 644, 881, 362, 259, 594, 128, 195, 974, 284, 645, 140, 667,
    640, 603, 968, 243, 155, 332, 558, 896, 783, 642, 819, 773, 996, 90, 186, 45, 566, 533, 604,
    528, 660, 481, 69, 433, 536, 486, 267, 849, 792, 815, 978, 225, 558, 599, 444, 547, 491, 575,
    114, 435, 837, 920, 4, 821, 289, 405, 640, 226, 840, 182, 609, 426, 823, 966, 282, 920, 527,
    946, 496, 377, 547, 154, 141, 34, 542, 691, 950, 455, 235, 935, 558, 996, 295, 443, 955, 824,
    266, 140, 462, 320, 851, 491, 626, 143, 712, 816, 49, 441, 689, 204, 458, 861, 521, 728, 448,
    249, 524, 827, 546, 45, 303, 617, 238, 332, 199, 587, 336, 498, 906, 965, 85, 327, 872, 905, 90,
    352, 780, 675, 922, 81, 793, 655, 389, 922, 531, 624, 213, 650, 171, 56, 960, 340, 800, 349, 331,
    464, 811, 690, 508, 306, 128, 411, 256, 413, 981, 454, 496, 768, 442, 681, 596, 279, 776, 125,
    326, 228, 925, 962, 315, 141, 372, 652, 884, 174, 604, 96, 889, 933, 739, 635, 872, 863, 854,
    80, 988, 101, 967, 677, 14, 711, 625, 771, 993, 576, 237, 175, 379, 924, 198, 70, 396, 297,
    391, 73, 225, 26, 59, 676, 220, 639, 782, 837, 434, 273, 90, 233, 83, 781, 682, 783, 5, 952,
    825, 387, 91, 769, 2, 957, 987, 637, 944, 347, 490, 75, 227, 277, 857, 201, 528, 532, 632, 78,
    8, 654, 242, 65, 450, 441, 905, 379, 894, 344, 494, 19, 486, 362, 41, 653, 982, 335, 0, 706, 87,
    229, 796, 97, 109, 422, 784, 925, 616, 519, 731, 364, 845, 667, 252, 449, 459, 88, 32, 272, 199,
    844, 145, 19, 766, 17, 343, 795, 680, 957, 493, 652, 499, 816, 753, 397, 635, 949, 945, 841, 539,
    837, 194, 762, 914, 637, 68, 391, 390, 102, 405, 670, 203, 384, 284, 550, 208, 275, 443, 544, 508,
    25, 541, 207, 639, 760, 317, 462, 249, 655, 860, 630, 516, 424, 186, 166, 666, 125, 539, 295, 250,
    101, 731, 157, 538, 304, 874, 29, 727, 590, 163, 593, 962, 952, 441, 930, 306, 696, 532, 188, 564,
    812, 63, 342, 693, 520, 885, 655, 307, 323, 704, 903, 881, 181, 642, 742, 617, 198, 265, 334, 716,
    920, 257, 216, 640, 432, 328, 972, 739, 80, 906, 30, 881, 537, 467, 772, 140, 770, 900, 108, 724,
    518, 143, 671, 616, 50, 733, 11, 452, 990, 50, 678, 975
];

//write a function that returns ONLY the odd numbers from the bigArray and returns them as a new array
const getOdds = (array) => {
    return array.filter((item) => item % 2 !== 0);
}

const cardinalityOfOdds = (array) => {
    return getOdds(array).length;
}

//write a function that returns only an array of all of the numbers that are multiple of 10
const getMultiplesOfTen = (array) => {
    return array.filter((item) => item % 10 === 0);
}

//write a function that prints out all multiples of ten but they've been divided by 10
const printMultiplesOfTen = (array) => {
    return array.filter((item) => item % 10 === 0).map((item) => item / 10);
}

//now do the same thing but sort them
const printSortedMultiplesOfTen = (array) => {
    return array.filter((item) => item % 10 === 0).map((item) => item / 10).sort((a, b) => a - b);
}

//now remove duplicates
const printSortedUniqueMultiplesOfTen = (array) => {
    return array.filter((item) => item % 10 === 0).map((item) => item / 10).sort((a, b) => a - b).filter((item, index, arr) => arr.indexOf(item) === index);
}

const printExamples = () => {
    console.log('Big Array');
    console.log('original', bigArray);
    console.log('\nOdds');
    console.log('odds', getOdds(bigArray));
    console.log('\nCardinality of Odds');
    console.log('cardinality', cardinalityOfOdds(bigArray));
    console.log('\nMultiples of Ten');
    console.log('multiples of ten', getMultiplesOfTen(bigArray));
    console.log('\nPrint Multiples of Ten');
    console.log('print multiples of ten', printMultiplesOfTen(bigArray));
    console.log('\nPrint Sorted Multiples of Ten');
    console.log('print sorted multiples of ten', printSortedMultiplesOfTen(bigArray));
    console.log('\nPrint Sorted Unique Multiples of Ten');
    console.log('print sorted unique multiples of ten', printSortedUniqueMultiplesOfTen(bigArray));
}

printExamples();