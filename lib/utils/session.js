var session = {};

if (window.sessionStorage.kitgui) {
  try {
    session = JSON.parse(window.sessionStorage.kitgui);
  } catch(ex) {}
}

function set(key, value) {
  session[key] = value;
  window.sessionStorage.kitgui = JSON.stringify(session);
}

function get(key) {
  return session[key];
}

export default {
  set,
  get
};
