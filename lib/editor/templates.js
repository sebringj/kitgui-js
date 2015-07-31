import handlbars from 'handlebars';

// vertical bar at bottom of page
var navStyle = `
  <style id="kitgui-nav-style">
    #kitgui-nav {
      display:none;
    }
  </style>
`;

var navMarkup = `
  <div id="kitgui-nav-markup">
    <form>

    </form>
  </div>
`;

// floating over the top of each kitgui editable item
var overlayStyle = `
  <style id="kitgui-overlay-style">
    .kitgui-overlay {
      display:none;
    }
  </style>
`;

var overlayMarkup = `
  <div class="kitgui-overlay">

  </div>
`;

var templates = {
  nav: {
    style: handlbars.compile(navStyle),
    markup: handlbars.compile(navMarkup)
  },
  overlay: {
    style: handlbars.compile(overlayStyle),
    markup: handlbars.compile(overlayMarkup)
  }
};

export default templates;
