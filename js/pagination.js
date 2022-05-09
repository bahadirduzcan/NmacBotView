$( document ).ready(function() {
    pagination();
});

let href = window.location.href;
let urlPath = href.split('/');
let queryPath = urlPath[urlPath.length-1].split('?');
let activePage = parseInt(queryPath[queryPath.length-1].substring(5, queryPath[queryPath.length-1].length));
activePage = isNaN(activePage) ? 1 : activePage;

async function pagination() {
    let limitPageNumber = await asyncAjax();
    let pageStartNumber = activePage-5 <= 0 ? 1 : activePage-5;
    let maxPageNumber = pageStartNumber+9 >= limitPageNumber ? limitPageNumber : pageStartNumber+9;

    if(activePage != 1) {
        $('#pagination').append('<a href="?page=1"><li style="display: inline;" class="btn btn-outline-dark mx-1"><<</li></a>');
        $('#pagination').append('<a href="?page='+(activePage-1)+'"><li style="display: inline;" class="btn btn-outline-dark mx-1"><</li></a>');
    }

    for(let i=pageStartNumber; i<=maxPageNumber; i++) {
        if(urlPath[urlPath.length-1] === "index.html" && i === 1) {
            $('#pagination').append('<li style="display: inline;" class="btn btn-outline-dark mx-1 liselect">'+i+'</li>');
        }else {
            if(queryPath[queryPath.length-1] === "page=" + i) {
                $('#pagination').append('<li style="display: inline;" class="btn btn-outline-dark mx-1 liselect">'+i+'</li>');
            }else {
                $('#pagination').append('<a href="?page='+i+'"><li style="display: inline;" class="btn btn-outline-dark mx-1">'+i+'</li></a>');
            }
        }
    }

    if(activePage != maxPageNumber) {
        $('#pagination').append('<a href="?page='+(activePage+1)+'"><li style="display: inline;" class="btn btn-outline-dark mx-1">></li></a>');
        $('#pagination').append('<a href="?page='+limitPageNumber+'"><li style="display: inline;" class="btn btn-outline-dark mx-1">>></li></a>');
    }

}

function asyncAjax(){
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: "http://localhost:3000/getMaxPageNumber",
            type: "GET",
            success: function(body) {
                resolve(body.data.maxPageNumber)
            },
            error: function(err) {
                reject(err)
            }
        });
    });
}



