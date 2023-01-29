var hero = prompt("Jogador: Digite Pedra, Papel ou Tesoura");
var hero = hero.toLowerCase();
const form = document.querySelector('#form')
let oponente = Math.floor(Math.random() * 3)

if (oponente == 0) {
    oponente = 'Pedra'    
}

else if (oponente == 1) {
    oponente = 'Papel'   
} 
else {
    oponente = 'Tesoura'    
} 


document.getElementById('play').addEventListener("click", function(event){
     
    if (hero == "pedra" && oponente == 'Papel') {
        document.querySelector('#result1').innerHTML = oponente + (' 📄, Você perdeu 😭');
       
    }
    else if (hero == "pedra" && oponente == 'Pedra') {
        document.querySelector('#result1').innerHTML = oponente + (' 🪨, Empate ! tente outra vez 😀');
        
    }
    
    else if (hero == "papel" && oponente == 'Papel') {
        document.querySelector('#result1').innerHTML = oponente + (' 📄, Empate ! tente outra vez 😀');
        
    }
    else if (hero == "papel" && oponente == 'Tesoura') {
        document.querySelector('#result1').innerHTML = oponente + (' ✂️, Você perdeu 😭');
        
    }
    else if ( hero == "tesoura" && oponente == 'Pedra'){
        document.querySelector('#result1').innerHTML = oponente + (' 🪨, Você perdeu 😭');
        
    }
    else if ( hero == "tesoura" && oponente == 'Tesoura'){
        document.querySelector('#result1').innerHTML = oponente + (' ✂️, Empate ! tente outra vez 😀');
        
    }
    else {
        document.querySelector('#result1').innerHTML = oponente + (', Você ganhou 🥳🥳🎉')}
        document.querySelector('#corpo').style.backgroundcolor = 'green';
       
})

if (hero == "pedra") {
    document.querySelector('#result').innerHTML = ('Você escolheu Pedra 🪨');

}
else if (hero == "papel") {
    document.querySelector('#result').innerHTML = ('Você escolheu Papel 📄');
}
else if (hero == "tesoura"){
    document.querySelector('#result').innerHTML = ('Você escolheu Tesoura ✂️');
}
else {
    document.querySelector('#result').innerHTML = ('Você digitou um texto inválido ⌨️🚫')
    

}

