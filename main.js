/**
 * Anchor Coding Challenge Solution
 * by Sean Cao
 * February 18, 2020
 * write a program that outputs the largest unique set of characters that can be removed from this paragraph
 * without letting its length drop below 50.
 */

// String to be processed
const TEXT = "If you want to jumpstart the process of talking to us about this role, heres a little challenge: write a program that outputs the largest set of characters that can be removed from this paragraph without letting its length drop below 50.";

/**
 * getFrequency() returns an object containing the frequency of every character
 * based on the passed-in string str
 */
const getFrequency = str => {
    return str.split('').reduce((freq, char) => {
        freq[char] ? freq[char]++ : freq[char] = 1;
        return freq;
    }, {});
};

/**
 * toSortedArr() returns a sorted array 
 * based on the frequency value of each character within the passed-in Object freq
 */
const toSortedArr = freq => {
    let freqArr = [];
    // convert freq object to array of arrays
    for (let char in freq) {
        freqArr.push([char, freq[char]]);
    }
    // sort array based on frequency value of character
    freqArr.sort(function (a, b) {
        return a[1] - b[1];
    });
    return freqArr;
}

function main() {
    const freq = toSortedArr(getFrequency(TEXT));
    let length = TEXT.length;
    let result = [];

    // Remove characters from string starting with lowest frequency characters, maintaining a length of at least 50
    let i = 0;
    while (length > 50) {
        if (length - freq[i][1] >= 50) {
            result.push(freq[i][0]);
        }
        length -= freq[i][1];
        i++;
    }

    console.log(result);
    return result;
}

main();