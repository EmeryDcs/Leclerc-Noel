console.log('10');

canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

let niveau = 'debut';
let testClic = false;
let testPointer = 0;

let imageIntro  = new Image();
let imageTuto   = new Image();
let imageWin    = new Image();
let imageJeu    = new Image();
imageIntro.src  = repertoire+'/images/png/jeu_bonnet/jeu_bonnetIntro.png';
imageTuto.src   = repertoire+'/images/png/jeu_bonnet/jeu_bonnetTuto.png';
imageWin.src    = repertoire+'/images/png/jeu_bonnet/jeu_bonnetWin.png';
imageJeu.src    = repertoire+'/images/png/jeu_bonnet/jeu_bonnetJeu.png';

let etoileVert      = new Image();
let etoileBleu      = new Image();
let etoileViolet    = new Image();
let etoileRose      = new Image();
let etoileRouge     = new Image();
let etoileJaune     = new Image();
let etoileCyan      = new Image();
let etoileOrange    = new Image();
etoileVert.src      = repertoire+'/images/png/jeu_bonnet/jeu_etoileVert.png';
etoileBleu.src      = repertoire+'/images/png/jeu_bonnet/jeu_etoileBleu.png';
etoileViolet.src    = repertoire+'/images/png/jeu_bonnet/jeu_etoileViolet.png';
etoileRose.src      = repertoire+'/images/png/jeu_bonnet/jeu_etoileRose.png';
etoileRouge.src     = repertoire+'/images/png/jeu_bonnet/jeu_etoileRouge.png';
etoileJaune.src     = repertoire+'/images/png/jeu_bonnet/jeu_etoileJaune.png';
etoileCyan.src      = repertoire+'/images/png/jeu_bonnet/jeu_etoileCyan.png';
etoileOrange.src    = repertoire+'/images/png/jeu_bonnet/jeu_etoileOrange.png';

let bonnetVert      = new Image();
let bonnetBleu      = new Image();
let bonnetViolet    = new Image();
let bonnetRose      = new Image();
let bonnetRouge     = new Image();
let bonnetJaune     = new Image();
let bonnetCyan      = new Image();
let bonnetOrange    = new Image();
bonnetVert.src      = repertoire+'/images/png/jeu_bonnet/jeu_bonnetVert.png';
bonnetBleu.src      = repertoire+'/images/png/jeu_bonnet/jeu_bonnetBleu.png';
bonnetViolet.src    = repertoire+'/images/png/jeu_bonnet/jeu_bonnetViolet.png';
bonnetRose.src      = repertoire+'/images/png/jeu_bonnet/jeu_bonnetRose.png';
bonnetRouge.src     = repertoire+'/images/png/jeu_bonnet/jeu_bonnetRouge.png';
bonnetJaune.src     = repertoire+'/images/png/jeu_bonnet/jeu_bonnetJaune.png';
bonnetCyan.src      = repertoire+'/images/png/jeu_bonnet/jeu_bonnetCyan.png';
bonnetOrange.src    = repertoire+'/images/png/jeu_bonnet/jeu_bonnetOrange.png';

let ponponVert      = new Image();
let ponponBleu      = new Image();
let ponponViolet    = new Image();
let ponponRouge     = new Image();
let ponponJaune     = new Image();
let ponponOrange    = new Image();
ponponVert.src      = repertoire+'/images/png/jeu_bonnet/jeu_ponponVert.png';
ponponBleu.src      = repertoire+'/images/png/jeu_bonnet/jeu_ponponBleu.png';
ponponViolet.src    = repertoire+'/images/png/jeu_bonnet/jeu_ponponViolet.png';
ponponRouge.src     = repertoire+'/images/png/jeu_bonnet/jeu_ponponRouge.png';
ponponJaune.src     = repertoire+'/images/png/jeu_bonnet/jeu_ponponJaune.png';
ponponOrange.src    = repertoire+'/images/png/jeu_bonnet/jeu_ponponOrange.png';

let moumouteVert      = new Image();
let moumouteBleu      = new Image();
let moumouteViolet    = new Image();
let moumouteRose      = new Image();
let moumouteRouge     = new Image();
let moumouteJaune     = new Image();
let moumouteCyan      = new Image();
let moumouteOrange    = new Image();
let moumouteVertpale  = new Image();
moumouteVert.src      = repertoire+'/images/png/jeu_bonnet/jeu_moumouteVert.png';
moumouteBleu.src      = repertoire+'/images/png/jeu_bonnet/jeu_moumouteBleu.png';
moumouteViolet.src    = repertoire+'/images/png/jeu_bonnet/jeu_moumouteViolet.png';
moumouteRose.src      = repertoire+'/images/png/jeu_bonnet/jeu_moumouteRose.png';
moumouteRouge.src     = repertoire+'/images/png/jeu_bonnet/jeu_moumouteRouge.png';
moumouteJaune.src     = repertoire+'/images/png/jeu_bonnet/jeu_moumouteJaune.png';
moumouteCyan.src      = repertoire+'/images/png/jeu_bonnet/jeu_moumouteCyan.png';
moumouteOrange.src    = repertoire+'/images/png/jeu_bonnet/jeu_moumouteOrange.png';
moumouteVertpale.src    = repertoire+'/images/png/jeu_bonnet/jeu_moumouteVertpale.png';

let obsEtoileVert       = new Obstacle(90,20,70,42,'vert');
let obsEtoileBleu       = new Obstacle(90+70*1,20,70,42,'bleu');
let obsEtoileViolet     = new Obstacle(90+70*2,20,70,42,'violet');
let obsEtoileRose       = new Obstacle(90+70*3,20,70,42,'rose');
let obsEtoileRouge      = new Obstacle(90+70*4,20,70,42,'rouge');
let obsEtoileJaune      = new Obstacle(90+70*5,20,70,42,'jaune');
let obsEtoileCyan       = new Obstacle(90+70*6,20,70,42,'cyan');
let obsEtoileOrange     = new Obstacle(90+70*7,20,70,42,'orange');

let obsPonponOrange     = new Obstacle(28, 25, 50, 60,'orange');
let obsPonponRouge      = new Obstacle(28, 25+60*1, 50, 60,'rouge');
let obsPonponJaune      = new Obstacle(28, 25+60*2, 50, 60,'jaune');
let obsPonponViolet     = new Obstacle(28, 25+60*3, 50, 60,'violet');
let obsPonponBleu       = new Obstacle(28, 25+60*4, 50, 60,'bleu');
let obsPonponCyan       = new Obstacle(28, 25+60*5, 50, 60,'cyan');

let obsBonnetRouge      = new Obstacle(100, 320, 75, 60,'rouge');
let obsBonnetJaune      = new Obstacle(100+75*1, 320, 75, 60,'jaune');
let obsBonnetOrange     = new Obstacle(100+75*2, 320, 75, 60,'orange');
let obsBonnetCyan       = new Obstacle(100+75*3, 320, 75, 60,'cyan');
let obsBonnetViolet     = new Obstacle(100+75*4, 320, 75, 60,'violet');
let obsBonnetRose       = new Obstacle(100+75*5, 320, 75, 60,'rose');
let obsBonnetBleu       = new Obstacle(100+75*6, 320, 75, 60,'bleu');
let obsBonnetVert       = new Obstacle(100+75*7, 320, 75, 60,'vert');

let obsMoumouteVert     = new Obstacle(720, 65, 70, 30,'vert');
let obsMoumouteRose     = new Obstacle(720, 65+30*1, 70, 30,'rose');
let obsMoumouteCyan     = new Obstacle(720, 65+30*2, 70, 30,'cyan');
let obsMoumouteRouge    = new Obstacle(720, 65+30*3, 70, 30,'rouge');
let obsMoumouteOrange   = new Obstacle(720, 65+30*4, 70, 30,'orange');
let obsMoumouteVertpale = new Obstacle(720, 65+30*5, 70, 30,'vertpale');
let obsMoumouteBleu     = new Obstacle(720, 65+30*6, 70, 30,'bleu');
let obsMoumouteViolet   = new Obstacle(720, 65+30*7, 70, 30,'violet');
let obsMoumouteJaune    = new Obstacle(720, 65+30*8, 70, 30,'jaune');

let obsWin              = new Obstacle(730,345, 47, 47);

let tabObsMoumoute  = [obsMoumouteVert,obsMoumouteRose,obsMoumouteCyan,obsMoumouteRouge,obsMoumouteOrange,obsMoumouteVertpale,obsMoumouteBleu,obsMoumouteViolet,obsMoumouteJaune];
let tabObsPonpon    = [obsPonponCyan,obsPonponRouge,obsPonponOrange,obsPonponBleu,obsPonponViolet,obsPonponJaune];
let tabObsBonnet    = [obsBonnetVert,obsBonnetRose,obsBonnetCyan,obsBonnetRouge,obsBonnetOrange,obsBonnetBleu,obsBonnetViolet,obsBonnetJaune];
let tabObsEtoiles   = [obsEtoileVert,obsEtoileRose,obsEtoileCyan,obsEtoileRouge,obsEtoileOrange,obsEtoileBleu,obsEtoileViolet,obsEtoileJaune];

let tabAllObstacle  = [obsMoumouteVert,obsMoumouteRose,obsMoumouteCyan,obsMoumouteRouge,obsMoumouteOrange,obsMoumouteVertpale,obsMoumouteBleu,obsMoumouteViolet,obsMoumouteJaune, obsPonponCyan,obsPonponRouge,obsPonponOrange,obsPonponBleu,obsPonponViolet,obsPonponJaune, obsBonnetVert,obsBonnetRose,obsBonnetCyan,obsBonnetRouge,obsBonnetOrange,obsBonnetBleu,obsBonnetViolet,obsBonnetJaune, obsEtoileVert,obsEtoileRose,obsEtoileCyan,obsEtoileRouge,obsEtoileOrange,obsEtoileBleu,obsEtoileViolet,obsEtoileJaune, obsWin];

let dessinBonnetCouleur     = '';
let dessinEtoileCouleur     = '';
let dessinMoumouteCouleur   = '';
let dessinPonponCouleur     = '';

let obsSuiteIntro = new Obstacle(245,275,110,30);
let obsSuiteTuto = new Obstacle(390,280,110,30);

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

    tabObsBonnet.forEach( (e) => {
        if (testClic && e.collision(posXsouris, posYsouris, 1, 1)){
            dessinBonnetCouleur = e.couleur;
        }
    });

    tabObsEtoiles.forEach( (e) => {
        if (testClic && e.collision(posXsouris, posYsouris, 1, 1)){
            dessinEtoileCouleur = e.couleur;
        }
    });

    tabObsPonpon.forEach( (e) => {
        if (testClic && e.collision(posXsouris, posYsouris, 1, 1)){
            dessinPonponCouleur = e.couleur;
        }
    });

    tabObsMoumoute.forEach( (e) => {
        if (testClic && e.collision(posXsouris, posYsouris, 1, 1)){
            dessinMoumouteCouleur = e.couleur;
        }
    });

    dessineBonnet(dessinBonnetCouleur);
    dessineMoumoute(dessinMoumouteCouleur);
    dessineEtoile(dessinEtoileCouleur);
    dessinePonpon(dessinPonponCouleur);

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

function dessineBonnet(couleur){
    switch (couleur){
        case 'rouge':
            ctx.drawImage(bonnetRouge,300,100,200,180);
            break;
        case 'orange':
            ctx.drawImage(bonnetOrange,300,100,200,180);
            break;
        case 'jaune':
            ctx.drawImage(bonnetJaune,300,100,200,180);
            break;
        case 'cyan':
            ctx.drawImage(bonnetCyan,300,100,200,180);
            break;
        case 'violet':
            ctx.drawImage(bonnetViolet,300,100,200,180);
            break;
        case 'rose':
            ctx.drawImage(bonnetRose,300,100,200,180);
            break;
        case 'bleu':
            ctx.drawImage(bonnetBleu,300,100,200,180);
            break;
        case 'vert':
            ctx.drawImage(bonnetVert,300,100,200,180);
            break;
    }
}

function dessineMoumoute(couleur){
    switch (couleur){
        case 'rouge':
            ctx.drawImage(moumouteRouge,370,235,140,46);
            break;
        case 'orange':
            ctx.drawImage(moumouteOrange,370,235,140,46);
            break;
        case 'jaune':
            ctx.drawImage(moumouteJaune,370,235,140,46);
            break;
        case 'cyan':
            ctx.drawImage(moumouteCyan,370,235,140,46);
            break;
        case 'violet':
            ctx.drawImage(moumouteViolet,370,235,140,46);
            break;
        case 'rose':
            ctx.drawImage(moumouteRose,370,235,140,46);
            break;
        case 'bleu':
            ctx.drawImage(moumouteBleu,370,235,140,46);
            break;
        case 'vert':
            ctx.drawImage(moumouteVert,370,235,140,46);
            break;
        case 'vertpale':
            ctx.drawImage(moumouteVertpale,370,235,140,46);
            break;
    }
}

function dessinePonpon(couleur){
    switch (couleur){
        case 'rouge':
            ctx.drawImage(ponponRouge, 276, 138, 45, 45);
            break;
        case 'orange':
            ctx.drawImage(ponponOrange, 276, 138, 45, 45);
            break;
        case 'jaune':
            ctx.drawImage(ponponJaune, 276, 138, 45, 45);
            break;
        case 'violet':
            ctx.drawImage(ponponViolet, 276, 138, 45, 45);
            break;
        case 'bleu':
            ctx.drawImage(ponponBleu, 276, 138, 45, 45);
            break;
        case 'vert':
            ctx.drawImage(ponponVert, 276, 138, 45, 45);
            break;
    }
}

function dessineEtoile(couleur){
    switch (couleur){
        case 'rouge':
            ctx.drawImage(etoileRouge,322, 108, 173, 122);
            break;
        case 'orange':
            ctx.drawImage(etoileOrange,322, 108, 173, 122);
            break;
        case 'jaune':
            ctx.drawImage(etoileJaune,322, 108, 173, 122);
            break;
        case 'cyan':
            ctx.drawImage(etoileCyan,322, 108, 173, 122);
            break;
        case 'violet':
            ctx.drawImage(etoileViolet,322, 108, 173, 122);
            break;
        case 'rose':
            ctx.drawImage(etoileRose,322, 108, 173, 122);
            break;
        case 'bleu':
            ctx.drawImage(etoileBleu,322, 108, 173, 122);
            break;
        case 'vert':
            ctx.drawImage(etoileVert,322, 108, 173, 122);
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