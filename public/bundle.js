(function (incrementalDom) {
'use strict';

var hoisted1 = ["class", "button primary", "href", "/login"];
function render(ctrl) {
  incrementalDom.elementOpen("h1");
  incrementalDom.text("Manila 7th Ward Temple and Family History Skills Development Site");
  incrementalDom.elementClose("h1");
  incrementalDom.elementOpen("h3");
  incrementalDom.text("Access to this site requires user login");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("a", "cd89fdf3-c168-48ff-aeec-43f19350c369", hoisted1);
  incrementalDom.text("Please Login");
  incrementalDom.elementClose("a");
}

var css = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n.grid {\n  display: flex;\n}\n.col {\n  flex: 1;\n}\n@media (max-width: 500px) {\n  .grid {\n    display: block;\n  }\n}\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n}\nsection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\nsection h1 {\n  text-align: center;\n  color: white;\n  font: bold 1.5em museo, sans-serif;\n}\nsection h3 {\n  font-size: 32px;\n  color: white;\n}\nsection a {\n  font-size: 1em !important;\n}\n";

var css$1 = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\n:host {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n#modal-container {\n  height: 100%;\n  width: 100%;\n}\n#overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #2c2c2c;\n  opacity: 0.95;\n  transition: transform 0.3s, opacity 0.3s;\n  z-index: 9000;\n}\n#modal {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  max-width: 600px;\n  z-index: 9001;\n}\n#content {\n  background: #ffffff;\n  opacity: 1;\n  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.35), 0px 3px 2px 0px rgba(0, 0, 0, 0.18);\n  margin: 0 auto;\n  position: relative;\n}\n#header {\n  padding: 2vh 2vw 0 2vw;\n}\n#header h4 {\n  font-size: 1em;\n  padding: 0;\n  margin: 0;\n}\n#body {\n  padding: 2vh 2vw;\n  max-height: 90vh;\n  font-size: 0.8em;\n}\n#buttons {\n  padding: 2vh 2vw;\n}\n#buttons button {\n  margin-right: 8px;\n  font-size: .5em;\n}\n";

var hoisted1$1 = ["id", "overlay"];
var hoisted2 = ["id", "modal"];
var hoisted3 = ["id", "content"];
var hoisted4 = ["id", "header"];
var hoisted5 = ["id", "body"];
var hoisted6 = ["id", "buttons"];
var hoisted7 = ["type", "button", "name", "primary", "class", "button primary"];
var hoisted8 = ["type", "button", "name", "cancel", "class", "button minor"];
function render$1(ctrl) {
  if (ctrl._show) {
    incrementalDom.elementOpen("div", "a5296eaa-208c-47cd-b852-4c9571382cf9", hoisted1$1);
    incrementalDom.elementOpen("div", "4b02c0d3-dde0-435a-b106-0177506f9e6f", hoisted2);
    incrementalDom.elementOpen("div", "ee854d74-ba7b-4f90-aad4-33f1414a95ce", hoisted3);
    incrementalDom.elementOpen("div", "95ecaca0-50f9-4b32-9809-041c4dc58a9e", hoisted4);
    incrementalDom.elementOpen("h4");
    incrementalDom.text("" + ctrl._heading + "");
    incrementalDom.elementClose("h4");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "23cc20f8-0c09-4a23-b2d0-856fbecad4db", hoisted5);
    incrementalDom.text("" + ctrl._body + "");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "8c9236e2-18f3-4917-8efc-68c6328edbb4", hoisted6);
    incrementalDom.elementOpen("button", "ff846583-1520-42a7-a35d-7669f37fcfc2", hoisted7, "onclick", function ($event) {
      var $element = this;
      ctrl._clickButton('primary');
    });
    incrementalDom.text("" + ctrl._primary + "");
    incrementalDom.elementClose("button");
    if (ctrl._cancel) {
      incrementalDom.elementOpen("button", "b0df66e0-2d31-4238-a6f7-282403926b34", hoisted8, "onclick", function ($event) {
        var $element = this;
        ctrl._clickButton('cancel');
      });
      incrementalDom.text("" + ctrl._cancel + "");
      incrementalDom.elementClose("button");
    }
    incrementalDom.elementClose("div");
    incrementalDom.elementClose("div");
    incrementalDom.elementClose("div");
    incrementalDom.elementClose("div");
  }
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var RbhModal = function (_HTMLElement) {
  inherits(RbhModal, _HTMLElement);

  function RbhModal() {
    classCallCheck(this, RbhModal);

    var _this = possibleConstructorReturn(this, (RbhModal.__proto__ || Object.getPrototypeOf(RbhModal)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$1 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');
    _this._heading = "";
    _this._body = "";
    _this._primary = "";
    _this._cancel = "";
    _this._show = true;
    return _this;
  }

  createClass(RbhModal, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        if (name === "heading" && nVal !== this._heading) this._heading = nVal;
        if (name === "body" && nVal !== this._body) this._body = nVal;
        if (name === "primary" && nVal !== this._primary) this._primary = nVal;
        if (name === "cancel" && nVal !== this._cancel) this._cancel = nVal;
        if (name === "show" && nVal !== this._show) this._show = nVal;
        this._updateView();
      }
    }
  }, {
    key: '_clickButton',
    value: function _clickButton(button) {
      document.dispatchEvent(new CustomEvent('rbhModalButtonClick', { detail: button }));
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: '_updateView',
    value: function _updateView() {
      if (this.element) incrementalDom.patch(this.element, render$1, this);
    }
  }, {
    key: 'heading',
    get: function get$$1() {
      return this._heading;
    },
    set: function set$$1(heading) {
      this._heading = heading;
      this.setAttribute("heading", heading);
    }
  }, {
    key: 'body',
    get: function get$$1() {
      return this._body;
    },
    set: function set$$1(body) {
      this._body = body;
      this.setAttribute("body", body);
    }
  }, {
    key: 'primary',
    get: function get$$1() {
      return this._primary;
    },
    set: function set$$1(primary) {
      this._primary = primary;
      this.setAttribute("primary", primary);
    }
  }, {
    key: 'cancel',
    get: function get$$1() {
      return this._cancel;
    },
    set: function set$$1(cancel) {
      this._cancel = cancel;
      this.setAttribute("cancel", cancel);
    }
  }, {
    key: 'show',
    get: function get$$1() {
      return this._show;
    },
    set: function set$$1(show) {
      this._show = show;
      this.setAttribute("show", show);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return ["heading", "body", "primary", "cancel", "show"];
    }
  }]);
  return RbhModal;
}(HTMLElement);

customElements.define('rbh-modal', RbhModal);

var socket$2 = socketCluster.connect();
var userAuthenticated = new CustomEvent('userAuthenticated');
var userUnauthenticated = new CustomEvent('userUnauthenticated');

var user = {
  authenticated: false,
  initialized: false
};

hello.init({
  facebook: window.SERVER_ENV.FACEBOOK_KEY,
  github: window.SERVER_ENV.GITHUB_KEY,
  google: window.SERVER_ENV.GOOGLE_KEY,
  twitter: window.SERVER_ENV.TWITTER_KEY
}, {
  redirect_uri: window.SERVER_ENV.REDIRECT_URL,
  scope: 'email'
});

hello.on('auth.login', function (auth) {
  // console.log("auth", auth)
  hello(auth.network).api('me').then(function (r) {
    // console.log("hellojs:auth.login user", r);
    if (socket$2.authState !== 'authenticated') socket$2.emit('auth', r);
    if (/.+\/login/.test(window.location.href)) router.navigate('/home/authenticated');
  }, function (err) {
    var modal = new RbhModal();
    modal.heading = 'Authentication Provider Error';
    modal.body = err;
    modal.primary = 'OK';
    document.addEventListener('rbhModalButtonClick', function (evt) {
      modal.remove();
      // router.navigate('/login');
    });
  });
});

user.loadUser = function (req, evt, next) {
  if (socket$2.authState === 'authenticated') next();else router.navigate('/login');
};

socket$2.on('authStateChange', function (status) {
  // console.log("status", status)
  // console.log("socket", socket)
  if (status.newState === 'authenticated') {
    // console.log("usr", usr)
    Object.assign(user, status.authToken.user, { authenticated: true });
    document.dispatchEvent(userAuthenticated);
    if (/.+\/login/.test(window.location.href)) router.navigate('/home/authenticated');
  }
  if (status.newState === 'unauthenticated') {
    user.authenticated = false;
    document.dispatchEvent(userUnauthenticated);
  }
});

user.logout = function () {
  hello.logout();
  Object.assign(user, { authenticated: false, admin: false });
  socket$2.emit('logout', user);
};

var HomeView = function (_HTMLElement) {
  inherits(HomeView, _HTMLElement);

  function HomeView() {
    classCallCheck(this, HomeView);

    var _this = possibleConstructorReturn(this, (HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call(this));

    _this.user = user;
    return _this;
  }

  createClass(HomeView, [{
    key: 'anchorClickHandler',
    value: function anchorClickHandler(evt) {
      if (evt.target.tagName !== 'A') return;
      router.navigate(evt.target.getAttribute('href'));
      evt.preventDefault();
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {}
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = '<style>' + css + '</style><section></section>';
      this.shadowRoot.addEventListener('click', this.anchorClickHandler.bind(this));
      this.element = this.shadowRoot.querySelector('section');
      this.updateView();

      document.addEventListener('userChanged', this.updateView);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: 'updateView',
    value: function updateView() {
      // wrap in if. otherwise ff and safari fail
      if (this.element) incrementalDom.patch(this.element, render, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return HomeView;
}(HTMLElement);

customElements.define('home-view', HomeView);

var hoisted1$2 = ["id", "buttons"];
var hoisted2$1 = ["class", "provider"];
var hoisted3$1 = ["src", "/img/facebook.svg", "alt", ""];
var hoisted4$1 = ["class", "provider"];
var hoisted5$1 = ["src", "/img/github.svg", "alt", ""];
var hoisted6$1 = ["class", "provider"];
var hoisted7$1 = ["src", "/img/google.svg", "alt", ""];
var hoisted8$1 = ["class", "provider"];
var hoisted9 = ["src", "/img/twitter.svg", "alt", ""];
var hoisted10 = ["class", "privacy", "href", "/privacy-policy"];
function render$2(ctrl) {
  incrementalDom.elementOpen("h1");
  incrementalDom.text("Manila 7th Ward Temple and Family History Skills Development Site");
  incrementalDom.elementClose("h1");
  incrementalDom.elementOpen("h3");
  incrementalDom.text("Select a Provider");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("div", "aaf3e99e-12d8-4abf-b8ed-578d67b3e9f0", hoisted1$2);
  incrementalDom.elementOpen("a", "a93d05c2-454a-46b7-85cd-0a0f15310917", hoisted2$1, "onclick", function ($event) {
    var $element = this;
    ctrl.hello('facebook').login();
  });
  incrementalDom.elementOpen("img", "64709bf9-4279-44a9-ab09-4a608ee03a2d", hoisted3$1);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Facebook");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("a", "9eec707e-6231-4330-8e1e-7a582a4ffc06", hoisted4$1, "onclick", function ($event) {
    var $element = this;
    ctrl.hello('github').login();
  });
  incrementalDom.elementOpen("img", "34d02690-9b66-4674-9dd3-2e9026f7f2c9", hoisted5$1);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Github");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("a", "6d825ca4-8951-4879-8771-c463dbbe3fe5", hoisted6$1, "onclick", function ($event) {
    var $element = this;
    ctrl.hello('google').login();
  });
  incrementalDom.elementOpen("img", "963ddb5d-a562-477e-ae0b-d322619bc07d", hoisted7$1);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Google");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("a", "6c02ce89-3608-4a36-acae-ac385320c499", hoisted8$1, "onclick", function ($event) {
    var $element = this;
    ctrl.hello('twitter').login();
  });
  incrementalDom.elementOpen("img", "6f59d453-98f3-4a1c-b12f-11cef6126abc", hoisted9);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Twitter");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("a", "ebdba573-c2af-4b1d-89b4-3b74868cdf97", hoisted10);
  incrementalDom.text("Privacy Policy");
  incrementalDom.elementClose("a");
  incrementalDom.elementClose("div");
}

var css$2 = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n.grid {\n  display: flex;\n}\n.col {\n  flex: 1;\n}\n@media (max-width: 500px) {\n  .grid {\n    display: block;\n  }\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n}\nsection {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\nsection h1,\nsection h3 {\n  color: white !important;\n}\nsection h1 {\n  font: bold 1.4em museo, sans-serif;\n  margin-bottom: 15px;\n}\nsection h3 {\n  font-size: 1.1em;\n}\n#buttons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 50%;\n}\n#buttons a.provider {\n  display: flex;\n  height: 64px;\n  line-height: 64px;\n  width: 100%;\n  border: 1px solid #ccc;\n  background-color: white;\n  margin-bottom: 1vh;\n  padding: 1vh;\n  cursor: pointer;\n  text-decoration: none;\n  color: inherit;\n}\n#buttons a.provider img {\n  height: inherit;\n  width: 64px;\n  margin-right: 2vw;\n}\n@media (max-width: 1200px) {\n  #buttons {\n    width: 25%;\n  }\n}\n@media (max-width: 800px) {\n  section h1 {\n    font-size: 1.4em;\n  }\n  section h3 {\n    font-size: 1.1em !important;\n  }\n  section #buttons {\n    width: 75%;\n  }\n}\n";

var LoginView = function (_HTMLElement) {
  inherits(LoginView, _HTMLElement);

  function LoginView() {
    classCallCheck(this, LoginView);

    var _this = possibleConstructorReturn(this, (LoginView.__proto__ || Object.getPrototypeOf(LoginView)).call(this));

    _this.hello = hello;
    return _this;
  }

  createClass(LoginView, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {}
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = '<style>' + css$2 + '</style><section></section>';
      this.element = this.shadowRoot.querySelector('section');

      this.updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: 'updateView',
    value: function updateView() {
      if (this.element) incrementalDom.patch(this.element, render$2, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return LoginView;
}(HTMLElement);

customElements.define('login-view', LoginView);

var hoisted1$3 = ["id", "brand"];
var hoisted2$2 = ["src", "/img/favicon.svg", "alt", ""];
var hoisted3$2 = ["role", "navigation", "id", "navigation"];
function render$3(ctrl) {
  incrementalDom.elementOpen("a", "7cb64c04-1d54-434a-b4cd-6d3854933fdb", hoisted1$3, "onclick", function ($event) {
    var $element = this;
    ctrl.go('/home/authenticated');
  }, "class", ctrl.stateContains('home'));
  incrementalDom.elementOpen("img", "2f448ee4-212c-43c4-80f4-3706632c4065", hoisted2$2);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Home");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("nav", "bfc37062-ceae-42c3-9bf1-3ce3ad7d1e37", hoisted3$2);
  incrementalDom.elementOpen("a", null, null, "onclick", function ($event) {
    var $element = this;
    ctrl.go('/help');
  }, "class", ctrl.stateContains('help'));
  incrementalDom.text("Help");
  incrementalDom.elementClose("a");
  if (ctrl.user.admin) {
    incrementalDom.elementOpen("a", null, null, "onclick", function ($event) {
      var $element = this;
      ctrl.go('/admin/users');
    }, "class", ctrl.stateContains('admin'));
    incrementalDom.text("Admin");
    incrementalDom.elementClose("a");
  }
  if (!ctrl.user.authenticated) {
    incrementalDom.elementOpen("a", null, null, "onclick", function ($event) {
      var $element = this;
      ctrl.go('/login');
    }, "class", ctrl.stateContains('login'));
    incrementalDom.text("Login");
    incrementalDom.elementClose("a");
  }
  if (ctrl.user.authenticated) {
    incrementalDom.elementOpen("a", null, null, "onclick", function ($event) {
      var $element = this;
      ctrl.go('/logout');
    }, "class", ctrl.stateContains('logout'));
    incrementalDom.text("Logout");
    incrementalDom.elementClose("a");
  }
  incrementalDom.elementClose("nav");
}

var css$3 = "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n:host {\n  display: block;\n  height: 64px;\n  width: 100%;\n  font-size: 1.25em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n}\n#navbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 64px;\n  border-bottom: 1px solid #ccc;\n  padding: 0 1em;\n}\n#navbar a {\n  text-decoration: none;\n  font-size: 0.9em;\n  cursor: pointer;\n}\n#navbar a.active {\n  border-bottom: 2px solid #f26100;\n}\n#navbar #brand img {\n  width: 36px;\n  height: 36px;\n}\n#navbar #brand span {\n  position: relative;\n  top: -5px;\n}\n#navbar nav {\n  display: flex;\n  align-items: flex-end;\n}\n#navbar nav a {\n  padding: 0 0.5em;\n}\n@media (max-width: 400px) {\n  #brand img {\n    width: 16px !important;\n    height: 16px !important;\n  }\n  a {\n    font-size: 0.4em !important;\n  }\n}\n@media (max-width: 500px) {\n  #brand img {\n    width: 32px !important;\n    height: 32px !important;\n  }\n  a {\n    font-size: 0.7em !important;\n  }\n}\n";

function uuid() {
  var d = new Date().getTime();
  var uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uid;
}

var NavBar = function (_HTMLElement) {
  inherits(NavBar, _HTMLElement);

  function NavBar() {
    classCallCheck(this, NavBar);

    var _this = possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this));

    _this.state = 'home';
    _this.user = user;

    document.addEventListener('userLoadedFromDb', _this.updateView.bind(_this));
    document.addEventListener('userAuthenticated', _this.updateView.bind(_this));
    document.addEventListener('userUnauthenticated', _this.updateView.bind(_this));
    document.addEventListener('userLoadedFromDb', _this.updateView.bind(_this));
    return _this;
  }

  createClass(NavBar, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {}
  }, {
    key: 'collapseToggle',
    value: function collapseToggle() {
      var button = this.shadowRoot.querySelector('button');
      var nav = this.shadowRoot.querySelector('.list');
      button.classList.toggle('-active');
      button.classList.toggle('-on');
      nav.classList.toggle('-on');
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = '<style>' + css$3 + '</style><div id="navbar"></div>';
      this.element = this.shadowRoot.querySelector('div#navbar');
      this.updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.shadowRoot.removeEventListener('click', this.anchorClickHandler.bind(this));
    }
  }, {
    key: 'go',
    value: function go(route) {
      // console.log("route", route)
      router.navigate(route);
      this.updateView();
    }
  }, {
    key: 'stateContains',
    value: function stateContains(val) {
      return window.location.href.indexOf(val) !== -1 ? 'active' : '';
    }
  }, {
    key: 'updateView',
    value: function updateView() {
      // console.log("this.user", this.user)
      if (this.element) incrementalDom.patch(this.element, render$3, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return NavBar;
}(HTMLElement);

customElements.define('nav-bar', NavBar);

var hoisted1$4 = ["href", "/home", "class", "button primary"];
function render$4(ctrl) {
  incrementalDom.elementOpen("h1");
  incrementalDom.text("404");
  incrementalDom.elementClose("h1");
  incrementalDom.elementOpen("h2");
  incrementalDom.text("Page Not Found");
  incrementalDom.elementClose("h2");
  incrementalDom.elementOpen("a", "8cf91270-72ce-4cf4-b4fa-7348c8eb1122", hoisted1$4);
  incrementalDom.text("Home");
  incrementalDom.elementClose("a");
}

var css$4 = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\n:host {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n}\n:host #not-found {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n:host #not-found h1 {\n  font-size: 5em;\n  color: white;\n}\n:host #not-found h2 {\n  font-size: 2em;\n  color: white;\n}\n:host a {\n  font-size: 1em !important;\n}\n";

var NotFound = function (_HTMLElement) {
  inherits(NotFound, _HTMLElement);

  function NotFound() {
    classCallCheck(this, NotFound);
    return possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this));
  }

  createClass(NotFound, [{
    key: 'anchorClickHandler',
    value: function anchorClickHandler(evt) {
      console.log(evt);
      if (evt.target.tagName !== 'A') return;
      evt.preventDefault();
      router.navigate(evt.target.getAttribute('href'));
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {}
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = '<style>' + css$4 + '</style><div id="not-found"></div>';
      this.shadowRoot.addEventListener('click', this.anchorClickHandler.bind(this));
      this.element = this.shadowRoot.querySelector('div#not-found');
      this.updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: 'updateView',
    value: function updateView() {
      // wrap in if. otherwise ff and safari fail
      if (this.element) incrementalDom.patch(this.element, render$4, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return NotFound;
}(HTMLElement);

customElements.define('not-found', NotFound);

var hoisted1$5 = ["id", "search"];
var hoisted2$3 = ["type", "text", "name", "search", "placeholder", "Search ..."];
var hoisted3$3 = ["for", "mine-checkbox", "id", "mine-wrapper"];
var hoisted4$2 = ["type", "checkbox", "id", "mine-checkbox"];
var hoisted5$2 = ["id", "skills"];
var hoisted6$2 = ["class", "item"];
var hoisted7$2 = ["shared", "", "collapsed", "true"];
var __target$5;

function render$5(ctrl) {
  incrementalDom.elementOpen("section", "01455147-c1e4-4a0f-898d-e710f8df1785", hoisted1$5);
  incrementalDom.elementOpen("input", "9822e16c-a923-4de6-815f-7719de9aa761", hoisted2$3, "onkeyup", function ($event) {
    var $element = this;
    ctrl.filterSkills(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "0d54b63f-2c61-4c57-b205-23a804918fa5", hoisted3$3);
  incrementalDom.elementOpen("input", "4f1bd594-8168-411f-aed0-4e121ea2573a", hoisted4$2, "onchange", function ($event) {
    var $element = this;
    ctrl.toggleMine();
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("span");
  incrementalDom.text("My Skills (" + ctrl.mySkills.length + ")");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("section");
  incrementalDom.elementOpen("section", "b96807b5-a1c8-4ff2-bc3d-e283458f139a", hoisted5$2);
  __target$5 = ctrl.viewSkills;
  if (__target$5) {
    (__target$5.forEach ? __target$5 : Object.keys(__target$5)).forEach(function ($value, $item, $target) {
      var item = $value;
      var $key = "55761fdd-de10-498b-8bd3-c327946cc7af_" + $item;
      incrementalDom.elementOpen("div", $key, hoisted6$2);
      incrementalDom.elementOpen("collapsable-panel", "97e0ed20-75cd-4f0b-862a-7cdc5d30e743_" + $key, hoisted7$2, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements);
      incrementalDom.elementClose("collapsable-panel");
      incrementalDom.elementClose("div");
    }, this);
  }
  incrementalDom.elementClose("section");
}

var css$5 = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  font-size: 1.1em;\n}\n#home {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 2vh;\n  flex: 1;\n}\nsection#search {\n  display: flex;\n  margin: 2vw 2vh 0;\n  height: 42px;\n}\nsection#search input {\n  flex-grow: 1;\n  width: inherit;\n  height: 36px;\n  font-size: 1em;\n  padding-left: 2vw;\n}\nsection#skills {\n  display: flex;\n  flex-direction: column;\n  flex: 6;\n  margin: 2vw 2vh 0;\n  background-color: #ffffff;\n  padding: 2vw 2vh;\n  overflow-y: auto;\n}\n#mine-wrapper {\n  display: flex;\n  background-color: #ffffff;\n  align-items: center;\n  height: 42px;\n  padding: 0 1vw;\n  margin-left: 1vw;\n}\n#mine-wrapper #mine-checkbox {\n  margin-right: 1vw;\n}\ncollapsable-panel {\n  display: block;\n  width: 100%;\n  height: auto;\n}\ncollapsable-panel.odd {\n  background-color: rgba(98, 171, 239, 0.15);\n}\n";

var hoisted1$6 = ["class", "panel"];
var hoisted2$4 = ["class", "heading"];
var hoisted3$4 = ["class", "title"];
var hoisted4$3 = ["class", "button-group"];
var hoisted5$3 = ["type", "button", "name", "add"];
var hoisted6$3 = ["src", "/img/add.svg", "alt", ""];
var hoisted7$3 = ["type", "button", "name", "apply"];
var hoisted8$2 = ["src", "/img/skill-apply.svg", "alt", ""];
var hoisted9$1 = ["type", "button", "name", "earned"];
var hoisted10$1 = ["src", "/img/skill-earned.svg", "alt", ""];
var hoisted11 = ["type", "button", "name", "pending"];
var hoisted12 = ["src", "/img/skill-pending.svg", "alt", ""];
var hoisted13 = ["type", "button", "name", "add"];
var hoisted14 = ["src", "/img/help.svg", "alt", ""];
var hoisted15 = ["type", "button", "name", "delete"];
var hoisted16 = ["src", "/img/delete.svg", "alt", ""];
var hoisted17 = ["class", "achievements"];
var hoisted18 = ["type", "button", "class", "collapser", "name", "collapser"];
var hoisted19 = ["class", "description"];
var hoisted20 = ["type", "button", "name", "close"];
var hoisted21 = ["src", "/img/close.svg", "alt", ""];
var hoisted22 = ["name", "achievements"];
var hoisted23 = ["name", "achievement", "rows", "8"];
var hoisted24 = ["class", "control-container"];
var hoisted25 = ["type", "checkbox", "name", "share", "checked", ""];
var hoisted26 = ["class", "control-container"];
var hoisted27 = ["type", "checkbox", "name", "helping", "checked", ""];
var hoisted28 = ["class", "button-group"];
var hoisted29 = ["type", "button", "class", "primary"];
var hoisted30 = ["href", "javascript:void(0)"];
var hoisted31 = ["class", "html"];
var __target$6;

function render$6(ctrl) {
  incrementalDom.elementOpen("div", "d4b42485-c33f-4750-9512-7b969271d0e3", hoisted1$6);
  incrementalDom.elementOpen("div", "18afddc2-ed80-4cf2-8446-b619a4cc7836", hoisted2$4);
  incrementalDom.elementOpen("div", "d9daada6-c2b4-48b4-a6ea-ce10a7057fbd", hoisted3$4);
  incrementalDom.text("" + ctrl.heading + "");
  incrementalDom.elementClose("div");
  incrementalDom.elementOpen("div", "5c172e28-6888-452a-9a8c-ccbb179eacf3", hoisted4$3);
  if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
    incrementalDom.elementOpen("button", "ddcb1026-b2bb-4ba9-9320-74cac4e73da2", hoisted5$3, "onclick", function ($event) {
      var $element = this;
      ctrl.add(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "a03268ee-5c34-4111-add3-a3f490a39ae7", hoisted6$3);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
    incrementalDom.elementOpen("button", "5fad46d5-313a-4903-988b-845a80715843", hoisted7$3, "onclick", function ($event) {
      var $element = this;
      ctrl.addAndShowAchievementEditor(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "d1979cad-234f-4313-854e-ca463e41d8a0", hoisted8$2);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  if (ctrl.earned) {
    incrementalDom.elementOpen("button", "9e8f9a59-50e6-43c1-89c9-1c7e76c3b671", hoisted9$1, "onclick", function ($event) {
      var $element = this;
      ctrl.showAwards(ctrl.iid, 'earned');
    });
    incrementalDom.elementOpen("img", "5483d2c1-1aa0-4557-a671-ed7b2391fd3e", hoisted10$1);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  if (ctrl.pending) {
    incrementalDom.elementOpen("button", "4d932f3e-b986-476e-993f-94f82fdc51e1", hoisted11, "onclick", function ($event) {
      var $element = this;
      ctrl.showAwards(ctrl.iid, 'pending');
    });
    incrementalDom.elementOpen("img", "b26fcbfb-40d6-4bfc-9b8e-73190fb94a37", hoisted12);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  incrementalDom.elementOpen("button", "99e62393-9aeb-4b48-a12e-9d7660e0bf81", hoisted13, "onclick", function ($event) {
    var $element = this;
    ctrl.addTicket(ctrl.iid);
  });
  incrementalDom.elementOpen("img", "6e326307-83f1-4b72-9ef6-76833b70b21c", hoisted14);
  incrementalDom.elementClose("img");
  incrementalDom.elementClose("button");
  if (ctrl.added || ctrl.pending || ctrl.earned) {
    incrementalDom.elementOpen("button", "a170ffde-f09f-4ec2-bf7d-b4990c8ca561", hoisted15, "onclick", function ($event) {
      var $element = this;
      ctrl.delete(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "62b725ee-c5dc-4967-8ec5-1a1ebf084396", hoisted16);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  incrementalDom.elementOpen("button", "cd12aeba-bd83-4597-8ab0-dec9f7c15018", hoisted17);
  incrementalDom.text("" + ctrl.achievements + "");
  incrementalDom.elementClose("button");
  incrementalDom.elementOpen("button", "a3ebd8f2-6c88-4fac-9ddc-35149494b83b", hoisted18, "onclick", function ($event) {
    var $element = this;
    ctrl.toggle();
  });
  if (!ctrl.collapsed) {
    incrementalDom.elementOpen("span");
    incrementalDom.text("▲");
    incrementalDom.elementClose("span");
  }
  if (ctrl.collapsed) {
    incrementalDom.elementOpen("span");
    incrementalDom.text("▼");
    incrementalDom.elementClose("span");
  }
  incrementalDom.elementClose("button");
  incrementalDom.elementClose("div");
  incrementalDom.elementClose("div");
  incrementalDom.elementOpen("div", "d2c09432-3f86-4a70-b304-b0cc7586869a", hoisted19);
  incrementalDom.text("" + ctrl.description + "");
  incrementalDom.elementClose("div");
  if (ctrl.showAchievements) {
    incrementalDom.elementOpen("achievements-wrapper");
    incrementalDom.elementOpen("header");
    incrementalDom.elementOpen("title");
    incrementalDom.text("Achievements:");
    incrementalDom.elementClose("title");
    incrementalDom.elementOpen("button", "fc2932b6-9d7c-4bc8-99a8-21ad10f82585", hoisted20, "onclick", function ($event) {
      var $element = this;
      ctrl.hideAchievements(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "9a4b8215-373b-485d-a099-eb15c3e9d263", hoisted21);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
    incrementalDom.elementClose("header");
    __target$6 = ctrl.awards;
    if (__target$6) {
      (__target$6.forEach ? __target$6 : Object.keys(__target$6)).forEach(function ($value, $item, $target) {
        var item = $value;
        var $key = "3f5114c1-6064-4fa7-9c94-3284301d7918_" + $item;
        incrementalDom.elementOpen("section", $key, hoisted22);
        if (ctrl.awards[item].pending && parseInt(ctrl.awards[item].skillId, 10) === parseInt(ctrl.iid, 10)) {
          incrementalDom.elementOpen("story");
          incrementalDom.text("" + ctrl.awards[item].pending.story + "");
          incrementalDom.elementClose("story");
          incrementalDom.elementOpen("status");
          incrementalDom.elementOpen("state");
          incrementalDom.text("Pending");
          incrementalDom.elementClose("state");
          incrementalDom.elementOpen("date");
          incrementalDom.text("Date: (" + new Date(ctrl.awards[item].pending.date).toLocaleString() + ")");
          incrementalDom.elementClose("date");
          incrementalDom.elementClose("status");
        }
        if (ctrl.awards[item].awarded && ctrl.awards[item].skillId === ctrl.iid) {
          incrementalDom.elementOpen("story");
          incrementalDom.text("" + ctrl.awards[item].awarded.story + "");
          incrementalDom.elementClose("story");
          incrementalDom.elementOpen("status");
          incrementalDom.elementOpen("state");
          incrementalDom.text("Awarded");
          incrementalDom.elementClose("state");
          incrementalDom.elementOpen("date");
          incrementalDom.text("Date: (" + new Date(ctrl.awards[item].awarded.date).toLocaleString() + ")");
          incrementalDom.elementClose("date");
          incrementalDom.elementClose("status");
        }
        incrementalDom.elementClose("section");
      }, this);
    }
    incrementalDom.elementClose("achievements-wrapper");
  }
  if (ctrl.showAlert) {
    incrementalDom.elementOpen("alert", null, null, "class", ctrl.alertClass);
    incrementalDom.text("" + ctrl.alertText + "");
    incrementalDom.elementClose("alert");
  }
  if (ctrl.showSkillEditor) {
    incrementalDom.elementOpen("skill-editor");
    incrementalDom.elementOpen("header");
    incrementalDom.text(" \
              Applying for a Skill Achievement \
            ");
    incrementalDom.elementClose("header");
    incrementalDom.elementOpen("p");
    incrementalDom.text(" \
              Congratultions on applying for a skill achievment award! Once you submit your request, \
              someone will review and approve it. Please share your experience, and sign up to help others. \
            ");
    incrementalDom.elementClose("p");
    incrementalDom.elementOpen("textarea", "a85805a3-a8a4-4051-ba9f-0d24a4b8580e", hoisted23);
    incrementalDom.elementClose("textarea");
    incrementalDom.elementOpen("div", "1a1a4a7f-ad46-47f6-be94-f21129e8e5f3", hoisted24);
    incrementalDom.elementOpen("input", "097ecc77-ee79-4ab8-9ed2-da108e769af3", hoisted25);
    incrementalDom.elementClose("input");
    incrementalDom.elementOpen("span");
    incrementalDom.text("Yes, I'm willing to share my experience");
    incrementalDom.elementClose("span");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "95aabfaf-1f43-4701-8fb1-cd41f8f560df", hoisted26);
    incrementalDom.elementOpen("input", "796bac37-8f16-474d-a622-6e7458c56a2d", hoisted27);
    incrementalDom.elementClose("input");
    incrementalDom.elementOpen("span");
    incrementalDom.text("Yes, I'm willing to help others achieve this skill.");
    incrementalDom.elementClose("span");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "4b6a3661-aaa8-4c98-9124-7a336dfe0857", hoisted28);
    incrementalDom.elementOpen("button", "f5ce8aff-fbda-41a4-9145-fbdc99215356", hoisted29, "onclick", function ($event) {
      var $element = this;
      ctrl.applyForAchievment();
    });
    incrementalDom.text("Apply");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("a", "244572ae-4050-4c66-9ba1-d30b8b043d95", hoisted30, "onclick", function ($event) {
      var $element = this;
      ctrl.hideSkillEditor();
    });
    incrementalDom.text("Cancel");
    incrementalDom.elementClose("a");
    incrementalDom.elementClose("div");
    incrementalDom.elementClose("skill-editor");
  }
  if (!ctrl.collapsed) {
    incrementalDom.elementOpen("div", "a0cee868-d88c-4b27-9fcc-39272b95ee1e", hoisted31);
    if (ctrl.html && ctrl.html !== '') {
      var el = incrementalDom.currentElement();
      el.innerHTML = ctrl.html;
    }
    incrementalDom.skip();
    incrementalDom.elementClose("div");
  }
  incrementalDom.elementClose("div");
}

var css$6 = "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\n:host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.collapsable-panel .panel {\n  border: 1px solid #ccc;\n  margin-bottom: 8px;\n}\n.collapsable-panel .panel .heading {\n  display: flex;\n  border-bottom: 1px solid #ccc;\n}\n.collapsable-panel .panel .heading .title {\n  font-size: 1.2em;\n  flex: 1;\n  padding-left: 1vw;\n}\n.collapsable-panel .panel .heading .button-group {\n  display: flex;\n  justify-content: flex-end;\n}\n.collapsable-panel .panel .heading .button-group button {\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  width: 28px;\n  height: 28px;\n  border-left: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  font-size: .75em;\n  cursor: pointer;\n  line-height: normal;\n}\n.collapsable-panel .panel .heading .button-group button img {\n  height: 100%;\n  width: 100%;\n}\n.collapsable-panel .panel .description {\n  font-size: 1em;\n  font-style: italic;\n  padding-left: 1vw;\n}\n.collapsable-panel .panel .html {\n  font-size: 1em;\n  padding: 1vw;\n  border-top: 1px solid #ccc;\n}\n.collapsable-panel .panel alert {\n  display: flex;\n  padding: 1vh 1vw;\n  font-size: .75em;\n  border-top: 1px solid #ccc;\n}\n.collapsable-panel .panel alert.good {\n  background-color: rgba(100, 200, 100, 0.1);\n}\n.collapsable-panel .panel alert.bad {\n  background-color: rgba(200, 100, 100, 0.1);\n}\n.collapsable-panel skill-editor {\n  display: flex;\n  flex-direction: column;\n  margin: 1vh 1vw;\n  border: 2px solid gold;\n  font-size: .75em;\n  padding: 1vh 1vw;\n}\n.collapsable-panel skill-editor header {\n  display: block;\n  font-size: 1em;\n}\n.collapsable-panel skill-editor p {\n  font-size: .75em;\n}\n.collapsable-panel skill-editor .control-container,\n.collapsable-panel skill-editor .button-group {\n  display: flex;\n  font-size: .8em;\n  margin-top: 1vh;\n  align-items: center;\n}\n.collapsable-panel skill-editor input[type='checkbox'] {\n  margin-right: 2vw;\n}\n.collapsable-panel skill-editor .button-group a {\n  margin-left: 2vw;\n}\n.collapsable-panel achievements-wrapper {\n  display: flex;\n  flex-direction: column;\n  margin: 1vh 1vw;\n  padding: 1vh 1vw;\n  background-color: rgba(245, 191, 35, 0.2);\n  font-size: .75em;\n}\n.collapsable-panel achievements-wrapper header {\n  display: flex;\n}\n.collapsable-panel achievements-wrapper header button {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  outline: none;\n  width: 16px;\n  height: 16px;\n  position: relative;\n  top: -1vh;\n}\n.collapsable-panel achievements-wrapper header button img {\n  width: inherit;\n  height: inherit;\n}\n.collapsable-panel achievements-wrapper header title {\n  display: block;\n  flex: 1;\n}\n.collapsable-panel achievements-wrapper section {\n  flex: 1;\n}\n.collapsable-panel achievements-wrapper section story {\n  font-size: .8em;\n}\n.collapsable-panel achievements-wrapper section status {\n  display: flex;\n  border-top: 1px solid #ccc;\n  align-items: flex-end;\n}\n.collapsable-panel achievements-wrapper section status state {\n  display: inline-block;\n  flex: 1;\n  font-size: .7em;\n}\n.collapsable-panel achievements-wrapper section status date {\n  display: inline-block;\n  font-size: .6em;\n}\n";

var CollapsablePanel = function (_HTMLElement) {
  inherits(CollapsablePanel, _HTMLElement);

  function CollapsablePanel() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, CollapsablePanel);

    var _this = possibleConstructorReturn(this, (CollapsablePanel.__proto__ || Object.getPrototypeOf(CollapsablePanel)).call(this));

    _this.config = config;
    _this.collapsed = true;

    document.addEventListener('awardsChanged', _this._updateView.bind(_this));
    document.addEventListener('skillsChanged', _this._updateView.bind(_this));
    return _this;
  }

  createClass(CollapsablePanel, [{
    key: 'add',
    value: function add(skillId) {
      var addAlert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'added';
      var share = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var help = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      this.skill = this.sColl.findOne({ id: skillId });
      var award = this.aColl.findOne({ skillId: skillId, userId: user.id });
      if (this.skill && award && !this.skill.multiple) {
        if (addAlert) this.addAlert('This skill was not added to your list of skills because it has already been added to your list. To see your list, check the My Skills checkbox.', 'bad');
      } else if (this.skill && !award) {
        this.aColl.insert({
          id: uuid(),
          skillId: skillId,
          userId: user.id,
          type: type,
          date: new Date().toISOString(),
          share: share,
          help: help
        });
        if (addAlert) this.addAlert('This skill has been added. You may apply for achieving this skill at any time.', 'good');
      }
    }
  }, {
    key: 'addAlert',
    value: function addAlert(text$$1, className) {
      var _this2 = this;

      var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;

      this.showAlert = true;
      this.alertText = text$$1;
      this.alertClass = className;
      setTimeout(function () {
        _this2.showAlert = false;
        _this2.alertText = '';
        _this2.alertClass = '';
        _this2._updateView();
      }, timeout);
      this._updateView();
    }
  }, {
    key: 'addAndShowAchievementEditor',
    value: function addAndShowAchievementEditor(id) {
      this.add(id, false);
      this.showSkillEditor = true;
      this._updateView();
    }
  }, {
    key: 'applyForAchievment',
    value: function applyForAchievment() {
      var userAwardEntry = this.aColl.findOne({ skillId: this.skill.id, userId: user.id });
      var story = this.element.querySelector("textarea[name='achievement']").value;
      var share = this.element.querySelector("input[name='share']").value;
      var help = this.element.querySelector("input[name='helping']").value;

      if (userAwardEntry) {
        userAwardEntry.type = 'pending';
        userAwardEntry.date = new Date().toISOString();
        userAwardEntry.story = story;
        userAwardEntry.share = share;
        userAwardEntry.help = help;
        this.aColl.update(userAwardEntry);
        this.addAlert('You achievement application has been received. You will hear back shortly. While you are waiting, don\'t delete this skill from your list.', 'good');
        this._cancelEdit();
      }
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (name && nVal !== oVal) {
        if (name === 'earned' || name === 'added' || name === 'pending') this[name] = Boolean(nVal === 'true');else this[name] = nVal;
        this._updateView();
      }
    }
  }, {
    key: '_cancelEdit',
    value: function _cancelEdit() {
      this.showSkillEditor = false;
      this.skill = null;
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = '<style>' + css$6 + '</style><div class="collapsable-panel"></div>';
      this.element = this.shadowRoot.querySelector('.collapsable-panel');
      this.aColl = db.getCollection('awards');
      this.sColl = db.getCollection('skills');
      this.tColl = db.getCollection('tickets');
      this.aColl.setChangesApi(true);
      this.sColl.setChangesApi(true);
      this.tColl.setChangesApi(true);
      this.adv = this.aColl.addDynamicView('awards');
      this.sdv = this.sColl.addDynamicView('skills');
      this._updateView();
    }
  }, {
    key: '_combineSkillsAndAwards',
    value: function _combineSkillsAndAwards() {
      this._updateView();
    }
  }, {
    key: 'delete',
    value: function _delete(skillId) {
      var _this3 = this;

      var skill = this.sColl.findOne({ id: skillId });
      var pendingOrEarned = this.aColl.where(function (award) {
        return award.skillId === skillId && award.userId === user.id && award.type === 'pending' || award.type === 'earned';
      });
      this._cancelEdit();
      if (pendingOrEarned.length > 0) {
        var modal = new RbhModal();
        modal.heading = 'Already Pending or Awarded';
        modal.body = 'Deleting this skill will remove all awards and pending awards. Click "OK" to delete this skill and all awards and pending awards.';
        modal.primary = 'OK';
        modal.cancel = 'Cancel';
        document.querySelector('body').appendChild(modal);
        document.addEventListener('rbhModalButtonClick', function (evt) {
          if (evt.detail === 'primary') {
            _this3.aColl.findAndRemove({ skillId: skillId, userId: user.id });
            _this3.addAlert('This skill has been removed. You may add it again at any time.', 'bad');
          }
          modal.remove();
        });
      } else {
        this.aColl.findAndRemove({ skillId: skillId, userId: user.id });
        this.addAlert('This skill has been removed. You may add it again at any time.', 'bad');
      }
      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.aColl.removeDynamicView('awards');
      this.sColl.removeDynamicView('skills');
      document.removeEventListener('awardsChanged', this._updateView.bind(this));
      document.removeEventListener('skillsChanged', this._updateView.bind(this));
    }
  }, {
    key: 'addTicket',
    value: function addTicket(skillId) {
      var ticket = this.tColl.findOne({ skillId: skillId, userId: user.id });
      if (ticket) this.addAlert('You have already requested help with this skill. Someone will be contacting you shortly.', 'bad');else {
        this.tColl.insertOne({
          skillId: skillId,
          userId: user.id,
          date: new Date().toISOString(),
          type: 'open'
        });
        this.addAlert('Your reqeust for help has been logged. You will be contacted shortly.', 'good');
      }
    }
  }, {
    key: 'hideAchievements',
    value: function hideAchievements(skillId) {
      // TODO: fix this
      this.showAchievements = false;
      this._updateView();
    }
  }, {
    key: 'hideSkillEditor',
    value: function hideSkillEditor() {
      this.showSkillEditor = false;
      this._updateView();
    }
  }, {
    key: 'showAwards',
    value: function showAwards(skillId, type) {
      // TODO: fix this too
      this._updateView();
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.collapsed = !this.collapsed;
      this._updateView();
    }
  }, {
    key: '_updateView',
    value: function _updateView() {
      this.awards = this.adv.data();
      this.skills = this.sdv.data();
      if (this.element) incrementalDom.patch(this.element, render$6, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return ['achievements', 'added', 'collapsed', 'description', 'earned', 'heading', 'html', 'iid', 'pending', 'shared'];
    }
  }]);
  return CollapsablePanel;
}(HTMLElement);

customElements.define('collapsable-panel', CollapsablePanel);

var HomeAuthenticated = function (_HTMLElement) {
  inherits(HomeAuthenticated, _HTMLElement);

  function HomeAuthenticated() {
    classCallCheck(this, HomeAuthenticated);

    var _this = possibleConstructorReturn(this, (HomeAuthenticated.__proto__ || Object.getPrototypeOf(HomeAuthenticated)).call(this));

    _this.user = user;
    _this.skills = [];
    _this.mySkills = [];
    _this.mine = false;

    document.addEventListener('userUnauthenticated', function () {
      router.navigate('/login');
    });
    document.addEventListener('awardsChanged', _this._updateView.bind(_this));
    document.addEventListener('skillsChanged', _this._updateView.bind(_this));
    return _this;
  }

  createClass(HomeAuthenticated, [{
    key: 'anchorClickHandler',
    value: function anchorClickHandler(evt) {
      if (evt.target.tagName !== 'A') return;
      router.navigate(evt.target.getAttribute('href'));
      evt.preventDefault();
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {}
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = '<style>' + css$5 + '</style><div id="home"></div>';
      this.shadowRoot.addEventListener('click', this.anchorClickHandler.bind(this));
      this.element = this.shadowRoot.querySelector('div#home');
      this.aColl = db.getCollection('awards');
      this.sColl = db.getCollection('skills');
      this.adv = this.aColl.addDynamicView('awards');
      this.sdv = this.sColl.addDynamicView('skills');

      this._updateView();
    }
  }, {
    key: '_combineSkillsAndAwards',
    value: function _combineSkillsAndAwards() {
      var _this2 = this;

      var _awards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var _skills = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      // console.log("_awards", _awards)
      return _skills.map(function (skill) {
        var award = _awards.find(function (awrd) {
          return awrd.skillId === skill.id && awrd.userId === _this2.user.id;
        });
        return {
          id: skill.id,
          title: skill.title,
          description: skill.description,
          multiple: !!skill.multiple,
          achievements: skill.achievements,
          html: skill.html,
          added: !!award && award.type === 'added',
          earned: !!award && award.type === 'earned',
          pending: !!award && award.type === 'pending',
          shared: !!award && award.share,
          type: award ? award.type : null
        };
      });
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.adv.removeFilters();
      this.sdv.removeFilters();
      document.removeEventListener('userUnauthenticated', function () {
        router.navigate('/login');
      });
      document.removeEventListener('awardsChanged', this._updateView.bind(this));
      document.removeEventListener('skillsChanged', this._updateView.bind(this));
    }
  }, {
    key: 'filterSkills',
    value: function filterSkills(val) {
      var str = val ? val.toLowerCase() : null;
      // console.log("str", str);
      this.sdv.removeFilters();
      if (str) {
        this.sdv.applyWhere(function (skill) {
          if (skill.title && skill.title.toLowerCase().indexOf(str) !== -1) return true;
          if (skill.description && skill.description.toLowerCase().indexOf(str) !== -1) return true;
          if (skill.category && skill.category.toLowerCase().indexOf(str) !== -1) return true;
        });
      }
      this._updateView();
    }
  }, {
    key: 'filterMine',
    value: function filterMine(skills) {
      return skills.filter(function (skill) {
        return skill.added || skill.earned || skill.pending;
      });
    }
  }, {
    key: 'toggleMine',
    value: function toggleMine() {
      this.mine = !this.mine;
      this._updateView();
    }
  }, {
    key: '_updateView',
    value: function _updateView() {
      var _awards = this.adv.data();
      var _skills = this.sdv.data();
      this.skills = this._combineSkillsAndAwards(_awards, _skills);
      this.mySkills = this.filterMine(this.skills);
      this.viewSkills = this.mine ? this.mySkills : this.skills;
      // console.log("this.viewSkills", this.viewSkills)
      if (this.element) incrementalDom.patch(this.element, render$5, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return HomeAuthenticated;
}(HTMLElement);

customElements.define('home-authenticated', HomeAuthenticated);

var hoisted1$7 = ["type", "text", "name", "search-goals", "placeholder", "Search ..."];
var hoisted2$5 = ["type", "button", "add-button", ""];
function render$7(ctrl) {
  incrementalDom.elementOpen("header");
  incrementalDom.elementOpen("input", "053a4d76-b1e4-4666-84c4-ca2aee75c7a0", hoisted1$7, "onkeyup", function ($event) {
    var $element = this;
    ctrl.goalSearch(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("button", "5693014c-53cb-42a1-9087-2654ba4f186e", hoisted2$5);
  incrementalDom.text("Add");
  incrementalDom.elementClose("button");
  incrementalDom.elementClose("header");
  incrementalDom.elementOpen("section");
  incrementalDom.elementClose("section");
}

var css$7 = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px;\n  /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  box-shadow: none;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  font-size: .8em;\n}\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0;\n}\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600;\n}\nfieldset {\n  padding: 0;\n  border-width: 0;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline;\n}\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal;\n}\nuser-skills {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nuser-skills #user-skills {\n  flex: 1;\n  margin: 1vh 1vw;\n  padding: 1vh 1vw;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n}\nuser-skills #user-skills header {\n  display: flex;\n}\nuser-skills #user-skills header input {\n  flex: 5;\n}\nuser-skills #user-skills header button {\n  flex: 1;\n  margin-left: 1vw;\n}\n";

var UserSkills = function (_HTMLElement) {
  inherits(UserSkills, _HTMLElement);

  function UserSkills() {
    classCallCheck(this, UserSkills);

    var _this = possibleConstructorReturn(this, (UserSkills.__proto__ || Object.getPrototypeOf(UserSkills)).call(this));

    _this.user = user;
    return _this;
  }

  createClass(UserSkills, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {}
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.innerHTML = '<style>' + css$7 + '</style><div id="user-skills"></div>';
      this.element = this.querySelector('div#user-skills');
      this.active = 'goals';
      this.updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: 'selectTab',
    value: function selectTab(tab) {
      this.active = tab;
      this.updateView();
    }
  }, {
    key: 'updateView',
    value: function updateView() {
      // wrap in if. otherwise ff and safari fail
      if (this.element) incrementalDom.patch(this.element, render$7, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [''];
    }
  }]);
  return UserSkills;
}(HTMLElement);

customElements.define('user-skills', UserSkills);

var hoisted1$8 = ["type", "radio", "name", "tabgroup", "id", "users-tab-control", "value", "users"];
var hoisted2$6 = ["for", "users-tab-control"];
var hoisted3$5 = ["type", "radio", "id", "skills-tab-control", "name", "tabgroup", "value", "skills"];
var hoisted4$4 = ["for", "skills-tab-control"];
var hoisted5$4 = ["type", "radio", "id", "awards-tab-control", "name", "tabgroup", "value", "awards"];
var hoisted6$4 = ["for", "awards-tab-control"];
var hoisted7$4 = ["type", "radio", "id", "assistance-tab-control", "name", "tabgroup", "value", "assistance"];
var hoisted8$3 = ["for", "assistance-tab-control"];
var hoisted9$2 = ["type", "radio", "id", "reports-tab-control", "name", "tabgroup", "value", "reports"];
var hoisted10$2 = ["for", "reports-tab-control"];
function render$8(ctrl) {
  incrementalDom.elementOpen("tabs");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "48b453e6-de66-48a0-a712-d89df3b838da", hoisted1$8, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "7c9bf934-8d45-4e9f-a43e-194aec9aa95b", hoisted2$6);
  incrementalDom.text("Users");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "450a66f1-5c76-4fb2-8abf-517bc102c7b4", hoisted3$5, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "ecf8df14-0b42-48e8-97e7-bccc24dc9184", hoisted4$4);
  incrementalDom.text("Skills");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "5e852448-b07c-4fba-aa74-b946b4c95300", hoisted5$4, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "80b2e894-4ad3-4267-8779-bf8d12b2ff81", hoisted6$4);
  incrementalDom.text("Awards");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "7e85efa1-9c49-438a-bfda-1e4480ad0441", hoisted7$4, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "21771c4c-81be-4461-934d-1f366d3ba3c0", hoisted8$3);
  incrementalDom.text("Assistance");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "cf844402-97a4-4ad2-b163-f4dc64eddbe4", hoisted9$2, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "54a27a23-edaf-4e28-a7f4-295eca792f70", hoisted10$2);
  incrementalDom.text("Reports");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementClose("tabs");
  incrementalDom.elementOpen("content");
  incrementalDom.elementClose("content");
}

var css$8 = "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\nsys-admin {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n}\n#sys-admin {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n#sys-admin tabs {\n  display: flex;\n  margin: 2vw 2vw 0 2vw;\n  background-color: white;\n  justify-content: flex-start;\n}\n#sys-admin tab {\n  display: block;\n  flex: 1;\n}\n#sys-admin tab input[type=radio] {\n  display: none;\n}\n#sys-admin tab input[type=radio]:checked ~ label {\n  background: white;\n  border-bottom: 1px solid white;\n  z-index: 2;\n}\n#sys-admin tab label {\n  display: block;\n  background: #eee;\n  padding: 10px;\n  border: 1px solid #ccc;\n  font-size: 17px;\n  cursor: pointer;\n}\n#sys-admin content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: white;\n  border-right: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n  margin: 0 2vw 1vh 2vw;\n  padding: 2vw;\n  overflow: hidden;\n}\n";

var css$9 = ".button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n}\nsection[name='header'] {\n  display: flex;\n  flex-direction: column;\n}\nsection[name='header'] input[name=\"search\"] {\n  height: 38px;\n  font-size: 1em;\n  padding-left: 1vw;\n}\nsection[name='header'] #filter {\n  display: flex;\n  align-items: center;\n  height: 38px;\n  border: 1px solid #ccc;\n  border-top: 0;\n}\nsection[name='header'] #filter label {\n  flex: 1;\n  padding-left: 1vw;\n}\nsection[name='tickets'] {\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  margin-top: 1vh;\n  border: 1px solid #ccc;\n  display: flex;\n  flex-direction: column;\n  padding: 1vw 1vh;\n}\nsection[name='tickets'] .row {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: .9em;\n  padding: 1vh 1vw;\n}\nsection[name='tickets'] .row.odd {\n  background-color: #f4f4f4;\n}\nsection[name='tickets'] .row user,\nsection[name='tickets'] .row skill,\nsection[name='tickets'] .row date,\nsection[name='tickets'] .row help,\nsection[name='tickets'] .row share,\nsection[name='tickets'] .row story,\nsection[name='tickets'] .row actions {\n  display: flex;\n  height: 28px;\n  width: 100%;\n  align-items: center;\n}\nsection[name='tickets'] .row user name,\nsection[name='tickets'] .row skill name,\nsection[name='tickets'] .row date name,\nsection[name='tickets'] .row help name,\nsection[name='tickets'] .row share name,\nsection[name='tickets'] .row story name,\nsection[name='tickets'] .row actions name {\n  flex: 1;\n  font-weight: bold;\n}\nsection[name='tickets'] .row user value,\nsection[name='tickets'] .row skill value,\nsection[name='tickets'] .row date value,\nsection[name='tickets'] .row help value,\nsection[name='tickets'] .row share value,\nsection[name='tickets'] .row story value,\nsection[name='tickets'] .row actions value {\n  display: inline-block;\n  flex: 4;\n}\nsection[name='tickets'] .row actions {\n  height: 48px;\n}\nsection[name='tickets'] .row actions value {\n  padding: 0;\n}\nsection[name='tickets'] .row actions value button {\n  margin-top: 2vh;\n  margin-right: 1vw;\n}\n";

var hoisted1$9 = ["name", "header"];
var hoisted2$7 = ["type", "text", "name", "search", "value", "", "placeholder", "Search ..."];
var hoisted3$6 = ["id", "filter"];
var hoisted4$5 = ["for", ""];
var hoisted5$5 = ["type", "radio", "name", "ticketsType", "value", "", "checked", ""];
var hoisted6$5 = ["for", ""];
var hoisted7$5 = ["type", "radio", "name", "ticketsType", "value", "open"];
var hoisted8$4 = ["for", ""];
var hoisted9$3 = ["type", "radio", "name", "ticketsType", "value", "closed"];
var hoisted10$3 = ["name", "tickets"];
var hoisted11$1 = ["type", "button", "class", "primary", "name", "close"];
var hoisted12$1 = ["type", "button", "class", "primary", "name", "reopen"];
var hoisted13$1 = ["type", "button", "class", "danger", "name", "delete"];
var __target$9;

function render$9(ctrl) {
  incrementalDom.elementOpen("section", "59716acc-9311-4f62-9613-3c666163bef3", hoisted1$9);
  incrementalDom.elementOpen("input", "0ae28ec9-4e6a-48d2-afbf-597b8db7a28c", hoisted2$7, "onkeyup", function ($event) {
    var $element = this;
    ctrl.search.text = this.value;ctrl.filterTickets();
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("div", "6b28623e-8d2e-48f4-903e-22bfd5f25f99", hoisted3$6);
  incrementalDom.elementOpen("label", "5c95e759-d745-4056-8779-4d9168c59841", hoisted4$5);
  incrementalDom.elementOpen("input", "370347c9-c2bf-47a8-b96a-dde27ace97ba", hoisted5$5, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterTickets();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            All \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementOpen("label", "77576f7e-f39d-4430-99c8-fd2ea9140264", hoisted6$5);
  incrementalDom.elementOpen("input", "ee11c61b-b892-4ebd-bace-fd0c5755fdfa", hoisted7$5, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterTickets();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            Open \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementOpen("label", "9c40c6b9-2984-40a0-8600-7c24b6555758", hoisted8$4);
  incrementalDom.elementOpen("input", "c63352e7-399c-403b-9c48-2a0aae6e31b3", hoisted9$3, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterTickets();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            Closed \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("div");
  incrementalDom.elementClose("section");
  if (ctrl.tickets.length > 0) {
    incrementalDom.elementOpen("section", "0a306506-7683-4a85-ad11-59c3b8e3df53", hoisted10$3);
    __target$9 = ctrl.tickets;
    if (__target$9) {
      (__target$9.forEach ? __target$9 : Object.keys(__target$9)).forEach(function ($value, $item, $target) {
        var ticket = $value;
        var $key = "a77ffd8a-7758-435d-89e3-98e73ff31a5a_" + $item;
        incrementalDom.elementOpen("div", $key, null, "class", $item % 2 ? 'row odd' : 'row even');
        incrementalDom.elementOpen("user");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Name");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        incrementalDom.text("" + ticket.user.displayName + "");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("user");
        incrementalDom.elementOpen("skill");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Skill");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        incrementalDom.text("" + ticket.skill.title + "");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("skill");
        incrementalDom.elementOpen("date");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Date");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        incrementalDom.text("" + new Date(ticket.date).toLocaleDateString() + "");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("date");
        incrementalDom.elementOpen("actions");
        incrementalDom.elementOpen("name");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        if (ticket.type === 'open' || ticket.type === '') {
          incrementalDom.elementOpen("button", "3506b651-3aff-4d93-a85c-bc876bdd159e_" + $key, hoisted11$1, "onclick", function ($event) {
            var $element = this;
            ctrl.close(ticket);
          });
          incrementalDom.text("Close");
          incrementalDom.elementClose("button");
        }
        if (ticket.type === 'closed') {
          incrementalDom.elementOpen("button", "d37c6ebb-f216-466b-8e28-5d5ca26eb207_" + $key, hoisted12$1, "onclick", function ($event) {
            var $element = this;
            ctrl.open(ticket);
          });
          incrementalDom.text("Open");
          incrementalDom.elementClose("button");
        }
        incrementalDom.elementOpen("button", "d8be1dac-822d-4d4c-87be-04fea5d1c051_" + $key, hoisted13$1, "onclick", function ($event) {
          var $element = this;
          ctrl.delete(ticket);
        });
        incrementalDom.text("Delete");
        incrementalDom.elementClose("button");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("actions");
        incrementalDom.elementClose("div");
      }, this);
    }
    incrementalDom.elementClose("section");
  }
}

var AssistanceAdmin = function (_HTMLElement) {
  inherits(AssistanceAdmin, _HTMLElement);

  function AssistanceAdmin() {
    classCallCheck(this, AssistanceAdmin);

    var _this = possibleConstructorReturn(this, (AssistanceAdmin.__proto__ || Object.getPrototypeOf(AssistanceAdmin)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$9 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');
    _this.search = {};

    _this._joinData = function () {
      var tickets = _this.tdv.data();
      var skills = _this.sdv.data();
      var users = _this.udv.data();
      tickets.forEach(function (ticket) {
        ticket.skill = skills.find(function (skill) {
          return skill.id === ticket.skillId;
        });
        ticket.user = users.find(function (user) {
          return user.id === ticket.userId;
        });
      });
      return tickets;
    };

    _this._updateView = function () {
      _this.tickets = _this._joinData();
      if (_this.element) incrementalDom.patch(_this.element, render$9, _this);
    };
    return _this;
  }

  createClass(AssistanceAdmin, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        this._updateView();
      }
    }
  }, {
    key: 'close',
    value: function close(ticket) {
      ticket.type = 'closed';
      this.tColl.update(ticket);
      this._updateView();
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.sColl = db.getCollection('skills');
      this.tColl = db.getCollection('tickets');
      this.uColl = db.getCollection('users');

      this.tColl.setChangesApi(true);

      this.sdv = this.sColl.addDynamicView('skills');
      this.tdv = this.tColl.addDynamicView('tickets');
      this.udv = this.uColl.addDynamicView('users');

      document.addEventListener('ticketsChanged', this._updateView.bind(this));
      document.addEventListener('skillsChanged', this._updateView.bind(this));
      document.addEventListener('usersChanged', this._updateView.bind(this));

      this._updateView();
    }
  }, {
    key: 'delete',
    value: function _delete(ticket) {
      this.tColl.remove(ticket);
      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.sdv.removeFilters();
      this.tdv.removeFilters();
      this.udv.removeFilters();
      document.removeEventListener('ticketsChanged', this._updateView.bind(this));
      document.removeEventListener('skillsChanged', this._updateView.bind(this));
      document.removeEventListener('usersChanged', this._updateView.bind(this));
    }
  }, {
    key: 'filterTickets',
    value: function filterTickets() {
      var _this2 = this;

      // console.log("this.search", this.search)
      this.tdv.removeFilters();
      var re = this.search.text && this.search.text !== '' ? new RegExp(this.search.text) : null;

      if (!!(this.search.type && this.search.type !== '' && re)) {
        this.tdv.applyWhere(function (ticket) {
          return ticket.type === _this2.search.type && ticket.skill && ticket.skill.title && re.test(ticket.skill.title) || ticket.type === _this2.search.type && ticket.skill && ticket.skill.description && re.test(ticket.skill.description) || ticket.type === _this2.search.type && ticket.user && ticket.user.displayName && re.test(ticket.user.displayName) || ticket.type === _this2.search.type && ticket.user && ticket.user.firstName && re.test(ticket.user.firstName) || ticket.type === _this2.search.type && ticket.user && ticket.user.lastName && re.test(ticket.user.lastName) || ticket.type === _this2.search.type && ticket.user && ticket.user.email && re.test(ticket.user.email);
        });
      } else if (!!re) {
        this.tdv.applyWhere(function (ticket) {
          return ticket.skill && ticket.skill.title && re.test(ticket.skill.title) || ticket.skill && ticket.skill.description && re.test(ticket.skill.description) || ticket.user && ticket.user.displayName && re.test(ticket.user.displayName) || ticket.user && ticket.user.firstName && re.test(ticket.user.firstName) || ticket.user && ticket.user.lastName && re.test(ticket.user.lastName) || ticket.user && ticket.user.email && re.test(ticket.user.email);
        });
      } else if (this.search.type !== '') {
        this.tdv.applyWhere(function (ticket) {
          return ticket.type === _this2.search.type;
        });
      }
      this._updateView();
    }
  }, {
    key: 'open',
    value: function open(ticket) {
      ticket.type = 'open';
      this.tColl.update(ticket);
      this._updateView();
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return AssistanceAdmin;
}(HTMLElement);

customElements.define('assistance-admin', AssistanceAdmin);

var css$10 = ".button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n}\nsection[name='header'] {\n  display: flex;\n  flex-direction: column;\n}\nsection[name='header'] input[name=\"search\"] {\n  height: 38px;\n  font-size: 1em;\n  padding-left: 1vw;\n}\nsection[name='header'] #filter {\n  display: flex;\n  align-items: center;\n  height: 38px;\n  border: 1px solid #ccc;\n  border-top: 0;\n}\nsection[name='header'] #filter label {\n  flex: 1;\n  padding-left: 1vw;\n}\nsection[name='awards'] {\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  margin-top: 1vh;\n  border: 1px solid #ccc;\n  display: flex;\n  flex-direction: column;\n  padding: 1vw 1vh;\n}\nsection[name='awards'] .row {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: .9em;\n  padding: 1vh 1vw;\n}\nsection[name='awards'] .row.odd {\n  background-color: #f4f4f4;\n}\nsection[name='awards'] .row user,\nsection[name='awards'] .row skill,\nsection[name='awards'] .row date,\nsection[name='awards'] .row help,\nsection[name='awards'] .row share,\nsection[name='awards'] .row story,\nsection[name='awards'] .row actions {\n  display: flex;\n  height: 28px;\n  width: 100%;\n  align-items: center;\n}\nsection[name='awards'] .row user name,\nsection[name='awards'] .row skill name,\nsection[name='awards'] .row date name,\nsection[name='awards'] .row help name,\nsection[name='awards'] .row share name,\nsection[name='awards'] .row story name,\nsection[name='awards'] .row actions name {\n  flex: 1;\n  font-weight: bold;\n}\nsection[name='awards'] .row user value,\nsection[name='awards'] .row skill value,\nsection[name='awards'] .row date value,\nsection[name='awards'] .row help value,\nsection[name='awards'] .row share value,\nsection[name='awards'] .row story value,\nsection[name='awards'] .row actions value {\n  display: inline-block;\n  flex: 4;\n}\nsection[name='awards'] .row story {\n  margin-top: 1vh;\n}\nsection[name='awards'] .row story value {\n  border: 1px solid #ccc;\n  padding: 1vh 1vw;\n  min-height: 3vh;\n}\nsection[name='awards'] .row actions {\n  height: 48px;\n}\nsection[name='awards'] .row actions value {\n  padding: 0;\n}\nsection[name='awards'] .row actions value button {\n  margin-top: 2vh;\n}\n";

var hoisted1$10 = ["name", "header"];
var hoisted2$8 = ["type", "text", "name", "search", "value", "", "placeholder", "Search ..."];
var hoisted3$7 = ["id", "filter"];
var hoisted4$6 = ["for", ""];
var hoisted5$6 = ["type", "radio", "name", "awardsType", "value", "", "checked", ""];
var hoisted6$6 = ["for", ""];
var hoisted7$6 = ["type", "radio", "name", "awardsType", "value", "pending"];
var hoisted8$5 = ["for", ""];
var hoisted9$4 = ["type", "radio", "name", "awardsType", "value", "earned"];
var hoisted10$4 = ["name", "awards"];
var hoisted11$2 = ["type", "button", "class", "primary", "name", "accept"];
var __target$10;

function render$10(ctrl) {
  incrementalDom.elementOpen("section", "5389f653-170e-4a29-9892-916dcf206345", hoisted1$10);
  incrementalDom.elementOpen("input", "9f3ec6d1-848a-42ed-a6f2-c8d89f3f9929", hoisted2$8, "onkeyup", function ($event) {
    var $element = this;
    ctrl.search.text = this.value;ctrl.filterAwards();
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("div", "85c02181-4688-485c-9d3e-cff6b7b2cf61", hoisted3$7);
  incrementalDom.elementOpen("label", "21d4273a-7923-4ca7-992a-c32f30692711", hoisted4$6);
  incrementalDom.elementOpen("input", "8214295b-f06f-4c9e-9283-bd22eed45081", hoisted5$6, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterAwards();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            All \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementOpen("label", "39e0b8a7-43d1-4f99-9aed-edc761315607", hoisted6$6);
  incrementalDom.elementOpen("input", "a6250657-f121-47c9-9a07-31d1360b098c", hoisted7$6, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterAwards();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            Pending \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementOpen("label", "61ce470d-ed4f-48c6-a5c9-5c7583f4e4a4", hoisted8$5);
  incrementalDom.elementOpen("input", "1d1d2d4e-4ca7-4959-b200-2ea2fc7dd64d", hoisted9$4, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterAwards();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            Earned \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("div");
  incrementalDom.elementClose("section");
  if (ctrl.awards.length > 0) {
    incrementalDom.elementOpen("section", "377862ce-8a8d-4169-97ac-91c39cb8f4ac", hoisted10$4);
    __target$10 = ctrl.awards;
    if (__target$10) {
      (__target$10.forEach ? __target$10 : Object.keys(__target$10)).forEach(function ($value, $item, $target) {
        var award = $value;
        var $key = "2aaaf87b-e137-4df1-a488-e836026704a5_" + $item;
        incrementalDom.elementOpen("div", $key, null, "class", $item % 2 ? 'row odd' : 'row even');
        incrementalDom.elementOpen("user");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Name");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        incrementalDom.text("" + award.user.displayName + "");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("user");
        incrementalDom.elementOpen("skill");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Skill");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        incrementalDom.text("" + award.skill.title + "");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("skill");
        incrementalDom.elementOpen("date");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Date");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        incrementalDom.text("" + new Date(award.date).toLocaleDateString() + "");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("date");
        incrementalDom.elementOpen("help");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Will Help");
        incrementalDom.elementClose("name");
        if (award.help) {
          incrementalDom.elementOpen("value");
          incrementalDom.text("Yes");
          incrementalDom.elementClose("value");
        }
        if (!award.help) {
          incrementalDom.elementOpen("value");
          incrementalDom.text("No");
          incrementalDom.elementClose("value");
        }
        incrementalDom.elementClose("help");
        incrementalDom.elementOpen("share");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Will Share");
        incrementalDom.elementClose("name");
        if (award.share) {
          incrementalDom.elementOpen("value");
          incrementalDom.text("Yes");
          incrementalDom.elementClose("value");
        }
        if (!award.share) {
          incrementalDom.elementOpen("value");
          incrementalDom.text("No");
          incrementalDom.elementClose("value");
        }
        incrementalDom.elementClose("share");
        incrementalDom.elementOpen("story");
        incrementalDom.elementOpen("name");
        incrementalDom.text("Story");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        incrementalDom.text("" + (award.story ? award.story : '') + "");
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("story");
        incrementalDom.elementOpen("actions");
        incrementalDom.elementOpen("name");
        incrementalDom.elementClose("name");
        incrementalDom.elementOpen("value");
        if (award.type === 'pending') {
          incrementalDom.elementOpen("button", "417e739b-e4a7-4c80-b181-ed787c8ebaa8_" + $key, hoisted11$2, "onclick", function ($event) {
            var $element = this;
            ctrl.grantAward(award);
          });
          incrementalDom.text("Accept");
          incrementalDom.elementClose("button");
        }
        incrementalDom.elementClose("value");
        incrementalDom.elementClose("actions");
        incrementalDom.elementClose("div");
      }, this);
    }
    incrementalDom.elementClose("section");
  }
}

var AwardsAdmin = function (_HTMLElement) {
  inherits(AwardsAdmin, _HTMLElement);

  function AwardsAdmin() {
    classCallCheck(this, AwardsAdmin);

    var _this = possibleConstructorReturn(this, (AwardsAdmin.__proto__ || Object.getPrototypeOf(AwardsAdmin)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$10 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');
    _this.search = {};

    document.addEventListener('awardsChanged', _this._updateView.bind(_this));
    document.addEventListener('skillsChanged', _this._updateView.bind(_this));
    document.addEventListener('usersChanged', _this._updateView.bind(_this));
    return _this;
  }

  createClass(AwardsAdmin, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        this._updateView();
      }
    }
  }, {
    key: '_joinData',
    value: function _joinData() {
      var awards = this.adv.data();
      var skills = this.sdv.data();
      var users = this.udv.data();
      awards.forEach(function (award) {
        award.skill = skills.find(function (skill) {
          return skill.id === award.skillId;
        });
        award.user = users.find(function (user) {
          return user.id === award.userId;
        });
      });
      return awards;
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.aColl = db.getCollection('awards');
      this.sColl = db.getCollection('skills');
      this.uColl = db.getCollection('users');

      this.adv = this.aColl.addDynamicView('awards');
      this.sdv = this.sColl.addDynamicView('skills');
      this.udv = this.uColl.addDynamicView('users');

      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.adv.removeFilters();
      this.sdv.removeFilters();
      this.udv.removeFilters();
      document.removeEventListener('awardsChanged', this._updateView.bind(this));
      document.removeEventListener('skillsChanged', this._updateView.bind(this));
      document.removeEventListener('usersChanged', this._updateView.bind(this));
    }
  }, {
    key: 'filterAwards',
    value: function filterAwards() {
      var _this2 = this;

      // console.log("this.search", this.search)
      this.adv.removeFilters();
      var re = this.search.text && this.search.text !== '' ? new RegExp(this.search.text) : null;

      if (!!(this.search.type && this.search.type !== '' && re)) {
        this.adv.applyWhere(function (award) {
          return award.type === _this2.search.type && award.skill && award.skill.title && re.test(award.skill.title) || award.type === _this2.search.type && award.skill && award.skill.description && re.test(award.skill.description) || award.type === _this2.search.type && award.user && award.user.displayName && re.test(award.user.displayName) || award.type === _this2.search.type && award.user && award.user.firstName && re.test(award.user.firstName) || award.type === _this2.search.type && award.user && award.user.lastName && re.test(award.user.lastName) || award.type === _this2.search.type && award.user && award.user.email && re.test(award.user.email);
        });
      } else if (!!re) {
        this.adv.applyWhere(function (award) {
          return award.skill && award.skill.title && re.test(award.skill.title) || award.skill && award.skill.description && re.test(award.skill.description) || award.user && award.user.displayName && re.test(award.user.displayName) || award.user && award.user.firstName && re.test(award.user.firstName) || award.user && award.user.lastName && re.test(award.user.lastName) || award.user && award.user.email && re.test(award.user.email);
        });
      } else if (this.search.type !== '') {
        this.adv.applyWhere(function (award) {
          return award.type === _this2.search.type;
        });
      }
      this._updateView();
    }
  }, {
    key: 'grantAward',
    value: function grantAward(award) {
      console.log("award", award);
    }
  }, {
    key: '_updateView',
    value: function _updateView() {
      this.awards = this._joinData();
      if (this.element) incrementalDom.patch(this.element, render$10, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return AwardsAdmin;
}(HTMLElement);

customElements.define('awards-admin', AwardsAdmin);

var css$11 = "";

function render$11(ctrl) {
  incrementalDom.text("Reports \
");
}

var ReportsAdmin = function (_HTMLElement) {
  inherits(ReportsAdmin, _HTMLElement);

  function ReportsAdmin() {
    classCallCheck(this, ReportsAdmin);

    var _this = possibleConstructorReturn(this, (ReportsAdmin.__proto__ || Object.getPrototypeOf(ReportsAdmin)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$11 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');
    return _this;
  }

  createClass(ReportsAdmin, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        this._updateView();
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: '_updateView',
    value: function _updateView() {
      if (this.element) incrementalDom.patch(this.element, render$11, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return ReportsAdmin;
}(HTMLElement);

customElements.define('reports-admin', ReportsAdmin);

var css$12 = ".button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px;\n  /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  box-shadow: none;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  font-size: .8em;\n}\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0;\n}\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600;\n}\nfieldset {\n  padding: 0;\n  border-width: 0;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline;\n}\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal;\n}\nskills-admin container {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nskills-admin container skills-search {\n  display: flex;\n  align-items: center;\n}\nskills-admin container skills-search input {\n  margin-right: 1vw;\n  flex: 1;\n}\nskills-admin container skills-list {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nskills-admin container form,\nskills-admin container skill-item {\n  flex: 1;\n}\nskills-admin container form {\n  display: flex;\n  flex-direction: column;\n}\nskills-admin container form skill-editor-title,\nskills-admin container form skill-editor-description,\nskills-admin container form skill-editor-multiplicity,\nskills-admin container form skill-editor-category {\n  display: flex;\n  margin-bottom: 1vh;\n}\nskills-admin container form skill-editor-title label,\nskills-admin container form skill-editor-description label,\nskills-admin container form skill-editor-multiplicity label,\nskills-admin container form skill-editor-category label {\n  flex: 1;\n}\nskills-admin container form skill-editor-title input,\nskills-admin container form skill-editor-description input,\nskills-admin container form skill-editor-multiplicity input,\nskills-admin container form skill-editor-category input,\nskills-admin container form skill-editor-title select,\nskills-admin container form skill-editor-description select,\nskills-admin container form skill-editor-multiplicity select,\nskills-admin container form skill-editor-category select {\n  flex: 4;\n}\nskills-admin container form #skill-editor {\n  min-height: 20vh;\n  margin-bottom: 2vh;\n}\nskills-admin container form skill-editor-actions button {\n  margin-right: 1vw;\n}\nskills-admin container skill-item {\n  display: flex;\n  align-items: center;\n  border: 1px solid #ccc;\n  padding: 1vh 1vw;\n  margin-top: 1vh;\n}\nskills-admin container skill-item.even {\n  background-color: rgba(244, 244, 244, 0.5);\n}\nskills-admin container skill-item .info {\n  flex: 1;\n}\n";

var hoisted1$11 = ["type", "text", "name", "skillsearch", "placeholder", "Search ..."];
var hoisted2$9 = ["type", "button", "name", "add"];
var hoisted3$8 = ["name", "skill"];
var hoisted4$7 = ["type", "text", "required", ""];
var hoisted5$7 = ["type", "text", "required", ""];
var hoisted6$7 = ["name", "category", "required", ""];
var hoisted7$7 = ["value", ""];
var hoisted8$6 = ["value", "booklet"];
var hoisted9$5 = ["value", "find"];
var hoisted10$5 = ["value", "take"];
var hoisted11$3 = ["value", "indexing"];
var hoisted12$2 = ["type", "checkbox"];
var hoisted13$2 = ["id", "skill-editor"];
var hoisted14$1 = ["type", "button", "name", "save", "class", "primary"];
var hoisted15$1 = ["type", "button", "name", "delete", "class", "danger"];
var hoisted16$1 = ["type", "button", "name", "cancel"];
var hoisted17$1 = ["class", "info"];
var hoisted18$1 = ["class", "title"];
var hoisted19$1 = ["class", "description"];
var hoisted20$1 = ["class", "action"];
var hoisted21$1 = ["type", "button"];
var __target$12;

function render$12(ctrl) {
  if (!ctrl.skillEditor) {
    incrementalDom.elementOpen("skills-search");
    incrementalDom.elementOpen("input", "668f6e0e-dee1-482d-a80a-3e0b69bdd99c", hoisted1$11, "onkeyup", function ($event) {
      var $element = this;
      ctrl.filterSkills(this.value);
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementOpen("button", "f150b5bc-7c22-49f7-8e67-d5b07ed89d35", hoisted2$9, "onclick", function ($event) {
      var $element = this;
      ctrl.addSkill();
    });
    incrementalDom.text("Add");
    incrementalDom.elementClose("button");
    incrementalDom.elementClose("skills-search");
  }
  incrementalDom.elementOpen("skills-list");
  if (ctrl.skillEditor) {
    incrementalDom.elementOpen("form", "a60c0b07-cf99-4e8e-8a77-8bf942218aa1", hoisted3$8);
    incrementalDom.elementOpen("skill-editor-title");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Title:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "6e032215-9ba9-4ba9-8efb-880b42b896e3", hoisted4$7, "name", ctrl.skill.title, "value", ctrl.skill.title, "onchange", function ($event) {
      var $element = this;
      ctrl.skill.title = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("skill-editor-title");
    incrementalDom.elementOpen("skill-editor-description");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Description:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "acd836e8-1887-4793-9450-6e19c17a9e3e", hoisted5$7, "name", ctrl.skill.description, "value", ctrl.skill.description, "onchange", function ($event) {
      var $element = this;
      ctrl.skill.description = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("skill-editor-description");
    incrementalDom.elementOpen("skill-editor-category");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Category:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("select", "ab4f87b1-5c20-47a7-afa4-8c44236cb267", hoisted6$7, "onchange", function ($event) {
      var $element = this;
      ctrl.skill.category = this.value;
    });
    incrementalDom.elementOpen("option", "65b2a8e1-b184-4a18-bde7-c910a6e61525", hoisted7$7);
    incrementalDom.text("Select");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "32d27b81-0cfe-4df4-9a87-b6bfa07636f8", hoisted8$6, "selected", ctrl.skill.category === 'booklet' ? true : null);
    incrementalDom.text("Booklet");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "fc2bf292-217b-4026-a15d-442f2c5d45b8", hoisted9$5, "selected", ctrl.skill.category === 'find' ? true : null);
    incrementalDom.text("Find");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "31b38d88-3191-4f9f-ae09-eea79ed0d813", hoisted10$5, "selected", ctrl.skill.category === 'take' ? true : null);
    incrementalDom.text("Take");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "6888ef6c-6b61-4674-a9cd-4d20e5632d2c", hoisted11$3, "selected", ctrl.skill.category === 'indexing' ? true : null);
    incrementalDom.text("Indexing");
    incrementalDom.elementClose("option");
    incrementalDom.elementClose("select");
    incrementalDom.elementClose("skill-editor-category");
    incrementalDom.elementOpen("skill-editor-multiplicity");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Allow Multiple:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "e5a50a5b-ace9-4409-9392-e651f7b6d149", hoisted12$2, "checked", ctrl.skill.multiple, "onchange", function ($event) {
      var $element = this;
      ctrl.skill.multiple = this.checked;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("skill-editor-multiplicity");
    incrementalDom.elementOpen("skill-editor-instructions");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Instructions:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("div", "0427ee53-7ad2-430d-b1a2-05686457a5e7", hoisted13$2);
    incrementalDom.elementClose("div");
    incrementalDom.elementClose("skill-editor-instructions");
    incrementalDom.elementOpen("skill-editor-actions");
    incrementalDom.elementOpen("button", "bcc820e8-5e5b-4d6e-9df1-903487700c71", hoisted14$1, "onclick", function ($event) {
      var $element = this;
      ctrl.saveSkill();
    });
    incrementalDom.text("Save");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("button", "01195b87-0e27-4e80-ba54-65ac66064fee", hoisted15$1, "onclick", function ($event) {
      var $element = this;
      ctrl.deleteSkill();
    });
    incrementalDom.text("Delete");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("button", "3bf4d957-9c70-4794-ad80-1a2bfc15b28f", hoisted16$1, "onclick", function ($event) {
      var $element = this;
      ctrl.cancelEdit();
    });
    incrementalDom.text("Cancel");
    incrementalDom.elementClose("button");
    incrementalDom.elementClose("skill-editor-actions");
    incrementalDom.elementClose("form");
  }
  if (!ctrl.skillEditor) {
    __target$12 = ctrl.viewSkills;
    if (__target$12) {
      (__target$12.forEach ? __target$12 : Object.keys(__target$12)).forEach(function ($value, $item, $target) {
        var skill = $value;
        var $key = "ace3e444-2b3c-4c2b-84fe-0d38870c5b82_" + $item;
        incrementalDom.elementOpen("skill-item", $key, null, "class", $item % 2 ? 'odd' : 'even');
        incrementalDom.elementOpen("div", "8f33ce82-301d-46f1-a60a-e4d5d9602ede_" + $key, hoisted17$1);
        incrementalDom.elementOpen("div", "740a837e-c2f7-4b7a-9a1f-cb6ae2c721d4_" + $key, hoisted18$1);
        incrementalDom.text("" + skill.title + "");
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "0e2661c4-52c4-4ee0-9ad8-6f2dead701d9_" + $key, hoisted19$1);
        incrementalDom.text("" + skill.description + "");
        incrementalDom.elementClose("div");
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "29c7f226-18df-48a1-b32c-099f883c05e8_" + $key, hoisted20$1);
        incrementalDom.elementOpen("button", "84058b01-53ba-4b82-ba58-b51dc81c0fa7_" + $key, hoisted21$1, "disabled", ctrl.skillFormValid, "onclick", function ($event) {
          var $element = this;
          ctrl.editSkill($value);
        });
        incrementalDom.text("Edit");
        incrementalDom.elementClose("button");
        incrementalDom.elementClose("div");
        incrementalDom.elementClose("skill-item");
      }, this);
    }
  }
  incrementalDom.elementClose("skills-list");
}

var SkillsAdmin = function (_HTMLElement) {
  inherits(SkillsAdmin, _HTMLElement);

  function SkillsAdmin() {
    classCallCheck(this, SkillsAdmin);

    var _this = possibleConstructorReturn(this, (SkillsAdmin.__proto__ || Object.getPrototypeOf(SkillsAdmin)).call(this));

    document.addEventListener('skillsChanged', _this._updateView.bind(_this));
    return _this;
  }

  createClass(SkillsAdmin, [{
    key: 'addSkill',
    value: function addSkill() {
      this.editSkill();
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        this._updateView();
      }
    }
  }, {
    key: 'cancelEdit',
    value: function cancelEdit() {
      this.skill = null;
      this.skillEditor = false;
      this._updateView();
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.sColl = db.getCollection('skills');
      this.sColl.setChangesApi(true);
      this.dv = this.sColl.addDynamicView('skills');
      this.innerHTML = '<style>' + css$12 + '</style><container></container>';
      this.element = this.querySelector('container');
      this._updateView();
    }
  }, {
    key: 'deleteSkill',
    value: function deleteSkill() {
      this.sColl.findAndRemove({ id: this.skill.id });
      this.cancelEdit();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      if (this.dv) this.dv.removeFilters();
    }
  }, {
    key: 'editSkill',
    value: function editSkill() {
      var skill = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.skill = skill;
      this.skill.id = skill.id || uuid();
      this.skillEditor = true;
      this._updateView();
      this.quill = new Quill('#skill-editor', { theme: 'snow' });
      if (this.skill.delta) this.quill.setContents(this.skill.delta);
      // console.log("this.skill", this.skill)
    }
  }, {
    key: 'filterSkills',
    value: function filterSkills(val) {
      var str = val ? val.toLowerCase() : null;

      // console.log("str", str)
      this.dv.removeFilters();

      this.dv.applyWhere(function (skill) {
        if (skill.title && skill.title.toLowerCase().indexOf(str) !== -1) return true;
        if (skill.description && skill.description.toLowerCase().indexOf(str) !== -1) return true;
        if (skill.category && skill.category.toLowerCase().indexOf(str) !== -1) return true;
      });

      if (!str || str === '') {
        this.dv.removeFilters();
      }
      this._updateView();
    }
  }, {
    key: 'saveSkill',
    value: function saveSkill() {
      // console.log("this.skill.id", this.skill.id)
      var savedSkill = this.sColl.findOne({ id: this.skill.id });
      // console.log("savedSkill", savedSkill)
      this.skill.delta = this.quill.getContents();
      this.skill.html = this.element.querySelector(".ql-editor").innerHTML;
      this.skill.achievements = this.skill.achievements || 0;
      if (savedSkill) this.sColl.update(Object.assign(savedSkill, this.skill));else this.sColl.insertOne(this.skill);
      this.cancelEdit();
    }
  }, {
    key: '_updateView',
    value: function _updateView() {
      console.log('skills-admin:_updateView');
      this.viewSkills = this.dv.data();
      if (this.element) incrementalDom.patch(this.element, render$12, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return SkillsAdmin;
}(HTMLElement);

customElements.define('skills-admin', SkillsAdmin);

var css$13 = ".button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px;\n  /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  box-shadow: none;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  font-size: .8em;\n}\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0;\n}\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600;\n}\nfieldset {\n  padding: 0;\n  border-width: 0;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline;\n}\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal;\n}\n:host {\n  font-size: 1em;\n}\nusers-search {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1vh;\n}\nusers-search input {\n  flex: 6;\n}\nusers-search button {\n  flex: 1;\n  margin-left: 8px;\n}\nusers-list {\n  display: flex;\n  flex-direction: column;\n}\nuser-item {\n  display: flex;\n  padding: 1vh 1vw;\n}\nuser-item .info {\n  display: flex;\n  flex: 6;\n  flex-direction: column;\n}\nuser-item .info .title {\n  font-size: 17px;\n  font-weight: bold;\n}\nuser-item .info .description {\n  font-size: 16px;\n}\nuser-item .info .category {\n  font-size: 15px;\n}\nuser-item .action {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n}\nuser-item .action button {\n  margin-right: 2vw;\n}\nuser-item.even {\n  background-color: #efefef;\n}\nform[name='user'] {\n  display: flex;\n  flex-direction: column;\n}\nform[name='user'] > * {\n  display: flex;\n  justify-content: space-between;\n}\nform[name='user'] > * label {\n  font-size: 18px;\n  flex: 1.25;\n}\nform[name='user'] > * input,\nform[name='user'] > * select {\n  flex: 3;\n  margin-bottom: 1vh;\n}\nform[name='user'] skill-editor-instructions {\n  display: flex;\n  flex-direction: column;\n}\nform[name='user'] skill-editor-instructions label {\n  font-size: 18px;\n}\nform[name='user'] skill-editor-instructions #skill-editor {\n  height: 40vh;\n  margin-bottom: 1vh;\n}\nform[name='user'] button[name='cancel'] {\n  margin: 0 1vw;\n}\n.bold {\n  font-weight: bold;\n}\nuser-editor-actions {\n  justify-content: flex-start !important;\n}\n";

var hoisted1$12 = ["type", "text", "name", "usersearch", "placeholder", "Search ..."];
var hoisted2$10 = ["name", "user"];
var hoisted3$9 = ["type", "text", "required", ""];
var hoisted4$8 = ["type", "text", "required", ""];
var hoisted5$8 = ["type", "text", "disabled", "true"];
var hoisted6$8 = ["name", "group", "required", ""];
var hoisted7$8 = ["value", ""];
var hoisted8$7 = ["value", "be"];
var hoisted9$6 = ["value", "dn"];
var hoisted10$6 = ["value", "eq"];
var hoisted11$4 = ["value", "hp"];
var hoisted12$3 = ["value", "ll"];
var hoisted13$3 = ["value", "mm"];
var hoisted14$2 = ["value", "pr"];
var hoisted15$2 = ["value", "py"];
var hoisted16$2 = ["value", "rs"];
var hoisted17$2 = ["value", "tr"];
var hoisted18$2 = ["type", "checkbox"];
var hoisted19$2 = ["type", "button", "name", "save", "class", "primary"];
var hoisted20$2 = ["type", "button", "name", "cancel"];
var hoisted21$2 = ["class", "info"];
var hoisted22$1 = ["class", "name bold"];
var hoisted23$1 = ["class", "display-name bold"];
var hoisted24$1 = ["class", "email"];
var hoisted25$1 = ["class", "group"];
var hoisted26$1 = ["class", "action"];
var hoisted27$1 = ["type", "button"];
var __target$13;

function render$13(ctrl) {
  if (!ctrl.userEditor) {
    incrementalDom.elementOpen("users-search");
    incrementalDom.elementOpen("input", "5f2afc06-27be-434c-8ec0-74ee6bee86d9", hoisted1$12, "onkeyup", function ($event) {
      var $element = this;
      ctrl.filterUsers(this.value);
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("users-search");
  }
  incrementalDom.elementOpen("users-list");
  if (ctrl.userEditor) {
    incrementalDom.elementOpen("form", "370725ea-08ef-4de6-ade7-174a65e7a86a", hoisted2$10);
    incrementalDom.elementOpen("user-editor-name");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Certificate Name:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "867f747e-f01f-4432-937b-b33ac497b963", hoisted3$9, "value", ctrl.user.name, "onchange", function ($event) {
      var $element = this;
      ctrl.user.name = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-editor-name");
    incrementalDom.elementOpen("user-editor-display-name");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Display Name:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "e5181a3a-eea4-47ae-beef-8073e851ce39", hoisted4$8, "name", ctrl.user.displayName, "value", ctrl.user.displayName, "onchange", function ($event) {
      var $element = this;
      ctrl.user.displayName = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-editor-display-name");
    incrementalDom.elementOpen("user-editor-email");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Email:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "383b3e3d-f842-4a06-ad9e-42b25155f76e", hoisted5$8, "name", ctrl.user.email, "value", ctrl.user.email, "onchange", function ($event) {
      var $element = this;
      ctrl.user.email = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-editor-email");
    incrementalDom.elementOpen("user-editor-category");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Organization:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("select", "0f9d5b1e-0f0b-4a7e-a615-366fee91ba62", hoisted6$8, "onchange", function ($event) {
      var $element = this;
      ctrl.user.group = this.value;
    });
    incrementalDom.elementOpen("option", "4a922d5f-90fa-47aa-89f4-307e3654e2f9", hoisted7$8);
    incrementalDom.text("Select");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "dcd39826-a6e4-42c6-b93f-14dfeb61cb71", hoisted8$7, "selected", ctrl.user.group === 'be' ? true : null);
    incrementalDom.text("Beehive");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "642d2f79-c69d-42fe-8ef9-90d22eb1ba59", hoisted9$6, "selected", ctrl.user.group === 'dn' ? true : null);
    incrementalDom.text("Deacon");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "b4059d58-65e5-46e2-820e-c0528f0892c5", hoisted10$6, "selected", ctrl.user.group === 'eq' ? true : null);
    incrementalDom.text("Elders");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "cb8e6963-7b3f-497e-a6ab-17b5026b45cd", hoisted11$4, "selected", ctrl.user.group === 'hp' ? true : null);
    incrementalDom.text("High Priest");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "4714b085-06e3-46fe-ac0f-a10f6fe2ef27", hoisted12$3, "selected", ctrl.user.group === 'll' ? true : null);
    incrementalDom.text("Laurel");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "1959c0dc-5b3d-4619-ad47-17de71e91c64", hoisted13$3, "selected", ctrl.user.group === 'mm' ? true : null);
    incrementalDom.text("Miamaid");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "b6bce849-8983-4d17-9d96-9564d2ab4ded", hoisted14$2, "selected", ctrl.user.group === 'pr' ? true : null);
    incrementalDom.text("Priest");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "a33ac42d-2f63-4fe5-af64-6311eb1d6da2", hoisted15$2, "selected", ctrl.user.group === 'py' ? true : null);
    incrementalDom.text("Primary");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "29798e9e-254e-472a-9746-c402ba663ef3", hoisted16$2, "selected", ctrl.user.group === 'rs' ? true : null);
    incrementalDom.text("Relief Society");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "acb8f7d1-9676-49fa-847d-dc6bc62481c6", hoisted17$2, "selected", ctrl.user.group === 'tr' ? true : null);
    incrementalDom.text("Teacher");
    incrementalDom.elementClose("option");
    incrementalDom.elementClose("select");
    incrementalDom.elementClose("user-editor-category");
    incrementalDom.elementOpen("user-admin");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Admin:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "a414d1b1-6598-480e-bf78-1d2e26adccef", hoisted18$2, "checked", ctrl.user.admin ? true : null, "onchange", function ($event) {
      var $element = this;
      ctrl.user.admin = this.checked;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-admin");
    incrementalDom.elementOpen("user-editor-actions");
    incrementalDom.elementOpen("button", "8ba5d81c-816b-4e22-8634-42103f3f42fc", hoisted19$2, "onclick", function ($event) {
      var $element = this;
      ctrl.saveUser();
    });
    incrementalDom.text("Save");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("button", "73cfbdab-1b37-4115-8f80-f1566003561d", hoisted20$2, "onclick", function ($event) {
      var $element = this;
      ctrl.cancelEdit();
    });
    incrementalDom.text("Cancel");
    incrementalDom.elementClose("button");
    incrementalDom.elementClose("user-editor-actions");
    incrementalDom.elementClose("form");
  }
  if (!ctrl.userEditor) {
    __target$13 = ctrl.viewUsers;
    if (__target$13) {
      (__target$13.forEach ? __target$13 : Object.keys(__target$13)).forEach(function ($value, $item, $target) {
        var user = $value;
        var $key = "77f5973c-c954-40a6-95e1-400e2dee5a80_" + $item;
        incrementalDom.elementOpen("user-item", $key, null, "class", $item % 2 ? 'odd' : 'even');
        incrementalDom.elementOpen("div", "974028fc-a834-4964-8aac-b374f25c9ea4_" + $key, hoisted21$2);
        if (user.name) {
          incrementalDom.elementOpen("div", "805dca65-357c-42a3-baaa-b195bd06dca0_" + $key, hoisted22$1);
          incrementalDom.text("" + user.name + "");
          incrementalDom.elementClose("div");
        }
        incrementalDom.elementOpen("div", "68f13c59-a15d-4a00-bfd3-7a8effb11349_" + $key, hoisted23$1);
        incrementalDom.text("" + user.displayName + "");
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "8cd8c9d8-e2dd-457a-8d1f-23ac85d44df9_" + $key, hoisted24$1);
        incrementalDom.text("" + user.email + "");
        incrementalDom.elementClose("div");
        if (user.group) {
          incrementalDom.elementOpen("div", "9da0cf36-61e4-494f-9f4f-57708ed48cbd_" + $key, hoisted25$1);
          incrementalDom.text("" + ctrl.getGroupName(user) + "");
          incrementalDom.elementClose("div");
        }
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "2a630f7c-f1e2-4aa9-918e-14737a8e7d13_" + $key, hoisted26$1);
        incrementalDom.elementOpen("button", "daaf2d10-8a9c-428e-a0ce-d6c7bdcce011_" + $key, hoisted27$1, "disabled", ctrl.userFormValid, "onclick", function ($event) {
          var $element = this;
          ctrl.editUser($value);
        });
        incrementalDom.text("Edit");
        incrementalDom.elementClose("button");
        incrementalDom.elementClose("div");
        incrementalDom.elementClose("user-item");
      }, this);
    }
  }
  incrementalDom.elementClose("users-list");
}

var UsersAdmin = function (_HTMLElement) {
  inherits(UsersAdmin, _HTMLElement);

  function UsersAdmin() {
    classCallCheck(this, UsersAdmin);

    var _this = possibleConstructorReturn(this, (UsersAdmin.__proto__ || Object.getPrototypeOf(UsersAdmin)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$13 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');
    _this.user = user;
    _this.model = {};

    document.addEventListener('usersChanged', _this._updateView.bind(_this));
    return _this;
  }

  createClass(UsersAdmin, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        this._updateView();
      }
    }
  }, {
    key: 'cancelEdit',
    value: function cancelEdit() {
      this.skill = null;
      this.user = null;
      this.userId = null;
      this.userEditor = false;

      this._updateView();
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.uColl = db.getCollection('users');
      this.uColl.setChangesApi(true);
      this.dv = this.uColl.addDynamicView('users');
      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.dv.removeFilters();
    }
  }, {
    key: 'editUser',
    value: function editUser(_user) {
      this.user = _user;
      this.userEditor = true;
      this._updateView();
    }
  }, {
    key: 'filterUsers',
    value: function filterUsers(val) {
      var str = val ? val.toLowerCase() : null;
      this.dv.removeFilters();

      if (str) {
        this.dv.applyWhere(function (_user) {
          return _user.displayName && _user.displayName.toLowerCase().indexOf(str) !== -1 || typeof _user.name === 'string' && _user.name.toLowerCase().indexOf(str) !== -1 || _user.group && _user.group.toLowerCase().indexOf(str) !== -1 || _user.email && _user.email.toLowerCase().indexOf(str) !== -1;
        });
      }

      this._updateView();
    }
  }, {
    key: 'getGroupName',
    value: function getGroupName(_user) {
      var group = _user.group;
      var groupName = void 0;
      switch (group) {
        case 'be':
          groupName = 'Beehive';break;
        case 'dn':
          groupName = 'Deacon';break;
        case 'eq':
          groupName = 'Elder';break;
        case 'hp':
          groupName = 'High Priest';break;
        case 'll':
          groupName = 'Laurel';break;
        case 'mm':
          groupName = 'Miamaid';break;
        case 'pr':
          groupName = 'Priest';break;
        case 'py':
          groupName = 'Primary';break;
        case 'rs':
          groupName = 'Relief Society';break;
        case 'tr':
          groupName = 'Teachter';break;
        default:
          groupName = null;
      }
      return groupName;
    }
  }, {
    key: 'saveUser',
    value: function saveUser() {
      var _user = Object.assign({}, this.user);
      delete _user.authenticated;
      delete _user.initialized;
      this.uColl.update(_user);
      this.cancelEdit();
    }
  }, {
    key: '_updateView',
    value: function _updateView() {
      this.viewUsers = this.dv.data();
      if (this.element) incrementalDom.patch(this.element, render$13, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return UsersAdmin;
}(HTMLElement);

customElements.define('users-admin', UsersAdmin);

var SysAdmin = function (_HTMLElement) {
  inherits(SysAdmin, _HTMLElement);

  function SysAdmin() {
    classCallCheck(this, SysAdmin);

    var _this = possibleConstructorReturn(this, (SysAdmin.__proto__ || Object.getPrototypeOf(SysAdmin)).call(this));

    document.addEventListener('userLoadedFromDb', _this._userChanged.bind(_this));
    document.addEventListener('userUnauthenticated', _this._userChanged.bind(_this));

    router.add('/admin/users', function (req, evt, next) {
      if (_this.content) _this.content.innerHTML = '<users-admin></users-admin>';
    });
    router.add('/admin/skills', function (req, evt, next) {
      if (_this.content) _this.content.innerHTML = '<skills-admin></skills-admin>';
    });
    router.add('/admin/awards', function (req, evt, next) {
      if (_this.content) _this.content.innerHTML = '<awards-admin><awards-admin>';
    });
    router.add('/admin/assistance', function (req, evt, next) {
      if (_this.content) _this.content.innerHTML = '<assistance-admin></assistance-admin>';
    });
    router.add('/admin/reports', function (req, evt, next) {
      if (_this.content) _this.content.innerHTML = '<reports-admin></reports-admin>';
    });
    return _this;
  }

  createClass(SysAdmin, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {}
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      var state = router.state.value;
      this.innerHTML = '<style>' + css$8 + '</style><div id="sys-admin"></div>';
      this.element = this.querySelector('div#sys-admin');
      this.updateView();
      this.content = this.element.querySelector('content');
      this.tabs = this.element.querySelector('tabs');
      this.tabItems = this.tabs.querySelectorAll('tab');

      this.tabItems.forEach(function (tab) {
        var input = tab.querySelector('input');
        if (state.indexOf(input.value) !== -1) input.setAttribute('checked', true);
      });
      setTimeout(function () {
        router.navigate(state);
      }, 100);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: 'selectTab',
    value: function selectTab(tab) {
      router.navigate('/admin/' + tab);
    }
  }, {
    key: 'updateView',
    value: function updateView() {
      if (this.element) incrementalDom.patch(this.element, render$8, this);
    }
  }, {
    key: '_userChanged',
    value: function _userChanged() {
      if (!user.authenticated) router.navigate('/login');
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [''];
    }
  }]);
  return SysAdmin;
}(HTMLElement);

customElements.define('sys-admin', SysAdmin);

var css$14 = ":host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 2vh 2vw;\n  font-family: sans-serif;\n  font-size: .9em;\n}\n";

var hoisted1$13 = ["type", "a"];
var hoisted2$11 = ["type", "i"];
var hoisted3$10 = ["type", "a"];
function render$14(ctrl) {
  incrementalDom.elementOpen("h2");
  incrementalDom.text(" \
  	Web Site Terms and Conditions of Use \
  ");
  incrementalDom.elementClose("h2");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	1. Terms \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any \
    of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	2. Use License \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("ol", "931128ca-6092-48dc-ae90-65503d7dab94", hoisted1$13);
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        Permission is granted to temporarily download one copy of the materials (information or software) on Manila 7th Ward's web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this \
        license you may not: \
     \
        ");
  incrementalDom.elementOpen("ol", "e6225ddf-de14-4021-a5ca-01f4a0970992", hoisted2$11);
  incrementalDom.elementOpen("li");
  incrementalDom.text("modify or copy the materials;");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text("use the materials for any commercial purpose, or for any public display (commercial or non-commercial);");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text("attempt to decompile or reverse engineer any software contained on Manila 7th Ward's web site;");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text("remove any copyright or other proprietary notations from the materials; or");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text("transfer the materials to another person or 'mirror' the materials on any other server.");
  incrementalDom.elementClose("li");
  incrementalDom.elementClose("ol");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        This license shall automatically terminate if you violate any of these restrictions and may be terminated by Manila 7th Ward at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded \
        materials in your possession whether in electronic or printed format. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementClose("ol");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	3. Disclaimer \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("ol", "d6aefa26-4a73-482d-9f2b-812596e2d957", hoisted3$10);
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        The materials on Manila 7th Ward's web site are provided 'as is'. Manila 7th Ward makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, \
        fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Manila 7th Ward does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of \
        the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementClose("ol");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	4. Limitations \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    In no event shall Manila 7th Ward or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Manila 7th Ward's \
    Internet site, even if Manila 7th Ward or a Manila 7th Ward authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations \
    of liability for consequential or incidental damages, these limitations may not apply to you. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	5. Revisions and Errata \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    The materials appearing on Manila 7th Ward's web site could include technical, typographical, or photographic errors. Manila 7th Ward does not warrant that any of the materials on its web site are accurate, complete, or current. Manila 7th Ward may make \
    changes to the materials contained on its web site at any time without notice. Manila 7th Ward does not, however, make any commitment to update the materials. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	6. Links \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    Manila 7th Ward has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Manila 7th Ward of the site. Use of any such linked \
    web site is at the user's own risk. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	7. Site Terms of Use Modifications \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    Manila 7th Ward may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h3");
  incrementalDom.text(" \
  	8. Governing Law \
  ");
  incrementalDom.elementClose("h3");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    Any claim relating to Manila 7th Ward's web site shall be governed by the laws of the State of Utah without regard to its conflict of law provisions. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    General Terms and Conditions applicable to Use of a Web Site. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h2");
  incrementalDom.text(" \
  	Privacy Policy \
  ");
  incrementalDom.elementClose("h2");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy. \
  ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("ul");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        Before or at the time of collecting personal information, we will identify the purposes for which information is being collected. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        We will only retain personal information as long as necessary for the fulfillment of those purposes. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        We will make readily available to customers information about our policies and practices relating to the management of personal information. \
      ");
  incrementalDom.elementClose("li");
  incrementalDom.elementClose("ul");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
    We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. \
  ");
  incrementalDom.elementClose("p");
}

var PPolicy = function (_HTMLElement) {
  inherits(PPolicy, _HTMLElement);

  function PPolicy() {
    classCallCheck(this, PPolicy);

    var _this = possibleConstructorReturn(this, (PPolicy.__proto__ || Object.getPrototypeOf(PPolicy)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$14 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');
    return _this;
  }

  createClass(PPolicy, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        this._updateView();
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: '_updateView',
    value: function _updateView() {
      if (this.element) incrementalDom.patch(this.element, render$14, this);
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return PPolicy;
}(HTMLElement);

customElements.define('p-policy', PPolicy);

var css$15 = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n.grid {\n  display: flex;\n}\n.col {\n  flex: 1;\n}\n@media (max-width: 500px) {\n  .grid {\n    display: block;\n  }\n}\n:host,\ncontainer {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 2vh 2vw;\n}\ngeneral {\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  background-image: url('/img/mt-timp-temple.jpg');\n  background-size: cover;\n}\ngeneral general-overlay {\n  margin: 6vh 6vw;\n  background-color: rgba(255, 255, 255, 0.7);\n  color: #333;\n  padding: 1vh 1vw;\n}\ngeneral general-overlay h1 {\n  font-size: 1.75em;\n  font-weight: 400;\n  margin-bottom: 1vh;\n}\n";

function render$15(ctrl) {
  incrementalDom.elementOpen("general");
  incrementalDom.elementOpen("general-overlay");
  incrementalDom.elementOpen("h1");
  incrementalDom.text("Why This Site?");
  incrementalDom.elementClose("h1");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
            There are a lot of reasons we don't work on Temple and Family History work. Some include: 1) \
            I don't know where to start, 2) The amount of work needing to be done is overwhelming, 3) \
            It's all done on computers and I don't get a long all well with computers, 4 I'm too busy, \
            5) My work is all done, 6) I'll do it when I get older, and 6) It's too hard ... \
            you get the idea. \
          ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
            This site exists to help you get help make doing temple and family history work a little easier. \
            While it can't help with all of the reasons, it can help with some. It is a place to sign up \
            for small tasks (or skills), get help doing them and then helping others with those tasks (or skills). \
          ");
  incrementalDom.elementClose("p");
  incrementalDom.elementClose("general-overlay");
  incrementalDom.elementClose("general");
  incrementalDom.elementOpen("working-on-skills");
  incrementalDom.elementClose("working-on-skills");
}

var SiteHelp = function (_HTMLElement) {
  inherits(SiteHelp, _HTMLElement);

  function SiteHelp() {
    classCallCheck(this, SiteHelp);

    var _this = possibleConstructorReturn(this, (SiteHelp.__proto__ || Object.getPrototypeOf(SiteHelp)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$15 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');

    _this._updateView = function () {
      if (_this.element) incrementalDom.patch(_this.element, render$15, _this);
    };
    return _this;
  }

  createClass(SiteHelp, [{
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oVal, nVal) {
      if (nVal && nVal !== '' && nVal !== oVal) {
        this._updateView();
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [];
    }
  }]);
  return SiteHelp;
}(HTMLElement);

customElements.define('site-help', SiteHelp);

var socket$1 = socketCluster.connect();
var router = new Grapnel({ pushState: true });

var AppRouter = function (_HTMLElement) {
  inherits(AppRouter, _HTMLElement);

  function AppRouter() {
    classCallCheck(this, AppRouter);
    return possibleConstructorReturn(this, (AppRouter.__proto__ || Object.getPrototypeOf(AppRouter)).call(this));
  }

  createClass(AppRouter, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      router.add('/', function (req, evt, next) {
        router.navigate('/login');
      });

      router.add('/home', function (req, evt, next) {
        router.navigate('/home/authenticated');
      });

      router.add('/home/authenticated', db.loadDb, function (req, evt, next) {
        setTimeout(function () {
          if (socket$1.authState !== 'authenticated') router.navigate('/login');else _this2.innerHTML = '<home-authenticated></home-authenticated>';
        }, 200);
      });

      router.add('/login', function (req, evt, next) {
        console.log('/login');
        _this2.innerHTML = '<login-view></login-view>';
      });

      router.add('/logout', function (req, evt, next) {
        user.logout();
        router.navigate('/login');
      });

      router.add('/help', function (req, evt, next) {
        _this2.innerHTML = '<site-help></site-help>';
      });

      router.add('/admin', function (req, evt, next) {
        router.navigate('/admin/users');
      });

      router.add('/admin/*', db.loadDb, function (req, evt, next) {
        var sysAdmin = /\<sys-admin\>/.test(_this2.innerHTML);
        if (!sysAdmin) _this2.innerHTML = '<sys-admin></sys-admin>';
      });

      router.add('/not-found', function (req, evt, next) {
        _this2.innerHTML = '<not-found></not-found>';
      });

      router.add('/oauth2callback', function (req, evt, next) {
        next();
      });

      router.add('/privacy-policy', function (req, evt, next) {
        _this2.innerHTML = '<p-policy></p-policy';
      });

      router.add('/*', function (req, evt, next) {
        if (!evt.parent()) router.navigate('/not-found');
      });
    }
  }], [{
    key: 'observedAttributes',
    get: function get$$1() {
      return [''];
    }
  }]);
  return AppRouter;
}(HTMLElement);

customElements.define('app-router', AppRouter);

var socket = socketCluster.connect();

var db = new loki('m7temple.db', { autosave: true });

var updateDbChannel = socket.subscribe('updateDbChannel');
var userAddedChannel = socket.subscribe('userAddedChannel');

function changeHandler() {
  // console.log("changeHandler");
  var changes = JSON.parse(db.serializeChanges());
  // console.log('changeHandler:changes', changes);
  if (changes && socket.authState === 'authenticated') updateDbChannel.publish(JSON.stringify(changes), function (err) {
    if (err) console.error("err", err);
    if (!err) db.clearChanges();
    db.clearChanges();
  });
}

function updateDb(db, changes) {
  // console.log("updateDb:changes", changes)
  try {
    changes.forEach(function (change) {
      var coll = db.getCollection(change.name);
      var id = change.obj.$loki;
      var doc = coll.get(id);
      // console.log("doc", doc);
      // console.log("change.obj", change.obj);
      // console.log("coll.find()", coll.find())
      if (change.operation === 'I' && !doc) {
        delete change.obj.$loki;
        delete change.obj.meta;
        coll.insertOne(change.obj);
      }
      if (change.operation === 'D') coll.findAndRemove({ $loki: change.obj.$loki });
      if (change.operation === 'U') {
        var dt = JSON.parse(JSON.stringify(doc));
        var ct = JSON.parse(JSON.stringify(change.obj));
        delete dt.$loki;
        delete ct.$loki;
        delete dt.meta;
        delete ct.meta;
        if (JSON.stringify(dt) !== JSON.stringify(ct)) coll.update(change.obj);
      }
      document.dispatchEvent(new CustomEvent(change.name + 'Changed'));
    });
  } catch (err) {
    console.error("err", err);
  }
}

db.loadDb = function (req, evt, next) {
  if (db.loaded) return next();
  // console.log('getting db');
  socket.emit('loadDatabase');

  socket.on('loadDatabase', function (data) {
    db.loadJSON(data, { disableChangesApi: false });
    var awards = db.getCollection('awards');
    var skills = db.getCollection('skills');
    var tickets = db.getCollection('tickets');
    var users = db.getCollection('users');
    awards.on(['insert', 'update', 'delete'], changeHandler);
    skills.on(['insert', 'update', 'delete'], changeHandler);
    tickets.on(['insert', 'update', 'delete'], changeHandler);
    users.on(['insert', 'update', 'delete'], changeHandler);
    db.loaded = true;
    // console.log('database loaded');
    next();
  });
};

userAddedChannel.watch(function (data) {
  // console.log("data", data);
  var users = db.getCollection('users');
  users.setChangesApi(false);
  var usr = users.findOne({ email: data.email });
  if (!usr) {
    delete data.$loki;
    delete data.meta;
    users.insertOne(data);
    document.dispatchEvent(new CustomEvent('usersChanged'));
  }
});

updateDbChannel.watch(function (data) {
  var changes = JSON.parse(data);
  // console.log("socket", socket)
  // console.log("updateDbChannel::changes", changes);
  if (socket.authState === 'authenticated' && Array.isArray(changes)) updateDb(db, changes);
  db.clearChanges();
});

}(IncrementalDOM));
