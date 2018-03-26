/** Writer.js | Typewriting mini-library
  @author Oyedele Hammed Horlah
  @date March 2018
*/
function writer(str, element, speed) {
	var i = 0,
		speed = speed || 50,
		isTag,
		text;
	(function typeIt() {
		text = str.slice(0, ++i);
		if (text == str) return;
		document.querySelector(element).innerHTML = text;
		var char = text.slice(-1);
		if (char === "<") isTag = true;
		if (char === ">") isTag = false;
		if (isTag) return typeIt();
		setTimeout(typeIt, speed);
	})();
}
