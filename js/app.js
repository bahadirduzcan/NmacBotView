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
            });
        }
    });
}
