let icon = document.querySelector("#icon");
let list = document.querySelector("#list");

icon.addEventListener('click', () => {
    list.style.display = 'block';
    window.onscroll = function () { headerList() };
    function headerList() {
        if (document.body.scrollTop > 10 ) {
            list.style.display = "none";
        }
        else {
            list.style.display = "block";
        }
        window.onclick = function () { 
            list.style.display = "none";
        };
    }
});
icon.addEventListener('click', () => {
        list.classList.toggle('show-item');
});
const fragrancesProduct = document.getElementById("fragrances-product");

fetch('https://dummyjson.com/products/category/home-decoration')
    .then((res) => res.json())
    .then((products) => {
        console.log(products.products);
        products.products.forEach((pro) => {
            for (var i = 0; i <= products.products.length; i++) {
                fragrancesProduct.innerHTML +=
                    `<div id="fragrances-product" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                        <img src=${products.products[i].thumbnail} alt="product-${products.products[i].title}">
                        <h1>${products.products[i].title}</h1>
                        <h2>${products.products[i].brand}</h2>
                        <h2>${products.products[i].price}</h2>
                        <div class="link">
                            <a href="href="../Product info/index.html">more >></a>
                        </div>
                    </div> `;
            }
        });
    });