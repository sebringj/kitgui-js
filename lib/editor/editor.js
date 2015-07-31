import $ from 'jquery';
import state from '../utils/state';
import mouseover from './mouseover';
import mouseout from './mouseout';
import templates from './templates';

var injected = false;
var eventPostFix = '.kitgui-editor';
var selector = '[kitgui-id],[data-kitgui-id]';

var $nav;

function postFix(name) {
  return name + eventPostFix;
}

function init() {
  if (!injected) {
    $('head').append(templates.nav.style());
    $('body').append(templates.nav.markup());
    $('head').append(templates.overlay.style());
    $nav = $('#kitgui-nav-markup');
    injected = true;
  }
  $('body').off(eventPostFix)
  .on(postFix('mouseenter'), selector, mouseover)
  .on(postFix('mouseout'), selector, mouseout);
}

export default {
  init
};
