$( document ).ready(function() {
    getData();
});

function getData() {
    $.ajax({
        url: "http://localhost:3000/dynamicPage/" + activePage,
        type: "GET",
        success: function (body) {
            $.map(body.data, function (val, i) {
                $('#main').append(
                '<div class="solution_cards_box">'+
                '<div class="solution_card">'+
                '<div class="hover_color_bubble"></div>'+
                '<div class="so_top_icon"><img src="'+val.image+'" alt="No Image"></div>'+
                '<div class="solu_title"><h3>'+val.title+'</h3></div>'+
                '<div class="solu_description"><p>'+val.content+'</p>'+
                '<button type="button" class="read_more_btn"><a class="white" href="'+val.link+'">Read More</a></button>'+
                '</div></div></div>');

                /* Adsense Content
                if((i+1)%2 === 0 && i < body.data.length -1) {
                    $('#main').append(
                        '<div class="solution_cards_box">'+
                        '<div class="solution_card">'+
                        '<div class="hover_color_bubble"></div>'+
                        '<div class="so_top_icon"><img src="data:image/png;base64,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" alt="No Image"></div>'+
                        '<div class="solu_title"><h3>Ads</h3></div>'+
                        '<div class="solu_description"><p>Adsense</p>'+
                        '<button type="button" class="read_more_btn"><a class="white" href="">Read More</a></button>'+
                        '</div></div></div>');
                }
                */
            });
        }
    });
}
