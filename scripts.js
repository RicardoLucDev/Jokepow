let result = document.getElementById("result")
let playMachine = document.getElementById("playMachine")

let totalWin = 0
let totalDefeat = 0

const clickPlayer = choicePlayer => {
    resultPlay(choicePlayer, choiceCPU())
}

function choiceCPU() {  
    const randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber == 0)
        playMachine.innerHTML = "CPU = Papel"
    else if (randomNumber == 1)
        playMachine.innerHTML = "CPU = Tesoura"
    else
        playMachine.innerHTML = "CPU = Pedra"

    return randomNumber
}

function resultPlay(choicePlayer, choiceCPU) {
    playMachine.style.border = "1px solid white"
    playMachine.style.backgroundColor = "rgba(0, 0, 0, 0.7)"

    if(choicePlayer == choiceCPU) {
        result.innerHTML = "Empate"
        result.style.border = "1px solid white";
        result.style.color = "white";
    }
    else if ((choicePlayer == 0 && choiceCPU == 1) || (choicePlayer == 1 && choiceCPU == 2) || (choicePlayer == 2 && choiceCPU == 0)) {
        result.innerHTML = "Cpu - Win"
        result.style.border = "1px solid red";
        result.style.color = "red";
        document.getElementById("spanDefeats").innerHTML = ++totalDefeat;
    }
    else { 
        result.innerHTML = "Player - Win"
        result.style.border = "1px solid rgb(0, 255, 34)";
        result.style.color = "rgb(0, 255, 34)";
        document.getElementById("spanWin").innerHTML = ++totalWin;
    }
}