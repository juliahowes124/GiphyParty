console.log("Let's get this party started!");

$("#form").on('submit', async function (evt) {
    evt.preventDefault();
    let searchTerm = $('#search').val();
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    console.log(response);
})

