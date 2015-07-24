import $ from 'jquery';
import templates from './templates';

var injected = false;

function init() {
	if (!injected) {
		$('head').append(templates.login.style({}));
		$('body').append(templates.login.markup({}));
		injected = true;
	}
}

function showLogin() {

}

function hideLogin() {

}

export default {
	init,
	showLogin,
	hideLogin
};
