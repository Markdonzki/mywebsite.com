$(document).ready(function(){

    // General Products

    var plantsProduct = [
        
    ]

    // Appending

    plantsProduct.forEach(plants => {
        $('.p-container').append(`
        <a href="${plants.link}">
            <div class="product">
                <div class="p-pic">
                    <img src="${plants.img}" alt="">
                </div>
                <div class="p-disc">
                    <p>${plants.product_name}</p>
                    <p class="price">${plants.price}</p>
                    <p class="seller"><i class="fa fa-user"></i> ${plants.seller}</p>
                    <p class="date"><i class="fa fa-calendar"></i> ${plants.date}</p>
                    <p><i class="fa fa-map-marker"></i> ${plants.location}</p>
                </div>
            </div>
        </a>
        `)
    })

    $('.total').append(`Plants Category: ${plantsProduct.length}`);
})