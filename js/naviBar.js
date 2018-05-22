document.getElementById("clickMenu").addEventListener("click", openNav);
document.getElementById("closeMenu").addEventListener("click", closeNav);

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("navWrapid").classList.add('allNB-clck');
    document.getElementById("topSpan").classList.add('topNB-clck');
    document.getElementById("midSpan").classList.add('middNB-clck');
    document.getElementById("bottSpan").classList.add('bottNB-clck');
    document.getElementById("bara1").classList.add('ab1');
    document.getElementById("bara2").classList.add('ab2');
    document.getElementById("closeMenu").classList.add('closeCircle');
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("navWrapid").classList.remove('allNB-clck');
    document.getElementById("topSpan").classList.remove('topNB-clck');
    document.getElementById("midSpan").classList.remove('middNB-clck');
    document.getElementById("bottSpan").classList.remove('bottNB-clck');
    document.getElementById("bara1").classList.remove('ab1');
    document.getElementById("bara2").classList.remove('ab2');
    document.getElementById("closeMenu").classList.remove('closeCircle');    
}
