$(document).ready(function(){
    
    // search bar method

    $('#search').on('keyup', function(){
        var value = $(this).val().toLowerCase();

        $('.total').hide()
        $('.result').show()

        $('#gen-products .product').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        })

        var searched = $('#search').val()

        if(searched == ""){
            $('.total').show()
            $('.result').hide()
        }
    })

    // category toggle

    $('#s-c button').click(function(){
        $('#homepage-categories').slideToggle()
    })

    $('#s-c button').click(function(){
        $('#inner-categories').slideToggle()
    })

    // individual img js

    $('#moreimg .down').click(function(){
        $('.img-toggle').slideDown()
        $('#moreimg .up').show()
        $(this).hide()

    })

    $('#moreimg .up').click(function(){
        $('.img-toggle').slideUp()
        $('#moreimg .down').show()
        $(this).hide()
    })

})