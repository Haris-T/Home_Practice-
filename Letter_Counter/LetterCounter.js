
let countLetters =()=>{
    let inputValue = document.getElementById('inputText');
    let newDiv = document.getElementById('numberOfLetters')
    let word = inputValue.value;
    let totalNumber = 0;

    for(let i=0;i<word.length; i++){
        if(word[i] === " "){
            continue;
        }
        else{
            totalNumber = totalNumber+1;
        }
    };

    newDiv.innerHTML = totalNumber+""
} 