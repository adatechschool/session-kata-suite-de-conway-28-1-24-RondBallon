                                    // Kata suite de Conway //
// Etape 1 : "Créer une fonction decoupeChaine qui prend en paramètre une string 
// et renvoie la même string dans laquelle les caractères successifs non identiques sont séparés par un espace."
function decoupeChaine(string) { 

    let resultat = []; // tableau vide pour stocker le resultatn
    let groupeActuel = string[0]; // variable pour stocker les caractères identiques par groupe 
    
    for (let i = 1; i < string.length; i ++) // boucle pour parcourir la chaine
        if (string[i] === string[i-1]) { // si le caractère actuel est identique au caractère prédédent
            groupeActuel += string[i]; // ajoute le caractère actuel au groupe
        
        } else {
             // sinon
            resultat.push(groupeActuel);  // ajoute le groupe actuel au tableau de resultat
            groupeActuel = string[i]; // met le caractère actuel comme groupe actuel
        }
       
        resultat.push(groupeActuel); // ajoute le dernier groupe au tableau
        return resultat.join(" ");  // retourne le tableau joint
}

console.log ("Etape 1 : " +decoupeChaine("ab"));      // gud
console.log("Etape 1 : "+decoupeChaine("aabbca"));  
console.log("Etape 1 : "+decoupeChaine("abcabccb"));

// Etape 2 : "Créer une fonction decritChaine, inspirée de decoupeChaine, qui prend en paramètre une string et renvoie une string qui décrit, tel qu'expliqué ci-dessus, les caractères qui constituent la chaîne en paramètre." //
function decritChaine(string) {  

    let resultat = []; // tableau pour stocker le resultat
    let count = 1; // compteur pour les caractères identiques
    let chaineActuelle = string[0]; // variable pour débuter la chaine a index 0

    for (let i = 1; i <= string.length; i ++) { // boucle pour parcourir la chaine
        if (i < string.length && string[i] === chaineActuelle) { // si le le char actuel est === au char précédent
            count ++; // incremente le compteur 
        
        } else {
            
            resultat.push(count + chaineActuelle); // ajoute le compteur et le caractère actuel au tableau
            if (i < string.length) {
                count = 1; // remet le compteur à 1 + j'ai eu du mal à mettre le compteur à 1 et non 0 
                chaineActuelle = string[i]; // met le caractère actuel comme le nouveau caractère a iterer 
            }
        }
    }
    
    return resultat.join(""); // retourne le tableau joint + j'ai oublié de join pour obtenir la "bonne" sortie
}

console.log ("Etape 2 : "+decritChaine("ab"));       // gud
console.log ("Etape 2 : "+decritChaine("aabbca"));   

// Etape 3 : "Créer une fonction suiteConway, qui prend en paramètre une string et un nombre n et renvoie une string qui représente la suite de Conway de cette string." //

function suiteDeConway (string, num) { // parametre la chaine de characteres char et le nombre num

    let resultat = [string]; // variable pour stocker le resultat
    let current = string; // variable pour stocker le caractère actuel passé en paramètre

    for (let i = 1; i < num; i ++) {
        current = decritChaine(current); // appel de la fonction decritChaine
        resultat.push(current); // ajoute le resultat de la fonction decritChaine au tableau
    
    }
        
    return resultat.join(" ");
}

console.log ("Etape 3 : " +suiteDeConway("a", 3)); // gud 
console.log ("Etape 3 : " +suiteDeConway("1", 3));