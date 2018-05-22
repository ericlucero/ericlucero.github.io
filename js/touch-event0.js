window.addEventListener('load', function(){
 
    var dimPara = document.getElementById('dimensions');
 
    dimPara.addEventListener('touchstart', function(e){
        dimPara.style.backgroundColor = 'rgba(17, 212, 150, 0.1)';
        e.preventDefault()
    }, false)
 
    dimPara.addEventListener('touchmove', function(e){
        dimPara.style.backgroundColor = 'blue';
        e.preventDefault()
    }, false)
 
    dimPara.addEventListener('touchend', function(e){
        dimPara.style.backgroundColor = 'rgba(17, 212, 150, 0.9)';
        e.preventDefault()
    }, false)
 
}, false)