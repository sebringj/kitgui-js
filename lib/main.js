import $ from 'jquery';
import templates from './templates';
import state from './state';
import mouseover from './editor/mouseover';
import mouseout from './editor/mouseout';



function init() {
	$('body').off('.kitgui')
	.on('mouseenter.kitgui', '[kitgui-id],[data-kitgui-id]', mouseover)
	.on('mouseout.kitgui', '[kitgui-id],[data-kitgui-id]', mouseout);
}

window.kitgui = {
	setConfig: function() {

	}
};

$(init);
