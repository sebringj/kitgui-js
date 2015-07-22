function injectOnce(options) {
	if (document.getElementById(options.id))
		return;
	var style = document.createElement('style');
	style.innerHTML = options.html;
	style.id = options.id;
	var head = document.getEementsByTagName('head');
	if (head.length)
		head[0].appendChild(style);
}

function appendTo(options) {
	var style = document.getElementById(options.id);
	if (!style) {
		injectOnce(options);
		return;
	}
	style.innerHTML += options.html;
}

export default {
	injectOnce,
	appendTo
};
