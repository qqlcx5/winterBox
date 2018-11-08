"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _scroll = _interopRequireDefault(require("../utils/scroll"));

var _event = require("../utils/event");

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("default"), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.loading,
        expression: "loading"
      }],
      class: _vm.b('loading')
    }, [_vm._t("loading", [_c('loading'), _c('span', {
      class: _vm.b('loading-text')
    }, [_vm._v(_vm._s(_vm.loadingText || _vm.$t('loadingTip')))])])], 2)], 2);
  },
  name: 'list',
  model: {
    prop: 'loading'
  },
  props: {
    loading: Boolean,
    finished: Boolean,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    loadingText: String
  },
  mounted: function mounted() {
    this.scroller = _scroll.default.getScrollEventTarget(this.$el);
    this.handler(true);

    if (this.immediateCheck) {
      this.$nextTick(this.check);
    }
  },
  destroyed: function destroyed() {
    this.handler(false);
  },
  activated: function activated() {
    this.handler(true);
  },
  deactivated: function deactivated() {
    this.handler(false);
  },
  watch: {
    loading: function loading() {
      this.$nextTick(this.check);
    },
    finished: function finished() {
      this.$nextTick(this.check);
    }
  },
  methods: {
    check: function check() {
      if (this.loading || this.finished) {
        return;
      }

      var el = this.$el;
      var scroller = this.scroller;

      var scrollerHeight = _scroll.default.getVisibleHeight(scroller);
      /* istanbul ignore next */


      if (!scrollerHeight || _scroll.default.getComputedStyle(el).display === 'none' || el.offsetParent === null) {
        return;
      }

      var scrollTop = _scroll.default.getScrollTop(scroller);

      var targetBottom = scrollTop + scrollerHeight;
      var reachBottom = false;
      /* istanbul ignore next */

      if (el === scroller) {
        reachBottom = scroller.scrollHeight - targetBottom < this.offset;
      } else {
        var elBottom = _scroll.default.getElementTop(el) - _scroll.default.getElementTop(scroller) + _scroll.default.getVisibleHeight(el);

        reachBottom = elBottom - scrollerHeight < this.offset;
      }
      /* istanbul ignore else */


      if (reachBottom) {
        this.$emit('input', true);
        this.$emit('load');
      }
    },
    handler: function handler(bind) {
      /* istanbul ignore else */
      if (this.binded !== bind) {
        this.binded = bind;
        (bind ? _event.on : _event.off)(this.scroller, 'scroll', this.check);
      }
    }
  }
});

exports.default = _default;