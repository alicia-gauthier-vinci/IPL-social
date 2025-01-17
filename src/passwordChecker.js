export class Main{
  validatePassword(password){
    if(password.length < 8) return false;
    const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
    if(!specialCharacter.test(password)) return false;
    const number = /[0-9]/; 
    if (!number.test(password)) return false;
    const regexIPL = /ipl/i;
    if (regexIPL.test(password)) return false;
    return true;
  }
}