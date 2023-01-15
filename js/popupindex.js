document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("lutinIndex").addEventListener("click", openPopUpPres)
    document.getElementById("FinPopIndex").addEventListener("click", closePopUpIndex);

    function openPopUpPres(){
        document.getElementById("lutinPopIndex").classList.add('visible')
        document.getElementById("fondIndex").classList.toggle('visible')
        document.getElementById("boxIndex").classList.toggle('visible')
        document.getElementById("lutin").classList.remove('anim')
        
    }

    function closePopUpIndex(){
        document.getElementById("fondIndex").classList.toggle('visible')
        document.getElementById("boxIndex").classList.toggle('visible')
        document.getElementById("lutinPopIndex").classList.remove('visible')
    }
    
})