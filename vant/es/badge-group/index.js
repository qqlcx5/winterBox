import create from '../utils/create';
export default create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "van-hairline--top-bottom",
      class: _vm.b()
    }, [_vm._t("default")], 2);
  },
  name: 'badge-group',
  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },
  provide: function provide() {
    return {
      vanBadgeGroup: this
    };
  },
  data: function data() {
    return {
      badges: []
    };
  }
});