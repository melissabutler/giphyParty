console.log("Let's get this party started!");
const $imgCache = $('#img-cache');



// on pressing of the button, call the API
$('#search-btn').on('click', async function(event) {
    event.preventDefault();
    console.log("search Button clicked");

    const searchTerm = $('#search').val();
    $('#search').val('');

    const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
        q: searchTerm,
        api_key: "3IVHxnUtpxmyoVbjip6tBgK0JSvamc2b"
        }
    });
    appendGif(res.data);
})

// Add Gif to cache
function appendGif(result){
    const results = result.data.length;
    if(results) {
        const randomID = Math.floor(Math.random() * results);
        const $newGif = $('<img>', {
            src: result.data[randomID].images.original.url,
        });
    $newGif.addClass('col-3');
    $newGif.addClass('img-fluid')
    $imgCache.append($newGif);
    }
}

//Remove Button
$('#remove-btn').on('click', function(event){
    event.preventDefault();
    $('#img-cache').empty();
})


