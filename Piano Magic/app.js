//je séléctionne les classes par clé afin d'y insérer les notes de musique du piano
const pianoKeys= document.querySelectorAll('.key');


//une fonction qui sera la callback de l'événement qui contient une Class 
//qui va me permettre de pouvoir jouer les sons
const playSound = (urlSound)=> {
    new Audio(urlSound).play();

};

//pour chaque touche du piano je vais ajouter un écouteur d'événement
pianoKeys.forEach( (pianoKey, i ) => {

    //puisqu'il n'y a pas de clé 00 dans les fichier mp3, je dois rajouter un 0 et ajouter 1 à l'index à chaque fois
    //si l'index est inférieur à 9, si il est supérieur à 9 alors on rajoute 1 à l'index en supprimant le 0
    const number = i < 9 ? '0' + (i + 1) : (i + 1);

    //je crée une variable qui va indexer les son du dossier afin de pouvoir boucler dessus
    //de cette façon ma callback va produir un son différent au click
    const urlSound= 'piano-keys/key' + number + '.mp3';


    pianoKey.addEventListener('click', () => playSound(urlSound));
});