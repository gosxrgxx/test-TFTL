if (window.innerWidth > 768) {
	let title = document.querySelector('.fullscreen__title');
	window.addEventListener('mousemove', function(e) {
			let x = e.clientX / window.innerWidth;
			let y = e.clientY / window.innerHeight;
			title.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
	});
}
