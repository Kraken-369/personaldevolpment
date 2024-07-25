const showFeatured = async () => {
	const result = await getData(featured).then(element => element[0].show);
	const container = document.getElementById('show-featured');
	const leftPannel = document.createElement('div');
	const rightPannel = document.createElement('div');
	const title = document.createElement('h2');
	const summary = document.createElement('p');
	const image = document.createElement('img');

	leftPannel.classList.add('left', 'summary');
	rightPannel.classList.add('right', 'show-image');
	title.innerHTML = result.name;
	summary.appendChild(document.createTextNode(result.summary));
	leftPannel.insertAdjacentElement('beforeend', title);
	leftPannel.innerHTML += result.summary;
	image.src = result.image.original;
	rightPannel.appendChild(image);

	container.appendChild(leftPannel);
	container.appendChild(rightPannel);
}

const renderTvShowDetail = element => {
	const container = document.getElementById('tv-show-detail');
	const detail = document.createElement('div');
	const title = document.createElement('h3');
	const summary = document.createElement('div');
	const genres = document.createElement('p');
	const spanTitle = document.createElement('span');

	detail.setAttribute('id', `tv-show-${element.id}`);
	detail.classList.add('tv-show-card');
	title.innerHTML = element.name;
	summary.innerHTML = element.summary;
	spanTitle.innerHTML = '<b>Genres:</b>';
	genres.appendChild(spanTitle);
	element.genres.map(genre => {
		const span = document.createElement('span');
		
		span.innerHTML = genre;
		genres.appendChild(span);
	})
	detail.appendChild(title);
	detail.appendChild(summary);
	detail.appendChild(genres);
	getNumberSeasons(element.id, detail);
	getNumberEpisodes(element.id, detail);
	container.appendChild(detail);
}

const renderTvShowList = list => {
	const tvShow = list.slice(0, 5);
	const container = document.getElementById('tv-show-list');

	tvShow.map(element => {
		const column = document.createElement('div');
		const image = document.createElement('img');

		column.classList.add('card');
		image.setAttribute('id', element.id);
		image.src = element.image.medium;
		image.addEventListener('click', tv => showDetail(tv.target.id));
		column.appendChild(image);
		container.appendChild(column);
		renderTvShowDetail(element);
	})
}

const renderTvShowSeasons = list => {
	const seasons = document.createElement('p');

	seasons.innerHTML = `<b>Number of seasons:</b> ${list.length}`;

	return seasons;
}

const renderTvShowEpisodes = list => {
	const episodes = document.createElement('p');

	episodes.innerHTML = `<b>Number of episodes:</b> ${list.length}`;

	return episodes;
}

const showList = async () => {
	const result = await getData(getTvShowList);
	
	renderTvShowList(result);
}

const getNumberSeasons = async (id, detail) => {
	const result = await getData(`${getTvShowList}/${id}/${getTvShowSeasons}`);

	detail.appendChild(renderTvShowSeasons(result));
}

const getNumberEpisodes = async (id, detail) => {
	const result = await getData(`${getTvShowList}/${id}/${getTvShowEpisodes}`);

	detail.appendChild(renderTvShowEpisodes(result));
}

showFeatured();
showList();