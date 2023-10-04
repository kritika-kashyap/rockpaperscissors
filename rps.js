import { compare } from "./compare.js";
import { compInput, userInput, close } from "./input.js";

async function main() {
	let user = 0;
	let comp = 0;
	let turns = 3;
	while (user < turns && comp < turns) {
		let input = await userInput();
		let sinput = await compInput();
		console.log("Computer chose: ", sinput);
		let result = compare(input, sinput);
		if (result == null) console.log("It's a tie!");
		else if (result == true) user++, console.log("You won this round");
		else comp++, console.log("Computer won this round");
	}
	if (user === turns) console.log("You won!!");
	else console.log("Computer won!");
}

await main();

close();
