// $(function(){
//     $('[data-toggle="tooltip"]').tooltip();

// })


const api = {
    urlImdb: "http://www.omdbapi.com/", 
    keyImdb: "2da57d7b",
}

$(document).ready(function () {

    

    $('#btn-cari').click(function() {
        $('#movie-list').empty();

        var cari = $('#input-cari').val();

        $.ajax({
            url: api.urlImdb + "?s=" + cari + "&plot=full" + "&apikey=" + api.keyImdb,
            success: function(res){
                
                if(res.Response == "True"){
                    let movieList = res.Search;
                    console.log(JSON.stringify(movieList));

                    $.each(movieList, function(i, data){
                        $('#movie-list').append(`
                        <div class="col-md-3">
                        <div class="card";>
                          <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">`+ data.Title+`</h5>
                            <p class="card-text">` + data.Year +`</p>
                            <p style="color : orange" class="m-1">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-alt"></i>
                          </p>
                            <a href="#" class="btn btn-primary">Watch</a>
                            <a href="#" class="btn btn-outline-success">Download</a>
                          </div>
                        </div>
                        `);
                    });

                } else{
                    // console.log(JSON.stringify(res));

                    $('$movie-list').html(`
                        <div class="col">
                            <h1 class="text-center">` + res.Error +`</h1>
                        </div>
                    `);
                }
            }
        })
    });

    // $.ajax({
    //     url: api.urlImdb + "?t=Dilan+1991" + "&plot=full" + "&apikey=" + api.keyImdb,
    //     success: function (res){
            
    //         // Save to variabel
    //         var title = res.Title;
            
    //         // Ouput to card title
    //         $('.card-title').text(title);
    //         $('.card-img-top').attr('src', res.Poster);
    //     }
    // });
})