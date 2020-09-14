$(document).ready(function(){

    // homepage

    var homepageCategory = [
        {
            link: "index.html",
            list: "All Products"
        },
        {
            link: "categories/health.html",
            list: "Health"
        },
        {
            link: "categories/animals.html",
            list: "Animals"
        },
        {
            link: "categories/children.html",
            list: "Children"
        },
        {
            link: "categories/computertechnology.html",
            list: "Computer/Technology"
        },
        {
            link: "categories/fashion.html",
            list: "Fashion"
        },
        {
            link: "categories/foodcooking.html",
            list: "Food/Cooking"
        },
        {
            link: "categories/gadgets.html",
            list: "Gadgets"
        },
        {
            link: "categories/homeappliances.html",
            list: "Home Appliances"
        },
        {
            link: "categories/jewelriesaccessories.html",
            list: "Jewelries/Accessories"
        },
        {
            link: "categories/plants.html",
            list: "Plants"
        },
        {
            link: "categories/realestate.html",
            list: "Real Estate"
        },
        {
            link: "categories/services.html",
            list: "Services"
        }
        
    ]

    homepageCategory.forEach(categ => {
        $('#homepage-categories ul').append(`
            <a href="${categ.link}"><li>${categ.list}</li></a>
        `)
    })

    // inner pages

    var innerCategory = [
        {
            link: "../index.html",
            list: "All Products"
        },
        {
            link: "health.html",
            list: "Health"
        },
        {
            link: "animals.html",
            list: "Animals"
        },
        {
            link: "children.html",
            list: "Children"
        },
        {
            link: "computertechnology.html",
            list: "Computer/Technology"
        },
        {
            link: "fashion.html",
            list: "Fashion"
        },
        {
            link: "foodcooking.html",
            list: "Food/Cooking"
        },
        {
            link: "gadgets.html",
            list: "Gadgets"
        },
        {
            link: "homeappliances.html",
            list: "Home Appliances"
        },
        {
            link: "jewelriesaccessories.html",
            list: "Jewelries/Accessories"
        },
        {
            link: "plants.html",
            list: "Plants"
        },
        {
            link: "realestate.html",
            list: "Real Estate"
        },
        {
            link: "services.html",
            list: "Services"
        }
        
    ]

    innerCategory.forEach(categ => {
        $('#inner-categories ul').append(`
            <a href="${categ.link}"><li>${categ.list}</li></a>
        `)
    })

})