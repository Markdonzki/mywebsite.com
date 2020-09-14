$(document).ready(function () {
  // General Products

  var Product = [
    // animals

    // children

    // computer technology

    {
      link: "sellers/markjasonpespelita/1product.html",
      img:
        "sellers/markjasonpespelita/1product/monsta-fashion-website-template.jpg",
      product_name: "Espelita Web Design",
      price: "Negotiable",
      category: "Computer/Technology",
      date: "September 8, 2020",
      location: "Brgy. Salvacion San Isidro Northern Samar",
    },

    // fashion

    // food cooking

    // gadgets

    // health

    {
      link: "sellers/cherrymjcapuno/p1.html",
      img: "sellers/cherrymjcapuno/img/p1.jpg",
      product_name: "Hygienix Hand Sanitizer",
      price: "Retail: 50php, Wholesale: 45php",
      category: "Health",
      date: "September 8, 2020",
      location: "Brgy. East Awang Calbayog City",
    },
    {
      link: "sellers/cherrymjcapuno/p2.html",
      img: "sellers/cherrymjcapuno/img/p2.jpg",
      product_name: "Isopropyl Alcohol",
      price: "Retail: 58php, Wholesale: 55php",
      category: "Health",
      date: "September 8, 2020",
      location: "Brgy. East Awang Calbayog City",
    },
    {
      link: "sellers/cherrymjcapuno/p3.html",
      img: "sellers/cherrymjcapuno/img/p3.jpg",
      product_name: "Green Cross Gentle Protect",
      price: "Retail: 72php, Wholesale: 67php",
      category: "Health",
      date: "September 8, 2020",
      location: "Brgy. East Awang Calbayog City",
    },
    {
      link: "sellers/cherrymjcapuno/p4.html",
      img: "sellers/cherrymjcapuno/img/p4.jpg",
      product_name: "Casino Ethyl Alcohol",
      price: "Retail: 72php, Wholesale: 68php",
      category: "Health",
      date: "September 8, 2020",
      location: "Brgy. East Awang Calbayog City",
    },
    {
      link: "sellers/cherrymjcapuno/p6.html",
      img: "sellers/cherrymjcapuno/img/p6.jpg",
      product_name: "Hygienyx Alcohol",
      price: "Retail: 53php, Wholesale: 48php",
      category: "Health",
      date: "September 8, 2020",
      location: "Brgy. East Awang Calbayog City",
    },
    {
      link: "sellers/cherrymjcapuno/p7.html",
      img: "sellers/cherrymjcapuno/img/p7.jpg",
      product_name: "Band-Aid Isopropyl Alcohol",
      price: "Retail: 60php, Wholesale: 57php",
      category: "Health",
      date: "September 8, 2020",
      location: "Brgy. East Awang Calbayog City",
    },
    {
      link: "sellers/cherrymjcapuno/p8.html",
      img: "sellers/cherrymjcapuno/img/p8.jpg",
      product_name: "Casino Ethyl Alcohol 1 Gal.",
      price: "565php",
      category: "Health",
      date: "September 8, 2020",
      location: "Brgy. East Awang Calbayog City",
    },
    {
      link: "sellers/cherrymjcapuno/p9.html",
      img: "sellers/cherrymjcapuno/img/p9.jpg",
      product_name: "Hygienyx Alcohol 500 ML",
      price: "Retail: 128php, Wholesale: 123php",
      category: "Health",
      date: "September 8, 2020",
      location: "Brgy. East Awang Calbayog City",
    },
    {
      link: "sellers/cherrymjcapuno/p10.html",
      img: "sellers/cherrymjcapuno/img/p10.jpg",
      product_name: "Green Cross Ethyl Alcohol & Isopropyl Alcohol Hygienix",
      price: "700php and 570php",
      category: "Health",
      date: "September 8, 2020",
      location: "Brgy. East Awang Calbayog City",
    },
    {
      link: "sellers/cherrymjcapuno/p12.html",
      img: "sellers/cherrymjcapuno/img/p12.jpg",
      product_name: "Faceshield",
      price: "45php",
      category: "Health",
      date: "September 8, 2020",
      location: "Brgy. East Awang Calbayog City",
    },

    // home appliances

    // jewelries accessories

    // plants

    // real estate

    // services
  ];

  // Appending

  Product.forEach((product) => {
    $(".p-container").append(`
        <a href="${product.link}">
            <div class="product">
                <div class="p-pic">
                    <img src="${product.img}" alt="">
                </div>
                <div class="p-disc">
                    <p>${product.product_name}</p>
                    <p class="price">${product.price}</p>
                    <p class="category"><i class="fa fa-bars"></i> ${product.category}</p>
                    <p class="date"><i class="fa fa-calendar"></i> ${product.date}</p>
                    <p><i class="fa fa-map-marker"></i> ${product.location}</p>
                </div>
            </div>
        </a>
        `);
  });

  $(".total").append(`All Products: ${Product.length}`);
});
