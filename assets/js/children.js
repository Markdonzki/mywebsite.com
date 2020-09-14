$(document).ready(function(){

    // General Products

    var childrenProduct = [
        
    ]

    // Appending

    childrenProduct.forEach(children => {
        $('.p-container').append(`
        <a href="${children.link}">
            <div class="product">
                <div class="p-pic">
                    <img src="${children.img}" alt="">
                </div>
                <div class="p-disc">
                    <p>${children.product_name}</p>
                    <p class="price">${children.price}</p>
                    <p class="seller"><i class="fa fa-user"></i> ${children.seller}</p>
                    <p class="date"><i class="fa fa-calendar"></i> ${children.date}</p>
                    <p><i class="fa fa-map-marker"></i> ${children.location}</p>
                </div>
            </div>
        </a>
        `)
    })

    $('.total').append(`Children Category: ${childrenProduct.length}`);
})