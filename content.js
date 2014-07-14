var pattern = /\bBlocked/;
var viewtext_base_url = "http://viewtext.org/article?url=";
var newurl;

console.log(window.location.href); // http://s.imgur.com/images/loaders/ddddd1_121211/48.gif

if (pattern.test(window.document.title)) {
	newurl = viewtext_base_url + encodeURIComponent(window.location.href);

	chrome.extension.sendRequest({
		redirect: newurl
	});
}
