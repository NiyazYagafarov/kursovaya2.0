class Header{
    handlerOpenShoppingPage(){
        shoppingPage.render();
    }
    render(count){
        const html = `
        <div class="buttons">
            <div class="insta_button">
             <a href="https://www.instagram.com/chotkie_nosochki.kzn/" target="_blank"><img src="img/insta.png"></a>
            </div>
            <div class="vk_button">
                <a href="https://vk.com/niyazz10" target="_blank"><img src="img/vk.png"></a>
            </div>
            <div class="facebook_button">
                <a href="https://www.facebook.com/yazzik10/" target="_blank"><img src="img/facebook.png"></a>
            </div>
        </div>  
        <div class="header-container">
            <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();"><h1>🛒Товаров в корзине: ${count}</h1></div>    
        </div>
        `;
        ROOT_HEADER.innerHTML = html;
    }
}
const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);