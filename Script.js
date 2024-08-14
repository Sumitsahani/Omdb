let key = "bd193a1b";

async function fetchMovieData(title) {
    try {
        let res = await fetch(`http://www.omdbapi.com/?apikey=${key}&t=${encodeURIComponent(title)}`);
        let data = await res.json();
        displaySearchMovie(data);
    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
}

function displaySearchMovie(data) {
    if (data.Response === "True") {
        document.getElementById('movie-title').textContent = `${data.Title} (${data.Year})`;
        document.getElementById('movie-poster').src = data.Poster;
        document.getElementById('movie-director').textContent = data.Director;
        document.getElementById('movie-actors').textContent = data.Actors;
        document.getElementById('movie-genre').textContent = data.Genre;
        document.getElementById('movie-language').textContent = data.Language;
        document.getElementById('movie-country').textContent = data.Country;
        document.getElementById('movie-plot').textContent = data.Plot;
        document.getElementById('movie-awards').textContent = data.Awards;
        document.getElementById('movie-box-office').textContent = data.BoxOffice;
        document.getElementById('movie-runtime').textContent = data.Runtime;
        document.getElementById('movie-rating').textContent = data.imdbRating;
        document.getElementById('movie-metascore').textContent = data.Metascore;
    } else {
        console.error("Movie not found");
        document.getElementById('movie-title').textContent = "Movie not found";
        document.getElementById('movie-poster').src = "";
        const fields = ['movie-director', 'movie-actors', 'movie-genre', 'movie-language', 'movie-country', 'movie-plot', 'movie-awards', 'movie-box-office', 'movie-runtime', 'movie-rating', 'movie-metascore'];
        fields.forEach(fieldId => {
            document.getElementById(fieldId).textContent = "";
        });
    }
}

function handleSearch() {
    let searchInput = document.getElementById('movie-search');
    searchInput.addEventListener('input', () => {
        let movie = searchInput.value.trim();
        if (movie) {
            fetchMovieData(movie);
        }
    });
}
fetchMovieData('Inception');

handleSearch();
