export class Main{
  validatePassword(password){
    if(password.length < 8) return false;
    const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
    if(!specialCharacter.test(password)) return false;
    return true;
  }
}