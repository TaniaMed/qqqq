const img = document.getElementById('slider'); 
let step = 1;
setInterval(() => {
    switch(step) {
        case 1: 
            img.src = "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png";
            break;
        case 2: 
            img.src = "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png";
            break;
        case 3: 
            img.src = "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png";
            break;
        case 4: 
            img.src = "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png";
            break;
        case 5: 
            img.src = "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png";
            break;
    }        
        step += 1;
        step %= 6;
}, 5000);
