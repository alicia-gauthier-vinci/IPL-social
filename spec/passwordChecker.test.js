import { Main } from "../src/passwordChecker.js";

describe("verify that a string is a valid password  ", () => {
  
  it("should return false if password is less than 8 characters", function () {
    const main = new Main();

    const result = main.validatePassword('abc123!');
    expect(result).toBe(false);
  });

  it('should return false if password does not contain a special character', function () {
    const main = new Main();

    const result = main.validatePassword('abcdef123');
    expect(result).toBe(false);
  });

  it("should return false if password does not contain a number", function () {
    const main = new Main();
    const result = main.validatePassword('Password@@');
    expect(result).toBe(false);
});

it('should return true if password does not contain "IPL"', function () {
  const main = new Main();
  const result = main.validatePassword('Password1@@');
  expect(result).toBe(true);
});

it('should return false if password contains "IPL" in any case', function () {
  const main = new Main();
  const result = main.validatePassword('PasswordIPL1@!');
  expect(result).toBe(false);
});





});
