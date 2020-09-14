$(document).ready(function(){

    // General Products

    var servicesProduct = [
        
    ]

    // Appending

    servicesProduct.forEach(services => {
        $('.p-container').append(`
        <a href="${services.link}">
            <div class="product">
                <div class="p-pic">
                    <img src="${services.img}" alt="">
                </div>
                <div class="p-disc">
                    <p>${services.product_name}</p>
                    <p class="price">${services.price}</p>
                    <p class="seller"><i class="fa fa-user"></i> ${services.seller}</p>
                    <p class="date"><i class="fa fa-calendar"></i> ${services.date}</p>
                    <p><i class="fa fa-map-marker"></i> ${services.location}</p>
                </div>
            </div>
        </a>
        `)
    })

    $('.total').append(`Services Category: ${servicesProduct.length}`);
})