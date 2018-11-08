import create from '../utils/create-basic';
export default create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.isDef(_vm.info) ? _c('div', {
      class: _vm.b()
    }, [_vm._v(_vm._s(_vm.info))]) : _vm._e();
  },
  name: 'info',
  props: {
    info: [String, Number]
  }
});