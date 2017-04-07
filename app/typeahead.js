class TypeAheadList {
  constructor(typeAhead) {
    this.typeAhead = typeAhead;
    this.items = [];
    this.active = 0;
    this.element = document.createElement('ul');
    typeAhead.element.parentNode.insertBefore(this.element, typeAhead.element.nextSibling);
    return this;
  }
  show() {
    this.element.style.display = 'block';
  }
  hide() {
    this.element.style.display = 'none';
  }
  clear() {
    this.items = [];
    this.active = 0;
  }
  isEmpty() {
    return this.element.children.length === 0;
  }
  draw() {
    this.element.innerHTML = '';
    if (this.items.length === 0) {
        this.hide();
        return;
    }

    for (var i = 0; i < this.items.length; i++) {
        this.drawItem(this.items[i], this.active === i);
    }

    if (this.typeAhead.scrollable) {
        this.scroll();
    }

    this.show();
  }
  drawItem(item, active) {
    var li = document.createElement('li'),
    a = document.createElement('a');

    if (active) {
        li.className += ' active';
    }

    a.innerHTML = this.typeAhead.highlight(item);
    li.appendChild(a);
    this.element.appendChild(li);

    var typeAheadList = this;
    li.addEventListener('mousedown', function () {
        typeAheadList.handleMouseDown.call(typeAheadList, item);
    });
  }
  handleMouseDown(item) {
    this.typeAhead.value(item);
    this.typeAhead.onMouseDown(item);
    this.clear();
    this.draw();
  }
  move(index) {
    this.active = index;
    this.draw();
  }
  previous() {
    this.move(this.active === 0 ? this.items.length - 1 : this.active - 1);
  };

  next() {
    this.move(this.active === this.items.length - 1 ? 0 : this.active + 1);
  };

  scroll() {
    if (this.isEmpty()) {
        return;
    }

    let item = this.element.children[this.active],
        list = this.element;

    if (item.offsetTop + item.offsetHeight >= list.scrollTop + list.offsetHeight) {
        list.scrollTop = item.offsetTop + item.offsetHeight - list.offsetHeight;
        return;
    }

    if (item.offsetTop < list.scrollTop) {
        list.scrollTop = item.offsetTop;
    }
  };
}

export default class TypeAhead {
  constructor(element, candidates, opts = {}) {
    this.element = element;
    this.candidates = candidates;
    this.list = new TypeAheadList(this);
    this.minLenth = opts.minLength || 3;
    this.limit = opts.limit || 5;
    this.onMouseDown = opts.onMouseDown || function() {};
    this.onKeyDown = opts.onKeyDown || function() {};
    this.fulltext = opts.fulltext || false;
    this.scrollable = opts.scrollable || false;
    this.query = '';
    this.selected = null;
    this.list.draw();

    this.element.addEventListener('keyup', function (event) {
        this.handleKeyUp.call(this, event.keyCode);
    }, false);

    this.element.addEventListener('keydown', function (event) {
        this.handleKeyDown.call(this, event.keyCode) && event.preventDefault();
    });

    this.element.addEventListener('focus', function () {
        this.handleFocus.call(this);
    });

    this.element.addEventListener('blur', function () {
        this.handleBlur.call(this);
    });

    this.update = function(candidates){
      this.candidates = candidates;
      this.handleKeyUp.call(this);
    }

    return this;
  }

  handleKeyUp(keyCode) {
    if (keyCode === 13 || keyCode === 38 || keyCode === 40) return;
    this.query = this.filter(this.element.value);
    this.list.clear();
    if (this.query.length < this.minLength) {
        this.list.draw();
        return;
    }

    this.getCandidates((candidates) => {
        for (let i = 0; i < candidates.length; i++) {
            this.list.add(candidates[i]);
            if (this.limit !== false && i === this.limit) {
                break;
            }
        }
        this.list.draw();
    });
  }

  handleKeyDown(keyCode) {
    if (keyCode === 13 && !this.list.isEmpty()) {
        this.value(this.list.items[this.list.active]);
        this.list.hide();
        this.onKeyDown(this.list.items[this.list.active]);
        return true;
    }

    if (keyCode === 38) {
        this.list.previous();
        return true;
    }

    if (keyCode === 40) {
        this.list.next();
        return true;
    }

    return false;
  }

  handleBlur() {
    this.list.hide();
  }

  handleFocust() {
      if (!this.list.isEmpty()) {
          this.list.show();
      }
  }

  filter(value) {
      return value.toLowerCase();
  }

  match(candidate) {
      if(this.fulltext) return candidate.indexOf(this.query) > -1;
      return candidate.indexOf(this.query) === 0;
  }

  value(value) {
      this.selected = value;
      this.element.value = this.getItemValue(value);

      if (document.createEvent) {
          var e = document.createEvent('HTMLEvents');
          e.initEvent('change', true, false);
          this.element.dispatchEvent(e);
      } else {
          this.element.fireEvent('onchange');
      }
      this.callback(value);
    }

    getCandidates(callback) {
      var items = [];
      for (var i = 0; i < this.candidates.length; i++) {
          var candidate = this.getItemValue(this.candidates[i]);
          if (this.match(this.filter(candidate))) {
              items.push(this.candidates[i]);
          }
      }
      callback(items);
    }

    getItemValue(item) {
      return item;
    }

    highlight(item) {
      var regExp;
      if (this.fulltext) {
          regExp = '(' + this.query + ')';
      } else {
          regExp = '^(' + this.query + ')';
      }
      return this.getItemValue(item).replace(new RegExp(regExp, 'ig'), function ($1, match) {
          return '<strong>' + match + '</strong>';
      });
    }
}
