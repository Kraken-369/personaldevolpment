const showDetail = id => {
	const visible = document.querySelector('.show-it');
	const showIt = document.querySelector(`#tv-show-${id}`);
	
	if (visible !== null) {
		visible.classList.remove('show-it');
	}

	showIt.classList.add('show-it');
}