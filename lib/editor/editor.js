import $ from 'jquery';
import mouseover from './mouseover';
import mouseout from './mouseout';

function init() {
  $('body').off('.kitgui')
  .on('mouseenter.kitgui', '[kitgui-id],[data-kitgui-id]', mouseover)
  .on('mouseout.kitgui', '[kitgui-id],[data-kitgui-id]', mouseout);
}

export default {
	init: init
};
