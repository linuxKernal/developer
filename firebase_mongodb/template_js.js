const body = document.body

list = ['nature.jpg','BingWallpaper.jpg','winter.jpg']

let index = 0;

const bodyFunc = ()=>{
    if(index==3) index =0;
    body.style.opacity = "0.4";
    body.style.backgroundImage = `url("${list[index]}")`;
    body.style.opacity = "1.0";
    index++;
}

setInterval(bodyFunc,5000);