import promptSync from 'prompt-sync';
const prompt = promptSync();

// Variable Declaration listing options
let options = ['greet me', 'tell a joke', 'show current time', 'reverse word', 'check if a Number is Even or Odd', 'calculate the Square of a number', 'repaet a phrase', 'convert celcius to fahrenheit', 'count dowm from a number', 'exit'];

// Looping in variables to display each option
for (let i = 0; i < options.length; i++) {
    console.log(options[i])
};
// Make function for each variable
const choice = prompt("Enter your choice (1-10): ");
switch (choice) {
    case '1':
        console.log('Hello, how are you?');
        break;
    case '2':
        console.log('Why was the math book sad? Because it had too many problems.');
        break;
    case '3':
        console.log(new Date().toLocaleTimeString());
        break;
    case '4':
        let word = prompt('Enter a word: ');
        let reversedWord = word.split('').reverse().join('');
        console.log(reversedWord);
        break;
    case '5':
        let number = prompt('Enter a number: ');
        if (number % 2 === 0) {
            console.log(number + ' is even');
        } else {
            console.log(number + ' is odd');
        }
        break;
    case '6':
        let num = prompt('Enter a number: ');
        let square = num * num;
        console.log(square);
        break;
    case '7':
        let phrase = prompt('Enter a phrase: ');
        let repeat = prompt('How many times do you want to repeat the phrase? ');
        let repeatedPhrase = phrase.repeat(repeat);
        console.log(repeatedPhrase);
        break;
    case '8':
        let celsius = prompt('Enter a temperature in celcius: ');

        let fahrenheit = (celsius * 9 / 5) + 32;
        console.log(fahrenheit + ' is the temperature in fahrenheit');
        break;
    case '9':
        let countdown = prompt('Enter a number: ');
        for (let i = countdown; i >
            0; i--) {
            console.log(i);
        }
        break;
    case '10':
        let exit = prompt('See you, when you see me!: ');
        console.log(exit );
        break;
    default:
        console.log('Invalid option');
        break;
}