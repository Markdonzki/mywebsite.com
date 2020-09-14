$(document).ready(function(){

    // General Products

    var foodcookingProduct = [
        
    ]

    // Appending

    foodcookingProduct.forEach(foodcooking => {
        $('.p-container').append(`
        <a href="${foodcooking.link}">
            <div class="product">
                <div class="p-pic">
                    <img src="${foodcooking.img}" alt="">
                </div>
                <div class="p-disc">
                    <p>${foodcooking.product_name}</p>
                    <p class="price">${foodcooking.price}</p>
                    <p class="seller"><i class="fa fa-user"></i> ${foodcooking.seller}</p>
                    <p class="date"><i class="fa fa-calendar"></i> ${foodcooking.date}</p>
                    <p><i class="fa fa-map-marker"></i> ${foodcooking.location}</p>
                </div>
            </div>
        </a>
        `)
    })

    $('.total').append(`Food/Cooking Category: ${foodcookingProduct.length}`);
})