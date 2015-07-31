import $ from 'jquery';
import templates from './templates';
import config from '../utils/config';

var injected = false;
var $login;

function init() {
  if (!injected) {
    $('head').append(templates.login.style({}));
    $('body').append(templates.login.markup({
      baseUrl: config.baseUrl
    }));
    injected = true;
    $login = $('#kitgui-login-markup');
  }
}

function showLogin() {
  if (!injected)
    throw 'kitgui.init must be called first';
  $login.addClass('show');
}

function hideLogin() {
  if (!injected)
    throw 'kitgui.init must be called first';
  $login.removeClass('show');
}

export default {
  init,
  showLogin,
  hideLogin
};
