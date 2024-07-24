function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if ((mapST.has(charS) && mapST.get(charS) !== charT) ||
            (mapTS.has(charT) && mapTS.get(charT) !== charS)) {
            return false;
        }

        mapST.set(charS, charT);
        mapTS.set(charT, charS);
    }

    return true;
}

// Example usage:
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("ab", "aa")); // false
