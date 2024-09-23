function decimalToBinary(decimal) {
    if (decimal === 0) {
      return '0';
    }
    
    let binary = '';
    
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }
    
    return binary;
  }
  

  function binaryToDecimal(binary) {
    let decimal = 0;
    let power = 0;
    
    for (let i = binary.length - 1; i >= 0; i--) {
      decimal += parseInt(binary[i]) * Math.pow(2, power);
      power++;
    }
    
    return decimal;
  }
  

  function addBinary(a, b) {
    let result = ''; 
    let carry = 0;  
    let i = a.length - 1;
    let j = b.length - 1;
  
    while (i >= 0 || j >= 0 || carry) {
      let sum = carry;
      if (i >= 0) sum += parseInt(a[i--]);
      if (j >= 0) sum += parseInt(b[j--]);      
      result = (sum % 2) + result;
      carry = Math.floor(sum / 2);
    }
  
    return result;
  }
  
  // Example usage:
  console.log(addBinary("11", "1"));   // Output: "100"
  console.log(addBinary("1010", "1011")); // Output: "10101"
  