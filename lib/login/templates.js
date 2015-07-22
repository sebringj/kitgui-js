import handlbars from 'handlebars';

var style = ```
	#kitgui-login {

	}
```;
var markup = ```
	<div id="kitgui-login">
		<form>

		</form>
	</div>
```;

var templates = {
	style: {
		login: handlbars.compile(style)
	},
	markup: {
		login: handlbars.compile(markup)
	}
};

export default templates;
