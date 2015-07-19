import handlbars from 'handlebars';

var login = `
	<div id="kitgui-login">
		<form>

		</form>
	</div>
`;

var overlay = `
	<div id="kitgui-overlay">
		
	</div>
`;

var templates = {
	login: handlbars.compile(login),
	overlay: handlbars.compile(overlay)
};

export default templates;
