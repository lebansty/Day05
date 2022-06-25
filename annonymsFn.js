// 1 print odd numbers in an array

let anoFn=(function(arr){
    let resultArray=[];
    for (let ele of arr){
        if(ele%2 !== 0){
            resultArray.push(ele);
        }
    }
    return resultArray;

    
})
console.log(anoFn([2,3,4,5,6,13,17,40]));

//2 Convert all the strings to title caps in a string array

let titleCaps=(function(cap){
    let strArr=cap.split(' ');
  let nyc="";
  for(i=0;i<strArr.length;i++){
         nyc+=strArr[i].charAt(0).toUpperCase()+strArr[i].substring(1,strArr[i.length-1])+" ";
      
       }
       console.log(nyc);
  
  })
  titleCaps('stop using plastics');

  // 3 Sum of all numbers in an array

  let addArr=(function(ad){
    let sum=0;
    for(let num of ad){
        sum+=num;
    }
    return sum;
})
console.log(addArr([100,150,1000]));

// 4 Return all the prime numbers in an array

let priFn=(function(num){
    let arr=[];
    let f=0;
     for(let i=0;i<num.length;i++){
      f=0;
      for(let j=2;j<num[i];j++){
        if(num[i]%j==0){
          f=1;
          break;
        }
        
   
      }
       if(f==0){
        arr.push(num[i]);
      }
  
      
      
     }
     return arr;
      
  
     })
     console.log(priFn([2,3,4,5,6,13,17,40]));


       // 5 To find palindrome from the array

       let palindrome=(function(){
        let str=['racecar','valan','deed','kayak','kozhi'];
        let ary=[];
        let rev;
        for(let i=0;i<str.length;i++){
          rev='';
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
      
      })
      palindrome();

      // 6 find the median from two sorted arrays

      let  medianFn=(function(arr1,arr2){
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
        })
        medianFn(arr1=[2,3,5,7,11],arr2=[13,17,19,23,29])

        // 7 Remove duplicates from an array:

        let uniqueElements=(function (array){
            const unique=[];
            array.forEach(value => {
                if(!unique.includes(value)){
                    unique.push(value);
                }
            });
            console.log(unique);
            return unique;
            })
            uniqueElements(['min','max','min',55,55,60]);

             // 8 rotate an array k times

             let arr=[1,2,3,4,5,6];
             k=3;
             let rotation=(function(nums,arrRota){
           for(let i=0;i<arrRota;i++){
               nums.unshift(nums.pop());
               console.log(`step ${i+1}:`,nums);
           }
           })
           rotation(arr,k);
