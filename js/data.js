featured = 'search/shows?q=friends';
getTvShowList = 'shows';
getTvShowSeasons = 'seasons';
getTvShowEpisodes = 'episodes';
baseUrl = 'https://api.tvmaze.com/';

const getData = async endpoint => {
	const response = await fetch(`${baseUrl}${endpoint}`);
	const json = await response.json();

	return json;
}
