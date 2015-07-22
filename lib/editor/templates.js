import handlbars from 'handlebars';

// vertical bar at bottom of page
var navStyle = ```
	#kitgui-nav {

	}
```;
var navMarkup = `
	<div id="kitgui-nav">
		<form>

		</form>
	</div>
`;

// floating over the top of each kitgui editable item
var overlayStyle = ```
	.kitgui-overlay {

	}
```;
var overlayMarkup = ```
	<div class="kitgui-overlay">

	</div>
```;

var templates = {
	style: {
		nav: handlbars.compile(navStyle),
		overlay: handlbars.compile(overlayStyle)
	},
	markup: {
		nav: handlbars.compile(navMarkup),
		overlay: handlbars.compile(overlayMarkup)
	}
};

export default templates;
