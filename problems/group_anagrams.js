function groupAnagrams(strs) {
    const anagrams = {};

    strs.forEach(str => {
        const sortedStr = str.split('').sort().join('');
        console.log(sortedStr)
        if (!anagrams[sortedStr]) {
            anagrams[sortedStr] = [];
        }
        anagrams[sortedStr].push(str);
    });
    return Object.values(anagrams);
}

const input =  ["arc","cat", "car" ,"act","atc","abc"];
const result = groupAnagrams(input);
console.log(result);