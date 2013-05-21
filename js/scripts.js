/* Place for fabulous JavaScript */

$(document).ready(function(){
  // jQuery Stuff
  // loadScript(src, callback, errorcallback);


}); // END jQuery.ready


function loadScript(src, callback, errorcallback) {
  var script = document.createElement('script'),
	loaded,
	timer;
	script.setAttribute('src', src);
	
	script.onreadystatechange = script.onload = function() {
		if (!loaded) {
			if (callback) {
				callback();
			}
		}
		loaded = true;
		clearTimeout(timer);
	};

	script.onerror = function(){
		if(errorcallback){ errorcallback(); clearTimeout(timer); }
	};
	// 30 seconds timeout...
	timer = setTimeout(function(){
		if(errorcallback){ errorcallback(); }
	},30000);	
	
	
	document.getElementsByTagName('head')[0].appendChild(script);
};
