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
  incrementalDom.elementOpen("a", "b8929f5b-2470-4861-b7b2-8a9ac5513325", hoisted1);
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
    incrementalDom.elementOpen("div", "9163d92e-2f0f-4ca2-affe-cd103a42b2cf", hoisted1$1);
    incrementalDom.elementOpen("div", "ac1635cc-b242-46c0-8c2f-392594ad98ec", hoisted2);
    incrementalDom.elementOpen("div", "f066a6ce-9f3f-4368-afc0-2987b7a43c5d", hoisted3);
    incrementalDom.elementOpen("div", "0006fc10-7f84-46ef-8684-6e90e1621466", hoisted4);
    incrementalDom.elementOpen("h4");
    incrementalDom.text("" + ctrl._heading + "");
    incrementalDom.elementClose("h4");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "678d7918-350d-423d-95d5-75a4e694a139", hoisted5);
    incrementalDom.text("" + ctrl._body + "");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "11803001-bc37-4f24-9f94-1363e440101c", hoisted6);
    incrementalDom.elementOpen("button", "56c92035-ff15-448a-b28f-fccac2fdfdbc", hoisted7, "onclick", function ($event) {
      var $element = this;
      ctrl._clickButton('primary');
    });
    incrementalDom.text("" + ctrl._primary + "");
    incrementalDom.elementClose("button");
    if (ctrl._cancel) {
      incrementalDom.elementOpen("button", "59bff2b1-6084-4d77-bb18-a6c8fc1165f0", hoisted8, "onclick", function ($event) {
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
    // console.log("socket.authState", socket.authState)
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
  incrementalDom.elementOpen("div", "eff408c2-824b-451b-aece-fa793cd0cce7", hoisted1$2);
  incrementalDom.elementOpen("a", "6c807b0c-ea2d-4561-9137-b7af96c06dee", hoisted2$1, "onclick", function ($event) {
    var $element = this;
    ctrl.hello('facebook').login();
  });
  incrementalDom.elementOpen("img", "543987a6-acf7-4dcc-9e5c-ffa3ab550a02", hoisted3$1);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Facebook");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("a", "f8eaf0bb-c9ff-4945-8765-959819d7eb31", hoisted4$1, "onclick", function ($event) {
    var $element = this;
    ctrl.hello('github').login();
  });
  incrementalDom.elementOpen("img", "f5a05499-adc6-4ca5-b71c-a7c6b0e085a6", hoisted5$1);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Github");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("a", "9a700584-da79-4e33-ab14-6d256168d31c", hoisted6$1, "onclick", function ($event) {
    var $element = this;
    ctrl.hello('google').login();
  });
  incrementalDom.elementOpen("img", "28f39e8f-8454-4737-9f80-27643ac24390", hoisted7$1);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Google");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("a", "ecb12992-aa97-4b2a-bf91-bf9946fd950e", hoisted8$1, "onclick", function ($event) {
    var $element = this;
    ctrl.hello('twitter').login();
  });
  incrementalDom.elementOpen("img", "8ae84d81-4c60-452b-be09-f14508b8f23f", hoisted9);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Twitter");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("a", "278383c2-b7e6-47d3-93d7-b0718d0e7cd7", hoisted10);
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
  incrementalDom.elementOpen("a", "763a13af-34e4-4d3b-bec4-274d958ba0d4", hoisted1$3, "onclick", function ($event) {
    var $element = this;
    ctrl.go('/home/authenticated');
  }, "class", ctrl.stateContains('home'));
  incrementalDom.elementOpen("img", "26c2cb8a-f959-437a-8936-5908be612324", hoisted2$2);
  incrementalDom.elementClose("img");
  incrementalDom.elementOpen("span");
  incrementalDom.text("Home");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("a");
  incrementalDom.elementOpen("nav", "dd12ef6b-27ce-4055-ba01-00dec25949ad", hoisted3$2);
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
  incrementalDom.elementOpen("a", "70a9675c-33f2-4955-9f4d-51cc0144454d", hoisted1$4);
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
var hoisted3$3 = ["name", "category", "required", ""];
var hoisted4$2 = ["value", ""];
var hoisted5$2 = ["value", "booklet"];
var hoisted6$2 = ["value", "find"];
var hoisted7$2 = ["value", "take"];
var hoisted8$2 = ["value", "teach"];
var hoisted9$1 = ["value", "memories"];
var hoisted10$1 = ["value", "indexing"];
var hoisted11 = ["for", "mine-checkbox", "id", "mine-wrapper"];
var hoisted12 = ["type", "checkbox", "id", "mine-checkbox"];
var hoisted13 = ["id", "skills"];
var hoisted14 = ["class", "item"];
var hoisted15 = ["shared", "", "collapsed", "true"];
var __target$5;

function render$5(ctrl) {
  incrementalDom.elementOpen("section", "3acd9870-2aca-4c6c-8344-28f142b0832d", hoisted1$5);
  incrementalDom.elementOpen("input", "d216df60-bf65-419d-84cb-a724f54172e6", hoisted2$3, "onkeyup", function ($event) {
    var $element = this;
    ctrl.search.text = this.value;ctrl.filterSkills();
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("skill-editor-category");
  incrementalDom.elementOpen("select", "1716d69c-da23-4108-ba23-bf94294b38a2", hoisted3$3, "onchange", function ($event) {
    var $element = this;
    ctrl.search.category = this.value;ctrl.filterSkills();
  });
  incrementalDom.elementOpen("option", "8c682475-9e20-4d68-9e22-5eca943a5019", hoisted4$2);
  incrementalDom.text("Select");
  incrementalDom.elementClose("option");
  incrementalDom.elementOpen("option", "962c93b3-9931-45a5-9bfd-7ea5e58f737e", hoisted5$2, "selected", ctrl.search.category === 'booklet' ? true : null);
  incrementalDom.text("Booklet");
  incrementalDom.elementClose("option");
  incrementalDom.elementOpen("option", "23d87cef-bd9a-4e43-a2f5-0a3f61b6f11b", hoisted6$2, "selected", ctrl.search.category === 'find' ? true : null);
  incrementalDom.text("Find");
  incrementalDom.elementClose("option");
  incrementalDom.elementOpen("option", "3e0b6f2f-c31a-426a-a1fe-852f87e75e96", hoisted7$2, "selected", ctrl.search.category === 'take' ? true : null);
  incrementalDom.text("Take");
  incrementalDom.elementClose("option");
  incrementalDom.elementOpen("option", "37eb9a3e-7270-4831-b11e-fb944b04d338", hoisted8$2, "selected", ctrl.search.category === 'teach' ? true : null);
  incrementalDom.text("Teach");
  incrementalDom.elementClose("option");
  incrementalDom.elementOpen("option", "13519062-9c65-4197-9634-36ab0327803e", hoisted9$1, "selected", ctrl.search.category === 'memories' ? true : null);
  incrementalDom.text("Memories");
  incrementalDom.elementClose("option");
  incrementalDom.elementOpen("option", "af398573-1719-40d2-a253-b7becdc8683c", hoisted10$1, "selected", ctrl.search.category === 'indexing' ? true : null);
  incrementalDom.text("Indexing");
  incrementalDom.elementClose("option");
  incrementalDom.elementClose("select");
  incrementalDom.elementClose("skill-editor-category");
  incrementalDom.elementOpen("label", "c116f99d-e84e-44a2-a136-d8fc61703a1d", hoisted11);
  incrementalDom.elementOpen("input", "94c3dd28-6545-4d57-b9a5-b5149fca2053", hoisted12, "onchange", function ($event) {
    var $element = this;
    ctrl.toggleMine();
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("span");
  incrementalDom.text("My Skills (" + ctrl.mySkills.length + ")");
  incrementalDom.elementClose("span");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("section");
  incrementalDom.elementOpen("section", "7cf019de-6e8e-4c4b-9af7-ceb1e998c3a0", hoisted13);
  __target$5 = ctrl.viewSkills;
  if (__target$5) {
    (__target$5.forEach ? __target$5 : Object.keys(__target$5)).forEach(function ($value, $item, $target) {
      var item = $value;
      var $key = "16005b99-5bda-4154-934d-be996ede1900_" + $item;
      incrementalDom.elementOpen("div", $key, hoisted14);
      incrementalDom.elementOpen("collapsable-panel", "756db349-33ea-4286-8a6d-1efed6a99be4_" + $key, hoisted15, "class", $item % 2 ? 'odd' : 'even', "earned", item.earned, "pending", item.pending, "added", item.added, "heading", item.title, "iid", item.id, "description", item.description, "html", item.html, "achievements", item.achievements);
      incrementalDom.elementClose("collapsable-panel");
      incrementalDom.elementClose("div");
    }, this);
  }
  incrementalDom.elementClose("section");
}

var css$5 = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  font-size: 1.1em;\n}\n#home {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 2vh;\n  flex: 1;\n}\nsection#search {\n  display: flex;\n  margin: 2vw 2vh 0;\n  height: 42px;\n}\nsection#search input {\n  flex-grow: 1;\n  width: inherit;\n  height: 36px;\n  font-size: 1em;\n  padding-left: 2vw;\n}\nsection#search select {\n  flex: .5;\n  height: 42px;\n  font-size: 1em;\n  margin-left: 1vw;\n  border: 0;\n  outline: 1px solid #ccc;\n  background-color: white;\n  border-radius: 0;\n}\nsection#skills {\n  display: flex;\n  flex-direction: column;\n  flex: 6;\n  margin: 2vw 2vh 0;\n  background-color: #ffffff;\n  padding: 2vw 2vh;\n  overflow-y: auto;\n}\n#mine-wrapper {\n  display: flex;\n  background-color: #ffffff;\n  align-items: center;\n  height: 42px;\n  padding: 0 1vw;\n  margin-left: 1vw;\n}\n#mine-wrapper #mine-checkbox {\n  margin-right: 1vw;\n}\ncollapsable-panel {\n  display: block;\n  width: 100%;\n  height: auto;\n}\ncollapsable-panel.odd {\n  background-color: rgba(98, 171, 239, 0.15);\n}\n";

var hoisted1$6 = ["class", "panel"];
var hoisted2$4 = ["class", "heading"];
var hoisted3$4 = ["class", "title"];
var hoisted4$3 = ["class", "button-group"];
var hoisted5$3 = ["type", "button", "name", "add"];
var hoisted6$3 = ["src", "/img/add.svg", "alt", ""];
var hoisted7$3 = ["type", "button", "name", "apply"];
var hoisted8$3 = ["src", "/img/skill-apply.svg", "alt", ""];
var hoisted9$2 = ["type", "button", "name", "earned"];
var hoisted10$2 = ["src", "/img/skill-earned.svg", "alt", ""];
var hoisted11$1 = ["type", "button", "name", "pending"];
var hoisted12$1 = ["src", "/img/skill-pending.svg", "alt", ""];
var hoisted13$1 = ["type", "button", "name", "add"];
var hoisted14$1 = ["src", "/img/help.svg", "alt", ""];
var hoisted15$1 = ["type", "button", "name", "delete"];
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
  incrementalDom.elementOpen("div", "a44bb61c-aa22-41d9-b7c8-25a5aa9ae12d", hoisted1$6);
  incrementalDom.elementOpen("div", "061e4082-8dd9-49fa-b932-5a98dc19d882", hoisted2$4);
  incrementalDom.elementOpen("div", "67b6b2f5-0ec1-4da2-a7d3-9d30e8ebf449", hoisted3$4);
  incrementalDom.text("" + ctrl.heading + "");
  incrementalDom.elementClose("div");
  incrementalDom.elementOpen("div", "e424a77f-5442-42e9-b9f8-64b76c93c2f3", hoisted4$3);
  if (!ctrl.added && !ctrl.earned && !ctrl.pending && !ctrl.multiple) {
    incrementalDom.elementOpen("button", "8d128b91-1e96-4a4a-b197-4e073c642e83", hoisted5$3, "onclick", function ($event) {
      var $element = this;
      ctrl.add(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "8e048bdb-e5f6-4cb4-b655-89901b448b98", hoisted6$3);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  if (!ctrl.earned && !ctrl.multiple && !ctrl.pending) {
    incrementalDom.elementOpen("button", "f8f7fe6b-8b12-4398-882b-a3774fc662ca", hoisted7$3, "onclick", function ($event) {
      var $element = this;
      ctrl.addAndShowAchievementEditor(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "309a97f0-05d3-4a4f-96b2-e057adf21c6d", hoisted8$3);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  if (ctrl.earned) {
    incrementalDom.elementOpen("button", "e41c73df-6060-45d3-8392-95ae0a35fa8f", hoisted9$2, "onclick", function ($event) {
      var $element = this;
      ctrl.showAwards(ctrl.iid, 'earned');
    });
    incrementalDom.elementOpen("img", "00ba83c1-b371-4611-91b1-d8d157e5558b", hoisted10$2);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  if (ctrl.pending) {
    incrementalDom.elementOpen("button", "88472643-75ca-4130-beb0-a20ca5dbb4fd", hoisted11$1, "onclick", function ($event) {
      var $element = this;
      ctrl.showAwards(ctrl.iid, 'pending');
    });
    incrementalDom.elementOpen("img", "1ab8e017-1d01-46b5-a6b7-9994744b864a", hoisted12$1);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  incrementalDom.elementOpen("button", "f974c494-9dd5-494b-9d5f-1c91847f221f", hoisted13$1, "onclick", function ($event) {
    var $element = this;
    ctrl.addTicket(ctrl.iid);
  });
  incrementalDom.elementOpen("img", "f333c27e-0de4-4433-bbea-0091a3939b2c", hoisted14$1);
  incrementalDom.elementClose("img");
  incrementalDom.elementClose("button");
  if (ctrl.added || ctrl.pending || ctrl.earned) {
    incrementalDom.elementOpen("button", "e29a1a66-fc4a-4ab6-9e3b-95fe78fb68d9", hoisted15$1, "onclick", function ($event) {
      var $element = this;
      ctrl.delete(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "d8787be4-fa64-4f76-844b-6df1fc11b590", hoisted16);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
  }
  incrementalDom.elementOpen("button", "ca6d77d5-1fc1-4a1a-85e3-49163f060b19", hoisted17);
  incrementalDom.text("" + ctrl.achievements + "");
  incrementalDom.elementClose("button");
  incrementalDom.elementOpen("button", "bc431865-ccc2-4665-9fc7-c29697c5d1e8", hoisted18, "onclick", function ($event) {
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
  incrementalDom.elementOpen("div", "e50cf46f-779e-4b66-9fd8-61e5260a24d5", hoisted19);
  incrementalDom.text("" + ctrl.description + "");
  incrementalDom.elementClose("div");
  if (ctrl.showAchievements) {
    incrementalDom.elementOpen("achievements-wrapper");
    incrementalDom.elementOpen("header");
    incrementalDom.elementOpen("title");
    incrementalDom.text("Achievements:");
    incrementalDom.elementClose("title");
    incrementalDom.elementOpen("button", "6de7770e-45fe-49dc-acb9-4887ef57da1a", hoisted20, "onclick", function ($event) {
      var $element = this;
      ctrl.hideAchievements(ctrl.iid);
    });
    incrementalDom.elementOpen("img", "b7f6f8b3-c83e-4680-a479-126f11269332", hoisted21);
    incrementalDom.elementClose("img");
    incrementalDom.elementClose("button");
    incrementalDom.elementClose("header");
    __target$6 = ctrl.awards;
    if (__target$6) {
      (__target$6.forEach ? __target$6 : Object.keys(__target$6)).forEach(function ($value, $item, $target) {
        var item = $value;
        var $key = "79a4e9b2-95a8-4851-8632-0f9ce14975a8_" + $item;
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
    incrementalDom.elementOpen("textarea", "2f1a7a4b-092c-4dc9-a4f5-7f0ea143be43", hoisted23);
    incrementalDom.elementClose("textarea");
    incrementalDom.elementOpen("div", "cad3c676-f427-40dd-99df-253bdb55ab28", hoisted24);
    incrementalDom.elementOpen("input", "b4d4d7d2-476c-4b1f-9bc8-2798b6ef693f", hoisted25);
    incrementalDom.elementClose("input");
    incrementalDom.elementOpen("span");
    incrementalDom.text("Yes, I'm willing to share my experience");
    incrementalDom.elementClose("span");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "4a829bb7-9aaf-45d3-bf19-126b8fd58eef", hoisted26);
    incrementalDom.elementOpen("input", "2935a68b-8527-4d9b-be47-5e78c0f7086d", hoisted27);
    incrementalDom.elementClose("input");
    incrementalDom.elementOpen("span");
    incrementalDom.text("Yes, I'm willing to help others achieve this skill.");
    incrementalDom.elementClose("span");
    incrementalDom.elementClose("div");
    incrementalDom.elementOpen("div", "2b82197e-6d2f-4287-ae8c-242ebe0417ff", hoisted28);
    incrementalDom.elementOpen("button", "b833a933-4f83-4a91-b273-cc55787f21c0", hoisted29, "onclick", function ($event) {
      var $element = this;
      ctrl.applyForAchievment();
    });
    incrementalDom.text("Apply");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("a", "14f1edb2-c61d-45ca-9492-fde303c49415", hoisted30, "onclick", function ($event) {
      var $element = this;
      ctrl.hideSkillEditor();
    });
    incrementalDom.text("Cancel");
    incrementalDom.elementClose("a");
    incrementalDom.elementClose("div");
    incrementalDom.elementClose("skill-editor");
  }
  if (!ctrl.collapsed) {
    incrementalDom.elementOpen("div", "a6ae8ae0-cdf7-4712-83b4-6f1a973bb033", hoisted31);
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

      document.addEventListener('awardsChanged', this._updateView.bind(this));
      document.addEventListener('skillsChanged', this._updateView.bind(this));
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
    _this.search = {};
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

      this.aColl.setChangesApi(true);
      this.sColl.setChangesApi(true);

      this.adv = this.aColl.addDynamicView('awards');
      this.sdv = this.sColl.addDynamicView('skills');

      document.addEventListener('userUnauthenticated', function () {
        router.navigate('/login');
      });
      document.addEventListener('awardsChanged', this._updateView.bind(this));
      document.addEventListener('skillsChanged', this._updateView.bind(this));

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
    value: function filterSkills() {
      var text$$1 = this.search.text && this.search.text !== '' ? this.search.text : null;
      var category = this.search.category ? this.search.category : null;

      this.sdv.removeFilters();
      if (text$$1) {
        if (category) {
          this.sdv.applyWhere(function (skill) {
            if (skill.category === category && skill.title && skill.title.toLowerCase().indexOf(text$$1) !== -1) return true;
            if (skill.category === category && skill.description && skill.description.toLowerCase().indexOf(text$$1) !== -1) return true;
            if (skill.category === category && skill.category && skill.category.toLowerCase().indexOf(text$$1) !== -1) return true;
          });
        } else {
          this.sdv.applyWhere(function (skill) {
            if (skill.title && skill.title.toLowerCase().indexOf(text$$1) !== -1) return true;
            if (skill.description && skill.description.toLowerCase().indexOf(text$$1) !== -1) return true;
            if (skill.category && skill.category.toLowerCase().indexOf(text$$1) !== -1) return true;
          });
        }
      } else if (category) {
        this.sdv.applyWhere(function (skill) {
          if (skill.category === category) return true;
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
  incrementalDom.elementOpen("input", "4cc1f523-d585-4c7d-bfec-6144de0f7ade", hoisted1$7, "onkeyup", function ($event) {
    var $element = this;
    ctrl.goalSearch(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("button", "619918ae-fee7-4070-b8af-08cd3b7d0543", hoisted2$5);
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
var hoisted8$4 = ["for", "assistance-tab-control"];
var hoisted9$3 = ["type", "radio", "id", "reports-tab-control", "name", "tabgroup", "value", "reports"];
var hoisted10$3 = ["for", "reports-tab-control"];
function render$8(ctrl) {
  incrementalDom.elementOpen("tabs");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "eda01e25-99c5-4233-b311-0a3db4b81460", hoisted1$8, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "701c7af9-d449-423c-a384-b0ecb9f3ab55", hoisted2$6);
  incrementalDom.text("Users");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "216e3e35-ec07-42c3-a25a-6ead006eb4b1", hoisted3$5, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "0f49ed4f-5af8-4f6d-a775-2cb89bb39bb4", hoisted4$4);
  incrementalDom.text("Skills");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "9a75246b-e2f9-4020-bc40-80dc4983867b", hoisted5$4, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "de249aa3-914c-47e4-9e6e-14f29988064a", hoisted6$4);
  incrementalDom.text("Awards");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "14749a92-36c8-4d22-b40d-ad601c1fe4d7", hoisted7$4, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "f76537c4-8dbf-402a-a027-e524510137b0", hoisted8$4);
  incrementalDom.text("Assistance");
  incrementalDom.elementClose("label");
  incrementalDom.elementClose("tab");
  incrementalDom.elementOpen("tab");
  incrementalDom.elementOpen("input", "19023313-966b-4e7e-90ae-3b04f18bcaaf", hoisted9$3, "onclick", function ($event) {
    var $element = this;
    ctrl.selectTab(this.value);
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("label", "63bd400b-550d-4a6d-b5c9-680b443650f7", hoisted10$3);
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
var hoisted8$5 = ["for", ""];
var hoisted9$4 = ["type", "radio", "name", "ticketsType", "value", "closed"];
var hoisted10$4 = ["name", "tickets"];
var hoisted11$2 = ["type", "button", "class", "primary", "name", "close"];
var hoisted12$2 = ["type", "button", "class", "primary", "name", "reopen"];
var hoisted13$2 = ["type", "button", "class", "danger", "name", "delete"];
var __target$9;

function render$9(ctrl) {
  incrementalDom.elementOpen("section", "aea2d067-420e-43d1-a720-571241540811", hoisted1$9);
  incrementalDom.elementOpen("input", "5a7b32a5-65da-4e66-97ca-339dafb7c726", hoisted2$7, "onkeyup", function ($event) {
    var $element = this;
    ctrl.search.text = this.value;ctrl.filterTickets();
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("div", "484b786a-7afa-4c39-b4c6-3102023e890c", hoisted3$6);
  incrementalDom.elementOpen("label", "bbf5262b-b86d-4576-a85b-71233fc3c792", hoisted4$5);
  incrementalDom.elementOpen("input", "3ddf300d-7f90-4129-87df-ee4a44f60a38", hoisted5$5, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterTickets();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            All \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementOpen("label", "5e63b931-172d-49d8-9c61-19847372800c", hoisted6$5);
  incrementalDom.elementOpen("input", "226cc059-302d-4107-8d01-e08b3e208fb2", hoisted7$5, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterTickets();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            Open \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementOpen("label", "98f06861-3055-427c-8665-8f93e911d795", hoisted8$5);
  incrementalDom.elementOpen("input", "d36baadf-c3da-4fdf-bdf7-9d3df93eaf39", hoisted9$4, "onchange", function ($event) {
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
    incrementalDom.elementOpen("section", "acf32ba9-e283-49ae-817a-ff6deacb78e3", hoisted10$4);
    __target$9 = ctrl.tickets;
    if (__target$9) {
      (__target$9.forEach ? __target$9 : Object.keys(__target$9)).forEach(function ($value, $item, $target) {
        var ticket = $value;
        var $key = "eb3a00fe-a89d-4818-9d8d-1c110b4d7619_" + $item;
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
          incrementalDom.elementOpen("button", "df0b9511-0c86-4adf-b341-3167dcd0fa09_" + $key, hoisted11$2, "onclick", function ($event) {
            var $element = this;
            ctrl.close(ticket);
          });
          incrementalDom.text("Close");
          incrementalDom.elementClose("button");
        }
        if (ticket.type === 'closed') {
          incrementalDom.elementOpen("button", "6faa64c2-b4c5-45b1-a80f-06a2224b5d9e_" + $key, hoisted12$2, "onclick", function ($event) {
            var $element = this;
            ctrl.open(ticket);
          });
          incrementalDom.text("Open");
          incrementalDom.elementClose("button");
        }
        incrementalDom.elementOpen("button", "cff2c40f-64e5-4672-a7d3-d07a7acd568e_" + $key, hoisted13$2, "onclick", function ($event) {
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
var hoisted8$6 = ["for", ""];
var hoisted9$5 = ["type", "radio", "name", "awardsType", "value", "earned"];
var hoisted10$5 = ["name", "awards"];
var hoisted11$3 = ["type", "button", "class", "primary", "name", "accept"];
var __target$10;

function render$10(ctrl) {
  incrementalDom.elementOpen("section", "41ae5521-d3cf-4678-b377-9ebc04def8ef", hoisted1$10);
  incrementalDom.elementOpen("input", "34c61170-2cb7-4b7f-a8af-9b63542af00b", hoisted2$8, "onkeyup", function ($event) {
    var $element = this;
    ctrl.search.text = this.value;ctrl.filterAwards();
  });
  incrementalDom.elementClose("input");
  incrementalDom.elementOpen("div", "62f01ce0-9a84-47a1-8f37-56be20f1c746", hoisted3$7);
  incrementalDom.elementOpen("label", "2edf4f3b-6ef1-402f-a68e-86108eb6ff89", hoisted4$6);
  incrementalDom.elementOpen("input", "45709f11-0e3c-44f9-9b2c-4138ac5c9f64", hoisted5$6, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterAwards();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            All \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementOpen("label", "8601a873-6919-4e9b-ace4-729ba88eb9a2", hoisted6$6);
  incrementalDom.elementOpen("input", "d4b6cc2a-2dd4-4930-8ce1-95b5670f0690", hoisted7$6, "onchange", function ($event) {
    var $element = this;
    ctrl.search.type = this.value;ctrl.filterAwards();
  });
  incrementalDom.elementClose("input");
  incrementalDom.text(" \
            Pending \
          ");
  incrementalDom.elementClose("label");
  incrementalDom.elementOpen("label", "ea9f6dfe-92da-4248-9426-4b54ca149d82", hoisted8$6);
  incrementalDom.elementOpen("input", "57f6b210-dbb6-4bac-bc9e-a4d13e4efff3", hoisted9$5, "onchange", function ($event) {
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
    incrementalDom.elementOpen("section", "44b1d915-59c9-4e2e-bc2d-4374cdb98ef6", hoisted10$5);
    __target$10 = ctrl.awards;
    if (__target$10) {
      (__target$10.forEach ? __target$10 : Object.keys(__target$10)).forEach(function ($value, $item, $target) {
        var award = $value;
        var $key = "591c0504-c761-4f8a-94cd-a53bb7c5f2ff_" + $item;
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
          incrementalDom.elementOpen("button", "a927234b-d864-42b5-acc4-77199df9da17_" + $key, hoisted11$3, "onclick", function ($event) {
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
var hoisted8$7 = ["value", "booklet"];
var hoisted9$6 = ["value", "find"];
var hoisted10$6 = ["value", "take"];
var hoisted11$4 = ["value", "teach"];
var hoisted12$3 = ["value", "memories"];
var hoisted13$3 = ["value", "indexing"];
var hoisted14$2 = ["type", "checkbox"];
var hoisted15$2 = ["id", "skill-editor"];
var hoisted16$1 = ["type", "button", "name", "save", "class", "primary"];
var hoisted17$1 = ["type", "button", "name", "delete", "class", "danger"];
var hoisted18$1 = ["type", "button", "name", "cancel"];
var hoisted19$1 = ["class", "info"];
var hoisted20$1 = ["class", "title"];
var hoisted21$1 = ["class", "description"];
var hoisted22$1 = ["class", "action"];
var hoisted23$1 = ["type", "button"];
var __target$12;

function render$12(ctrl) {
  if (!ctrl.skillEditor) {
    incrementalDom.elementOpen("skills-search");
    incrementalDom.elementOpen("input", "fed6db74-8d2d-48b8-a725-2a8e652c0801", hoisted1$11, "onkeyup", function ($event) {
      var $element = this;
      ctrl.filterSkills(this.value);
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementOpen("button", "fd540d15-08e5-4f7e-99cc-30ceeb3b0a0c", hoisted2$9, "onclick", function ($event) {
      var $element = this;
      ctrl.addSkill();
    });
    incrementalDom.text("Add");
    incrementalDom.elementClose("button");
    incrementalDom.elementClose("skills-search");
  }
  incrementalDom.elementOpen("skills-list");
  if (ctrl.skillEditor) {
    incrementalDom.elementOpen("form", "5c128345-0ee9-4bb5-9686-592de4d358f6", hoisted3$8);
    incrementalDom.elementOpen("skill-editor-title");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Title:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "f784ed01-308e-4557-930a-b59d4dd2c064", hoisted4$7, "name", ctrl.skill.title, "value", ctrl.skill.title, "onchange", function ($event) {
      var $element = this;
      ctrl.skill.title = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("skill-editor-title");
    incrementalDom.elementOpen("skill-editor-description");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Description:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "44c7f7d5-26fc-4112-b054-383e017ed1b9", hoisted5$7, "name", ctrl.skill.description, "value", ctrl.skill.description, "onchange", function ($event) {
      var $element = this;
      ctrl.skill.description = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("skill-editor-description");
    incrementalDom.elementOpen("skill-editor-category");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Category:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("select", "e1799a30-37d2-48df-bd7c-c8637f2d3790", hoisted6$7, "onchange", function ($event) {
      var $element = this;
      ctrl.skill.category = this.value;
    });
    incrementalDom.elementOpen("option", "f033628c-c08c-4f7a-8fd4-d85cbeb5507f", hoisted7$7);
    incrementalDom.text("Select");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "2dc56886-bdb7-4e99-8933-e82a19b602e4", hoisted8$7, "selected", ctrl.skill.category === 'booklet' ? true : null);
    incrementalDom.text("Booklet");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "d8769d3f-d21a-4e93-a476-111faa5dfcb1", hoisted9$6, "selected", ctrl.skill.category === 'find' ? true : null);
    incrementalDom.text("Find");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "9888d1d9-ff26-41ef-a3cb-fb7c6361ac8c", hoisted10$6, "selected", ctrl.skill.category === 'take' ? true : null);
    incrementalDom.text("Take");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "7063e216-d5da-457a-b57f-71cfefc19349", hoisted11$4, "selected", ctrl.skill.category === 'teach' ? true : null);
    incrementalDom.text("Teach");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "3682bd91-be99-47a0-9b4f-337f794cac91", hoisted12$3, "selected", ctrl.skill.category === 'memories' ? true : null);
    incrementalDom.text("Memories");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "ee855486-ec5a-4af9-b492-ea65bd233480", hoisted13$3, "selected", ctrl.skill.category === 'indexing' ? true : null);
    incrementalDom.text("Indexing");
    incrementalDom.elementClose("option");
    incrementalDom.elementClose("select");
    incrementalDom.elementClose("skill-editor-category");
    incrementalDom.elementOpen("skill-editor-multiplicity");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Allow Multiple:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "a9dc90e4-9afb-4deb-b0b6-b8a3c4f8f82f", hoisted14$2, "checked", ctrl.skill.multiple, "onchange", function ($event) {
      var $element = this;
      ctrl.skill.multiple = this.checked;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("skill-editor-multiplicity");
    incrementalDom.elementOpen("skill-editor-instructions");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Instructions:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("div", "9c0a32d1-41f6-4df1-80c4-7f11866e634c", hoisted15$2);
    incrementalDom.elementClose("div");
    incrementalDom.elementClose("skill-editor-instructions");
    incrementalDom.elementOpen("skill-editor-actions");
    incrementalDom.elementOpen("button", "b0c2f176-3448-41bd-b22c-0ebac32d97d8", hoisted16$1, "onclick", function ($event) {
      var $element = this;
      ctrl.saveSkill();
    });
    incrementalDom.text("Save");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("button", "1df1abec-553d-4381-9119-29161f6918e1", hoisted17$1, "onclick", function ($event) {
      var $element = this;
      ctrl.deleteSkill();
    });
    incrementalDom.text("Delete");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("button", "50d96c2d-d93d-46fd-9585-a167e4e1e0fc", hoisted18$1, "onclick", function ($event) {
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
        var $key = "72f22f43-5fe0-4d74-b476-3c4327cb3ff9_" + $item;
        incrementalDom.elementOpen("skill-item", $key, null, "class", $item % 2 ? 'odd' : 'even');
        incrementalDom.elementOpen("div", "84b196b4-ff33-4c84-8da9-ddfebc8e5b09_" + $key, hoisted19$1);
        incrementalDom.elementOpen("div", "9ff2939a-6272-4fc2-b5dd-4989fa073148_" + $key, hoisted20$1);
        incrementalDom.text("" + skill.title + "");
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "7cdf71ea-4cf0-421c-af6f-a16c75606e2b_" + $key, hoisted21$1);
        incrementalDom.text("" + skill.description + "");
        incrementalDom.elementClose("div");
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "4ab06726-e04b-4aa0-9ec6-5231a3cd5de8_" + $key, hoisted22$1);
        incrementalDom.elementOpen("button", "03e3316b-c5e1-4bd9-bf28-50046132b4cc_" + $key, hoisted23$1, "disabled", ctrl.skillFormValid, "onclick", function ($event) {
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
var hoisted8$8 = ["value", "be"];
var hoisted9$7 = ["value", "dn"];
var hoisted10$7 = ["value", "eq"];
var hoisted11$5 = ["value", "hp"];
var hoisted12$4 = ["value", "ll"];
var hoisted13$4 = ["value", "mm"];
var hoisted14$3 = ["value", "pr"];
var hoisted15$3 = ["value", "py"];
var hoisted16$2 = ["value", "rs"];
var hoisted17$2 = ["value", "tr"];
var hoisted18$2 = ["type", "checkbox"];
var hoisted19$2 = ["type", "button", "name", "save", "class", "primary"];
var hoisted20$2 = ["type", "button", "name", "cancel"];
var hoisted21$2 = ["class", "info"];
var hoisted22$2 = ["class", "name bold"];
var hoisted23$2 = ["class", "display-name bold"];
var hoisted24$1 = ["class", "email"];
var hoisted25$1 = ["class", "group"];
var hoisted26$1 = ["class", "action"];
var hoisted27$1 = ["type", "button"];
var __target$13;

function render$13(ctrl) {
  if (!ctrl.userEditor) {
    incrementalDom.elementOpen("users-search");
    incrementalDom.elementOpen("input", "5c801952-ed2e-439e-9a22-a70223319ae5", hoisted1$12, "onkeyup", function ($event) {
      var $element = this;
      ctrl.filterUsers(this.value);
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("users-search");
  }
  incrementalDom.elementOpen("users-list");
  if (ctrl.userEditor) {
    incrementalDom.elementOpen("form", "e612f2c7-2889-4926-9692-50c833c23245", hoisted2$10);
    incrementalDom.elementOpen("user-editor-name");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Certificate Name:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "2eb4060e-9894-426d-91d7-6fbd456383f9", hoisted3$9, "value", ctrl.user.name, "onchange", function ($event) {
      var $element = this;
      ctrl.user.name = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-editor-name");
    incrementalDom.elementOpen("user-editor-display-name");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Display Name:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "9966f3fd-392a-454e-97f1-42bca53730cb", hoisted4$8, "name", ctrl.user.displayName, "value", ctrl.user.displayName, "onchange", function ($event) {
      var $element = this;
      ctrl.user.displayName = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-editor-display-name");
    incrementalDom.elementOpen("user-editor-email");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Email:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "aa9b0e42-b836-4574-acdc-c68dfa4eadf8", hoisted5$8, "name", ctrl.user.email, "value", ctrl.user.email, "onchange", function ($event) {
      var $element = this;
      ctrl.user.email = this.value;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-editor-email");
    incrementalDom.elementOpen("user-editor-category");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Organization:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("select", "7dbe4d83-2a77-4ade-b91f-5ac21663e4a6", hoisted6$8, "onchange", function ($event) {
      var $element = this;
      ctrl.user.group = this.value;
    });
    incrementalDom.elementOpen("option", "79fcd169-d7e5-47f6-acbe-cd39933cb717", hoisted7$8);
    incrementalDom.text("Select");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "80ff3528-85cf-429b-b1c3-7c47f8ab435c", hoisted8$8, "selected", ctrl.user.group === 'be' ? true : null);
    incrementalDom.text("Beehive");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "32746540-d94a-493d-b417-0cc80a2c73c1", hoisted9$7, "selected", ctrl.user.group === 'dn' ? true : null);
    incrementalDom.text("Deacon");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "ab7f6015-de0f-43d5-bfd3-ab43ca482ddc", hoisted10$7, "selected", ctrl.user.group === 'eq' ? true : null);
    incrementalDom.text("Elders");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "15e68c55-8e35-459d-a6f7-0605f63266db", hoisted11$5, "selected", ctrl.user.group === 'hp' ? true : null);
    incrementalDom.text("High Priest");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "e8f3b0fe-f1e8-4cd1-a6e8-f944f4c373fa", hoisted12$4, "selected", ctrl.user.group === 'll' ? true : null);
    incrementalDom.text("Laurel");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "cbfb17f3-d8ed-4257-9da5-fb00043a6d41", hoisted13$4, "selected", ctrl.user.group === 'mm' ? true : null);
    incrementalDom.text("Miamaid");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "69394b14-ed46-412b-b194-bec801aec027", hoisted14$3, "selected", ctrl.user.group === 'pr' ? true : null);
    incrementalDom.text("Priest");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "399b010c-2dc4-4507-8228-ba1e20b99dce", hoisted15$3, "selected", ctrl.user.group === 'py' ? true : null);
    incrementalDom.text("Primary");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "bc179c58-f01a-4568-8cba-2f6205506991", hoisted16$2, "selected", ctrl.user.group === 'rs' ? true : null);
    incrementalDom.text("Relief Society");
    incrementalDom.elementClose("option");
    incrementalDom.elementOpen("option", "3091d613-c8c0-465e-b587-4ee3c54abc79", hoisted17$2, "selected", ctrl.user.group === 'tr' ? true : null);
    incrementalDom.text("Teacher");
    incrementalDom.elementClose("option");
    incrementalDom.elementClose("select");
    incrementalDom.elementClose("user-editor-category");
    incrementalDom.elementOpen("user-admin");
    incrementalDom.elementOpen("label");
    incrementalDom.text("Admin:");
    incrementalDom.elementClose("label");
    incrementalDom.elementOpen("input", "cefc9caf-30d2-42dd-acb9-e21fbc7c2455", hoisted18$2, "checked", ctrl.user.admin ? true : null, "onchange", function ($event) {
      var $element = this;
      ctrl.user.admin = this.checked;
    });
    incrementalDom.elementClose("input");
    incrementalDom.elementClose("user-admin");
    incrementalDom.elementOpen("user-editor-actions");
    incrementalDom.elementOpen("button", "457ff94e-80b5-474a-a68d-de91e3b4b7e0", hoisted19$2, "onclick", function ($event) {
      var $element = this;
      ctrl.saveUser();
    });
    incrementalDom.text("Save");
    incrementalDom.elementClose("button");
    incrementalDom.elementOpen("button", "43649008-b44f-48e0-a532-37d8e51bd87b", hoisted20$2, "onclick", function ($event) {
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
        var $key = "5d9cbbbf-ccef-4556-940b-d5b07d954bf7_" + $item;
        incrementalDom.elementOpen("user-item", $key, null, "class", $item % 2 ? 'odd' : 'even');
        incrementalDom.elementOpen("div", "75900e62-48a3-4b27-aaf8-13a42e57ca9e_" + $key, hoisted21$2);
        if (user.name) {
          incrementalDom.elementOpen("div", "73d71329-a285-4163-b2a2-1388d1f29ecd_" + $key, hoisted22$2);
          incrementalDom.text("" + user.name + "");
          incrementalDom.elementClose("div");
        }
        incrementalDom.elementOpen("div", "58740a99-7f63-4cb6-bba0-5155c676e1a3_" + $key, hoisted23$2);
        incrementalDom.text("" + user.displayName + "");
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "470199c0-27bb-4078-9f09-d5885c967464_" + $key, hoisted24$1);
        incrementalDom.text("" + user.email + "");
        incrementalDom.elementClose("div");
        if (user.group) {
          incrementalDom.elementOpen("div", "2b8edc1d-b343-47f9-b031-1a81670ff78a_" + $key, hoisted25$1);
          incrementalDom.text("" + ctrl.getGroupName(user) + "");
          incrementalDom.elementClose("div");
        }
        incrementalDom.elementClose("div");
        incrementalDom.elementOpen("div", "e82e0c28-30e6-460a-ac56-0245bd0f71ef_" + $key, hoisted26$1);
        incrementalDom.elementOpen("button", "f10d9518-1577-4748-9442-a2d024251a5f_" + $key, hoisted27$1, "disabled", ctrl.userFormValid, "onclick", function ($event) {
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
  incrementalDom.elementOpen("ol", "f40dad0f-543d-41e7-9425-65c728f725ed", hoisted1$13);
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
        Permission is granted to temporarily download one copy of the materials (information or software) on Manila 7th Ward's web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this \
        license you may not: \
     \
        ");
  incrementalDom.elementOpen("ol", "32927dae-c36c-490d-81df-0b0590907401", hoisted2$11);
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
  incrementalDom.elementOpen("ol", "b461e09b-26d9-453d-b27d-ddd280fb9dba", hoisted3$10);
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

var css$15 = ":host {\n  font-size: 1em;\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: 'Roboto', Helvetica, sans-serif;\n  color: #222;\n  background: url('/img/background.svg');\n  background-size: cover;\n  background-color: #0f76a1;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300;\n}\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n}\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n}\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n}\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n}\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n}\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem;\n  }\n  h2 {\n    font-size: 4.2rem;\n  }\n  h3 {\n    font-size: 3.6rem;\n  }\n  h4 {\n    font-size: 3.0rem;\n  }\n  h5 {\n    font-size: 2.4rem;\n  }\n  h6 {\n    font-size: 1.5rem;\n  }\n}\np {\n  margin-top: 0;\n}\na {\n  color: #f26100;\n}\na:hover {\n  color: #f26100;\n}\n.grid {\n  display: flex;\n}\n.col {\n  flex: 1;\n}\n@media (max-width: 500px) {\n  .grid {\n    display: block;\n  }\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 2vh 2vw;\n}\n:host container {\n  display: block;\n  overflow-y: auto;\n  flex: 1;\n}\n:host h1 {\n  font-size: 1.75em;\n  font-weight: 400;\n  margin-bottom: 1vh;\n}\n:host p {\n  margn-top: 0.5em;\n  line-height: 1.4;\n}\ngeneral {\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  background-image: url('/img/mt-timp-temple.jpg');\n  background-size: cover;\n}\ngeneral general-overlay {\n  margin: 6vh 6vw;\n  background-color: rgba(255, 255, 255, 0.7);\n  color: #333;\n  padding: 1vh 1vw;\n}\nworking-on-skills,\ntechnical-issues {\n  display: block;\n  background-color: #ffffff;\n  padding: 2vh 2vw;\n  margin-top: 1vh;\n  flex: 1;\n}\nworking-on-skills h2,\ntechnical-issues h2 {\n  font-size: 1.5em !important;\n  font-weight: 300;\n  margin: 0;\n  padding: .5vw;\n  background-color: #f26100;\n  color: white;\n  margin-bottom: 1vh;\n}\nworking-on-skills #skill-buttons,\ntechnical-issues #skill-buttons {\n  margin: 1vh 1vw;\n  border: 1px solid #ccc;\n}\nworking-on-skills .action-button,\ntechnical-issues .action-button {\n  height: 24px;\n  width: 24px;\n  position: relative;\n  top: 6px;\n}\nworking-on-skills #my-skills,\ntechnical-issues #my-skills {\n  max-width: 90%;\n}\n";

var hoisted1$14 = ["id", "skill-buttons", "src", "/img/skill-buttons.png", "alt", ""];
var hoisted2$12 = ["class", "action-button", "src", "/img/add.svg", "alt", ""];
var hoisted3$11 = ["class", "action-button", "src", "/img/delete.svg", "alt", ""];
var hoisted4$9 = ["class", "action-button", "src", "/img/skill-apply.svg", "alt", ""];
var hoisted5$9 = ["class", "action-button", "src", "/img/skill-pending.svg", "alt", ""];
var hoisted6$9 = ["class", "action-button", "src", "/img/skill-earned.svg", "alt", ""];
var hoisted7$9 = ["class", "action-button", "src", "/img/help.svg", "alt", ""];
var hoisted8$9 = ["class", "action-button", "src", "/img/skill-apply.svg", "alt", ""];
var hoisted9$8 = ["id", "my-skills", "src", "/img/my-skills.png", "alt", ""];
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
  incrementalDom.elementOpen("h1");
  incrementalDom.text("Working on Skills");
  incrementalDom.elementClose("h1");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        Skills are worked on from the home view. In fact everything can be done from the home view. Here \
        are the things you can do with skills: \
        ");
  incrementalDom.elementOpen("ul");
  incrementalDom.elementOpen("li");
  incrementalDom.text("Get information and instructions on how to complete them.");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text("Add skills to work on. This will allow to select the skills you want to focus on.");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
                Get help with completing the skill. When you request help, you will be contacted by \
                someone who has already completed the skill, or by a ward temple and family history \
                consultant. \
              ");
  incrementalDom.elementClose("li");
  incrementalDom.elementOpen("li");
  incrementalDom.text(" \
                Share your experience and expertise with others by applying for a certificate of \
                completion. Of course, if you don't want to share your experience or don't feel comfortable \
                with others, you don't have to, although you can still receive recognition for having \
                completed a skill. \
              ");
  incrementalDom.elementClose("li");
  incrementalDom.elementClose("ul");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        Most actions involving skills are available through the skills button bar, highlighted with a green \
        rectangle. We'll explain below what the buttons are for and what they do. \
        ");
  incrementalDom.elementOpen("img", "7bcfb70b-88cd-4d0d-b5aa-60e5eb1da486", hoisted1$14);
  incrementalDom.elementClose("img");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h2");
  incrementalDom.text("Adding a Skill");
  incrementalDom.elementClose("h2");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        Add a skill by clicking on the green add button: ");
  incrementalDom.elementOpen("img", "11378e52-bd77-4de2-8cc5-39f908aaf5b4", hoisted2$12);
  incrementalDom.elementClose("img");
  incrementalDom.text(". \
        Once a skill has been added, it can be deleted by clicking the delete button: \
        ");
  incrementalDom.elementOpen("img", "fb310aef-73c8-4bc1-ac71-63a754873d86", hoisted3$11);
  incrementalDom.elementClose("img");
  incrementalDom.text(", or you can apply for certification by \
        clicking the award button. The award button can take three forms: 1) \
        ");
  incrementalDom.elementOpen("img", "86f1fe06-323c-43ab-af39-d3d25f9b16b8", hoisted4$9);
  incrementalDom.elementClose("img");
  incrementalDom.text(" when you have added the skill as a \
        goal haven't yet applied for certification, 2) \
        ");
  incrementalDom.elementOpen("img", "c75c83a1-cae2-4f99-b97b-f67ab3c7cf09", hoisted5$9);
  incrementalDom.elementClose("img");
  incrementalDom.text(" when certification is pending, and \
        3) ");
  incrementalDom.elementOpen("img", "b7719cd9-4cc7-41d0-bf90-aa366521c8f9", hoisted6$9);
  incrementalDom.elementClose("img");
  incrementalDom.text(" when you have earned the skill. \
      ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" If you have earned a skill, you can't delete it by accident. The system will warn you.");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h2");
  incrementalDom.text("Getting Help for a Skill");
  incrementalDom.elementClose("h2");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        You can request for a skill by clicking the life perserver button: \
        ");
  incrementalDom.elementOpen("img", "37bf9e5d-3c54-4b78-a488-202732f47daa", hoisted7$9);
  incrementalDom.elementClose("img");
  incrementalDom.text(". Your request will be acknowledged and \
        someone with has earned the skill will be asked to contact you to help you achieve the skill. \
      ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h2");
  incrementalDom.text("Getting Recognition for Completing a Skill");
  incrementalDom.elementClose("h2");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        As mentioned above, you can get recognized for completing a skill by submitting an application. \
        You submit application by clicking the apply button: ");
  incrementalDom.elementOpen("img", "d3c0d1f2-fa77-4497-970a-7353fd3c95c0", hoisted8$9);
  incrementalDom.elementClose("img");
  incrementalDom.text(". \
        You will be asked to explain your experience in working on the skill and if you are willing to \
        share your experience with others, and help others in their efforts to earn the skill. \
      ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("h2");
  incrementalDom.text("Seeing Only My Skills");
  incrementalDom.elementClose("h2");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        You can see your own skills simply by clicking the My Skills checkbox in the upper right part of \
        of the home view. \
        ");
  incrementalDom.elementOpen("img", "917ac277-605c-4502-9286-903e5f1737f9", hoisted9$8);
  incrementalDom.elementClose("img");
  incrementalDom.elementClose("p");
  incrementalDom.elementClose("working-on-skills");
  incrementalDom.elementOpen("technical-issues");
  incrementalDom.elementOpen("h1");
  incrementalDom.text("Technical Issues");
  incrementalDom.elementClose("h1");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        While we would like to hope the site works flawlessly, it won't. But please don't give up. \
        It has been designed to help us help yourself and others take important steps to work on \
        temple and family history work. \
      ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        When you run into technical issues, please let us know. You can do so by contacting a member of \
        of the high priest group leadership and/or Rob Hicks. Contact information is in the ward directory. \
      ");
  incrementalDom.elementClose("p");
  incrementalDom.elementOpen("p");
  incrementalDom.text(" \
        Please report issues because we are committed to addressing them! \
      ");
  incrementalDom.elementClose("p");
  incrementalDom.elementClose("technical-issues");
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
