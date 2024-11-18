function minWindow (s,t) {
    
    if(s.length < t.length){
        return "";
    }
    
    let freq_window = {};
    
    for(let i=0; i< t.length;i++){
        freq_window[t[i]] = (freq_window[t[i]] || 0) + 1;
    }
    
    const required = Object.keys(freq_window).length;
    let left = 0;
    let right = 0;
    
    let windowCount = {};
    let formed = 0;
    let ans = [-1, 0, 0];
     
    while(right < s.length){
       char = s[right];
       windowCount[char] = (windowCount[char] || 0 ) +1;
       
       if(char in freq_window && windowCount[char] === freq_window[char]){
           formed++;
       }
       
       while(left <= right && formed === required){
           char = s[left];
           
           if(ans[0] === -1 || right-left+1 < ans[0]){
               ans = [right-left+1, left ,right];
           }
           
            windowCount[char]--;
           if(char in freq_window && windowCount[char] <  freq_window[char]){
             formed--;
          }
          left++;
       }
       
       right++;
    }
    console.log(left,right , ans)
    return ans[0] === -1 ? "" : s.slice(ans[1], ans[2] + 1);
}


// Input: s = "TOOOZECOWEZTNC",
// t = "TZC"
// Output: "ZTNC"

const string = "ADOBECODEBANC";
const t = "ABC";
console.log(minWindow(string,t))