import $ from 'jquery';
import _ from 'lodash';
import state from './state';
import config from './config';
import editor from './editor/editor';
import login from './login/login';
import session from './session';

function setConfig(newConfig) {
  _.assign(config, newConfig);
}

function init() {
  if (session.get('authenticated')) {
    editor.init();
  } else {
    login.init();
  }
};

// public methods
var kitgui = {
  login: {
    show: login.showLogin,
    hide: login.hideLogin
  },
  config: {
    set: setConfig
  },
  init
};

// AMD or RequestJS or Global compatibility
(function(define) {
  define('kitgui', function(require, exports) {
    _.assign(exports, kitgui);
  });
}(typeof define === 'function' && define.amd ? define : function(id, factory) {
  if (typeof exports !== 'undefined') {
    factory(require, exports);
  } else {
    factory(function(value) {
      return window[value];
    }, (window[id] = {}));
  }
}));
