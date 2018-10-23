//fonction qui construit la pyramide avec l'hauteur height donnée
function pyramid(height) {
    let ourPyramid='';
    //verfifier si la variable est un entier ou nn
    let patt = /^[0-9]*$/g; 
    if (patt.test(height)) {
        height = parseInt(height);
        if (height < 25) {
            for (let i = 1; i <= height ; i++) {
                ourPyramid += ' '.repeat(height-i) + '#'.repeat(2*i-1) + "\n";
            }
            console.log('Salut, bienvenue dans ma super pyramide ! Combien d\'étages veux-tu ? \n' + height +'\n voici la pyramide: \n' + ourPyramid);
        } else {
            console.log('oooh! la hauteur est très grand, je ne peux contruire une pyramide avec un hauteur supérieur à 25');
        }   
    } else {
        console.log('vous devez saisir un entier');
    }
 }
 
ourheight = prompt('Salut, bienvenue dans ma super pyramide ! Combien d\'étages veux-tu ? \n');
pyramid(ourheight);
