import $ from 'jquery';
import state from '../utils/state';
import mouseover from './mouseover';
import mouseout from './mouseout';
import templates from './templates';

var injected = false;

function init() {
  if (!injected) {
		$('head').append(templates.nav.style());
		$('body').append(templates.nav.markup());
    $('head').append(templates.overlay.style());
		injected = true;
	}
  $('body').off('.kitgui')
  .on('mouseenter.kitgui', '[kitgui-id],[data-kitgui-id]', mouseover)
  .on('mouseout.kitgui', '[kitgui-id],[data-kitgui-id]', mouseout);
}

export default {
	init
};
