$(document).ready(function(){

    // General Products

    var homeappliancesProduct = [
        
    ]

    // Appending

    homeappliancesProduct.forEach(homeappliances => {
        $('.p-container').append(`
        <a href="${homeappliances.link}">
            <div class="product">
                <div class="p-pic">
                    <img src="${homeappliances.img}" alt="">
                </div>
                <div class="p-disc">
                    <p>${homeappliances.product_name}</p>
                    <p class="price">${homeappliances.price}</p>
                    <p class="seller"><i class="fa fa-user"></i> ${homeappliances.seller}</p>
                    <p class="date"><i class="fa fa-calendar"></i> ${homeappliances.date}</p>
                    <p><i class="fa fa-map-marker"></i> ${homeappliances.location}</p>
                </div>
            </div>
        </a>
        `)
    })

    $('.total').append(`Home Appliances Category: ${homeappliancesProduct.length}`);
})