window.onload = function () {
	window.addEventListener("scroll", function() {
		let rotateText = document.querySelector(".fullscreen__rotate-icon");
		rotateText.style.transform = "rotate("+ window.pageYOffset / 3+"deg)";
	});
}
