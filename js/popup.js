document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("lutin").classList.add('anim')
    document.getElementById("lutin").addEventListener("click", openPopUp);
    document.getElementById("lutinIndex").addEventListener("click", openPopUpPres);

    function openPopUp(){
        document.getElementById("fond").classList.toggle('visible')
        document.getElementById("box").classList.toggle('visible')
        document.getElementById("lutin").classList.remove('anim')
    }

    function openPopUpPres(){
        document.getElementById("fond").classList.toggle('visible')
        document.getElementById("box").classList.toggle('visible')
        document.getElementById("lutin").classList.remove('anim')
    }

    document.getElementById("fin").addEventListener("click", closePopUp);
    function closePopUp(){
        document.getElementById("fond").classList.toggle('visible')
        document.getElementById("box").classList.toggle('visible')

        document.getElementById("first").classList.remove('invisible')
        document.getElementById("second").classList.remove('visible')
        document.getElementById("fin").classList.remove('visible')
        document.getElementById("next").classList.remove('invisible')

        document.getElementById("lutinPop2").classList.remove('visible')
        document.getElementById("lutinPop").classList.remove('invisible')
    }

    document.getElementById("PresentationFin").addEventListener("click", closePopUpPres);
    function closePopUpPres(){
        document.getElementById("fond").classList.toggle('visible')
        document.getElementById("box").classList.toggle('visible')

        document.getElementById("lutinPop").classList.remove('invisible')
    }

    document.getElementById("next").addEventListener("click", prochain);
    function prochain(){
        document.getElementById("first").classList.add('invisible')
        document.getElementById("second").classList.add('visible')
        document.getElementById("nextPerso").classList.add('visible')
        document.getElementById("next").classList.add('invisible')
        new Typed('#second',{
            strings : ["Crois moi, ce ne sera pas si facile ! Pour aujourd’hui, il faudra que tu retrouve les divers *insérer objets qu’on doit trouver (étoiles ? outils ?)* éparpillés dans le domaine. Une fois que tu les auras tous trouvés, reviens me voir ! "],
            typeSpeed: 50,
            delaySpeed: 250,
            cursorChar: '',
            loop: false
        })
    }

    document.getElementById("nextPerso").addEventListener("click", prochainPerso);
    function prochainPerso(){
        document.getElementById("second").classList.remove('visible')
        document.getElementById("first").classList.remove('invisible')
        document.getElementById("nextPerso").classList.add('visible')
        document.getElementById("lutinPop2").classList.add('visible')
        document.getElementById("lutinPop").classList.add('invisible')
        document.getElementById("nextPerso").classList.remove('visible')
        document.getElementById("next").classList.remove('invisible')

        
    }
})