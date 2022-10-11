let correctNumber ="2845718432";
 console.log(correctNumber);

 let d=correctNumber.split('');
 d=((d[0]*2 + d[1]*4 + d[2]*10 + d[3]*3 + d[4]*5
 + d[5]*9 + d[6]*4 + d[7]*6 + d[8]*8))
  console.log(d);
  let af = d%11
console.log(af)
let n = "жен"; 
if((correctNumber[8]%2) === 0){
console.log(n)
}else{console.log('муж')}


 let newCode = correctNumber.substring(0,5);
   let birt= new Date( 1899,12,31, 0, 0);
    birt.setDate(newCode);
    console.log(`Дата рождения:${birt}`);
    let yr =new Date()
    let s = (yr-birt)/1000/60/60/24/365
    console.log(`Полных лет:${ Math.floor(s)}`)
