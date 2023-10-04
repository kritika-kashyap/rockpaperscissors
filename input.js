import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
const rl = readline.createInterface({ input: stdin, output: stdout });

const choices = ['rock', 'paper', 'scissors'];

export async function userInput(){
    let input = await rl.question('Choose rock, paper or scissors: ');
    input = input.toLowerCase();
    if(choices.includes(input)){
        return input;
    }
    else{
        console.log('Invalid Input');
    }
}

export async function compInput(){
    let sinput = choices[Math.floor(Math.random() * choices.length)];
    return sinput;
}

export const close = () => rl.close()