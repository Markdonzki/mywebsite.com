$(document).ready(function(){

    // General Products

    var gadgetsProduct = [
        
    ]

    // Appending

    gadgetsProduct.forEach(gadgets => {
        $('.p-container').append(`
        <a href="${gadgets.link}">
            <div class="product">
                <div class="p-pic">
                    <img src="${gadgets.img}" alt="">
                </div>
                <div class="p-disc">
                    <p>${gadgets.product_name}</p>
                    <p class="price">${gadgets.price}</p>
                    <p class="seller"><i class="fa fa-user"></i> ${gadgets.seller}</p>
                    <p class="date"><i class="fa fa-calendar"></i> ${gadgets.date}</p>
                    <p><i class="fa fa-map-marker"></i> ${gadgets.location}</p>
                </div>
            </div>
        </a>
        `)
    })

    $('.total').append(`Gadgets Category: ${gadgetsProduct.length}`);
})