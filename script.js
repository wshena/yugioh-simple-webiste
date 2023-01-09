function SeacrhCard() {
    $('#yugioh-list').html('');

    $.ajax({
        url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?',
        type: 'get',
        dataType: 'json',
        data: {
            'name' : $('#search-input').val()
        },
        success: function(result) {
            let cards = result.data
            console.log(cards)
            $.each(cards, function(i, data) {
                $('#yugioh-list').append(`
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem; margin-bottom: 10px">
                            <img src="`+data.card_images[0].image_url+`" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">`+data.name+`</h5>
                                <p class="mb-0">Type : `+data.type+`</p>
                                <p>Race : `+data.race+`</p>
                                <a href="#"> Detail </a>
                            </div>
                        </div>
                    </div>
                    `)
            })            
        }
    })
}

$('#search-button').on('click', function () {
    SeacrhCard();
})

$('#search-input').on('keyup', function(e) {
    if (e.keyCode == 13) {
        SeacrhCard();
    }
})
