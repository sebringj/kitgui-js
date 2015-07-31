import handlbars from 'handlebars';

var style = `
  <style id="kitgui-login-style">
    #kitgui-login-markup {
      display: none;
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 2147483647;
      background-color: rgba(255, 255, 255, 0.8);
      border: none;
    }
    #kitgui-logon-markup.show {
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      flex-direction: row;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-align-items: center;
      align-items: center;
    }
    #kitgui-logon-markup iframe {
      width: 320px;
      height: 480px;
    }
  </style>
`;

var markup = `
  <div id="kitgui-login-markup">
    <iframe src="{{baseUrl}}/signIn"></iframe>
  </div>
`;

var templates = {
  login: {
    style: handlbars.compile(style),
    markup: handlbars.compile(markup)
  }
};

export default templates;
