let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

p2.parentNode.style.backgroundColor = 'RGBa(240,160,000,0.5)'; //Orange

//On accède à tous les noeuds enfants de p1. childNodes renvoie une NodeList
let enfantsP1 = p1.childNodes;
console.log(enfantsP1);

/*On peut ensuite utiliser une boucle forEach() pour tous les manipuler ou
 *un indice comme pour les tableaux pour manipuler un noeud enfant en
 *particulier (le premier enfant a l'indice 0, le deuxième l'indice 1, etc.)*/
enfantsP1[1].style.fontWeight = 'bold';

/*On accède aux noeuds enfants éléments seulement de p1.
 *children renvoie une HTMLCollection*/
let p1Children = p1.children;
console.log(p1Children)

//On peut ensuite accèder aux différents enfants comme on le ferait avec un tableau
p1Children[0].style.textDecoration = 'underline';