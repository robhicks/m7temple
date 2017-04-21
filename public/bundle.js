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
  incrementalDom.elementOpen("a", "8fd5da46-1069-4759-a79b-1b7e7996e7d2", hoisted1);
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
    incrementalDom.elementOpen("div", "4520a631-a36f-4c2e-986f-5cfc53feeb3d", hoisted1$1);
    incrementalDom.elementOpen("div", "7297ef9e-05d4-47a8-b9bb-26061b7db9dd", hoisted2);
    incrementalDom.elementOpen("div", "06400343-1a0f-4e4d-ac80-e61dea88a163", hoisted3);
    incrementalDom.elementOpen("div", "e43501c5-cde5-4ecd-9900-bca9459ab83b", hoisted4);
    incrementalDom.elementOpen("h4");
    incrementalDom.text("" + ctrl._heading + "");
    incrementalDom.elementClose("h4");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "9ae023c0-5d31-40d7-8cc1-df060da755ee", hoisted5);
    incrementalDom.text("" + ctrl._body + "");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "295abf03-ea71-4901-9eb0-d30ce61df4e4", hoisted6);
    incrementalDom.elementOpen("button", "e9a4264c-fd85-46fa-9ae5-f4901436f016", hoisted7, "onclick", function ($event) {
      var $element = this;
      ctrl._clickButton('primary');
    });
    incrementalDom.text("" + ctrl._primary + "");
    incrementalDom.elementClose("button");
    if (ctrl._cancel) {
      incrementalDom.elementOpen("button", "d81beef1-b5f1-44be-8041-29023b9707db", hoisted8, "onclick", function ($event) {
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
    console.log("r", r);
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
  incrementalDom.elementOpen("div", "a3db392d-3ef3-44be-825a-963185d009d8", hoisted1$2);
  incrementalDom.elementOpen("a", "0a45256f-5d79-437c-b11d-9359e4cc5c47", hoisted2$1, "onclick", function ($event) {
    var $element = this;
    ctrl.hello('facebook').login();
  });
  incrementalDom.elementOpen("img", "4b35e983-2d22-49c5-9bb4-d7d287fa706a", hoisted3$1);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Facebook");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("a", "d639c6e2-c087-4323-ad73-8952eac81c0b", hoisted4$1, "onclick", function ($event) {
    var $element = this;
    ctrl.hello('github').login();
  });
  incrementalDom.elementOpen("img", "40d9165d-c6da-4c41-bc5c-092bb0ba8ae4", hoisted5$1);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Github");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("a", "6146b13d-eafe-4f06-bc0c-2e7981d95895", hoisted6$1, "onclick", function ($event) {
    var $element = this;
    ctrl.hello('google').login();
  });
  incrementalDom.elementOpen("img", "02c2b5cc-e973-4c5e-bb5d-823820af82ee", hoisted7$1);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Google");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("a", "ea732d56-c104-41ef-8f71-a5d0cc3e2727", hoisted8$1, "onclick", function ($event) {
    var $element = this;
    ctrl.hello('twitter').login();
  });
  incrementalDom.elementOpen("img", "0b083008-8b8d-4b05-9415-f32e98fa8f0e", hoisted9);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Twitter");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("a", "cece925c-06bf-420d-aa26-f665b68d6951", hoisted10);
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
  incrementalDom.elementOpen("a", "fbfd9f5c-7bba-48c9-93bf-94c62c85000b", hoisted1$3, "onclick", function ($event) {
    var $element = this;
    ctrl.go('/home/authenticated');
  }, "class", ctrl.stateContains('home'));
  incrementalDom.elementOpen("img", "f41ce910-c396-4bdd-b8e9-dbe161ddfc15", hoisted2$2);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Home");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("nav", "64f39fd4-dbaa-4ff3-8a0a-3b8356f0dc29", hoisted3$2);
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
  incrementalDom.elementOpen("a", "6fff2893-b4fe-4b98-8638-637d44ed8c28", hoisted1$4);
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
  incrementalDom.elementOpen("section", "d449db74-ca67-4280-95d3-e15b8715bc13", hoisted1$5);
  incrementalDom.elementOpen("input", "06d5eeea-51de-4120-ac7c-bbbb7019b312", hoisted2$3, "onkeyup", function ($event) {
    var $element = this;
    ctrl.filterSkills(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "7b89d7dc-6386-4b14-8272-02faf91450d2", hoisted3$3);
  incrementalDom.elementOpen("input", "ce666fbc-2178-450d-aa39-702e9489536e", hoisted4$2, "onchange", function ($event) {
    var $element = this;
    ctrl.toggleMine();
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("span");
  incrementalDom.text("My Skills (" + ctrl.mySkills.length + ")");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("section");
  incrementalDom.elementOpen("section", "62cec73e-f10e-4149-bc05-1388d7643df2", hoisted5$2);
  __target$5 = ctrl.viewSkills;
  if (__target$5) {
    (__target$5.forEach ? __target$5 : Object.keys(__target$5)).forEach(function ($value, $item, $target) {
      var item = $value;
      var $key = "58054ee5-ed16-43fe-9ea4-64615d83944a_" + $item;
      incrementalDom.elementOpen("div", $key, hoisted6$2);
      incrementalDom.elementOpen("collapsable-panel", "3add3f25-64e5-4d72-8e36-bd91d3f02864_" + $key, hoisted7$2, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements);
      incrementalDom.elementClose("collapsable-panel");
      incrementalDom.elementClose("div");
    }, this);
  }
  incrementalDom.elementClose("section");
}

var css$5 = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  font-size: 1em;\n}\n#home {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  height: 98%;\n}\nsection#search {\n  display: flex;\n  margin: 2vw 2vh 0;\n  height: 42px;\n}\nsection#search input {\n  flex-grow: 1;\n  width: inherit;\n  height: 36px;\n  font-size: 1em;\n  padding-left: 2vw;\n}\nsection#skills {\n  display: flex;\n  flex-direction: column;\n  flex: 6;\n  margin: 2vw 2vh 0;\n  background-color: #ffffff;\n  padding: 2vw 2vh;\n  overflow-y: auto;\n}\n#mine-wrapper {\n  display: flex;\n  background-color: #ffffff;\n  align-items: center;\n  height: 42px;\n  padding: 0 1vw;\n  margin-left: 1vw;\n}\n#mine-wrapper #mine-checkbox {\n  margin-right: 1vw;\n}\ncollapsable-panel {\n  display: block;\n  width: 100%;\n  height: auto;\n}\ncollapsable-panel.odd {\n  background-color: rgba(98, 171, 239, 0.15);\n}\n";

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
  incrementalDom.elementOpen("div", "5c1cc8ff-4a14-4977-9945-07cadaf61b27", hoisted1$6);
  incrementalDom.elementOpen("div", "b637b542-cf96-455b-a8e7-bfe68ad75a16", hoisted2$4);
  incrementalDom.elementOpen("div", "300ae8fa-1394-48af-8d47-0134f83eea46", hoisted3$4);
  incrementalDom.text("" + ctrl.heading + "");
  incrementalDom.elementClose("div");
  incrementalDom.elementOpen("div", "2768e9b8-fece-4d81-ac2b-0207664446b2", hoisted4$3);
  if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
    incrementalDom.elementOpen("button", "c2f3c51f-c7cb-4cd7-8762-e2b512138e99", hoisted5$3, "onclick", function ($event) {
      var $element = this;
      ctrl.add(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "53b3a2da-b76c-4d93-8ed5-db65de386016", hoisted6$3);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
    incrementalDom.elementOpen("button", "47a7eadc-02e3-4c90-bbce-b82abb6b3caa", hoisted7$3, "onclick", function ($event) {
      var $element = this;
      ctrl.addAndShowAchievementEditor(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "ba825b0d-2f90-4b31-b292-75d4900dee02", hoisted8$2);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  if (ctrl.earned) {
    incrementalDom.elementOpen("button", "e953d3ef-f1d3-4c96-a3b4-759a80029153", hoisted9$1, "onclick", function ($event) {
      var $element = this;
      ctrl.showAwards(ctrl.iid, 'earned');
    });
    incrementalDom.elementOpen("img", "5417db0c-12b9-4b5b-b667-e9e20b69d81d", hoisted10$1);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  if (ctrl.pending) {
    incrementalDom.elementOpen("button", "63ec9694-2c7a-444f-acff-8b4d71f04f59", hoisted11, "onclick", function ($event) {
      var $element = this;
      ctrl.showAwards(ctrl.iid, 'pending');
    });
    incrementalDom.elementOpen("img", "7f6c2221-0813-4333-b90c-2c8ac0217169", hoisted12);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  incrementalDom.elementOpen("button", "0dfaf51c-cdd2-4f8f-a20d-438858ebc81b", hoisted13, "onclick", function ($event) {
    var $element = this;
    ctrl.getHelp(ctrl.iid);
  });
  incrementalDom.elementOpen("img", "cb50d225-89f8-4f82-8c64-af947b883f9a", hoisted14);
  incrementalDom.elementClose("img");
  incrementalDom.elementClose("button");
  if (ctrl.added || ctrl.pending || ctrl.earned) {
    incrementalDom.elementOpen("button", "e27d1dd2-9007-4450-99f7-ef55b609e9ce", hoisted15, "onclick", function ($event) {
      var $element = this;
      ctrl.delete(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "b1fa9b1a-c285-4a30-b742-b0f1caa41e88", hoisted16);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  incrementalDom.elementOpen("button", "b7dd589b-17be-4474-af7f-c7b78bba2868", hoisted17);
  incrementalDom.text("" + ctrl.achievements + "");
  incrementalDom.elementClose("button");
  incrementalDom.elementOpen("button", "8440c210-8724-49d5-911f-7c471cb9b057", hoisted18, "onclick", function ($event) {
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
  incrementalDom.elementOpen("div", "1044f706-1f3f-4c6f-bfac-fca3e4fa9f2e", hoisted19);
  incrementalDom.text("" + ctrl.description + "");
  incrementalDom.elementClose("div");
  if (ctrl.showAchievements) {
    incrementalDom.elementOpen("achievements-wrapper");
    incrementalDom.elementOpen("header");
    incrementalDom.elementOpen("title");
    incrementalDom.text("Achievements:");
    incrementalDom.elementClose("title");
    incrementalDom.elementOpen("button", "1072ae3c-7e44-4464-97a3-436d72d836de", hoisted20, "onclick", function ($event) {
      var $element = this;
      ctrl.hideAchievements(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "1477a650-a4f0-4d3f-a44d-3a9437c80bb0", hoisted21);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
    incrementalDom.elementClose("header");
    __target$6 = ctrl.awards;
    if (__target$6) {
      (__target$6.forEach ? __target$6 : Object.keys(__target$6)).forEach(function ($value, $item, $target) {
        var item = $value;
        var $key = "f4a77fc0-778b-4e2f-b263-360b25ec9180_" + $item;
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
    incrementalDom.elementOpen("textarea", "6e0c4862-e072-4380-ba8c-484653e3d4b2", hoisted23);
    incrementalDom.elementClose("textarea");
    incrementalDom.elementOpen("div", "0faba21c-756e-4d6a-ae94-e74129eaaf14", hoisted24);
    incrementalDom.elementOpen("input", "47318adf-83a5-42d0-a8bb-edf15e8a9400", hoisted25);
    incrementalDom.elementClose("input");
    incrementalDom.elementOpen("span");
    incrementalDom.text("Yes, I'm willing to share my experience");
    incrementalDom.elementClose("span");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "f604b480-c225-4142-bd7e-e3d0364ec4dd", hoisted26);
    incrementalDom.elementOpen("input", "e65d7900-4afd-4ea2-acb3-974c962708bb", hoisted27);
    incrementalDom.elementClose("input");
    incrementalDom.elementOpen("span");
    incrementalDom.text("Yes, I'm willing to help others achieve this skill.");
    incrementalDom.elementClose("span");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "abcaf7f9-cbc0-423b-9a55-ba0ff0fa6100", hoisted28);
    incrementalDom.elementOpen("button", "7d4c9ae3-beb7-47be-abb0-e783f0d8ae5a", hoisted29, "onclick", function ($event) {
      var $element = this;
      ctrl.applyForAchievment();
    });
    incrementalDom.text("Apply");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("a", "27220492-4f91-4626-a090-19f24ca4a75f", hoisted30, "onclick", function ($event) {
      var $element = this;
      ctrl.hideSkillEditor();
    });
    incrementalDom.text("Cancel");
    incrementalDom.elementClose("a");
    incrementalDom.elementClose("div");
    incrementalDom.elementClose("skill-editor");
  }
  if (!ctrl.collapsed) {
    incrementalDom.elementOpen("div", "430e7308-0e39-4a21-84c8-deed578513ff", hoisted31);
    if (ctrl.html && ctrl.html !== '') {
      var el = incrementalDom.currentElement();
      el.innerHTML = ctrl.html;
    }
    incrementalDom.skip();
    incrementalDom.elementClose("div");
  }
  incrementalDom.elementClose("div");
}

var css$6 = "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n.button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\n:host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.collapsable-panel .panel {\n  border: 1px solid #ccc;\n  margin-bottom: 8px;\n}\n.collapsable-panel .panel .heading {\n  display: flex;\n  border-bottom: 1px solid #ccc;\n}\n.collapsable-panel .panel .heading .title {\n  font-size: 1em;\n  flex: 1;\n  padding-left: 1vw;\n}\n.collapsable-panel .panel .heading .button-group {\n  display: flex;\n  justify-content: flex-end;\n}\n.collapsable-panel .panel .heading .button-group button {\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  width: 28px;\n  height: 28px;\n  border-left: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  font-size: .5em;\n  cursor: pointer;\n  line-height: normal;\n}\n.collapsable-panel .panel .heading .button-group button img {\n  height: 100%;\n  width: 100%;\n}\n.collapsable-panel .panel .description {\n  font-size: .75em;\n  padding-left: 1vw;\n}\n.collapsable-panel .panel .html {\n  font-size: .65em;\n  padding: 1vw;\n  border-top: 1px solid #ccc;\n}\n.collapsable-panel .panel alert {\n  display: flex;\n  padding: 1vh 1vw;\n  font-size: .75em;\n  border-top: 1px solid #ccc;\n}\n.collapsable-panel .panel alert.good {\n  background-color: rgba(100, 200, 100, 0.1);\n}\n.collapsable-panel .panel alert.bad {\n  background-color: rgba(200, 100, 100, 0.1);\n}\n.collapsable-panel skill-editor {\n  display: flex;\n  flex-direction: column;\n  margin: 1vh 1vw;\n  border: 2px solid gold;\n  font-size: .75em;\n  padding: 1vh 1vw;\n}\n.collapsable-panel skill-editor header {\n  display: block;\n  font-size: 1em;\n}\n.collapsable-panel skill-editor p {\n  font-size: .75em;\n}\n.collapsable-panel skill-editor .control-container,\n.collapsable-panel skill-editor .button-group {\n  display: flex;\n  font-size: .8em;\n  margin-top: 1vh;\n  align-items: center;\n}\n.collapsable-panel skill-editor input[type='checkbox'] {\n  margin-right: 2vw;\n}\n.collapsable-panel skill-editor .button-group a {\n  margin-left: 2vw;\n}\n.collapsable-panel achievements-wrapper {\n  display: flex;\n  flex-direction: column;\n  margin: 1vh 1vw;\n  padding: 1vh 1vw;\n  background-color: rgba(245, 191, 35, 0.2);\n  font-size: .75em;\n}\n.collapsable-panel achievements-wrapper header {\n  display: flex;\n}\n.collapsable-panel achievements-wrapper header button {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  outline: none;\n  width: 16px;\n  height: 16px;\n  position: relative;\n  top: -1vh;\n}\n.collapsable-panel achievements-wrapper header button img {\n  width: inherit;\n  height: inherit;\n}\n.collapsable-panel achievements-wrapper header title {\n  display: block;\n  flex: 1;\n}\n.collapsable-panel achievements-wrapper section {\n  flex: 1;\n}\n.collapsable-panel achievements-wrapper section story {\n  font-size: .8em;\n}\n.collapsable-panel achievements-wrapper section status {\n  display: flex;\n  border-top: 1px solid #ccc;\n  align-items: flex-end;\n}\n.collapsable-panel achievements-wrapper section status state {\n  display: inline-block;\n  flex: 1;\n  font-size: .7em;\n}\n.collapsable-panel achievements-wrapper section status date {\n  display: inline-block;\n  font-size: .6em;\n}\n";

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
      this.aColl.setChangesApi(true);
      this.sColl.setChangesApi(true);
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
    value: function disconnectedCallback() {}
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

      console.log("_awards", _awards);
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
    value: function disconnectedCallback() {}
  }, {
    key: 'filterSkills',
    value: function filterSkills(val) {
      var str = val ? val.toLowerCase() : null;
      if (!str || str === '') this.skills = JSON.parse(JSON.stringify(this.skills));else {
        this.skills = this.skills.filter(function (skill) {
          return skill.title.toLowerCase().indexOf(str) !== -1 || skill.description.toLowerCase().indexOf(str) !== -1 || skill.category.toLowerCase().indexOf(str) !== -1;
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
      console.log("this.viewSkills", this.viewSkills);
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
  incrementalDom.elementOpen("input", "682f6a88-8140-4890-81bb-5bc4f36e954f", hoisted1$7, "onkeyup", function ($event) {
    var $element = this;
    ctrl.goalSearch(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("button", "a094415b-a98f-42b3-bfb5-176f48251a43", hoisted2$5);
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
  incrementalDom.elementOpen("input", "96bbbfd3-2011-48f5-ae76-cf68898f2f27", hoisted1$8, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "00019b56-1a89-4a3b-b7f9-539b1e107d91", hoisted2$6);
  incrementalDom.text("Users");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "a1e25bb0-150d-44d5-9156-03fe14491e3e", hoisted3$5, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "f09ab575-8131-4dcf-8706-2cbd6def45fe", hoisted4$4);
  incrementalDom.text("Skills");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "eb497795-b991-4ed4-ba11-f13ff64ea774", hoisted5$4, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "bee69cac-a510-4a57-b5e6-8cec063b75f5", hoisted6$4);
  incrementalDom.text("Awards");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "be1dab6a-9be3-4fcd-862e-345468ed4098", hoisted7$4, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "1c439051-ad89-4581-a3c1-da9526f3a2cc", hoisted8$3);
  incrementalDom.text("Assistance");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "9af18639-df74-4db7-9bad-98d6ec92de47", hoisted9$2, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "d0487941-85d1-43f6-8ea0-d91e4c51edcc", hoisted10$2);
  incrementalDom.text("Reports");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementClose("tabs");
  incrementalDom.elementOpen("content");
  incrementalDom.elementClose("content");
}

var css$8 = "h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\nsys-admin {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n}\n#sys-admin {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n#sys-admin tabs {\n  display: flex;\n  margin: 2vw 2vw 0 2vw;\n  background-color: white;\n  justify-content: flex-start;\n}\n#sys-admin tab {\n  display: block;\n  flex: 1;\n}\n#sys-admin tab input[type=radio] {\n  display: none;\n}\n#sys-admin tab input[type=radio]:checked ~ label {\n  background: white;\n  border-bottom: 1px solid white;\n  z-index: 2;\n}\n#sys-admin tab label {\n  display: block;\n  background: #eee;\n  padding: 10px;\n  border: 1px solid #ccc;\n  font-size: 17px;\n  cursor: pointer;\n}\n#sys-admin content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: white;\n  border-right: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n  margin: 0 2vw 1vh 2vw;\n  padding: 2vw;\n  overflow: hidden;\n}\n";

var css$9 = "";

function render$9(ctrl) {
  incrementalDom.text("Help \
");
}

var AssistanceAdmin = function (_HTMLElement) {
  inherits(AssistanceAdmin, _HTMLElement);

  function AssistanceAdmin() {
    classCallCheck(this, AssistanceAdmin);

    var _this = possibleConstructorReturn(this, (AssistanceAdmin.__proto__ || Object.getPrototypeOf(AssistanceAdmin)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$9 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');
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
      if (this.element) incrementalDom.patch(this.element, render$9, this);
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

var css$10 = ".button,\nbutton,\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0;\n}\n.button.primary,\nbutton.primary,\ninput[type=\"submit\"].primary,\ninput[type=\"reset\"].primary,\ninput[type=\"button\"].primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0;\n}\n.button.primary:hover,\nbutton.primary:hover,\ninput[type=\"submit\"].primary:hover,\ninput[type=\"reset\"].primary:hover,\ninput[type=\"button\"].primary:hover,\n.button.primary:focus,\nbutton.primary:focus,\ninput[type=\"submit\"].primary:focus,\ninput[type=\"reset\"].primary:focus,\ninput[type=\"button\"].primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB;\n}\n.button.danger,\nbutton.danger,\ninput[type=\"submit\"].danger,\ninput[type=\"reset\"].danger,\ninput[type=\"button\"].danger {\n  color: #FFF;\n  background-color: rgba(255, 0, 0, 0.75);\n  border-color: #ff0000;\n}\n.button.danger:hover,\nbutton.danger:hover,\ninput[type=\"submit\"].danger:hover,\ninput[type=\"reset\"].danger:hover,\ninput[type=\"button\"].danger:hover,\n.button.danger:focus,\nbutton.danger:focus,\ninput[type=\"submit\"].danger:focus,\ninput[type=\"reset\"].danger:focus,\ninput[type=\"button\"].danger:focus {\n  color: #FFF;\n  background-color: #ff0000;\n  border-color: #ff0000;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n}\nsection[name='header'] {\n  display: flex;\n  flex-direction: column;\n}\nsection[name='header'] input[name=\"search\"] {\n  height: 38px;\n  font-size: 1em;\n  padding-left: 1vw;\n}\nsection[name='header'] #filter {\n  display: flex;\n  align-items: center;\n  height: 38px;\n  border: 1px solid #ccc;\n  border-top: 0;\n}\nsection[name='header'] #filter label {\n  flex: 1;\n  padding-left: 1vw;\n}\nsection[name='awards'] {\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  margin-top: 1vh;\n  border: 1px solid #ccc;\n  display: flex;\n  flex-direction: column;\n  padding: 1vw 1vh;\n}\nsection[name='awards'] .row {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: .9em;\n}\nsection[name='awards'] .row user,\nsection[name='awards'] .row skill,\nsection[name='awards'] .row date,\nsection[name='awards'] .row help,\nsection[name='awards'] .row share,\nsection[name='awards'] .row story,\nsection[name='awards'] .row actions {\n  display: flex;\n  height: 28px;\n  width: 100%;\n  align-items: center;\n}\nsection[name='awards'] .row user name,\nsection[name='awards'] .row skill name,\nsection[name='awards'] .row date name,\nsection[name='awards'] .row help name,\nsection[name='awards'] .row share name,\nsection[name='awards'] .row story name,\nsection[name='awards'] .row actions name {\n  flex: 1;\n  font-weight: bold;\n}\nsection[name='awards'] .row user value,\nsection[name='awards'] .row skill value,\nsection[name='awards'] .row date value,\nsection[name='awards'] .row help value,\nsection[name='awards'] .row share value,\nsection[name='awards'] .row story value,\nsection[name='awards'] .row actions value {\n  display: inline-block;\n  flex: 4;\n}\nsection[name='awards'] .row story {\n  margin-top: 1vh;\n}\nsection[name='awards'] .row story value {\n  border: 1px solid #ccc;\n  padding: 1vh 1vw;\n  min-height: 3vh;\n}\nsection[name='awards'] .row actions {\n  height: 48px;\n}\nsection[name='awards'] .row actions value {\n  padding: 0;\n}\nsection[name='awards'] .row actions value button {\n  margin-top: 2vh;\n}\n";

var hoisted1$9 = ["name", "header"];
var hoisted2$7 = ["type", "text", "name", "search", "value", "", "placeholder", "Search ..."];
var hoisted3$6 = ["id", "filter"];
var hoisted4$5 = ["for", ""];
var hoisted5$5 = ["type", "radio", "name", "awardsFilter", "value", ""];
var hoisted6$5 = ["for", ""];
var hoisted7$5 = ["type", "radio", "name", "awardsFilter", "value", "", "checked", ""];
var hoisted8$4 = ["for", ""];
var hoisted9$3 = ["type", "radio", "name", "awardsFilter", "value", ""];
var hoisted10$3 = ["name", "awards"];
var hoisted11$1 = ["class", "row"];
var hoisted12$1 = ["type", "button", "class", "primary", "name", "accept"];
function render$10(ctrl) {
  incrementalDom.elementOpen("section", "b437c42f-cbfb-43ba-980b-12d8eb5a407a", hoisted1$9);
  incrementalDom.elementOpen("input", "f7d6fbeb-85d9-47b8-aeef-063790a16d60", hoisted2$7);
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("div", "7c5f02f5-5810-4313-85f0-17a01ee8efab", hoisted3$6);
  incrementalDom.elementOpen("label", "8c72fbb4-4f1b-45fc-86cb-b74d9aab75fd", hoisted4$5);
  incrementalDom.elementOpen("input", "95c0caac-4d92-47c6-bab8-9d497b761d17", hoisted5$5);
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            All \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementOpen("label", "90827977-e5bf-41c1-ae9b-fc313027a194", hoisted6$5);
  incrementalDom.elementOpen("input", "ac6aff23-a5fe-44d9-bd11-0517eea411f0", hoisted7$5);
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            Pending \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementOpen("label", "23510616-ffa8-45d5-825f-ead248460a68", hoisted8$4);
  incrementalDom.elementOpen("input", "6074fceb-ce3f-4baf-8c28-11120e80beb7", hoisted9$3);
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            Earned \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("div");
  incrementalDom.elementClose("section");
  incrementalDom.elementOpen("section", "40e8ddc0-3d8c-41af-ad43-12c41c6005c3", hoisted10$3);
  incrementalDom.elementOpen("div", "1196b8a2-3c5f-4e4f-ab6c-5130e773fc10", hoisted11$1);
  incrementalDom.elementOpen("user");
  incrementalDom.elementOpen("name");
  incrementalDom.text("Name");
  incrementalDom.elementClose("name");
  incrementalDom.elementOpen("value");
  incrementalDom.text("Rob Hicks");
  incrementalDom.elementClose("value");
  incrementalDom.elementClose("user");
  incrementalDom.elementOpen("skill");
  incrementalDom.elementOpen("name");
  incrementalDom.text("Skill");
  incrementalDom.elementClose("name");
  incrementalDom.elementOpen("value");
  incrementalDom.text("My Family");
  incrementalDom.elementClose("value");
  incrementalDom.elementClose("skill");
  incrementalDom.elementOpen("date");
  incrementalDom.elementOpen("name");
  incrementalDom.text("Date");
  incrementalDom.elementClose("name");
  incrementalDom.elementOpen("value");
  incrementalDom.text("March 31");
  incrementalDom.elementClose("value");
  incrementalDom.elementClose("date");
  incrementalDom.elementOpen("help");
  incrementalDom.elementOpen("name");
  incrementalDom.text("Will Help");
  incrementalDom.elementClose("name");
  incrementalDom.elementOpen("value");
  incrementalDom.text("Yes");
  incrementalDom.elementClose("value");
  incrementalDom.elementClose("help");
  incrementalDom.elementOpen("share");
  incrementalDom.elementOpen("name");
  incrementalDom.text("Will Share");
  incrementalDom.elementClose("name");
  incrementalDom.elementOpen("value");
  incrementalDom.text("Yes");
  incrementalDom.elementClose("value");
  incrementalDom.elementClose("share");
  incrementalDom.elementOpen("story");
  incrementalDom.elementOpen("name");
  incrementalDom.text("Story");
  incrementalDom.elementClose("name");
  incrementalDom.elementOpen("value");
  incrementalDom.text("My Story");
  incrementalDom.elementClose("value");
  incrementalDom.elementClose("story");
  incrementalDom.elementOpen("actions");
  incrementalDom.elementOpen("name");
  incrementalDom.elementClose("name");
  incrementalDom.elementOpen("value");
  incrementalDom.elementOpen("button", "9948d51f-f26d-4ba2-a3c7-13fa037a7562", hoisted12$1);
  incrementalDom.text("Accept");
  incrementalDom.elementClose("button");
  incrementalDom.elementClose("value");
  incrementalDom.elementClose("actions");
  incrementalDom.elementClose("div");
  incrementalDom.elementClose("section");
}

var AwardsAdmin = function (_HTMLElement) {
  inherits(AwardsAdmin, _HTMLElement);

  function AwardsAdmin() {
    classCallCheck(this, AwardsAdmin);

    var _this = possibleConstructorReturn(this, (AwardsAdmin.__proto__ || Object.getPrototypeOf(AwardsAdmin)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.shadowRoot.innerHTML = '<style>' + css$10 + '</style><container></container>';
    _this.element = _this.shadowRoot.querySelector('container');

    document.addEventListener('awardsChanged', _this._updateView.bind(_this));
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
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.aColl = db.getCollection('awards');
      this.dv = this.aColl.addDynamicView('awards');
      this._updateView();
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: '_updateView',
    value: function _updateView() {
      this.awards = this.dv.data();
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

var hoisted1$10 = ["type", "text", "name", "skillsearch", "placeholder", "Search ..."];
var hoisted2$8 = ["type", "button", "name", "add"];
var hoisted3$7 = ["name", "skill"];
var hoisted4$6 = ["type", "text", "required", ""];
var hoisted5$6 = ["type", "text", "required", ""];
var hoisted6$6 = ["name", "category", "required", ""];
var hoisted7$6 = ["value", ""];
var hoisted8$5 = ["value", "booklet"];
var hoisted9$4 = ["value", "find"];
var hoisted10$4 = ["value", "take"];
var hoisted11$2 = ["value", "indexing"];
var hoisted12$2 = ["type", "checkbox"];
var hoisted13$1 = ["id", "skill-editor"];
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
    incrementalDom.elementOpen("input", "715d0e9e-408a-44b2-bf84-8d2c89ae1499", hoisted1$10, "onkeyup", function ($event) {
      var $element = this;
      ctrl.filterSkills(this.value);
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementOpen("button", "eb1fc288-0867-4e75-923a-27bc7fc32025", hoisted2$8, "onclick", function ($event) {
      var $element = this;
      ctrl.addSkill();
    });
    incrementalDom.text("Add");
    incrementalDom.elementClose("button");
    incrementalDom.elementClose("skills-search");
  }
  incrementalDom.elementOpen("skills-list");
  if (ctrl.skillEditor) {
    incrementalDom.elementOpen("form", "c4ffd7e1-60e2-4e9e-bbc2-b7a750e7a06c", hoisted3$7);
    incrementalDom.elementOpen("skill-editor-title");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Title:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "2512d26f-0def-4d01-abb2-1c56493df41a", hoisted4$6, "name", ctrl.skill.title, "value", ctrl.skill.title, "onchange", function ($event) {
      var $element = this;
      ctrl.skill.title = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("skill-editor-title");
    incrementalDom.elementOpen("skill-editor-description");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Description:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "82df72e1-e057-47bd-ad18-a0353a60aacf", hoisted5$6, "name", ctrl.skill.description, "value", ctrl.skill.description, "onchange", function ($event) {
      var $element = this;
      ctrl.skill.description = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("skill-editor-description");
    incrementalDom.elementOpen("skill-editor-category");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Category:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("select", "af6db380-209a-4778-a2f9-fab4547f2e95", hoisted6$6, "onchange", function ($event) {
      var $element = this;
      ctrl.skill.category = this.value;
    });
    incrementalDom.elementOpen("option", "f86a047e-48f3-4458-9ead-b72d6edfd655", hoisted7$6);
    incrementalDom.text("Select");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "36c3b090-4ac7-4f72-8ee2-6f92f96bfaaf", hoisted8$5, "selected", ctrl.skill.category === 'booklet' ? true : null);
    incrementalDom.text("Booklet");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "bdf257ac-4831-4c4c-958e-815a2328e7ab", hoisted9$4, "selected", ctrl.skill.category === 'find' ? true : null);
    incrementalDom.text("Find");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "29527183-773c-4211-b47d-7de13072349e", hoisted10$4, "selected", ctrl.skill.category === 'take' ? true : null);
    incrementalDom.text("Take");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "2340b02a-deb6-4bf1-8ac7-41316aec26c7", hoisted11$2, "selected", ctrl.skill.category === 'indexing' ? true : null);
    incrementalDom.text("Indexing");
    incrementalDom.elementClose("option");
    incrementalDom.elementClose("select");
    incrementalDom.elementClose("skill-editor-category");
    incrementalDom.elementOpen("skill-editor-multiplicity");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Allow Multiple:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "91202830-ea72-4091-9137-2c88f321752f", hoisted12$2, "checked", ctrl.skill.multiple, "onchange", function ($event) {
      var $element = this;
      ctrl.skill.multiple = this.checked;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("skill-editor-multiplicity");
    incrementalDom.elementOpen("skill-editor-instructions");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Instructions:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("div", "765077ad-8030-407e-b342-ca19b2bcf232", hoisted13$1);
    incrementalDom.elementClose("div");
    incrementalDom.elementClose("skill-editor-instructions");
    incrementalDom.elementOpen("skill-editor-actions");
    incrementalDom.elementOpen("button", "43033c71-2414-4bc6-8387-01c58665aa20", hoisted14$1, "onclick", function ($event) {
      var $element = this;
      ctrl.saveSkill();
    });
    incrementalDom.text("Save");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("button", "903ae9aa-fd54-4cc6-aa50-5a7078f7cc82", hoisted15$1, "onclick", function ($event) {
      var $element = this;
      ctrl.deleteSkill();
    });
    incrementalDom.text("Delete");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("button", "7b701397-5f5c-438c-b649-39838a0e0579", hoisted16$1, "onclick", function ($event) {
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
        var $key = "d06ee8c2-5a09-4274-90fa-f8d92de598cf_" + $item;
        incrementalDom.elementOpen("skill-item", $key, null, "class", $item % 2 ? 'odd' : 'even');
        incrementalDom.elementOpen("div", "2f21c746-fe93-41af-9da3-230e5aa0775f_" + $key, hoisted17$1);
        incrementalDom.elementOpen("div", "4e3bf3a8-0d30-47b0-9666-d2019253f42e_" + $key, hoisted18$1);
        incrementalDom.text("" + skill.title + "");
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "b0111be4-ad9f-494b-b504-aafd0449a4ee_" + $key, hoisted19$1);
        incrementalDom.text("" + skill.description + "");
        incrementalDom.elementClose("div");
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "52b2db96-ce6d-42ec-9ce0-41214c42195c_" + $key, hoisted20$1);
        incrementalDom.elementOpen("button", "264a9f4b-aabc-4a5a-b91a-f1318f06a6a7_" + $key, hoisted21$1, "disabled", ctrl.skillFormValid, "onclick", function ($event) {
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
    value: function disconnectedCallback() {}
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

      this.dv.applyWhere(function (skill) {
        return skill.title.toLowerCase().indexOf(str) !== -1 || skill.description.toLowerCase().indexOf(str) !== -1 || skill.category.toLowerCase().indexOf(str) !== -1;
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

var hoisted1$11 = ["type", "text", "name", "usersearch", "placeholder", "Search ..."];
var hoisted2$9 = ["name", "user"];
var hoisted3$8 = ["type", "text", "required", ""];
var hoisted4$7 = ["type", "text", "required", ""];
var hoisted5$7 = ["type", "text", "disabled", "true"];
var hoisted6$7 = ["name", "group", "required", ""];
var hoisted7$7 = ["value", ""];
var hoisted8$6 = ["value", "be"];
var hoisted9$5 = ["value", "dn"];
var hoisted10$5 = ["value", "eq"];
var hoisted11$3 = ["value", "hp"];
var hoisted12$3 = ["value", "ll"];
var hoisted13$2 = ["value", "mm"];
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
    incrementalDom.elementOpen("input", "7ab67f79-563d-46f6-8ebb-4dd8994766a7", hoisted1$11, "onkeyup", function ($event) {
      var $element = this;
      ctrl.filterUsers(this.value);
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("users-search");
  }
  incrementalDom.elementOpen("users-list");
  if (ctrl.userEditor) {
    incrementalDom.elementOpen("form", "864f0954-b27f-4414-ae8d-d15709d9db80", hoisted2$9);
    incrementalDom.elementOpen("user-editor-name");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Certificate Name:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "5440cc5d-42e2-40c5-95aa-64550f81ca22", hoisted3$8, "value", ctrl.user.name, "onchange", function ($event) {
      var $element = this;
      ctrl.user.name = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-editor-name");
    incrementalDom.elementOpen("user-editor-display-name");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Display Name:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "cb1dd251-6504-4749-9f79-eebe90de6d1e", hoisted4$7, "name", ctrl.user.displayName, "value", ctrl.user.displayName, "onchange", function ($event) {
      var $element = this;
      ctrl.user.displayName = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-editor-display-name");
    incrementalDom.elementOpen("user-editor-email");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Email:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "51b47d96-c5ae-4169-9ef9-ff70b7ec0d87", hoisted5$7, "name", ctrl.user.email, "value", ctrl.user.email, "onchange", function ($event) {
      var $element = this;
      ctrl.user.email = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-editor-email");
    incrementalDom.elementOpen("user-editor-category");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Organization:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("select", "2a0a9664-ed6c-4bd8-b7e4-3324842a47fb", hoisted6$7, "onchange", function ($event) {
      var $element = this;
      ctrl.user.group = this.value;
    });
    incrementalDom.elementOpen("option", "6f23d380-54dc-4aa5-9fd4-d74a1fa79860", hoisted7$7);
    incrementalDom.text("Select");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "8db0960f-a764-4ff1-8f2e-deb36a3882d7", hoisted8$6, "selected", ctrl.user.group === 'be' ? true : null);
    incrementalDom.text("Beehive");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "3c6fd80e-f4f3-4e99-9c45-c78f42d153e0", hoisted9$5, "selected", ctrl.user.group === 'dn' ? true : null);
    incrementalDom.text("Deacon");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "55b39e28-9c5d-49c1-8efd-5fa8c48740c8", hoisted10$5, "selected", ctrl.user.group === 'eq' ? true : null);
    incrementalDom.text("Elders");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "8e2b1154-b997-4b9a-8047-fa51af7b0d3d", hoisted11$3, "selected", ctrl.user.group === 'hp' ? true : null);
    incrementalDom.text("High Priest");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "65d61c9a-ed3a-40ba-9f15-2bef92277aaa", hoisted12$3, "selected", ctrl.user.group === 'll' ? true : null);
    incrementalDom.text("Laurel");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "f4aa77fe-ff3a-46ad-a471-3b12ec781a7c", hoisted13$2, "selected", ctrl.user.group === 'mm' ? true : null);
    incrementalDom.text("Miamaid");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "f459d218-c8c6-4d68-8e79-3e7f57c15f08", hoisted14$2, "selected", ctrl.user.group === 'pr' ? true : null);
    incrementalDom.text("Priest");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "eb3e775a-b784-4007-ae31-db8cc0469cce", hoisted15$2, "selected", ctrl.user.group === 'py' ? true : null);
    incrementalDom.text("Primary");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "7207d5b5-2531-45f8-904b-d489ebe88add", hoisted16$2, "selected", ctrl.user.group === 'rs' ? true : null);
    incrementalDom.text("Relief Society");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "3a900d5d-4a01-4d1c-8a6c-7abd576acacb", hoisted17$2, "selected", ctrl.user.group === 'tr' ? true : null);
    incrementalDom.text("Teacher");
    incrementalDom.elementClose("option");
    incrementalDom.elementClose("select");
    incrementalDom.elementClose("user-editor-category");
    incrementalDom.elementOpen("user-admin");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Admin:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "b73d78af-8b49-4b1b-a3eb-a5827702b5aa", hoisted18$2, "checked", ctrl.user.admin ? true : null, "onchange", function ($event) {
      var $element = this;
      ctrl.user.admin = this.checked;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-admin");
    incrementalDom.elementOpen("user-editor-actions");
    incrementalDom.elementOpen("button", "7a6a6d3f-9373-4f7f-845b-e2f1f31966b8", hoisted19$2, "onclick", function ($event) {
      var $element = this;
      ctrl.saveUser();
    });
    incrementalDom.text("Save");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("button", "0521e26c-8a59-4bb1-ad58-269136dc7de1", hoisted20$2, "onclick", function ($event) {
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
        var $key = "75d0cb35-4c34-4d98-a642-7de6e5630132_" + $item;
        incrementalDom.elementOpen("user-item", $key, null, "class", $item % 2 ? 'odd' : 'even');
        incrementalDom.elementOpen("div", "abe169e1-71e5-4d8e-979b-97c3c3cce1d8_" + $key, hoisted21$2);
        if (user.name) {
          incrementalDom.elementOpen("div", "43705547-9eea-448f-a418-845162095aab_" + $key, hoisted22$1);
          incrementalDom.text("" + user.name + "");
          incrementalDom.elementClose("div");
        }
        incrementalDom.elementOpen("div", "712b9368-bbc7-4c09-8796-49ba09d19e4e_" + $key, hoisted23$1);
        incrementalDom.text("" + user.displayName + "");
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "6b6ccc98-42ce-4e54-8771-b31686b9ad7f_" + $key, hoisted24$1);
        incrementalDom.text("" + user.email + "");
        incrementalDom.elementClose("div");
        if (user.group) {
          incrementalDom.elementOpen("div", "e4cc1257-4564-42b4-999f-670ccdcd4228_" + $key, hoisted25$1);
          incrementalDom.text("" + ctrl.getGroupName(user) + "");
          incrementalDom.elementClose("div");
        }
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "e8e64729-2472-4615-a0db-d9a46790adf6_" + $key, hoisted26$1);
        incrementalDom.elementOpen("button", "89576255-1625-4716-aa13-40f9db0de03b_" + $key, hoisted27$1, "disabled", ctrl.userFormValid, "onclick", function ($event) {
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
    value: function disconnectedCallback() {}
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

      this.dv.applyWhere(function (_user) {
        return _user.displayName && _user.displayName.toLowerCase().indexOf(str) !== -1 || _user.name && _user.name.toLowerCase().indexOf(str) !== -1 || _user.group && _user.group.toLowerCase().indexOf(str) !== -1 || _user.email && _user.email.toLowerCase().indexOf(str) !== -1;
      });

      if (!str || str === '') {
        this.dv.removeFilters();
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

var hoisted1$12 = ["type", "a"];
var hoisted2$10 = ["type", "i"];
var hoisted3$9 = ["type", "a"];
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
  incrementalDom.elementOpen("ol", "ce483f1f-814b-4bde-9b33-fa71bab5db28", hoisted1$12);
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        Permission is granted to temporarily download one copy of the materials (information or software) on Manila 7th Ward's web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this \
        license you may not: \
     \
        ");
  incrementalDom.elementOpen("ol", "8ceb6f54-7e09-4618-be89-c73fc4bd3c52", hoisted2$10);
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
  incrementalDom.elementOpen("ol", "5a2becf0-285a-4b8b-a830-752aabe3a375", hoisted3$9);
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
        router.navigate('/not-found');
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

// const idbAdapter = new LokiIndexedAdapter('loki');
var db = new loki('m7temple.db', { autosave: true });

var updateDbChannel = socket.subscribe('updateDbChannel');

function changeHandler() {
  console.log("changeHandler");
  var changes = JSON.parse(db.serializeChanges());
  console.log('changeHandler:changes', changes);
  if (changes && socket.authState === 'authenticated') updateDbChannel.publish(JSON.stringify(changes), function (err) {
    if (err) console.error("err", err);
    if (!err) db.clearChanges();
    db.clearChanges();
  });
}

function updateDb(db, changes) {
  console.log("changes", changes);
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
    var users = db.getCollection('users');
    awards.on(['insert', 'update', 'delete'], changeHandler);
    skills.on(['insert', 'update', 'delete'], changeHandler);
    users.on(['insert', 'update', 'delete'], changeHandler);
    db.loaded = true;
    // console.log('database loaded');
    next();
  });
};

updateDbChannel.watch(function (data) {
  var changes = JSON.parse(data);
  // console.log("socket", socket)
  // console.log("updateDbChannel::changes", changes);
  if (socket.authState === 'authenticated' && Array.isArray(changes)) updateDb(db, changes);
  db.clearChanges();
});

}(IncrementalDOM));
