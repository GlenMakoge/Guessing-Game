let hello= document.getElementById('btn');
//console.log(`${hello}`);
let outPut = document.getElementById('outputtext');
//console.log(`${output}`)

let number = [Math.floor(Math.random() * 100)]

function guessGame(){
    let input = document.getElementById('userInput').value;
    if(input == number){
        outPut.innerHTML = `You guessed right!! , your number was ${number}`
    }else if(input < number){
        outPut.innerHTML = "Your guess was too low!"
    }else if(input > number){
        outPut.innerHTML = "Your guess is too high!"
    }
}

hello.addEventListener("click", guessGame)