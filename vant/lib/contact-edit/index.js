"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _field = _interopRequireDefault(require("../field"));

var _button = _interopRequireDefault(require("../button"));

var _dialog = _interopRequireDefault(require("../dialog"));

var _toast = _interopRequireDefault(require("../toast"));

var _mobile = _interopRequireDefault(require("../utils/validate/mobile"));

var _create = _interopRequireDefault(require("../utils/create"));

var defaultContact = {
  id: '',
  tel: '',
  name: ''
};

var _default2 = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('cell-group', [_c('field', {
      attrs: {
        "maxlength": "30",
        "label": _vm.$t('name'),
        "placeholder": _vm.$t('nameEmpty'),
        "error": _vm.errorInfo.name
      },
      on: {
        "focus": function focus($event) {
          _vm.onFocus('name');
        }
      },
      model: {
        value: _vm.data.name,
        callback: function callback($$v) {
          _vm.$set(_vm.data, "name", $$v);
        },
        expression: "data.name"
      }
    }), _c('field', {
      attrs: {
        "type": "tel",
        "label": _vm.$t('tel'),
        "placeholder": _vm.$t('telEmpty'),
        "error": _vm.errorInfo.tel
      },
      on: {
        "focus": function focus($event) {
          _vm.onFocus('tel');
        }
      },
      model: {
        value: _vm.data.tel,
        callback: function callback($$v) {
          _vm.$set(_vm.data, "tel", $$v);
        },
        expression: "data.tel"
      }
    })], 1), _c('div', {
      class: _vm.b('buttons')
    }, [_c('van-button', {
      attrs: {
        "block": "",
        "loading": _vm.isSaving,
        "type": "danger"
      },
      on: {
        "click": _vm.onSave
      }
    }, [_vm._v(_vm._s(_vm.$t('save')))]), _vm.isEdit ? _c('van-button', {
      attrs: {
        "block": "",
        "loading": _vm.isDeleting
      },
      on: {
        "click": _vm.onDelete
      }
    }, [_vm._v(_vm._s(_vm.$t('delete')))]) : _vm._e()], 1)], 1);
  },
  name: 'contact-edit',
  components: {
    Field: _field.default,
    VanButton: _button.default
  },
  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    contactInfo: {
      type: Object,
      default: function _default() {
        return (0, _extends2.default)({}, defaultContact);
      }
    },
    telValidator: {
      type: Function,
      default: _mobile.default
    }
  },
  data: function data() {
    return {
      data: (0, _extends2.default)({}, this.defaultContact, this.contactInfo),
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },
  watch: {
    contactInfo: function contactInfo(val) {
      this.data = val;
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key].trim();

      switch (key) {
        case 'name':
          return value ? '' : this.$t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : this.$t('telInvalid');
      }
    },
    onSave: function onSave() {
      var _this = this;

      var isValid = ['name', 'tel'].every(function (item) {
        var msg = _this.getErrorMessageByKey(item);

        if (msg) {
          _this.errorInfo[item] = true;
          (0, _toast.default)(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      _dialog.default.confirm({
        message: this.$t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      });
    }
  }
});

exports.default = _default2;