$("#search_btn").on('click', async function (evt) {
    evt.preventDefault();
    let searchTerm = $('#search').val();
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    if (response.data.data.length === 0) {
        alert('Nothing Found');
        return;
    }
    let newGifUrl = chooseRandomGif(response.data.data);
    let img = createImage(newGifUrl, searchTerm);
    $('.container').append(img);
})

function chooseRandomGif(gifs) {
    let randInt = Math.floor(Math.random() * gifs.length);
    let newGif = gifs[randInt].images.original.url;
    return newGif;
}

function createImage(url, searchTerm) {
    return `<img src="${url}" alt="${searchTerm}">`
}

$("#delete").on("click", function () {
    $('.container').empty();
})
