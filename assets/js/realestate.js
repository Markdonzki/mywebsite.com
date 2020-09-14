$(document).ready(function(){

    // General Products

    var realestateProduct = [
        
    ]

    // Appending

    realestateProduct.forEach(realestate => {
        $('.p-container').append(`
        <a href="${realestate.link}">
            <div class="product">
                <div class="p-pic">
                    <img src="${realestate.img}" alt="">
                </div>
                <div class="p-disc">
                    <p>${realestate.product_name}</p>
                    <p class="price">${realestate.price}</p>
                    <p class="seller"><i class="fa fa-user"></i> ${realestate.seller}</p>
                    <p class="date"><i class="fa fa-calendar"></i> ${realestate.date}</p>
                    <p><i class="fa fa-map-marker"></i> ${realestate.location}</p>
                </div>
            </div>
        </a>
        `)
    })

    $('.total').append(`Real Estate Category: ${realestateProduct.length}`);
})