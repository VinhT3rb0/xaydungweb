var valueProduct = parseFloat(document.getElementById('value-product').value);
        if(valueProduct===null) {
            valueProduct=1;
        }
        function downPrt() {
        var valueProduct = parseFloat(document.getElementById('value-product').value);
            valueProduct -=1;
            if(valueProduct<=0)
                valueProduct=1;
            document.getElementById('value-product').value= valueProduct;
        }
        function upPrt() {
        var valueProduct = parseFloat(document.getElementById('value-product').value);
            valueProduct +=1;
            document.getElementById('value-product').value= valueProduct;

        }

        const buyBtn = document.querySelector('.btn-buy-product')
        const modal = document.querySelector('.js-modal')
        const modalClose = document.querySelector('.js-modal-close')
        const modalContainer = document.querySelector('.js-modal-container')
        // hàm hiển thị mua vé (thêm class open vào modal)
        function showBuyTickets() {
            modal.classList.add('open')
        }
        // hàm ẩn modal mua vé(gỡ bỏ class open của modal)
        function hideBuyTickets() {
            modal.classList.remove('open')
        }
        // lặp qua từng thẻ button và nghe hành vi click 
            buyBtn.addEventListener('click', showBuyTickets)
        // nghe hành vi click vào button close 
        modalClose.addEventListener('click',hideBuyTickets)
        modal.addEventListener('click',hideBuyTickets)
        modalContainer.addEventListener('click', function(event) {
            event.stopPropagation()
        })