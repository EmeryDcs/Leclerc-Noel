console.log('7');

canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

let imgDebut    = new Image();
let imgTuto     = new Image();
let imgWin      = new Image();
let imgLose     = new Image();
let imgJeu      = new Image();
imgDebut.src    = repertoire+'/images/png/jeu_dand_lettres/jeu_dand_intro.png';
imgTuto.src     = repertoire+'/images/png/jeu_dand_lettres/jeu_dand_regleJeu.png';
imgWin.src      = repertoire+'/images/png/jeu_dand_lettres/jeu_dand_win.png';
imgLose.src     = repertoire+'/images/png/jeu_dand_lettres/jeu_dand_lose.png';
imgJeu.src      = repertoire+'/images/png/jeu_dand_lettres/jeu_dand_jeu.png';

let etape = 'debut';
let obsSuite = new Obstacle(390,280,110,30);

let posXsouris  = 0;
let posYsouris  = 0;
let xTmp        = 400;
let yTmp        = 0;
let testClic    = false;
let drag        = false;
let tabObsLettreRouge   = [];
let tabObsLettreOrange  = [];
let tabObsLettreVert    = [];

imageLettreRouge = new Image();
imageLettreRouge.src = repertoire+'/images/png/jeu_dand_lettres/jeu_dand_lettreRouge.png';
imageLettreOrange = new Image();
imageLettreOrange.src = repertoire+'/images/png/jeu_dand_lettres/jeu_dand_lettreOrange.png';
imageLettreVert = new Image();
imageLettreVert.src = repertoire+'/images/png/jeu_dand_lettres/jeu_dand_lettreVert.png';

let iLettreRouge    = 0;
let iLettreOrange   = 0;
let iLettreVert     = 0;
let randomLettre    = 0;
let nombreErreur    = 0;
let eventJeu        = 'randomLettre';
let dragLettre      = '';

let obsSacVert     = new Obstacle(100, 250, 125, 135);
let obsSacRouge    = new Obstacle(350, 250, 125, 135);
let obsSacOrange   = new Obstacle(600, 250, 125, 135);

for (let i=0; i<5; i++){
    tabObsLettreRouge[i] = new Obstacle(400,80,60,40);
    tabObsLettreOrange[i] = new Obstacle(400,80,60,40);
    tabObsLettreVert[i] = new Obstacle(400,80,60,40);
}

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

window.onload = function(){
    setInterval(boucle,10);
}

function boucle(){

    switch (etape){
        case 'debut':
            fond();

            ctx.drawImage(imgDebut,0,0,800,400);

            debut();

            break;
        case 'tuto':
            fond();
            ctx.drawImage(imgTuto,0,0,800,400);

            tuto();

            break;
        case 'jeu':
            fond();

            ctx.drawImage(imgJeu, 0, 0, 800, 400);

            jeu();
            break;
        case 'win':
            fond();

            ctx.drawImage(imgWin,0,0,800,400);

            let form = document.getElementById('formReussite');
            form.style.display = 'block';
            break;
        case 'lose':
            fond();

            ctx.drawImage(imgLose,0,0,800,400);
            break;
    }
}

function debut(){
    if (obsSuite.collision(posXsouris, posYsouris, 1, 1) && testClic)
        etape = 'tuto';
}

function tuto(){
    if (obsSuite.collision(posXsouris, posYsouris, 1, 1) && testClic)
        etape = 'jeu';
}

function jeu(){
    switch (eventJeu){
        case 'randomLettre':
            if (iLettreRouge<5 || iLettreOrange<5 || iLettreVert<5){
                randomLettre = Math.floor(Math.random()*3);
                switch (randomLettre){
                    case 0:
                        if (iLettreRouge < 5){
                            dragLettre = 'rouge';
                            eventJeu = 'dragLettre';
                        }
                        break;
                    case 1:
                        if (iLettreOrange < 5) {
                            dragLettre = 'orange';
                            eventJeu = 'dragLettre';
                        }
                        break;
                    case 2:
                        if (iLettreVert < 5) {
                            dragLettre = 'vert';
                            eventJeu = 'dragLettre';
                        }
                        break;
                }
            } else {
                if (nombreErreur > 1)
                    etape = 'lose';
                else 
                    etape = 'win';
            }

            break;

        case 'dragLettre':
            switch (dragLettre){
                case 'rouge':
                    dragRouge();
                    break;
                case 'orange':
                    dragOrange();
                    break;
                case 'vert':
                    dragVert();
                    break;
            }
            break;

        case 'dropLettre':
            switch (dragLettre){
                case 'rouge':
                    iLettreRouge++;
                    break;
                case 'orange':
                    iLettreOrange++;
                    break;
                case 'vert':
                    iLettreVert++;
                    break;
            }
            xTmp = 400;
            yTmp = 0;
            drag = false;
            console.log('ici');
            eventJeu = 'randomLettre';
            break;
    }
}

function fond(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,800,400);
}

function dragRouge(){
    if (testClic && tabObsLettreRouge[iLettreRouge].collision(posXsouris,posYsouris,10,10)){
        ctx.drawImage(imageLettreRouge, posXsouris-30, posYsouris-20, 60, 40);
        tabObsLettreRouge[iLettreRouge].x = posXsouris-30;
        tabObsLettreRouge[iLettreRouge].y = posYsouris-20;
        xTmp = posXsouris-30;
        yTmp = posYsouris-20;
        drag = true;
        console.log('la');
    } else if (!drag) {
        ctx.drawImage(imageLettreRouge, xTmp, yTmp, 60, 40);
        if (yTmp < 80)
            yTmp++;
    } else if (!testClic && obsSacRouge.collision(tabObsLettreRouge[iLettreRouge].x, tabObsLettreRouge[iLettreRouge].y, 60, 40)){
        eventJeu = 'dropLettre';
    } else if (!testClic && (obsSacOrange.collision(tabObsLettreRouge[iLettreRouge].x, tabObsLettreRouge[iLettreRouge].y, 60, 40) || obsSacVert.collision(tabObsLettreRouge[iLettreRouge].x, tabObsLettreRouge[iLettreRouge].y, 60, 40))){
        eventJeu = 'dropLettre';
        nombreErreur++;
    } else {
        ctx.drawImage(imageLettreRouge, xTmp, yTmp, 60, 40);
    }
}

function dragOrange(){
    if (testClic && tabObsLettreOrange[iLettreOrange].collision(posXsouris,posYsouris,10,10)){
        ctx.drawImage(imageLettreOrange, posXsouris-30, posYsouris-20, 60, 40);
        tabObsLettreOrange[iLettreOrange].x = posXsouris-30;
        tabObsLettreOrange[iLettreOrange].y = posYsouris-20;
        xTmp = posXsouris-30;
        yTmp = posYsouris-20;
        drag = true;
        console.log('la');
    } else if (!drag) {
        ctx.drawImage(imageLettreOrange, xTmp, yTmp, 60, 40);
        if (yTmp < 80)
            yTmp++;
    } else if (!testClic && obsSacOrange.collision(tabObsLettreOrange[iLettreOrange].x, tabObsLettreOrange[iLettreOrange].y, 60, 40)){
        eventJeu = 'dropLettre';
    } else if (!testClic && (obsSacRouge.collision(tabObsLettreOrange[iLettreOrange].x, tabObsLettreOrange[iLettreOrange].y, 60, 40) || obsSacVert.collision(tabObsLettreOrange[iLettreOrange].x, tabObsLettreOrange[iLettreOrange].y, 60, 40))){
        eventJeu = 'dropLettre';
        nombreErreur++;
    } else {
        ctx.drawImage(imageLettreOrange, xTmp, yTmp, 60, 40);
    }
}

function dragVert(){
    if (testClic && tabObsLettreVert[iLettreVert].collision(posXsouris,posYsouris,10,10)){
        ctx.drawImage(imageLettreVert, posXsouris-30, posYsouris-20, 60, 40);
        tabObsLettreVert[iLettreVert].x = posXsouris-30;
        tabObsLettreVert[iLettreVert].y = posYsouris-20;
        xTmp = posXsouris-30;
        yTmp = posYsouris-20;
        drag = true;
        console.log('la');
    } else if (!drag) {
        ctx.drawImage(imageLettreVert, xTmp, yTmp, 60, 40);
        if (yTmp < 80)
            yTmp++;
    } else if (!testClic && obsSacVert.collision(tabObsLettreVert[iLettreVert].x, tabObsLettreVert[iLettreVert].y, 60, 40)){
        eventJeu = 'dropLettre';
    } else if (!testClic && (obsSacOrange.collision(tabObsLettreVert[iLettreVert].x, tabObsLettreVert[iLettreVert].y, 60, 40) || obsSacRouge.collision(tabObsLettreVert[iLettreVert].x, tabObsLettreVert[iLettreVert].y, 60, 40))){
        eventJeu = 'dropLettre';
        nombreErreur++;
    } else {
        ctx.drawImage(imageLettreVert, xTmp, yTmp, 60, 40);
    }
}