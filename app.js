$("#search_btn").on('click', async function (evt) {
    evt.preventDefault();
    let searchTerm = $('#search').val();
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    let newGifUrl = chooseRandomGif(response);
    let img = createImage(newGifUrl, searchTerm);
    $('.container').append(img);
})

function chooseRandomGif(res) {
    let randInt = Math.floor(Math.random() * res.data.data.length);
    let newGif = res.data.data[randInt].images.original.url;
    return newGif;
}

function createImage(url, searchTerm) {
    return `<img src="${url}" alt="${searchTerm}">`
}

$("#delete").on("click", function () {
    $('.container').empty();
})
