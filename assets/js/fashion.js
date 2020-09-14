$(document).ready(function(){

    // General Products

    var fashionProduct = [
        
    ]

    // Appending

    fashionProduct.forEach(fashion => {
        $('.p-container').append(`
        <a href="${fashion.link}">
            <div class="product">
                <div class="p-pic">
                    <img src="${fashion.img}" alt="">
                </div>
                <div class="p-disc">
                    <p>${fashion.product_name}</p>
                    <p class="price">${fashion.price}</p>
                    <p class="seller"><i class="fa fa-user"></i> ${fashion.seller}</p>
                    <p class="date"><i class="fa fa-calendar"></i> ${fashion.date}</p>
                    <p><i class="fa fa-map-marker"></i> ${fashion.location}</p>
                </div>
            </div>
        </a>
        `)
    })

    $('.total').append(`Fashion Category: ${fashionProduct.length}`);
})