window.addEventListener("load", function() {
    const sliderMain = document.querySelector(".slider-main");
    const nextBtn = document.querySelector(".icon-slider-right");
    const prevBtn = document.querySelector(".icon-slider-left");
    const sliderItems = document.querySelectorAll(".slider-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidesLength = sliderItems.length;
    console.log(slidesLength);
    let positionX = 0;
    let index = 1;
    nextBtn.addEventListener("click", function() {
        handleChangeSlide(1);
    });
    prevBtn.addEventListener("click", function() {
        handleChangeSlide(-1);
    });
    function handleChangeSlide(direction) {
        if(direction === 1) {
            index++;
            if(index>slidesLength) {
                index = slidesLength;
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            console.log(positionX);
            console.log("next slide");
        } else if (direction === -1) {
            index--;
            if(index<=0) {
                index=1;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            console.log(positionX);

            console.log("prev slide");
        }
    }
});


        const login = document.querySelector('.login-js')
        const buyBtn = document.querySelector('.login')
        const modal = document.querySelector('.js-modal')
        const modalClose = document.querySelector('.js-modal-close')
        const modalContainer = document.querySelector('.js-modal-container')
        // hàm hiển thị mua vé (thêm class open vào modal)
        function showBuyTickets() {
            modal.style = 'display: flex'
        }
        // hàm ẩn modal mua vé(gỡ bỏ class open của modal)
        function hideBuyTickets() {
            modal.style = 'display: none'
        }
        // lặp qua từng thẻ button và nghe hành vi click 
            buyBtn.addEventListener('click', showBuyTickets)
        // nghe hành vi click vào button close 
        modalClose.addEventListener('click',hideBuyTickets)
        modal.addEventListener('click',hideBuyTickets)
        login.addEventListener('click',hideBuyTickets)
        modalContainer.addEventListener('click', function(event) {
            event.stopPropagation()
        })