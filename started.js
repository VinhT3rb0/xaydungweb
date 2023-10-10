window.addEventListener("load", function() {
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const nextBtn = document.querySelector(".icon-slider-right");
    const prevBtn = document.querySelector(".icon-slider-left");
    const sliderItems = document.querySelectorAll(".slider-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidesLength = sliderItems.length;
    let positionX = 0;
    let index = 0;
    nextBtn.addEventListener("click", function() {
        handleChangeSlide(1);
    });
    prevBtn.addEventListener("click", function() {
        handleChangeSlide(-1);
    });
    function handleChangeSlide(direction) {
        if(direction === 1) {
            index++;
            if(index>=slidesLength) {
                index = slidesLength;
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = 'transform: translateX(${positionX}px)';
            console.log(positionX);
            console.log("next slide");
        } else if (direction === -1) {
            index--;
            if(index<=0) {
                index=0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = "transform: translateX(1366px)";
            console.log(positionX);

            console.log("prev slide");
        }
    }
});