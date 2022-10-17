 
 
 
 
 let correctNumber ="3463463460";
 function lk(correctNumber){
 let d=correctNumber.split('');
 d=(d[0]*(-1) + d[1]*5 + d[2]*7 + d[3]*9 + d[4]*4
 + d[5]*6 + d[6]*10 + d[7]*5 + d[8]*7)%11
  return d;}
let b=lk(correctNumber)
console.log(b)
if(b===10){
  b=b%10
}
if(b!=correctNumber[9]){


  console.log('введите правильный номер')
  throw new SyntaxError();
}
let newCode = correctNumber.substring(0,5);
   let birt= new Date( 1899,12,31,);
   birt.setDate(newCode);
  console.log(`Дата рождения:${birt}`);
 let now =new Date();
 let todey=new Date(now.getFullYear(),now.getMonth(),now.getDate());
 let kj=new Date(todey.getFullYear(),birt.getMonth(),birt.getDate());
let age=todey.getFullYear()-birt.getFullYear();
if(todey<kj){
  age=age-1;
  console.log(`Полных лет: ${age}`)
}
let n = "Пол жен."; 
if((correctNumber[8]%2) === 0){
console.log(n)
}else{console.log('Пол муж.')}



// let cart="4314140107615251"
// let cot=cart.split('')
// console.log(cot)
// let num ="visa";
// if(cot[[0]]==4){
//   console.log(num)}
