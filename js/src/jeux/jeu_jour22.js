console.log('22');

let voirJeu = document.getElementById("voirJeu");
voirJeu.style.display = "block";

canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

let niveau = 'debut';
let testClic = false;
let testPointer = 0;

let imageIntro  = new Image();
let imageTuto   = new Image();
let imageWin    = new Image();
let imageJeu    = new Image();
imageIntro.src  = repertoire+'/images/png/jeu_sapin/jeu_sapinIntro.png';
imageTuto.src   = repertoire+'/images/png/jeu_sapin/jeu_sapinTuto.png';
imageWin.src    = repertoire+'/images/png/jeu_sapin/jeu_sapinWin.png';
imageJeu.src    = repertoire+'/images/png/jeu_sapin/jeu_sapinJeu.png';

let bouleVert      = new Image();
let bouleBleu      = new Image();
let bouleViolet    = new Image();
let bouleRouge     = new Image();
let bouleJaune     = new Image();
let bouleOrange    = new Image();
bouleVert.src      = repertoire+'/images/png/jeu_sapin/jeu_sapinBouleVert.png';
bouleBleu.src      = repertoire+'/images/png/jeu_sapin/jeu_sapinBouleBleu.png';
bouleViolet.src    = repertoire+'/images/png/jeu_sapin/jeu_sapinBouleViolet.png';
bouleRouge.src     = repertoire+'/images/png/jeu_sapin/jeu_sapinBouleRouge.png';
bouleJaune.src     = repertoire+'/images/png/jeu_sapin/jeu_sapinBouleJaune.png';
bouleOrange.src    = repertoire+'/images/png/jeu_sapin/jeu_sapinBouleOrange.png';

let noeudVert      = new Image();
let noeudBleu      = new Image();
let noeudViolet    = new Image();
let noeudRouge     = new Image();
let noeudJaune     = new Image();
let noeudCyan      = new Image();
noeudVert.src      = repertoire+'/images/png/jeu_sapin/jeu_sapinNoeudVert.png';
noeudBleu.src      = repertoire+'/images/png/jeu_sapin/jeu_sapinNoeudBleu.png';
noeudViolet.src    = repertoire+'/images/png/jeu_sapin/jeu_sapinNoeudViolet.png';
noeudRouge.src     = repertoire+'/images/png/jeu_sapin/jeu_sapinNoeudRouge.png';
noeudJaune.src     = repertoire+'/images/png/jeu_sapin/jeu_sapinNoeudJaune.png';
noeudCyan.src      = repertoire+'/images/png/jeu_sapin/jeu_sapinNoeudCyan.png';

let guirlandeVert      = new Image();
let guirlandeBleu      = new Image();
let guirlandeViolet    = new Image();
let guirlandeRouge     = new Image();
let guirlandeJaune     = new Image();
let guirlandeCyan      = new Image();
guirlandeVert.src      = repertoire+'/images/png/jeu_sapin/jeu_sapinGuirlandeVert.png';
guirlandeBleu.src      = repertoire+'/images/png/jeu_sapin/jeu_sapinGuirlandeBleu.png';
guirlandeViolet.src    = repertoire+'/images/png/jeu_sapin/jeu_sapinGuirlandeViolet.png';
guirlandeRouge.src     = repertoire+'/images/png/jeu_sapin/jeu_sapinGuirlandeRouge.png';
guirlandeJaune.src     = repertoire+'/images/png/jeu_sapin/jeu_sapinGuirlandeJaune.png';
guirlandeCyan.src    = repertoire+'/images/png/jeu_sapin/jeu_sapinGuirlandeCyan.png';

let lumiereVert      = new Image();
let lumiereBleu      = new Image();
let lumiereRouge     = new Image();
let lumiereJaune     = new Image();
let lumiereCyan      = new Image();
let lumiereOrange    = new Image();
lumiereVert.src      = repertoire+'/images/png/jeu_sapin/jeu_sapinLumiereVert.png';
lumiereBleu.src      = repertoire+'/images/png/jeu_sapin/jeu_sapinLumiereBleu.png';
lumiereRouge.src     = repertoire+'/images/png/jeu_sapin/jeu_sapinLumiereRouge.png';
lumiereJaune.src     = repertoire+'/images/png/jeu_sapin/jeu_sapinLumiereJaune.png';
lumiereCyan.src      = repertoire+'/images/png/jeu_sapin/jeu_sapinLumiereCyan.png';
lumiereOrange.src    = repertoire+'/images/png/jeu_sapin/jeu_sapinLumiereOrange.png';

let obsBouleViolet     = new Obstacle(24, 51, 130, 33,'violet');
let obsBouleBleu       = new Obstacle(24, 51+33, 130, 33,'bleu');
let obsBouleVert       = new Obstacle(24, 51+66, 130, 33,'vert');
let obsBouleJaune      = new Obstacle(24+130, 51, 130, 33,'jaune'); 
let obsBouleRouge      = new Obstacle(24+130, 51+33, 130, 33,'rouge');
let obsBouleOrange     = new Obstacle(24+130, 51+66, 130, 33,'orange');

let obsNoeudRouge      = new Obstacle(25, 223, 105, 35,'rouge');
let obsNoeudViolet     = new Obstacle(25, 223+35, 105, 35,'violet');
let obsNoeudCyan       = new Obstacle(25, 223+70, 105, 35,'cyan');
let obsNoeudVert       = new Obstacle(25+105, 223, 105, 35,'vert');
let obsNoeudJaune      = new Obstacle(25+105, 223+35, 105, 35,'jaune');
let obsNoeudBleu       = new Obstacle(25+105, 223+70, 105, 35,'bleu');

let obsGuirlandeViolet     = new Obstacle(580, 225, 105, 40,'violet');
let obsGuirlandeCyan       = new Obstacle(580, 225+40, 105, 40,'cyan');
let obsGuirlandeRouge      = new Obstacle(580, 225+80, 105, 40,'rouge');
let obsGuirlandeVert       = new Obstacle(580+105, 225, 105, 40,'vert');
let obsGuirlandeJaune      = new Obstacle(580+105, 225+40, 105, 40,'jaune');
let obsGuirlandeBleu       = new Obstacle(580+105, 225+80, 105, 40,'bleu');

let obsLumiereVert     = new Obstacle(533, 51, 115, 30,'vert');
let obsLumiereCyan     = new Obstacle(533, 51+30, 115, 30,'cyan');
let obsLumiereRouge    = new Obstacle(533, 51+60, 115, 30,'rouge');
let obsLumiereBleu     = new Obstacle(533+115, 51, 115, 30,'bleu');
let obsLumiereOrange   = new Obstacle(533+115, 51+30, 115, 30,'orange');
let obsLumiereJaune    = new Obstacle(533+115, 51+60, 115, 30,'jaune');

let obsWin             = new Obstacle(372, 14, 65, 62); //L'étoile sera le win

let tabObsBoule         = [obsBouleVert, obsBouleBleu, obsBouleViolet, obsBouleRouge, obsBouleJaune, obsBouleOrange];
let tabObsNoeud         = [obsNoeudVert, obsNoeudRouge, obsNoeudJaune, obsNoeudViolet, obsNoeudBleu, obsNoeudCyan];
let tabObsGuirlande     = [obsGuirlandeRouge, obsGuirlandeJaune, obsGuirlandeCyan, obsGuirlandeViolet, obsGuirlandeBleu, obsGuirlandeVert];
let tabObsLumiere       = [obsLumiereVert, obsLumiereCyan, obsLumiereRouge, obsLumiereBleu, obsLumiereOrange, obsLumiereJaune];

let dessinGuirlandeCouleur      = '';
let dessinLumiereCouleur        = '';
let dessinBouleCouleur          = '';
let dessinNoeudCouleur          = '';

let obsSuiteTuto = new Obstacle(245,275,110,30);
let obsSuiteIntro = new Obstacle(390,280,110,30);

let tabAllObstacle = [obsBouleVert, obsBouleBleu, obsBouleViolet, obsBouleRouge, obsBouleJaune, obsBouleOrange, obsNoeudVert, obsNoeudRouge, obsNoeudJaune, obsNoeudViolet, obsNoeudBleu, obsNoeudCyan, obsGuirlandeRouge, obsGuirlandeJaune, obsGuirlandeCyan, obsGuirlandeViolet, obsGuirlandeBleu, obsGuirlandeVert, obsLumiereVert, obsLumiereCyan, obsLumiereRouge, obsLumiereBleu, obsLumiereOrange, obsLumiereJaune, obsWin];

//Ecoute du déplacement de la souris
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("touchmove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    var canvasX = e.offsetX;
    var canvasY = e.offsetY;
    if(canvasX > 0 && canvasX < canvas.width) {
        posXsouris = canvasX;
    }
    if(canvasY > 0 && canvasY < canvas.height) {
        posYsouris = canvasY;
    }
}

//Ecoute du clic souris 
canvas.addEventListener('mousedown', (e) => {
    testClic = true;
})

canvas.addEventListener('mouseup', (e) => {
    testClic = false;
})

canvas.addEventListener('touchstart', (e) => {
    testClic = true;
})

canvas.addEventListener('touchend', (e) => {
    testClic = false;
})

window.onload = function (){
    setInterval(boucle, 10);
}

function boucle(){
    fond();
    souris();
    switch (niveau){
        case 'debut':
            debut();
            break;
        case 'tuto':
            tuto();
            break;
        case 'jeu':
            jeu();
            break;
        case 'fin':
            fin(); 
            break;
    }
}

function debut(){
    ctx.drawImage(imageIntro, 0, 0, 800, 400);

    if (testClic && obsSuiteIntro.collision(posXsouris, posYsouris, 1, 1))
        niveau = 'tuto';
}

function tuto(){
    ctx.drawImage(imageTuto, 0, 0, 800, 400);

    if (testClic && obsSuiteTuto.collision(posXsouris, posYsouris, 1, 1))
        niveau = 'jeu';
}

function jeu(){
    ctx.drawImage(imageJeu, 0, 0, 800, 400);

    tabObsBoule.forEach( (e) => {
        if (testClic && e.collision(posXsouris, posYsouris, 1, 1)){
            dessinBouleCouleur = e.couleur;
        }
    });

    tabObsLumiere.forEach( (e) => {
        if (testClic && e.collision(posXsouris, posYsouris, 1, 1)){
            dessinLumiereCouleur = e.couleur;
        }
    });

    tabObsGuirlande.forEach( (e) => {
        if (testClic && e.collision(posXsouris, posYsouris, 1, 1)){
            dessinGuirlandeCouleur = e.couleur;
        }
    });

    tabObsNoeud.forEach( (e) => {
        if (testClic && e.collision(posXsouris, posYsouris, 1, 1)){
            dessinNoeudCouleur = e.couleur;
        }
    });

    dessineGuirlande(dessinGuirlandeCouleur);
    dessineBoule(dessinBouleCouleur);
    dessineNoeud(dessinNoeudCouleur);
    dessineLumiere(dessinLumiereCouleur);

    if (testClic && obsWin.collision(posXsouris, posYsouris, 1, 1))
        niveau = 'fin';
}

function fin(){
    ctx.drawImage(imageWin, 0, 0, 800, 400);

    let form = document.getElementById('formReussite');
    form.style.display = 'block';
}

function fond(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,800,400);
}

function dessineBoule(couleur){
    switch (couleur){
        case 'rouge':
            ctx.drawImage(bouleRouge,311, 106, 179, 236);
            break;
        case 'orange':
            ctx.drawImage(bouleOrange,311, 106, 179, 236);
            break;
        case 'jaune':
            ctx.drawImage(bouleJaune,311, 106, 179, 236);
            break;
        case 'violet':
            ctx.drawImage(bouleViolet,311, 106, 179, 236);
            break;
        case 'bleu':
            ctx.drawImage(bouleBleu,311, 106, 179, 236);
            break;
        case 'vert':
            ctx.drawImage(bouleVert,311, 106, 179, 236);
            break;
    }
}

function dessineNoeud(couleur){
    switch (couleur){
        case 'rouge':
            ctx.drawImage(noeudRouge,256, 135, 223, 234);
            break;
        case 'jaune':
            ctx.drawImage(noeudJaune,256, 135, 223, 234);
            break;
        case 'cyan':
            ctx.drawImage(noeudCyan,340, 101, 133, 265);
            break;
        case 'violet':
            ctx.drawImage(noeudViolet,256, 135, 223, 234);
            break;
        case 'bleu':
            ctx.drawImage(noeudBleu,340, 101, 133, 265);
            break;
        case 'vert':
            ctx.drawImage(noeudVert,256, 135, 223, 234);
            break;
    }
}

function dessineGuirlande(couleur){
    switch (couleur){
        case 'rouge':
            ctx.drawImage(guirlandeRouge, 315, 97, 175, 270);
            break;
        case 'cyan':
            ctx.drawImage(guirlandeCyan, 315, 97, 175, 270);
            break;
        case 'jaune':
            ctx.drawImage(guirlandeJaune, 315, 97, 175, 270);
            break;
        case 'violet':
            ctx.drawImage(guirlandeViolet, 315, 97, 175, 270);
            break;
        case 'bleu':
            ctx.drawImage(guirlandeBleu, 315, 97, 175, 270);
            break;
        case 'vert':
            ctx.drawImage(guirlandeVert, 315, 97, 175, 270);
            break;
    }
}

function dessineLumiere(couleur){
    switch (couleur){
        case 'rouge':
            ctx.drawImage(lumiereRouge,329, 129, 122, 218);
            break;
        case 'orange':
            ctx.drawImage(lumiereOrange,329, 129, 122, 218);
            break;
        case 'jaune':
            ctx.drawImage(lumiereJaune,329, 129, 122, 218);
            break;
        case 'cyan':
            ctx.drawImage(lumiereCyan,329, 129, 122, 218);
            break;
        case 'bleu':
            ctx.drawImage(lumiereBleu,329, 129, 122, 218);
            break;
        case 'vert':
            ctx.drawImage(lumiereVert,329, 129, 122, 218);
            break;
    }
}

function souris(){

    if (typeof posXsouris != 'undefined' && typeof posYsouris != 'undefined'){
        testPointer = 0;
    
        switch (niveau){
            case 'debut':
                if (obsSuiteIntro.collision(posXsouris, posYsouris, 1, 1)){
                    canvas.style.cursor = 'pointer';
                    testPointer = 1;
                }
                break;
            case 'tuto':
                if (obsSuiteTuto.collision(posXsouris, posYsouris, 1, 1)){
                    canvas.style.cursor = 'pointer';
                    testPointer = 1;
                }
                break;
            case 'jeu':
                for (let i=0; i<tabAllObstacle.length; i++){
                    if (tabAllObstacle[i].collision(posXsouris, posYsouris, 1, 1)){
                        canvas.style.cursor = 'pointer';
                        testPointer = 1;
                        break;
                    }
                }
                break;
        }
    
        if (testPointer < 1)
            canvas.style.cursor = 'default';
    }
}