console.log('4');

var c 		= document.getElementById("canvas");
var ctx 	= c.getContext("2d");

canvas.style.cursor = 'default';

var x = 0;
var y = 0;
var stockX          = new Array();
var stockY          = new Array();
var stockDessin     = new Array();
var dessin = false;
let nouvellesSucreries = false;
let reussiteJeu = false;
let nomJeu = 'sable';

let niveau = 'presentation';
let nivErreur = '';
let erreurImgCouleur = new Image();
let erreurImgNombre = new Image();
erreurImgCouleur.src = repertoire+'/images/png/erreurCouleur.png';
erreurImgNombre.src = repertoire+'/images/png/erreurNombre.png';

let posXsouris = 0;
let posYsouris = 0;

//Variables pres :
let pres = 1;
let pres1 = new Image();
let pres2 = new Image();
pres1.src = repertoire+'/images/png/dialogue_pres_mini_jeu.png';
pres2.src = repertoire+'/images/png/dialogue_pres_canne.png';
let clicPres = false;
let obsPres1 = new Obstacle(390,280,110,30);
let obsPres2 = new Obstacle(210,230,110,30,'');

let pres_bonhomme = new Image();
pres_bonhomme.src = repertoire+'/images/png/pres_bonhomme.png';
let pres_etoile = new Image();
pres_etoile.src = repertoire+'/images/png/pres_etoile.png';
let pres_sapin = new Image();
pres_sapin.src = repertoire+'/images/png/pres_sapin.png';

//Image de l'envoi aux fourneaux et les variables d'envoi
let envoi = new Image();
envoi.src = repertoire+'/images/png/envoi.png';
let clicFin = false;
let clicParUserFin = false;
let obsFin = new Obstacle(700,0,100,400,'');

//Image de fin de jeu
let imageFin = new Image();
imageFin.src = repertoire+'/images/png/fin.png';

//Images de la souris
let souris = new Image();
souris.src=repertoire+'/images/png/souris.png';
let dimSouris = 'souris';

//Images de la sucrerie à dessiner
var dessous_sucrerie    = new Image();
dessous_sucrerie.src    = repertoire+'/images/png/Jeu4_Fichier-2.png';
var bord_sucrerie       = new Image();
bord_sucrerie.src       = repertoire+'/images/png/Jeu4_Fichier-3.png';

//Images des pots de confiture
let potJaune            = new Image();
potJaune.src            = repertoire+'/images/png/PotPeinture_Jaune.png';
let potVert             = new Image();
potVert.src             = repertoire+'/images/png/PotPeinture_Vert.png';
let potBleu             = new Image();
potBleu.src             = repertoire+'/images/png/PotPeinture_Bleu.png';
let potRouge            = new Image();
potRouge.src            = repertoire+'/images/png/PotPeinture_Rouge.png';

//Images des sucreries et leur pots
let sucrerieBleu                = new Image();
sucrerieBleu.src                = repertoire+'/images/png/Sucrerie_Bleu.png';
let sucrerieJaune               = new Image();
sucrerieJaune.src               = repertoire+'/images/png/Sucrerie_Jaune.png';
let sucrerieOrange              = new Image();
sucrerieOrange.src              = repertoire+'/images/png/Sucrerie_Orange.png';
let sucrerieRouge               = new Image();
sucrerieRouge.src               = repertoire+'/images/png/Sucrerie_Rouge.png';
let sucrerieVert                = new Image();
sucrerieVert.src                = repertoire+'/images/png/Sucrerie_Vert.png';
let sucrerieViolet              = new Image();
sucrerieViolet.src              = repertoire+'/images/png/Sucrerie_Violet.png';
let potSucrerieBleu                = new Image();
potSucrerieBleu.src                = repertoire+'/images/png/PotSucrerie_Bleu.png';
let potSucrerieJaune               = new Image();
potSucrerieJaune.src               = repertoire+'/images/png/PotSucrerie_Jaune.png';
let potSucrerieOrange              = new Image();
potSucrerieOrange.src              = repertoire+'/images/png/PotSucrerie_Orange.png';
let potSucrerieRouge               = new Image();
potSucrerieRouge.src               = repertoire+'/images/png/PotSucrerie_Rouge.png';
let potSucrerieVert                = new Image();
potSucrerieVert.src                = repertoire+'/images/png/PotSucrerie_Vert.png';
let potSucrerieViolet              = new Image();
potSucrerieViolet.src              = repertoire+'/images/png/PotSucrerie_Violet.png';
let potSucrerieEtoile              = new Image();
potSucrerieEtoile.src              = repertoire+'/images/png/sucreries_etoiles.png';
let potSucrerieFlocon              = new Image();
potSucrerieFlocon.src              = repertoire+'/images/png/sucreries_flocons.png';
let s1 = new Image();
let s2 = new Image();
let s3 = new Image();
let s4 = new Image();
let s5 = new Image();
let s6 = new Image();
let s7 = new Image();
let s8 = new Image();

let rouge   = '#E64748';
let vert    = '#248A36';
let bleu    = '#8BD0E0';
let jaune   = '#F9BB24';
let choixCouleur = '';
let choixSucrerie = '';
let choixCouleurSucrerie = false;
let affichagePots = true;
let affichageSucrerie = false;
let selectionSucrerie = false;
let tabSucrerie = [];
let tabSucrerieX = [];
let tabSucrerieY = [];

//obstacles pot
let obsPotBleu    = new Obstacle(500,0,100,100,'bleu');
let obsPotVert    = new Obstacle(500,100,100,100,'vert');
let obsPotJaune   = new Obstacle(500,200,100,100,'jaune');
let obsPotRouge   = new Obstacle(500,300,100,100,'rouge');
let choixPot      = false;

//obstacles sucreries
let obsSucrerieRouge    = new Obstacle(415,0,66,66,'sRouge');
let obsSucrerieJaune    = new Obstacle(415,66,66,66,'sJaune');
let obsSucrerieVert     = new Obstacle(415,2*66,66,66,'sVert');
let obsSucrerieBleu     = new Obstacle(415,3*66,66,66,'sBleu');
let obsSucrerieViolet   = new Obstacle(415,4*66,66,66,'sViolet');
let obsSucrerieOrange   = new Obstacle(415,5*66,66,66,'sOrange');
let obsPotSucrerieFlocon = new Obstacle(600,50,100,100,'sFlocon');
let obsPotSucrerieEtoile = new Obstacle(600,250,100,100,'sEtoile');

//Tableaux d'obstacles
let tabObsPots      = [obsPotJaune,obsPotVert,obsPotBleu,obsPotRouge];
let tabObsSucreries = [obsSucrerieBleu,obsSucrerieVert,obsSucrerieJaune,obsSucrerieRouge,obsSucrerieViolet,obsSucrerieOrange,obsPotSucrerieFlocon,obsPotSucrerieEtoile];

//------------------Ecoute de la position de la souris dans la page------------

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


//-------------------Ecoute pour le dessin à la souris-------------------------------------
canvas.addEventListener('mousedown', (e) => {
    dessin = true;
    choixPot = true;
    choixCouleurSucrerie = true;
    clicFin = true;
    clicPres = true;
    if (selectionSucrerie){
        switch (choixSucrerie){
            case 'sJaune': 
                s1.src = repertoire+'/images/png/Sucrerie_Jaune.png'
                if (posXsouris<400){
                    tabSucrerie.push(s1);
                    tabSucrerieX.push(posXsouris);
                    tabSucrerieY.push(posYsouris);
                }
                break
            case 'sVert': 
                s2.src = repertoire+'/images/png/Sucrerie_Vert.png'
                if (posXsouris<400){
                    tabSucrerie.push(s2);
                    tabSucrerieX.push(posXsouris);
                    tabSucrerieY.push(posYsouris);
                }
                break;
            case 'sBleu': 
                s3.src = repertoire+'/images/png/Sucrerie_Bleu.png'
                if (posXsouris<400){
                    tabSucrerie.push(s3);
                    tabSucrerieX.push(posXsouris);
                    tabSucrerieY.push(posYsouris);
                }
                break;
            case 'sRouge': 
                s4.src = repertoire+'/images/png/Sucrerie_Rouge.png'
                if (posXsouris<400){
                    tabSucrerie.push(s4);
                    tabSucrerieX.push(posXsouris);
                    tabSucrerieY.push(posYsouris);
                }
                break;
            case 'sOrange': 
                s5.src = repertoire+'/images/png/Sucrerie_Orange.png'
                if (posXsouris<400){
                    tabSucrerie.push(s5);
                    tabSucrerieX.push(posXsouris);
                    tabSucrerieY.push(posYsouris);
                }
                break;
            case 'sViolet': 
                s6.src = repertoire+'/images/png/Sucrerie_Violet.png'
                if (posXsouris<400){
                    tabSucrerie.push(s6);
                    tabSucrerieX.push(posXsouris);
                    tabSucrerieY.push(posYsouris);
                }
                break;
            case 'sEtoile': 
                if (nouvellesSucreries){
                    s7.src = repertoire+'/images/png/sucreries_etoile.png'
                    if (posXsouris<400){
                        tabSucrerie.push(s7);
                        tabSucrerieX.push(posXsouris);
                        tabSucrerieY.push(posYsouris);
                    }
                }
                break;
            case 'sFlocon': 
                if (nouvellesSucreries){
                    s8.src = repertoire+'/images/png/sucreries_flocon.png'
                    if (posXsouris<400){
                        tabSucrerie.push(s8);
                        tabSucrerieX.push(posXsouris);
                        tabSucrerieY.push(posYsouris);
                    }
                }
                break;
        }
    }
});

canvas.addEventListener('mouseup', (e) => {
    dessin = false;
    choixPot = false;
    choixCouleurSucrerie = false;
    clicFin = false;
    clicPres = false;
});

canvas.addEventListener('mouseout', (e) => {
    dessin = false;
});

canvas.addEventListener('mousemove', (e) => {
    if (!affichagePots && !selectionSucrerie){
        stockX.push(e.offsetX);
        stockY.push(e.offsetY);
        stockDessin.push(dessin);
    }
});

//-------------------Ecoute pour le dessin au doigt-----------------------------

canvas.addEventListener('touchstart', (e) => {
    dessin = true;
    choixPot = true;
    choixCouleurSucrerie = true;
    clicFin = true;
    clicPres = true;
    if (selectionSucrerie){
        switch (choixSucrerie){
            case 'sJaune': 
                s1.src = repertoire+'/images/png/Sucrerie_Jaune.png'
                if (posXsouris<400){
                    tabSucrerie.push(s1);
                    tabSucrerieX.push(posXsouris);
                    tabSucrerieY.push(posYsouris);
                }
                break
            case 'sVert': 
                s2.src = repertoire+'/images/png/Sucrerie_Vert.png'
                if (posXsouris<400){
                    tabSucrerie.push(s2);
                    tabSucrerieX.push(posXsouris);
                    tabSucrerieY.push(posYsouris);
                }
                break;
            case 'sBleu': 
                s3.src = repertoire+'/images/png/Sucrerie_Bleu.png'
                if (posXsouris<400){
                    tabSucrerie.push(s3);
                    tabSucrerieX.push(posXsouris);
                    tabSucrerieY.push(posYsouris);
                }
                break;
            case 'sRouge': 
                s4.src = repertoire+'/images/png/Sucrerie_Rouge.png'
                if (posXsouris<400){
                    tabSucrerie.push(s4);
                    tabSucrerieX.push(posXsouris);
                    tabSucrerieY.push(posYsouris);
                }
                break;
            case 'sOrange': 
                s5.src = repertoire+'/images/png/Sucrerie_Orange.png'
                if (posXsouris<400){
                    tabSucrerie.push(s5);
                    tabSucrerieX.push(posXsouris);
                    tabSucrerieY.push(posYsouris);
                }
                break;
            case 'sViolet': 
                s6.src = repertoire+'/images/png/Sucrerie_Violet.png'
                if (posXsouris<400){
                    tabSucrerie.push(s6);
                    tabSucrerieX.push(posXsouris);
                    tabSucrerieY.push(posYsouris);
                }
                break;
            case 'sEtoile': 
                if (nouvellesSucreries){
                    s7.src = repertoire+'/images/png/sucreries_etoile.png'
                    if (posXsouris<400){
                        tabSucrerie.push(s7);
                        tabSucrerieX.push(posXsouris);
                        tabSucrerieY.push(posYsouris);
                    }
                }
                break;
            case 'sFlocon': 
                if (nouvellesSucreries){
                    s8.src = repertoire+'/images/png/sucreries_flocon.png'
                    if (posXsouris<400){
                        tabSucrerie.push(s8);
                        tabSucrerieX.push(posXsouris);
                        tabSucrerieY.push(posYsouris);
                    }
                }
                break;
        }
    }
});

canvas.addEventListener('touchend', (e) => {
    dessin = false;
    choixPot = false;
    choixCouleurSucrerie = false;
    clicFin = false;
    clicPres = false;
});

canvas.addEventListener('touchleave', (e) => {
    dessin = false;
});

canvas.addEventListener('touchmove', (e) => {
    if (!affichagePots && !selectionSucrerie){
        stockX.push(e.offsetX);
        stockY.push(e.offsetY);
        stockDessin.push(dessin);
    }
});



//------------------------------affichage de la page----------------------------
window.onload = function() {
    setInterval(boucle,10);
};

function boucle(){

    switch (niveau){
        case 'presentation':
            presentation();
            break;
        case 'canne':
            affichage();

            if (tabSucrerie.length>=7){
                ctx.drawImage(envoi, 700,0,100,400);
                if (obsFin.collision(posXsouris,posYsouris,1,1) && clicFin){
                    clicParUserFin = true;
                }
            }

            if (choixCouleur == 'rouge' && tabSucrerie.length==7 && clicParUserFin){
                niveau = 'pre_bonhomme';
                souris.src=repertoire+'/images/png/souris.png';
            } else if (choixCouleur != 'rouge' && tabSucrerie.length==7 && clicParUserFin){
                niveau = 'erreur';
                nivErreur = 'canne';
                typeErreur = 'couleur';
                souris.src=repertoire+'/images/png/souris.png';
            } else if (tabSucrerie.length>=7 && clicParUserFin){
                niveau = 'erreur';
                nivErreur = 'canne';
                typeErreur = 'nombre';
                souris.src=repertoire+'/images/png/souris.png';
            }
            break;
        case 'pre_bonhomme':
            resetVariable();
            pre_bonhomme();
            break;
        case 'bonhomme':
            bord_sucrerie.src       = repertoire+'/images/png/Jeu4_bonhomme_sur.png';
            dessous_sucrerie.src    = repertoire+'/images/png/Jeu4_bonhomme_sous.png';
            affichage();

            if (tabSucrerie.length>=6){
                ctx.drawImage(envoi, 700,0,100,400);
                if (obsFin.collision(posXsouris,posYsouris,1,1) && clicFin){
                    clicParUserFin = true;
                }
            }

            if (choixCouleur == 'jaune' && tabSucrerie.length==6 && clicParUserFin){
                niveau = 'pre_etoile';
                souris.src=repertoire+'/images/png/souris.png';
            } else if (choixCouleur != 'jaune' && tabSucrerie.length==6 && clicParUserFin){
                niveau = 'erreur';
                nivErreur = 'bonhomme';
                typeErreur = 'couleur';
                souris.src=repertoire+'/images/png/souris.png';
            } else if (tabSucrerie.length>=6 && clicParUserFin){
                niveau = 'erreur';
                nivErreur = 'bonhomme';
                typeErreur = 'nombre';
                souris.src=repertoire+'/images/png/souris.png';
            }

            break;
        case 'pre_etoile':
            resetVariable();
            pre_etoile();
            break;
        case 'etoile':
            bord_sucrerie.src       = repertoire+'/images/png/Jeu4_etoile_sur.png';
            dessous_sucrerie.src    = repertoire+'/images/png/Jeu4_etoile_sous.png';
            affichage();

            if (tabSucrerie.length>=6){
                ctx.drawImage(envoi, 700,0,100,400);
                if (obsFin.collision(posXsouris,posYsouris,1,1) && clicFin){
                    clicParUserFin = true;
                }
            }

            if (choixCouleur == 'bleu' && tabSucrerie.length==6 && clicParUserFin){
                niveau = 'pre_sapin';
                souris.src=repertoire+'/images/png/souris.png';
            } else if (choixCouleur != 'bleu' && tabSucrerie.length==6 && clicParUserFin){
                niveau = 'erreur';
                nivErreur = 'etoile';
                typeErreur = 'couleur';
                souris.src=repertoire+'/images/png/souris.png';
            } else if (tabSucrerie.length>=6 && clicParUserFin){
                niveau = 'erreur';
                nivErreur = 'etoile';
                typeErreur = 'nombre';
                souris.src=repertoire+'/images/png/souris.png';
            }

            break;
        case 'pre_sapin':
            resetVariable();
            pre_sapin();
            break;
        case 'sapin':
            bord_sucrerie.src       = repertoire+'/images/png/Jeu4_sapin_sur.png';
            dessous_sucrerie.src    = repertoire+'/images/png/Jeu4_sapin_sous.png';
            affichage();

            if (tabSucrerie.length>=11){
                ctx.drawImage(envoi, 700,0,100,400);
                if (obsFin.collision(posXsouris,posYsouris,1,1) && clicFin){
                    clicParUserFin = true;
                }
            }

            if (choixCouleur == 'vert' && tabSucrerie.length==11 && clicParUserFin){
                niveau = 'fin';
                souris.src=repertoire+'/images/png/souris.png';
            } else if (choixCouleur != 'vert' && tabSucrerie.length==11 && clicParUserFin){
                niveau = 'erreur';
                nivErreur = 'sapin';
                typeErreur = 'couleur';
                souris.src=repertoire+'/images/png/souris.png';
            } else if (tabSucrerie.length>=11 && clicParUserFin){
                niveau = 'erreur';
                nivErreur = 'sapin';
                typeErreur = 'nombre';
                souris.src=repertoire+'/images/png/souris.png';
            }

            break;
        case 'fin':
            fin();
            break;
        case 'erreur':
            resetVariable();
            erreur();
    }

    switch (dimSouris){
        case 'souris':
            ctx.drawImage(souris, posXsouris, posYsouris, 25,25);
            break;
        case 'pot':
            ctx.drawImage(souris, posXsouris, posYsouris-50, 50,50);
            break;
        case 'sucrerie':
            ctx.drawImage(souris, posXsouris-10, posYsouris-10, 20,20);
            break;
    }

}

function affichage(){
    
    ctx.drawImage(dessous_sucrerie,0,0,400,400);

    dessin_main();

    ctx.rect(400,0,400,400);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.drawImage(potBleu,500,0,100,100);
    ctx.drawImage(potVert,500,100,100,100);
    ctx.drawImage(potJaune,500,200,100,100);
    ctx.drawImage(potRouge,500,300,100,100);

    if (affichagePots){
        
        tabObsPots.forEach(function(pot){
            if (pot.collision(posXsouris,posYsouris,1,1)&&choixPot){
                choixCouleur = pot.couleur;
                affichagePots = false;
                affichageSucrerie = true;
                dimSouris = 'pot';
            }
        })
    } else {
        ctx.fillStyle = 'black';
        ctx.globalAlpha = 0.5;
        ctx.fillRect(500,0,100,400);
        ctx.globalAlpha = 1;
    }

    if (choixCouleur=='rouge'){
        ctx.strokeStyle = rouge;
        souris.src=repertoire+'/images/png/pocheRouge.png';
    } else if (choixCouleur=='vert'){
        ctx.strokeStyle = vert;
        souris.src=repertoire+'/images/png/pocheVert.png';
    } else if (choixCouleur=='jaune'){
        ctx.strokeStyle = jaune;
        souris.src=repertoire+'/images/png/pocheJaune.png';
    } else if (choixCouleur=='bleu'){
        ctx.strokeStyle = bleu;
        souris.src=repertoire+'/images/png/pocheBleu.png';
    }

    ctx.drawImage(bord_sucrerie,0,0,400,400);

    ctx.drawImage(potSucrerieRouge,415,0,66,66);
    ctx.drawImage(potSucrerieJaune,415,66,66,66);
    ctx.drawImage(potSucrerieVert,415,66*2,66,66);
    ctx.drawImage(potSucrerieBleu,415,66*3,66,66);
    ctx.drawImage(potSucrerieViolet,415,66*4,66,66);
    ctx.drawImage(potSucrerieOrange,415,66*5,66,66);

    if (affichageSucrerie){

        tabObsSucreries.forEach(function(sucrerie){
            if (sucrerie.collision(posXsouris,posYsouris,1,1) && choixCouleurSucrerie){
                choixSucrerie = sucrerie.couleur;
                dimSouris = 'sucrerie';
                selectionSucrerie = true;
            }

            
        })

        switch (choixSucrerie){
            case 'sJaune': 
                souris.src=repertoire+'/images/png/Sucrerie_Jaune.png';
                break
            case 'sVert': 
                souris.src=repertoire+'/images/png/Sucrerie_Vert.png';
                break;
            case 'sBleu': 
                souris.src=repertoire+'/images/png/Sucrerie_Bleu.png';
                break;
            case 'sRouge': 
                souris.src=repertoire+'/images/png/Sucrerie_Rouge.png';
                break;
            case 'sOrange': 
                souris.src=repertoire+'/images/png/Sucrerie_Orange.png';
                break;
            case 'sViolet': 
                souris.src=repertoire+'/images/png/Sucrerie_Violet.png';
                break;
            case 'sFlocon':
                if (nouvellesSucreries)
                souris.src=repertoire+'/images/png/sucreries_flocon.png';
                break;
            case 'sEtoile':
                if (nouvellesSucreries)
                souris.src=repertoire+'/images/png/sucreries_etoile.png';
                break;
        }

        for (let i=0; i<tabSucrerie.length; i++){
            ctx.drawImage(tabSucrerie[i],tabSucrerieX[i]-10,tabSucrerieY[i]-10,20,20);
        }
    } else {
        ctx.fillStyle = 'black';
        ctx.globalAlpha = 0.5;
        ctx.fillRect(400,0,100,400);
        ctx.globalAlpha = 1;
    }

    if (nouvellesSucreries){
        ctx.drawImage(potSucrerieFlocon,600,50,100,100);
        ctx.drawImage(potSucrerieEtoile,600,250,100,100);

        if (!affichageSucrerie){
            ctx.fillStyle = 'black';
            ctx.globalAlpha = 0.5;
            ctx.fillRect(600,0,100,400);
            ctx.globalAlpha = 1;
        }
    }

}

function presentation(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,800,400);

    if (pres==1){
        ctx.drawImage(pres1,0,0,800,400);
        if (clicPres && obsPres1.collision(posXsouris, posYsouris, 1, 1)){
            pres += 1;
        }
    } else {
        ctx.drawImage(pres2,0,0,800,400);
        if (clicPres && obsPres2.collision(posXsouris, posYsouris, 1, 1)){
            niveau = 'canne';
        }
    }
}

function pre_bonhomme(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,800,400);
    nouvellesSucreries = true;

    ctx.drawImage(pres_bonhomme,0,0,800,400);
    if (clicPres && obsPres2.collision(posXsouris, posYsouris, 1, 1)){
        niveau = 'bonhomme';
    }
}

function resetVariable(){
    tabSucrerie = [];
    tabSucrerieX = [];
    tabSucrerieY = [];
    stockDessin = [];
    stockX = [];
    stockY = [];
    affichagePots = true;
    affichageSucrerie = false;
    clicParUserFin = false;
    choixCouleur = '';
    choixSucrerie = '';
    selectionSucrerie = false;
}

function pre_etoile(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,800,400);

    ctx.drawImage(pres_etoile,0,0,800,400);
    if (clicPres && obsPres2.collision(posXsouris, posYsouris, 1, 1)){
        niveau = 'etoile';
    }
}

function pre_sapin(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,800,400);

    ctx.drawImage(pres_sapin,0,0,800,400);
    if (clicPres && obsPres2.collision(posXsouris, posYsouris, 1, 1)){
        niveau = 'sapin';
    }
}

function dessin_main    (){
    for (i=0; i<stockX.length; i++){
        ctx.lineWidth = 20;
        ctx.lineJoin = "round";
        ctx.beginPath();
        if (stockDessin[i]){
            ctx.moveTo(stockX[i-1], stockY[i-1]);
            ctx.lineTo(stockX[i], stockY[i]);
        }
        ctx.closePath();

        ctx.stroke();
    }
}

function fin(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,800,400);

    ctx.drawImage(imageFin,0,0,800,400);

    let form = document.getElementById('formReussite');
    form.style.display = 'block';
}

function erreur(){
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,800,400);

    if (typeErreur=='nombre'){
        ctx.drawImage(erreurImgNombre,0,0,800,400);
    } else if (typeErreur=='couleur'){
        ctx.drawImage(erreurImgCouleur,0,0,800,400);
    }

    if (clicPres && obsPres1.collision(posXsouris, posYsouris, 1, 1)){
        niveau = nivErreur;
    }
}