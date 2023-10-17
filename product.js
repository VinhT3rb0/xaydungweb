var valueProduct = parseFloat(document.getElementById('value-product').value);
        if(valueProduct===null) {
            valueProduct=1;
            localStorage.setItem('value', JSON.stringify(valueProduct))
        }
        function downPrt() {
            valueProduct = parseFloat(document.getElementById('value-product').value);
            valueProduct -=1;
            if(valueProduct<=0)
                valueProduct=1;
            document.getElementById('value-product').value= valueProduct;
            localStorage.setItem('value', JSON.stringify(valueProduct))
        }
        function upPrt() {
            valueProduct = parseFloat(document.getElementById('value-product').value);
            valueProduct +=1;
            document.getElementById('value-product').value= valueProduct;
            localStorage.setItem('value', JSON.stringify(valueProduct))
        }


        // mở đăng nhập
        const showLogin = document.querySelector('.show-login')
        const modal = document.querySelector('.js-modal')
        const modalClose = document.querySelector('.js-modal-close')
        const modalLoginOut = document.querySelector('.buy-ticket-js')
        function showLogins() {
            modal.style = 'display: flex'
        }
        function hideLogins() {
            modal.style = 'display: none'
        }
        showLogin.addEventListener('click',showLogins)
        modalClose.addEventListener('click',hideLogins)
        modalLoginOut.addEventListener('click',hideLogins)
        modal.addEventListener('click',hideLogins)


        // mở giỏ hàng
        const add = document.querySelector('.btn-buy-product')
        const showCart = document.querySelector('.show-cart')
        const cart = document.querySelector('.cart')
        const cartClose = document.querySelector('.icon-close')
        const cartContainer = document.querySelector('.cart-container')
        // hàm hiển thị mua vé (thêm class open vào modal)
        function showBuyTickets() {
            cart.style = 'display: flex'
        }
        function hideBuyTickets() {
            cart.style = 'display: none'
        }
            add.addEventListener('click', showBuyTickets)
            showCart.addEventListener('click', showBuyTickets)
        cartClose.addEventListener('click',hideBuyTickets)
        cartContainer.addEventListener('click', function(event) {
            event.stopPropagation()
        })

        // giỏ hàng
        const buyBtn = document.querySelector('.btn-buy-product')
        buyBtn.addEventListener('click',function(event) {{
            var btnItem = event.target
            var product = btnItem.parentElement
            var productImg = product.querySelector("img").src;
            var productName = product.querySelector(".title-product").innerText
            var productPrice = product.querySelector(".price").innerText
            localStorage.setItem('name', JSON.stringify(productName))
            localStorage.setItem('img', JSON.stringify(productImg))
            localStorage.setItem('price', JSON.parse(productPrice))
            addcart(productImg,productName,productPrice)
        }})
        function addcart(productImg,productName,productPrice) {
            var addtr = document.createElement("tr")
            var cartItem = document.querySelectorAll("tbody tr")
            for(var i=0;i<cartItem.length;i++) {
                var productMain = document.querySelectorAll('.title-name')
                if(productMain[i].innerHTML === productName) {
                    alert("Sản phẩm đã có trong giỏ hàng")
                    return
                }
            }
             valueProduct = parseFloat(document.getElementById('value-product').value);
            var trcontent = '<tr><td style="display: flex; flex-direction: column;align-items: center; width: 100px;"><img class="cart-img" src="'+productImg+'" alt=""><span class="title-name">'+productName+'</span></td><td><p><span class="price-title">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 40px;" type="number" value="'+valueProduct+'" min="0"></td><td style="cursor: pointer;"><span class="cart-del">Xóa</span></td></tr>'
            addtr.innerHTML = trcontent
            var cartTable = document.querySelector("tbody")
            cartTable.append(addtr)
            cartTotal()
            deleteCart()
        }


        // xóa sản phẩm trong giỏ
        function deleteCart() {
            var cartItem =document.querySelectorAll("tbody tr")
            for(var i=0;i<cartItem.length;i++) {
                var productDelete = document.querySelectorAll('.cart-del')
                productDelete[i].addEventListener('click',function(event) {
                    var cartDelete = event.target
                    var cartItemR = cartDelete.parentElement.parentElement
                    cartItemR.remove()
                    cartTotal()
                })
            }
        }



        // tính tổng tiền
        function cartTotal() {
            var cartItem = document.querySelectorAll("tbody tr")
            var totalB = 0
            for(var i=0;i<cartItem.length;i++) {
                var inputValue = cartItem[i].querySelector("input").value
                var productPrice = cartItem[i].querySelector(".price-title").innerHTML
                var totalPrice = inputValue * productPrice*1000
                totalB += totalPrice
            }
            var totalBill = document.querySelector('.price-total span')
            totalBill.innerHTML = totalB.toLocaleString('de-DE')
            inputChange()
        }

function inputChange() {
    var cartItem =document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++) {
        var inputValue = cartItem[i].querySelector('input')
        inputValue.addEventListener("change", function() {
            cartTotal()
        })
    }
}
const productInfo = {
    
}

console.log(productInfo.img);
console.log(productInfo.count);

