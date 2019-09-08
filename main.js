const check = str => {
   for(let i = 3; i <= str.length ; i+=2){
     if(checkWord(str,i) === 'error'){
       console.log('no palindrome');
       return;
     }
      console.log((checkWord(str,i)));
   }
};
const checkWord = (word, num) => {
  var pal = 0;
  let val = word.split("");
  let str = word.substring(0,num);
  let rev = str.split('').reverse().join('');
  if(str.length>=3){
    if(str === rev){
      pal++;
      return rev;
    }else if(pal<=0){
      val.shift();
      let temp = val.join('');
      return checkWord(temp, num);
    }
  }
  return 'error';
};


check("repaper");
check("Potato");
check("racecar");
check("dbbbnj");