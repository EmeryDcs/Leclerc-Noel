console.log('22');

console.log('10');

canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

let niveau = 'jeu';
let testClic = false;

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

let obsBouleVert       = new Obstacle(24, 51, 130, 33,'vert');
let obsBouleBleu       = new Obstacle(24, 51, 130, 33,'bleu');
let obsBouleViolet     = new Obstacle(24, 51, 130, 33,'violet');
let obsBouleRouge      = new Obstacle(24, 51, 130, 33,'rouge');
let obsBouleJaune      = new Obstacle(24, 51, 130, 33,'jaune');
let obsBouleOrange     = new Obstacle(24, 51, 130, 33,'orange');

let obsNoeudVert       = new Obstacle(28, 25, 50, 60,'vert');
let obsNoeudRouge      = new Obstacle(28, 25+60*1, 50, 60,'rouge');
let obsNoeudJaune      = new Obstacle(28, 25+60*2, 50, 60,'jaune');
let obsNoeudViolet     = new Obstacle(28, 25+60*3, 50, 60,'violet');
let obsNoeudBleu       = new Obstacle(28, 25+60*4, 50, 60,'bleu');
let obsNoeudCyan       = new Obstacle(28, 25+60*5, 50, 60,'cyan');

let obsGuirlandeRouge      = new Obstacle(100, 320, 75, 60,'rouge');
let obsGuirlandeJaune      = new Obstacle(100+75*1, 320, 75, 60,'jaune');
let obsGuirlandeCyan       = new Obstacle(100+75*3, 320, 75, 60,'cyan');
let obsGuirlandeViolet     = new Obstacle(100+75*4, 320, 75, 60,'violet');
let obsGuirlandeBleu       = new Obstacle(100+75*6, 320, 75, 60,'bleu');
let obsGuirlandeVert       = new Obstacle(100+75*7, 320, 75, 60,'vert');

let obsLumiereVert     = new Obstacle(720, 65, 70, 30,'vert');
let obsLumiereCyan     = new Obstacle(720, 65+30*2, 70, 30,'cyan');
let obsLumiereRouge    = new Obstacle(720, 65+30*3, 70, 30,'rouge');
let obsLumiereBleu     = new Obstacle(720, 65+30*6, 70, 30,'bleu');
let obsLumiereOrange   = new Obstacle(720, 65+30*7, 70, 30,'orange');
let obsLumiereJaune    = new Obstacle(720, 65+30*8, 70, 30,'jaune');

let obsWin             = new Obstacle(730,345, 47, 47);

let tabObsBoule         = [obsBouleVert, obsBouleBleu, obsBouleViolet, obsBouleRouge, obsBouleJaune, obsBouleOrange];
let tabObsNoeud         = [obsNoeudVert, obsNoeudRouge, obsNoeudJaune, obsNoeudViolet, obsNoeudBleu, obsNoeudCyan];
let tabObsGuirlande     = [obsGuirlandeRouge, obsGuirlandeJaune, obsGuirlandeCyan, obsGuirlandeViolet, obsGuirlandeBleu, obsGuirlandeVert];
let tabObsLumiere       = [obsLumiereVert, obsLumiereCyan, obsLumiereRouge, obsLumiereBleu, obsLumiereOrange, obsLumiereJaune];

let dessinGuirlandeCouleur     = '';
let dessinLumiereCouleur     = '';
let dessinBouleCouleur   = '';
let dessinNoeudCouleur     = '';

let obsSuiteIntro = new Obstacle(245,275,110,30);
let obsSuiteTuto = new Obstacle(390,280,110,30);

//Ecoute du déplacement de la souris
document.addEventListener("mousemove", mouseMoveHandler, false);

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

window.onload = function (){
    setInterval(boucle, 10);
}

function boucle(){
    fond();
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

    dessineBoule(dessinBouleCouleur);
    dessineNoeud(dessinNoeudCouleur);
    dessineGuirlande(dessinGuirlandeCouleur);
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
            ctx.drawImage(bouleRouge,300,100,200,180);
            break;
        case 'orange':
            ctx.drawImage(bouleOrange,300,100,200,180);
            break;
        case 'jaune':
            ctx.drawImage(bouleJaune,300,100,200,180);
            break;
        case 'violet':
            ctx.drawImage(bouleViolet,300,100,200,180);
            break;
        case 'bleu':
            ctx.drawImage(bouleBleu,300,100,200,180);
            break;
        case 'vert':
            ctx.drawImage(bouleVert,300,100,200,180);
            break;
    }
}

function dessineNoeud(couleur){
    switch (couleur){
        case 'rouge':
            ctx.drawImage(noeudRouge,370,235,140,46);
            break;
        case 'jaune':
            ctx.drawImage(noeudJaune,370,235,140,46);
            break;
        case 'cyan':
            ctx.drawImage(noeudCyan,370,235,140,46);
            break;
        case 'violet':
            ctx.drawImage(noeudViolet,370,235,140,46);
            break;
        case 'bleu':
            ctx.drawImage(noeudBleu,370,235,140,46);
            break;
        case 'vert':
            ctx.drawImage(noeudVert,370,235,140,46);
            break;
    }
}

function dessineGuirlande(couleur){
    switch (couleur){
        case 'rouge':
            ctx.drawImage(guirlandeRouge, 276, 138, 45, 45);
            break;
        case 'cyan':
            ctx.drawImage(guirlandeCyan, 276, 138, 45, 45);
            break;
        case 'jaune':
            ctx.drawImage(guirlandeJaune, 276, 138, 45, 45);
            break;
        case 'violet':
            ctx.drawImage(guirlandeViolet, 276, 138, 45, 45);
            break;
        case 'bleu':
            ctx.drawImage(guirlandeBleu, 276, 138, 45, 45);
            break;
        case 'vert':
            ctx.drawImage(guirlandeVert, 276, 138, 45, 45);
            break;
    }
}

function dessineLumiere(couleur){
    switch (couleur){
        case 'rouge':
            ctx.drawImage(lumiereRouge,322, 108, 173, 122);
            break;
        case 'orange':
            ctx.drawImage(lumiereOrange,322, 108, 173, 122);
            break;
        case 'jaune':
            ctx.drawImage(lumiereJaune,322, 108, 173, 122);
            break;
        case 'cyan':
            ctx.drawImage(lumiereCyan,322, 108, 173, 122);
            break;
        case 'bleu':
            ctx.drawImage(lumiereBleu,322, 108, 173, 122);
            break;
        case 'vert':
            ctx.drawImage(lumiereVert,322, 108, 173, 122);
            break;
    }
}