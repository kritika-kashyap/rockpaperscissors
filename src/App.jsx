import { useState } from "react";
import "./App.css";

const choices = ['rock', 'paper', 'scissors'];

function compare(input = '', sinput = ''){
    if(input == sinput){
        return null;
    }
    else{
        if(input == 'rock'){
            return (sinput == 'scissors');
        }
        else if(input == 'paper'){
            return (sinput == 'rock');
        }
        else{
            return (sinput == 'paper');
        }
    }
}

function App() {
	let [state, setState] = useState("choices");
	let [input, setInput] = useState("");
	let [cinput, setCinput] = useState("")

	function handleClick(choice) {
		setInput(choice)
		setState("animate")
		setCinput(choices[Math.floor(Math.random() * choices.length)])
	}

	switch (state) {
		case "choices":
			return (
				<main>
					<button onClick={() => handleClick("rock")}>Rock</button>
					<button onClick={() => handleClick("paper")}>Paper</button>
					<button onClick={() => handleClick("scissors")}>Scissors</button>
				</main>
			);

    case "animate":
		setTimeout(() => setState("result"), 3000)

      return (
        <main>
			{(input == 'rock') ? '✊' : (input == 'paper') ? '🤚': '✌️'}
			{(cinput == 'rock') ? '✊' : (cinput == 'paper') ? '🤚': '✌️'}
        </main>
      )
    
    case "result":
		let result = compare(input, cinput);
		return (
			<main>
			{result ? "You win!" : (result == false) ? "Computer wins" : "It's a tie!"}
			<button onClick = {() => setState("choices")}>Play again</button>
			</main>
		)
	}
}

export default App;
