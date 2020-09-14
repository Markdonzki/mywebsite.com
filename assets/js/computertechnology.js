$(document).ready(function(){

    // General Products

    var computertechnologyProduct = [
        {
            link: "../sellers/markjasonpespelita/1product.html",
            img: "../sellers/markjasonpespelita/1product/monsta-fashion-website-template.jpg",
            product_name: "Espelita Web Design",
            price: "Negotiable",
            category: "Computer/Technology",
            date: "September 8, 2020",
            location: "Brgy. Salvacion San Isidro Northern Samar"
        }
    ]

    // Appending

    computertechnologyProduct.forEach(computertechnology => {
        $('.p-container').append(`
        <a href="${computertechnology.link}">
            <div class="product">
                <div class="p-pic">
                    <img src="${computertechnology.img}" alt="">
                </div>
                <div class="p-disc">
                    <p>${computertechnology.product_name}</p>
                    <p class="price">${computertechnology.price}</p>
                    <p class="category"><i class="fa fa-bars"></i> ${computertechnology.category}</p>
                    <p class="date"><i class="fa fa-calendar"></i> ${computertechnology.date}</p>
                    <p><i class="fa fa-map-marker"></i> ${computertechnology.location}</p>
                </div>
            </div>
        </a>
        `)
    })

    $('.total').append(`Computer/Technology Category: ${computertechnologyProduct.length}`);
})