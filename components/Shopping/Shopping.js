class Shopping{
    handleClear(){
        ROOT_SHOPPING.innerHTML='';
    }
    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;
        CATALOG.forEach(({id,name,price,img}) =>{
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog +=`
                    <tr>
                        <td class="shopping-element__name">✔️ ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} ₽</td>
                    </tr>
                `;
                sumCatalog += price
            }
        });
        const html = `
            <div class="shopping-container">
                <h1>Ваш заказ:</h1>
                <div class="shopping_close" onclick="shoppingPage.handleClear()"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">⭕ Сумма</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} ₽</td>
                    </tr>
                </table>
                <button class="pay_button"><a href="sendform.html">Перейти к оплате</a></button>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();