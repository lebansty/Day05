// 1 Print odd numbers in an array:
 let oddFn=(arr)=>{
    let resultArray=[];
    for (let ele of arr){
        if(ele%2 !== 0){
            resultArray.push(ele);
        }
    }
    return resultArray;
 }
 console.log(oddFn([2,3,4,5,6,13,17,40]));

 // 2 Convert all the strings to title caps:

 let titleCaps=(cap)=>{
    let strArr=cap.split(' ');
    let nyc="";
    for(i=0;i<strArr.length;i++){
           nyc+=strArr[i].charAt(0).toUpperCase()+strArr[i].substring(1,strArr[i.length-1])+" ";
        
         }
         console.log(nyc);
 }
 titleCaps('stop using plastics');
 
 // 3 Sum of all numbers in an array:

 let sumAll=(ad)=>{
    let sum=0;
    for(let num of ad){
        sum+=num;
    }
    return sum;
 }
 console.log(sumAll([100,150,1000]));

 // 4 Return all the prime number in an array:

 let priNum=(num)=>{
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
 }
 console.log(priNum([2,3,4,5,6,13,17,40]));

 // 5 Return all the pallindromes in an array:

 let allPali=(str)=>{
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
 }
 allPali(['racecar','valan','deed','kayak','kozhi']);