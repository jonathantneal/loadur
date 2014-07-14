chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
		chrome.storage.sync.get('loadur', function (object) {
			console.log(object);

			if (object.loadur) {
				localStorage.loadur = object.loadur;
			}
		});

		if (localStorage.loadur && localStorage.loadur !== 'undefined') {
			localStorage.removeItem('redirect');

			return {
				redirectUrl: localStorage.loadur
			};
		} else if (!localStorage.redirect) {
			localStorage.setItem('redirect', true);

			localStorage.removeItem('loadur');

			return {
				redirectUrl: details.url
			};
		}
	}, {
		urls: [
			'*://s.imgur.com/images/loaders/*'
		],
		types: ['main_frame', 'sub_frame', 'stylesheet', 'script', 'image', 'object', 'xmlhttprequest', 'other']
	},
	['blocking']
);
