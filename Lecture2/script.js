function generatePassword(paswordLength) {
  let pasword = [];
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
  
  for ( let i = 0; i <= paswordLength - 1; i++){
    let randomNumber = Math.round(Math.random()*characters.length)
    pasword.push(characters[randomNumber])
  }
  
  return pasword.join("");
}

console.log(generatePassword(5))
console.log(Number(null))
let stringArray = [8, 9, 10].toString();
console.log(stringArray);

const arr = new Array(5);
console.log(arr)