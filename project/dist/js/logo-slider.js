SlidesWidth();

function SlidesWidth(){
    let slides = document.getElementsByClassName("logos__box");
    for (let slide of slides) {
        slide.style.width = "130px";
        slide.style.marginRight = "20px";
        offset = (parseInt(slide.dataset.index) - 1) * (parseInt(slide.style.width) + parseInt(slide.style.marginRight));
        slide.style.left = `${offset}` + "px";
}
}

function SlidesIndex(n){
    let slides = document.getElementsByClassName("logos__box");
    for (let slide of slides){
        slide.dataset.index = parseInt(slide.dataset.index) + n;
        if (slide.dataset.index > slides.length){
            slide.dataset.index = 1;
        } else if (slide.dataset.index <= 0){
            slide.dataset.index = slides.length;
        }
    }
    SlidesWidth();
}
