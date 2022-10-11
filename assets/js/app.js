let correctNumber = "3463463460";
 console.log(correctNumber);

 let d=correctNumber.split('');
 d=(((d[0]*1 + d[1]*5 + d[2]*7 + d[3]*9 + d[4]*4
 + d[5]*6 + d[6]*10 + d[7]*5 + d[8]*7)%11)%10)
  console.log(d);

 let newCode = correctNumber.substring(0,5);
   let birth = new Date( 1899,12,31, 0, 0);
    birth.setDate(newCode);
    console.log(`Дата рождения:${birth}`);
    let yr =new Date()
    let s = (yr-birth)/1000/60/60/24/365
    console.log(`Полных лет:${ Math.floor(s)}`)

  