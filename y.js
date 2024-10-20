// Loop for Chrome Yahoo Real Time Search(JavaScript)
// (c) 2024 mitsuya_ka. 2024/10/20 V1.0.0.0
var fn_click = function () {
	if (element.checked) {
		element.click("32");
		element.click("32");
	}
	else {
		element.click("32");
	}
}
var fn_loop = function () {
	console.log("loop count = " + i);
	fn_click();
	setTimeout(fn_click, tma);
	if (i >= loop) {
		clearInterval(id);
		console.log("loop end.");
	}
	i++;
}
var i = 0;
var id;
const loop = 12;	// 12回1時間(12=60分÷5分)
const tml = 5 * 60 * 1000;	// 5分(5X60秒X1000ミリ秒)
const tma = 10 * 1000;	// 10秒(10X1000ミリ秒)
var element = document.getElementById("autoscroll");
if (element != null) {
	fn_loop();
	id = setInterval(fn_loop, tml);
}
else {
	console.log("No autoscroll id.");
}
