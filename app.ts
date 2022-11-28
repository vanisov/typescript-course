let userInput: unknown; // unknown is the better option in comparison to 'any' because it makes sure you are not allowed to do anything, it provides some limitations.

let userName: string;

userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}; // this is how you would define userInput into string.

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);