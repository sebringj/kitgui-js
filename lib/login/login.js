import $ from 'jquery';
import templates from './templates';

var injected = false;
var $login;

function init() {
	if (!injected) {
		$('head').append(templates.login.style({}));
		$('body').append(templates.login.markup({}));
		injected = true;
		$login = $('#kitgui-login-markup');
	}
}

function showLogin() {
	if (!injected)
		throw 'kitgui.init must be called first';
	$login.addClass('kitgui-visible');
}

function hideLogin() {
	if (!injected)
		throw 'kitgui.init must be called first';
	$login.removeClass('kitgui-visible');
}

export default {
	init,
	showLogin,
	hideLogin
};
