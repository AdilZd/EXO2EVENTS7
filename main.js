// # Exercice :
// >*En utilisant l'attribut style*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc
let Un = document.querySelector('h1');
    Un.addEventListener('dblclick',()=>{
    Un.style.background = 'red';
    Un.style.color = 'white';
})
// ### 2. Au hover du h3, son texte rétrécit d'un caractère 
let Deux = document.querySelector('h3');
Deux.addEventListener('mouseover',()=>{
    Deux.style.fontSize = '10px';
})
// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir
let 