alert ('игра Камень,Ножницы,Бумага.Выберите одно')
let Choise=prompt('Ваш выбор :1,2 или 3')
while ((Choise !=1 ) || (Choise != 2) || (Choise !=3)) {
    Choise=prompt('Выберите корректное число')
}
function getRandom(min,max) {
    const number = Math.random() * (max - min) + min
    if (number > (Math.round(number) - 0.5)) {
        return Math.round(number)
    } else {
        return Math.floor(number)
    }
}
const gR=getRandom(1,3)
if ((Choise === 1 && gR===2) || (Choise === 2 && gR===3) || (Choise === 3 && gR === 1)){
    alert("Computer Wins")
} else if(( Choise === 1 && gR=== 3)|| (Choise==2 && gR===1) || (Choise=== 3 && gR === 2)){
    alert("Player Wins")
} else {
    alert("Draw")
}