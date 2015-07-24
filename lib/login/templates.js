import handlbars from 'handlebars';

var style = `
	<style id="kitgui-login-style">
		#kitgui-login {
			display: none;
			position: absolute;
		}
	</style>
`;
var markup = `
	<div id="kitgui-login-markup">
		<form>

		</form>
	</div>
`;

var templates = {
	login: {
		style: handlbars.compile(style),
		markup: handlbars.compile(markup)
	}
};

export default templates;
