import handlbars from 'handlebars';

var loginTemplate = `
	<div id="kitgui-login">
		<form>
			
		</form>
	</div>
`;

var templates = {
	login: handlbars.compile(loginTemplate)
};

export default templates;
