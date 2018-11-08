"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../../utils/create"));

var _field = _interopRequireDefault(require("../../field"));

var _email = _interopRequireDefault(require("../../utils/validate/email"));

var _number = _interopRequireDefault(require("../../utils/validate/number"));

var _SkuImgUploader = _interopRequireDefault(require("./SkuImgUploader"));

var PLACEHOLDER = {
  id_no: '输入身份证号码',
  text: '输入文本',
  tel: '输入数字',
  email: '输入邮箱',
  date: '点击选择日期',
  time: '点击选择时间',
  textarea: '点击填写段落文本'
};

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('cell-group', {
      class: _vm.b()
    }, [_vm._l(_vm.messages, function (message, index) {
      return [message.type === 'image' ? _c('cell', {
        key: _vm.goodsId + "-" + index,
        class: _vm.b('image-cell'),
        attrs: {
          "label": "仅限一张",
          "required": message.required == '1',
          "title": message.name
        }
      }, [_c('sku-img-uploader', {
        attrs: {
          "upload-img": _vm.messageConfig.uploadImg,
          "max-size": _vm.messageConfig.uploadMaxSize
        },
        model: {
          value: _vm.messageValues[index].value,
          callback: function callback($$v) {
            _vm.$set(_vm.messageValues[index], "value", $$v);
          },
          expression: "messageValues[index].value"
        }
      })], 1) : _c('field', {
        key: _vm.goodsId + "-" + index,
        attrs: {
          "maxlength": "200",
          "required": message.required == '1',
          "label": message.name,
          "placeholder": _vm.getPlaceholder(message),
          "type": _vm.getType(message)
        },
        model: {
          value: _vm.messageValues[index].value,
          callback: function callback($$v) {
            _vm.$set(_vm.messageValues[index], "value", $$v);
          },
          expression: "messageValues[index].value"
        }
      })];
    })], 2);
  },
  name: 'sku-messages',
  components: {
    SkuImgUploader: _SkuImgUploader.default,
    Field: _field.default
  },
  props: {
    messages: Array,
    messageConfig: Object,
    goodsId: [Number, String]
  },
  data: function data() {
    return {
      messageValues: this.resetMessageValues(this.messages)
    };
  },
  watch: {
    messages: function messages(val) {
      this.messageValues = this.resetMessageValues(val);
    }
  },
  computed: {
    messagePlaceholderMap: function messagePlaceholderMap() {
      return this.messageConfig.placeholderMap || {};
    }
  },
  methods: {
    resetMessageValues: function resetMessageValues(messages) {
      return (messages || []).map(function () {
        return {
          value: ''
        };
      });
    },
    getType: function getType(message) {
      if (+message.multiple === 1) {
        return 'textarea';
      }

      if (message.type === 'id_no') {
        return 'text';
      }

      return message.datetime > 0 ? 'datetime-local' : message.type;
    },
    getMessages: function getMessages() {
      var _this = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;

        if (_this.messages[index].datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages["message_" + index] = value;
      });
      return messages;
    },
    getCartMessages: function getCartMessages() {
      var _this2 = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        var message = _this2.messages[index];

        if (message.datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages[message.name] = value;
      });
      return messages;
    },
    getPlaceholder: function getPlaceholder(message) {
      var type = +message.multiple === 1 ? 'textarea' : message.type;
      return this.messagePlaceholderMap[type] || PLACEHOLDER[type];
    },
    validateMessages: function validateMessages() {
      var values = this.messageValues;

      for (var i = 0; i < values.length; i++) {
        var value = values[i].value;
        var message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (message.required == '1') {
            // eslint-disable-line
            var textType = message.type === 'image' ? '请上传' : '请填写';
            return textType + message.name;
          }
        } else {
          if (message.type === 'tel' && !(0, _number.default)(value)) {
            return '请填写正确的数字格式留言';
          }

          if (message.type === 'mobile' && !/^\d{6,20}$/.test(value)) {
            return '手机号长度为6-20位数字';
          }

          if (message.type === 'email' && !(0, _email.default)(value)) {
            return '请填写正确的邮箱';
          }

          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return '请填写正确的身份证号码';
          }
        }
      }
    }
  }
});

exports.default = _default;