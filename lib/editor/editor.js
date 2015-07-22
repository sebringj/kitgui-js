import $ from 'jquery';
import state from '../utils/state';
import mouseover from './mouseover';
import mouseout from './mouseout';
import templates from './templates';

function init() {
  $('body').off('.kitgui')
  .on('mouseenter.kitgui', '[kitgui-id],[data-kitgui-id]', mouseover)
  .on('mouseout.kitgui', '[kitgui-id],[data-kitgui-id]', mouseout);
}

export default {
	init,
  style
};
