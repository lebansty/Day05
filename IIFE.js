// 1 print odd numbers in an array

(()=>{
    let resultArray=[];
    let arr=[1,2,3,4,5,6,7,8,9]
    for (let ele of arr){
        if(ele%2 !== 0){
            resultArray.push(ele);
        }
    }
    console.log(resultArray);
    return resultArray;
    

})()

//2 Convert all the strings to title caps in a string array

(()=>{
    let cap='stop using plastics';
    let strArr=cap.split(' ');
    let nyc="";
    for(i=0;i<strArr.length;i++){
           nyc+=strArr[i].charAt(0).toUpperCase()+strArr[i].substring(1,strArr[i.length-1])+" ";
        
         }
         console.log(nyc);
    })()

     // 3 Sum of all numbers in an array

     (()=>{
        ad=[100,200,50,50,100];
        let sum=0;
        for(let num of ad){
            sum+=num;
        }
        console.log(sum);
      
    })()

    // 4 Return all the prime numbers in an array

    (()=>{
        let pri=[2,3,4,5,6,13,17,40];
        let arr=[];
      let f=0;
      
       for(let i=0;i<pri.length;i++){
        f=0;
        for(let j=2;j<pri[i];j++){
          if(pri[i]%2==0){
            f=1;
            break;
          }
          
     
        }
         if(f==0){
          arr.push(pri[i]);
        }
    
        
        
       }
     
       console.log(arr);
       })()

       // 5 To find palindrome from the array

       (()=>{
        let str=['racecar','valan','deed','kayak','kozhi'];
        let ary=[];
        for(let i=0;i<str.length;i++){
         let rev='';
          let curstr=str[i];
          for(let j=curstr.length-1;j>=0;j--){
            rev+=curstr.charAt(j);
          }
          if(rev===curstr){
            ary.push(curstr);
      
          }
        }
        if(ary.length===0){
         return console.log('No palindrome in the array');
        }
        else {
          return console.log(ary);
        }
      
      })()

      // 6 find the median from two sorted arrays

      (()=>{
        let arr1=[2,3,5,7,11];
      let arr2=[13,17,19,23,29];
      let arr3=[...arr1,...arr2]
      let len=arr3.length;
      let nth;
      if(len%2===0){
      let nth1=len/2;
      let nth2=(len/2)+1;
      nth=(arr3[nth1-1]+arr3[nth2-1])/2;
      console.log(nth)
      
      } 
      else if (len%2 !==0){
          nth=(len+1)/2;
          console.log(arr3[nth-1]);
      }
      })();

       // 7 Remove duplicates from an array:

       (()=>{
        const elementsUni=['min','max','min',55,55,60]
        const unique=[];
        elementsUni.forEach(value => {
            if(!unique.includes(value)){
                unique.push(value);
            }
        });
        console.log(unique);
       
      })()

      // 8 rotate an array k times

      (()=>{
        arr=[1,2,3,4,5,6];
        k=3;
        for(let i=0;i<k;i++){
         arr.unshift(arr.pop());
         console.log(`step ${i+1}:`,arr);
        }
         
     
       })();