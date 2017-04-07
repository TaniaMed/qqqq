const img = document.getElementById('slider'); 
let step = 1;
setInterval(() => {
    switch(step) {
        case 1: 
            img.src = "img/airmax.png";
            break;
        case 2: 
            img.src = "img/airmax-jump.png";
            break;
        case 3: 
            img.src = "img/airmax-on-foot.png";
            break;
        case 4: 
            img.src = "img/airmax-playground.png";
            break;
        case 5: 
            img.src = "img/airmax-top-view.png";
            break;
    }
        
        step += 1;
        step %= 6;
      }, 5000);