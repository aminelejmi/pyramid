const readline = require([],'readline');
const rl = readline.createInterface(
  process.stdin,
  process.stdout
);

rl.question('Salut, bienvenue dans ma super pyramide ! Combien d\'étages veux-tu ? \n', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});

/*ourheight = prompt('Salut, bienvenue dans ma super pyramide ! Combien d\'étages veux-tu ? \n');
pyramid(ourheight);
*/
//function build a pyramid with a height of 
function pyramid(height) {
    let ourPyramid='';
    //verfifier si la variable est un entier ou nn
    let patt = /^[0-9]*$/g; 
    if (patt.test(height)) {
        height = parseInt(height);
        if (height < 25) {
            for (let i = 1; i <= height ; i++) {
                ourPyramid += writeCharN(' ' , height-i) + writeCharN('#' , 2*i-1) + "\n";
            }
            console.log("voici la pyramide: \n" + ourPyramid);
        } else {
            console.log('oooh! la hauteur est très grand, je ne peux contruire une pyramide avec un hauteur supérieur à 25');
        }   
    } else {
        console.log('vous devez saisir un entier');
    }
 }
 //fonction qui retourne une chaine qui présente la variable ourChar écrite n fois
 function writeCharN(ourChar , n) {
    let ourString = '';
     for (let i = 1; i <= n ; i++) {
         ourString += ourChar; 
     }
    return ourString;
 }

