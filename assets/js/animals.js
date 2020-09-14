$(document).ready(function(){

    // General Products

    var animalProduct = [
        
    ]

    // Appending

    animalProduct.forEach(animal => {
        $('.p-container').append(`
        <a href="${animal.link}">
            <div class="product">
                <div class="p-pic">
                    <img src="${animal.img}" alt="">
                </div>
                <div class="p-disc">
                    <p>${animal.product_name}</p>
                    <p class="price">${animal.price}</p>
                    <p class="seller"><i class="fa fa-user"></i> ${animal.seller}</p>
                    <p class="date"><i class="fa fa-calendar"></i> ${animal.date}</p>
                    <p><i class="fa fa-map-marker"></i> ${animal.location}</p>
                </div>
            </div>
        </a>
        `)
    })

    $('.total').append(`Animals Category: ${animalProduct.length}`);

})