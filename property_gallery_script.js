// JavaScript Document

window.onload = function() {
	prepare();
};

function prepare() {
	alert("hello Kateryna!");
		
	var thumbA = document.getElementById("thumbA");
	var test = document.getElementById("test");
	var mainImg = document.getElementById("mainImg");
	
	test.onclick = function() {
		mainImg.setAttribute("src", "../_images/property1a.jpg");	
		//test.innerHTML = "This only works if the \"script tag\" was declared before the entire document is loaded.";
	};	
}