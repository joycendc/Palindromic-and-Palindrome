const check = str => {
  return (str.length<=4)
  ? console.log((checkWord(str,3)))
    : (str.length<=6)
  ? console.log(checkWord(str,3) +'<br>'+checkWord(str,5))
    : (str.length<=8)
  ? console.log(checkWord(str,3) +'<br>'+
    checkWord(str,5) +'<br>'+
    checkWord(str,7))
  : (str.length<=9)
  ? console.log(checkWord(str,3) +'<br>'+
    checkWord(str,5) +'<br>'+
    checkWord(str,7) +'<br>'+
    checkWord(str,9)) : console.log('too long...');
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
check("dbsnj");