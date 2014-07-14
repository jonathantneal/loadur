var
DEFAULT_LOADUR = 'http://i.imgur.com/Ecb6I7a.gif';

document.addEventListener('DOMContentLoaded', function () {
	var input = document.querySelector('input');

	input.addEventListener('change', function () {
		var value = input.value;

		if (value) {
			chrome.storage.sync.clear(function () {
				chrome.storage.sync.set({
					'loadur': value
				}, function () {
					input.placeholder = value;

					input.value = '';
				});
			});
		}
	});

	chrome.storage.sync.get('loadur', function (object) {
		if (object.loadur) {
			input.placeholder = object.loadur;
		} else {
			input.placeholder = 'http://';

			chrome.storage.sync.set({
				'loadur': DEFAULT_LOADUR
			});
		}
	});
});
