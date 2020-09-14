$(document).ready(function(){

    // General Products

    var jewelriesaccessoriesProduct = [
        
    ]

    // Appending

    jewelriesaccessoriesProduct.forEach(jewelriesaccessories => {
        $('.p-container').append(`
        <a href="${jewelriesaccessories.link}">
            <div class="product">
                <div class="p-pic">
                    <img src="${jewelriesaccessories.img}" alt="">
                </div>
                <div class="p-disc">
                    <p>${jewelriesaccessories.product_name}</p>
                    <p class="price">${jewelriesaccessories.price}</p>
                    <p class="seller"><i class="fa fa-user"></i> ${jewelriesaccessories.seller}</p>
                    <p class="date"><i class="fa fa-calendar"></i> ${jewelriesaccessories.date}</p>
                    <p><i class="fa fa-map-marker"></i> ${jewelriesaccessories.location}</p>
                </div>
            </div>
        </a>
        `)
    })

    $('.total').append(`Jewelries/Accessories Category: ${jewelriesaccessoriesProduct.length}`);
})