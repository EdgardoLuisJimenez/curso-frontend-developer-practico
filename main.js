const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerMenu = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.menu-mobile')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')


    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }


    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')


    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside(product) {
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive');

    renderProductDetail(product);
    const productDetailCloseIcon = document.querySelector('.product-detail-close')
    productDetailCloseIcon.addEventListener('click', closeProductDetailAside)
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

const productList = []
productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'

});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'

});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'

});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
}); 

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img')
        productImg.productDetails = product;
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', () => {
            openProductDetailAside(productImg.productDetails);
        })
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.append(productPrice, productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
    
        productInfoFigure.appendChild(productImgCart)
    
    
        productInfo.append(productInfoDiv, productInfoFigure)
    
        productCard.append(productImg, productInfo)
    
        cardsContainer.append(productCard)
    }
}

renderProducts(productList)

function renderProductDetail(product) {
        const productDetailClose = document.createElement('div')
        productDetailClose.classList.add('product-detail-close')
        
        const iconClose = document.createElement('img')
        iconClose.setAttribute('src', './icons/icon_close.png')
        
        const productImage = document.createElement('img')
        productImage.setAttribute('src', product.image)
        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        
        
        const points = document.createElement('div')
        points.classList.add('points')
        
        const liOne = document.createElement('li')
        liOne.classList.add('active')
        const liTwo = document.createElement('li')
        const liThree = document.createElement('li')
        
        const precio = document.createElement('p')
        precio.innerText = product.price
        
        const Nombre = document.createElement('p')
        Nombre.innerText = product.name
        
        const descripcion = document.createElement('p')
        descripcion.innerText = product.description
        
        const addToCartButton = document.createElement('button')
        addToCartButton.classList.add('primary-button')
        addToCartButton.classList.add('add-to-cart-button')
        
        const iconAddCart = document.createElement('img')
        iconAddCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        iconAddCart.setAttribute('alt', 'add to cart')
        iconAddCart.innerText = 'Add to cart'
        
        productDetailClose.replaceChildren(iconClose)
        productInfo.replaceChildren(points)
        points.replaceChildren(liOne, liTwo, liThree)

        addToCartButton.replaceChildren(iconAddCart)

        productDetailContainer.replaceChildren(productDetailClose, productImage, productInfo, precio, Nombre, descripcion, addToCartButton)
}