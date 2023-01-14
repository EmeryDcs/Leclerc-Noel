console.log('16');

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
imageIntro.src  = repertoire+'/images/png/jeu_bdn/jeu_bdnIntro.png';
imageTuto.src   = repertoire+'/images/png/jeu_bdn/jeu_bdnTuto.png';
imageWin.src    = repertoire+'/images/png/jeu_bdn/jeu_bdnWin.png';
imageJeu.src    = repertoire+'/images/png/jeu_bdn/jeu_bdnJeu.png';

let carotteVert         = new Image();
let carotteBleu         = new Image();
let carotteViolet       = new Image();
let carotteRouge        = new Image();
let carotteGris         = new Image();
let carotteOrange       = new Image();
carotteVert.src         = repertoire+'/images/png/jeu_bdn/jeu_bdnCarotteVert.png';
carotteBleu.src         = repertoire+'/images/png/jeu_bdn/jeu_bdnCarotteBleu.png';
carotteViolet.src       = repertoire+'/images/png/jeu_bdn/jeu_bdnCarotteViolet.png';
carotteRouge.src        = repertoire+'/images/png/jeu_bdn/jeu_bdnCarotteRouge.png';
carotteGris.src         = repertoire+'/images/png/jeu_bdn/jeu_bdnCarotteGris.png';
carotteOrange.src       = repertoire+'/images/png/jeu_bdn/jeu_bdnCarotteOrange.png';

let pierreVert          = new Image();
let pierreBleu          = new Image();
let pierreViolet        = new Image();
let pierreRouge         = new Image();
let pierreOrange        = new Image();
let pierreGris          = new Image();
pierreVert.src          = repertoire+'/images/png/jeu_bdn/jeu_bdnPierreVert.png';
pierreBleu.src          = repertoire+'/images/png/jeu_bdn/jeu_bdnPierreBleu.png';
pierreViolet.src        = repertoire+'/images/png/jeu_bdn/jeu_bdnPierreViolet.png';
pierreRouge.src         = repertoire+'/images/png/jeu_bdn/jeu_bdnPierreRouge.png';
pierreOrange.src        = repertoire+'/images/png/jeu_bdn/jeu_bdnPierreOrange.png';
pierreGris.src          = repertoire+'/images/png/jeu_bdn/jeu_bdnPierreGris.png';

let boutonHautVert          = new Image();
let boutonHautBleu          = new Image();
let boutonHautViolet        = new Image();
let boutonHautRouge         = new Image();
let boutonHautOrange        = new Image();
let boutonHautGris          = new Image();
boutonHautVert.src          = repertoire+'/images/png/jeu_bdn/jeu_bdnBouton2Vert.png';
boutonHautBleu.src          = repertoire+'/images/png/jeu_bdn/jeu_bdnBouton2Bleu.png';
boutonHautViolet.src        = repertoire+'/images/png/jeu_bdn/jeu_bdnBouton2Violet.png';
boutonHautRouge.src         = repertoire+'/images/png/jeu_bdn/jeu_bdnBouton2Rouge.png';
boutonHautOrange.src        = repertoire+'/images/png/jeu_bdn/jeu_bdnBouton2Orange.png';
boutonHautGris.src          = repertoire+'/images/png/jeu_bdn/jeu_bdnBouton2Gris.png';

let boutonBasVert       = new Image();
let boutonBasBleu       = new Image();
let boutonBasViolet     = new Image();
let boutonBasRouge      = new Image();
let boutonBasOrange     = new Image();
let boutonBasGris       = new Image();
boutonBasVert.src       = repertoire+'/images/png/jeu_bdn/jeu_bdnBouton3Vert.png';
boutonBasBleu.src       = repertoire+'/images/png/jeu_bdn/jeu_bdnBouton3Bleu.png';
boutonBasViolet.src     = repertoire+'/images/png/jeu_bdn/jeu_bdnBouton3Violet.png';
boutonBasRouge.src      = repertoire+'/images/png/jeu_bdn/jeu_bdnBouton3Rouge.png';
boutonBasOrange.src     = repertoire+'/images/png/jeu_bdn/jeu_bdnBouton3Orange.png';
boutonBasGris.src       = repertoire+'/images/png/jeu_bdn/jeu_bdnBouton3Gris.png';

let brasGauche1         = new Image();
let brasGauche2         = new Image();
let brasDroit1          = new Image();
let brasDroit2          = new Image();
brasGauche1.src = repertoire+'/images/png/jeu_bdn/jeu_bdnBrasGauche1.png';
brasGauche2.src = repertoire+'/images/png/jeu_bdn/jeu_bdnBrasGauche2.png';
brasDroit1.src = repertoire+'/images/png/jeu_bdn/jeu_bdnBrasDroit1.png';
brasDroit2.src = repertoire+'/images/png/jeu_bdn/jeu_bdnBrasDroit2.png';

let sourire1       = new Image();
let sourire2       = new Image();
let sourire3       = new Image();
sourire1.src = repertoire+'/images/png/jeu_bdn/jeu_bdnSourire1.png';
sourire2.src = repertoire+'/images/png/jeu_bdn/jeu_bdnSourire2.png';
sourire3.src = repertoire+'/images/png/jeu_bdn/jeu_bdnSourire3.png';

let bdnVert          = new Image();
let bdnBleu          = new Image();
let bdnRose        = new Image();
let bdnRouge         = new Image();
let bdnBlanc        = new Image();
let bdnGris          = new Image();
bdnVert.src          = repertoire+'/images/png/jeu_bdn/jeu_bdnBdnVert.png';
bdnBleu.src          = repertoire+'/images/png/jeu_bdn/jeu_bdnBdnBleu.png';
bdnRose.src        = repertoire+'/images/png/jeu_bdn/jeu_bdnBdnRose.png';
bdnRouge.src         = repertoire+'/images/png/jeu_bdn/jeu_bdnBdnRouge.png';
bdnBlanc.src        = repertoire+'/images/png/jeu_bdn/jeu_bdnBdnBlanc.png';
bdnGris.src          = repertoire+'/images/png/jeu_bdn/jeu_bdnBdnGris.png';

let obsCarotteOrange    = new Obstacle(16, 48, 39, 39,'orange');
let obsCarotteRouge     = new Obstacle(16+39, 48, 39, 39,'rouge');
let obsCarotteVert      = new Obstacle(16+78, 48, 39, 39,'vert');
let obsCarotteGris      = new Obstacle(16, 48+39, 39, 39,'gris'); 
let obsCarotteViolet    = new Obstacle(16+39, 48+39, 39, 39,'violet');
let obsCarotteBleu      = new Obstacle(16+78, 48+39, 39, 39,'bleu');

let obsPierreGris       = new Obstacle(140, 48, 39, 39,'gris');
let obsPierreVert       = new Obstacle(140+39, 48, 39, 39,'vert');
let obsPierreViolet     = new Obstacle(140+78, 48, 39, 39,'violet');
let obsPierreBleu       = new Obstacle(140, 48+39, 39, 39,'bleu');
let obsPierreOrange     = new Obstacle(140+39, 48+39, 39, 39,'orange');
let obsPierreRouge      = new Obstacle(140+78, 48+39, 39, 39,'rouge');

let obsBoutonsBleu      = new Obstacle(25, 156, 38, 166,'bleu');
let obsBoutonsRouge     = new Obstacle(25+38, 156, 38, 166,'rouge');
let obsBoutonsVert      = new Obstacle(25+38*2, 156, 38, 166,'vert');
let obsBoutonsViolet    = new Obstacle(25+38*3, 156, 38, 166,'violet');
let obsBoutonsGris      = new Obstacle(25+38*4, 156, 38, 166,'gris');
let obsBoutonsOrange    = new Obstacle(25+38*5, 156, 38, 166,'orange');

let obsSourire1         = new Obstacle(293, 65, 92, 33);
let obsSourire2         = new Obstacle(293, 65+33, 92, 33);
let obsSourire3         = new Obstacle(293, 65+66, 92, 33);

let sourireAdessin      = '';

let obsBras1            = new Obstacle(280, 207, 138, 51);
let obsBras2            = new Obstacle(280, 207+51, 138, 51);

let brasAdessin         = '';

let obsBdn              = new Obstacle(500, 23, 203, 345);

let obsWin             = new Obstacle(729, 334, 54, 51); 

let tabObsCarotte           = [obsCarotteVert, obsCarotteBleu, obsCarotteViolet, obsCarotteRouge, obsCarotteGris, obsCarotteOrange];
let tabObsPierre            = [obsPierreVert, obsPierreRouge, obsPierreGris, obsPierreViolet, obsPierreBleu, obsPierreOrange];
let tabObsBoutons           = [obsBoutonsRouge, obsBoutonsOrange, obsBoutonsGris, obsBoutonsViolet, obsBoutonsBleu, obsBoutonsVert];

let dessinCarotteCouleur      = '';
let dessinPierreCouleur       = '';
let dessinBoutonsCouleur      = '';
let dessinBdnCouleur          = 'blanc';

let obsSuiteIntro = new Obstacle(245,275,110,30);
let obsSuiteTuto = new Obstacle(390,280,110,30);

let tabAllObstacle = [obsWin, obsCarotteVert, obsCarotteBleu, obsCarotteViolet, obsCarotteRouge, obsCarotteGris, obsCarotteOrange, obsPierreVert, obsPierreRouge, obsPierreGris, obsPierreViolet, obsPierreBleu, obsPierreOrange, obsBoutonsRouge, obsBoutonsOrange, obsBoutonsGris, obsBoutonsViolet, obsBoutonsBleu, obsBoutonsVert, obsSourire1, obsSourire2, obsSourire3, obsBras1, obsBras2, obsBdn];

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

    tabObsCarotte.forEach( (e) => {
        if (testClic && e.collision(posXsouris, posYsouris, 1, 1)){
            dessinCarotteCouleur = e.couleur;
        }
    });

    tabObsPierre.forEach( (e) => {
        if (testClic && e.collision(posXsouris, posYsouris, 1, 1)){
            dessinPierreCouleur = e.couleur;
        }
    });

    tabObsBoutons.forEach( (e) => {
        if (testClic && e.collision(posXsouris, posYsouris, 1, 1)){
            dessinBoutonsCouleur = e.couleur;
        }
    });

    dessineBdn();
    dessineCarotte(dessinCarotteCouleur);
    dessinePierre(dessinPierreCouleur);
    dessineBoutons(dessinBoutonsCouleur);
    dessineSourire();
    dessineBras();

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

function dessineCarotte(couleur){
    switch (couleur){
        case 'rouge':
            ctx.drawImage(carotteRouge, 596, 72, 27, 16);
            break;
        case 'orange':
            ctx.drawImage(carotteOrange, 596, 72, 27, 16);
            break;
        case 'gris':
            ctx.drawImage(carotteGris, 596, 72, 27, 16);
            break;
        case 'violet':
            ctx.drawImage(carotteViolet, 596, 72, 27, 16);
            break;
        case 'bleu':
            ctx.drawImage(carotteBleu, 596, 72, 27, 16);
            break;
        case 'vert':
            ctx.drawImage(carotteVert, 596, 72, 27, 16);
            break;
    }
}

function dessinePierre(couleur){
    switch (couleur){
        case 'rouge':
            ctx.drawImage(pierreRouge, 572, 41, 19, 26 );
            ctx.drawImage(pierreRouge, 610, 41, 19, 26 );
            break;
        case 'orange':
            ctx.drawImage(pierreOrange, 572, 41, 19, 26 );
            ctx.drawImage(pierreOrange, 610, 41, 19, 26 );
            break;
        case 'gris':
            ctx.drawImage(pierreGris, 572, 41, 19, 26 );
            ctx.drawImage(pierreGris, 610, 41, 19, 26 );
            break;
        case 'violet':
            ctx.drawImage(pierreViolet, 572, 41, 19, 26 );
            ctx.drawImage(pierreViolet, 610, 41, 19, 26 );
            break;
        case 'bleu':
            ctx.drawImage(pierreBleu, 572, 41, 19, 26 );
            ctx.drawImage(pierreBleu, 610, 41, 19, 26 );
            break;
        case 'vert':
            ctx.drawImage(pierreVert, 572, 41, 19, 26 );
            ctx.drawImage(pierreVert, 610, 41, 19, 26 );
            break;
    }
}

function dessineBoutons(couleur){
    switch (couleur){
        case 'rouge':
            ctx.drawImage(boutonHautRouge, 592, 143, 18, 48);
            ctx.drawImage(boutonBasRouge, 592, 254, 18, 73);
            break;
        case 'gris':
            ctx.drawImage(boutonHautGris, 592, 143, 18, 48);
            ctx.drawImage(boutonBasGris, 592, 254, 18, 73);
            break;
        case 'orange':
            ctx.drawImage(boutonHautOrange, 592, 143, 18, 48);
            ctx.drawImage(boutonBasOrange, 592, 254, 18, 73);
            break;
        case 'violet':
            ctx.drawImage(boutonHautViolet, 592, 143, 18, 48);
            ctx.drawImage(boutonBasViolet, 592, 254, 18, 73);
            break;
        case 'bleu':
            ctx.drawImage(boutonHautBleu, 592, 143, 18, 48);
            ctx.drawImage(boutonBasBleu, 592, 254, 18, 73);
            break;
        case 'vert':
            ctx.drawImage(boutonHautVert, 592, 143, 18, 48);
            ctx.drawImage(boutonBasVert, 592, 254, 18, 73);
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

function dessineSourire(){
    if (testClic && obsSourire1.collision(posXsouris,posYsouris,1,1)){
        sourireAdessin = 'sourire1';
    } else if (testClic && obsSourire2.collision(posXsouris,posYsouris,1,1)){
        sourireAdessin = 'sourire2';
    } else if (testClic && obsSourire3.collision(posXsouris,posYsouris,1,1)){
        sourireAdessin = 'sourire3';
    }

    switch (sourireAdessin){
        case ('sourire1'):
            ctx.drawImage(sourire1,573, 93, 57, 9);
            break;
        case ('sourire2'):
            ctx.drawImage(sourire2,573, 93, 57, 9);
            break;
        case ('sourire3'):
            ctx.drawImage(sourire3,570, 88, 61, 18);
            break;
    }
}

function dessineBras(){
    if (testClic && obsBras1.collision(posXsouris, posYsouris, 1, 1)){
        brasAdessin = 'bras1';
    } else if (testClic && obsBras2.collision(posXsouris, posYsouris, 1, 1)){
        brasAdessin = 'bras2';
    }

    switch (brasAdessin){
        case 'bras1':
            ctx.drawImage(brasDroit1,671, 97, 82, 61);
            ctx.drawImage(brasGauche1, 447, 97, 82, 61);
            break;
        case 'bras2':
            ctx.drawImage(brasDroit2,671, 97, 82, 61);
            ctx.drawImage(brasGauche2, 447, 97, 82, 61);
            break;    
    }
}

function dessineBdn(){
    if (testClic && obsBdn.collision(posXsouris, posYsouris, 1, 1)){
        switch (dessinBdnCouleur){
            case 'bleu':
                dessinBdnCouleur = 'blanc';
                break;
            case 'blanc':
                dessinBdnCouleur = 'rose';
                break;
            case 'rose':
                dessinBdnCouleur = 'rouge';
                break;
            case 'rouge':
                dessinBdnCouleur = 'vert';
                break;
            case 'vert':
                dessinBdnCouleur = 'gris';
                break;
            case 'gris':
                dessinBdnCouleur = 'bleu';
                break;
        }
    }

    switch (dessinBdnCouleur){
        case 'bleu':
            ctx.drawImage(bdnBleu,500, 23, 203, 345);
            break;
        case 'blanc':
            ctx.drawImage(bdnBlanc,500, 23, 203, 345);
            break;
        case 'rose':
            ctx.drawImage(bdnRose,500, 23, 203, 345);
            break;
        case 'rouge':
            ctx.drawImage(bdnRouge,500, 23, 203, 345);
            break;
        case 'vert':
            ctx.drawImage(bdnVert,500, 23, 203, 345);
            break;
        case 'gris':
            ctx.drawImage(bdnGris,500, 23, 203, 345);
            break;
    }
}