const equation = document.querySelector('.equation')
const ans = document.querySelector('.ans')
const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){ 
                case 'C':
                    equation.textContent = '';
                    ans.textContent = 'answer';
                    break;
                case '🖕':
                    if (equation.textContent){
                    equation.textContent = equation.textContent.slice(0, -1)
                    }
                    break;
                case '=':
                    try{
                    ans.textContent = eval(equation.textContent)
                    }catch{
                        ans.textContent = 'Syntax E-ROAR HAHAHA!!!'
                    }
                    break;
            default:
                equation.textContent += e.target.innerText
        }
    })
})
















// start end text size
// example
//  for (let i = 0; i < 10; i += 1){
//     console.log(i)
// }

// let cards = ['heloo', 'Hi', 'Anyone']

// for (let i = 0; i < Cards.length; i++){
//     console.log(cards[i])
// }





