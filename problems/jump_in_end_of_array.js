function jump(arr){
    if(arr.length <= 1) return 0;
    
    
   let result = 0;
   let fartest = 0;
   let current = 0;
   
   for(let i=0; i< arr.length; i++){
      
     fartest = Math.max(fartest, i+arr[i]);
     
     if(i === current){
       result ++;
       current = fartest;
       
       if(current >= arr.length-1){
        break;
       }
     }
     
   
   }
   
   return result;
   
   }
   
   
   const arr =  [5,1,1,1,1,4];
   console.log(jump(arr));