import create from '../utils/create';
import RadioGroup from '../radio-group';
import VanButton from '../button';
import AddressItem from './Item';
export default create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_vm._t("top"), _c('radio-group', {
      attrs: {
        "value": _vm.value
      },
      on: {
        "input": function input($event) {
          _vm.$emit('input', $event);
        }
      }
    }, [_c('cell-group', _vm._l(_vm.list, function (item, index) {
      return _c('address-item', {
        key: item.id,
        attrs: {
          "data": item,
          "switchable": _vm.switchable
        },
        on: {
          "select": function select($event) {
            _vm.$emit('select', item, index);
          },
          "edit": function edit($event) {
            _vm.$emit('edit', item, index);
          }
        }
      });
    }))], 1), _vm.disabledText ? _c('div', {
      class: _vm.b('disabled-text')
    }, [_vm._v(_vm._s(_vm.disabledText))]) : _vm._e(), _vm.disabledList.length ? _c('cell-group', _vm._l(_vm.disabledList, function (item, index) {
      return _c('address-item', {
        key: item.id,
        attrs: {
          "disabled": "",
          "data": item
        },
        on: {
          "select": function select($event) {
            _vm.$emit('select-disabled', item, index);
          },
          "edit": function edit($event) {
            _vm.$emit('edit-disabled', item, index);
          }
        }
      });
    })) : _vm._e(), _vm._t("default"), _c('van-button', {
      class: _vm.b('add'),
      attrs: {
        "square": "",
        "size": "large",
        "type": "danger",
        "text": _vm.addButtonText || _vm.$t('add')
      },
      on: {
        "click": function click($event) {
          _vm.$emit('add');
        }
      }
    })], 2);
  },
  name: 'address-list',
  components: {
    RadioGroup: RadioGroup,
    VanButton: VanButton,
    AddressItem: AddressItem
  },
  props: {
    disabledText: String,
    addButtonText: String,
    value: [String, Number],
    switchable: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabledList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }
});