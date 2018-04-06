$(function(){
	var carouselList = $("#carousel ul");
	var intervalId = setInterval(changeSlide, 3000);

	function restartInterval() {
		clearInterval(intervalId);
		intervalId = setInterval(changeSlide, 3000);
	}

	function changeSlide (){
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}
	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

	function changeSlideBack (){
		moveLastSlide();
		carouselList.animate({'marginLeft': 0}, 500);
	}

	function moveLastSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft: -400});
	}

	$("#prev").click(function() {
		changeSlideBack();
		restartInterval();
	});
	$("#next").click(function() {
		changeSlide();
		restartInterval();
	});
});