import _extends from "@babel/runtime/helpers/esm/extends";

/* eslint-disable camelcase */
import create from '../utils/create';
import { isObj } from '../utils';
import Field from '../field';
import VanButton from '../button';
import Popup from '../popup';
import Toast from '../toast';
import Dialog from '../dialog';
import VanArea from '../area';
import AddressEditDetail from './Detail';
import SwitchCell from '../switch-cell';
import validateMobile from '../utils/validate/mobile';
var defaultData = {
  name: '',
  tel: '',
  country: '',
  province: '',
  city: '',
  county: '',
  areaCode: '',
  postalCode: '',
  addressDetail: '',
  isDefault: false
};
export default create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('field', {
      attrs: {
        "clearable": "",
        "label": _vm.$t('name'),
        "placeholder": _vm.$t('namePlaceholder'),
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
        "clearable": "",
        "type": "tel",
        "label": _vm.$t('tel'),
        "placeholder": _vm.$t('telPlaceholder'),
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
    }), _c('field', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showArea,
        expression: "showArea"
      }],
      attrs: {
        "readonly": "",
        "label": _vm.$t('area'),
        "placeholder": _vm.$t('areaPlaceholder'),
        "value": _vm.areaText
      },
      on: {
        "click": function click($event) {
          _vm.showAreaPopup = true;
        }
      }
    }), _c('address-edit-detail', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showDetail,
        expression: "showDetail"
      }],
      attrs: {
        "focused": _vm.detailFocused,
        "value": _vm.data.addressDetail,
        "error": _vm.errorInfo.addressDetail,
        "detail-rows": _vm.detailRows,
        "search-result": _vm.searchResult,
        "show-search-result": _vm.showSearchResult
      },
      on: {
        "focus": function focus($event) {
          _vm.onFocus('addressDetail');
        },
        "blur": function blur($event) {
          _vm.detailFocused = false;
        },
        "input": _vm.onChangeDetail,
        "select-search": function selectSearch($event) {
          _vm.$emit('select-search', $event);
        }
      }
    }), _vm.showPostal ? _c('field', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.hideBottomFields,
        expression: "!hideBottomFields"
      }],
      attrs: {
        "type": "tel",
        "maxlength": "6",
        "label": _vm.$t('postal'),
        "placeholder": _vm.$t('postal'),
        "error": _vm.errorInfo.postalCode
      },
      on: {
        "focus": function focus($event) {
          _vm.onFocus('postalCode');
        }
      },
      model: {
        value: _vm.data.postalCode,
        callback: function callback($$v) {
          _vm.$set(_vm.data, "postalCode", $$v);
        },
        expression: "data.postalCode"
      }
    }) : _vm._e(), _vm._t("default"), _vm.showSetDefault ? _c('switch-cell', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.hideBottomFields,
        expression: "!hideBottomFields"
      }],
      attrs: {
        "title": _vm.$t('defaultAddress')
      },
      on: {
        "change": function change($event) {
          _vm.$emit('change-default', $event);
        }
      },
      model: {
        value: _vm.data.isDefault,
        callback: function callback($$v) {
          _vm.$set(_vm.data, "isDefault", $$v);
        },
        expression: "data.isDefault"
      }
    }) : _vm._e(), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: !_vm.hideBottomFields,
        expression: "!hideBottomFields"
      }],
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
    }, [_vm._v("\n      " + _vm._s(_vm.saveButtonText || _vm.$t('save')) + "\n    ")]), _vm.showDelete ? _c('van-button', {
      attrs: {
        "block": "",
        "loading": _vm.isDeleting
      },
      on: {
        "click": _vm.onDelete
      }
    }, [_vm._v("\n      " + _vm._s(_vm.deleteButtonText || _vm.$t('delete')) + "\n    ")]) : _vm._e()], 1), _c('popup', {
      attrs: {
        "position": "bottom",
        "lazy-render": false,
        "get-container": "body"
      },
      model: {
        value: _vm.showAreaPopup,
        callback: function callback($$v) {
          _vm.showAreaPopup = $$v;
        },
        expression: "showAreaPopup"
      }
    }, [_c('van-area', {
      ref: "area",
      attrs: {
        "loading": !_vm.areaListLoaded,
        "value": _vm.data.areaCode,
        "area-list": _vm.areaList
      },
      on: {
        "confirm": _vm.onAreaConfirm,
        "cancel": function cancel($event) {
          _vm.showAreaPopup = false;
        }
      }
    })], 1)], 2);
  },
  name: 'address-edit',
  components: {
    Field: Field,
    Popup: Popup,
    VanArea: VanArea,
    VanButton: VanButton,
    SwitchCell: SwitchCell,
    AddressEditDetail: AddressEditDetail
  },
  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showDelete: Boolean,
    showPostal: Boolean,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    showArea: {
      type: Boolean,
      default: true
    },
    showDetail: {
      type: Boolean,
      default: true
    },
    detailRows: {
      type: Number,
      default: 1
    },
    addressInfo: {
      type: Object,
      default: function _default() {
        return _extends({}, defaultData);
      }
    },
    searchResult: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    telValidator: {
      type: Function,
      default: validateMobile
    }
  },
  data: function data() {
    return {
      data: {},
      showAreaPopup: false,
      detailFocused: false,
      errorInfo: {
        tel: false,
        name: false,
        postalCode: false,
        addressDetail: false
      }
    };
  },
  computed: {
    // hide bottom field when use search && detail get focused
    hideBottomFields: function hideBottomFields() {
      return this.searchResult.length && this.detailFocused;
    },
    areaListLoaded: function areaListLoaded() {
      return isObj(this.areaList) && Object.keys(this.areaList).length;
    },
    areaText: function areaText() {
      var _this$data = this.data,
          country = _this$data.country,
          province = _this$data.province,
          city = _this$data.city,
          county = _this$data.county,
          areaCode = _this$data.areaCode;

      if (areaCode) {
        var arr = [country, province, city, county];

        if (province && province === city) {
          arr.splice(1, 1);
        }

        return arr.filter(function (text) {
          return text;
        }).join('/');
      }

      return '';
    }
  },
  watch: {
    addressInfo: {
      handler: function handler(val) {
        this.data = _extends({}, defaultData, val);
        this.setAreaCode(val.areaCode);
      },
      deep: true,
      immediate: true
    },
    areaList: function areaList() {
      this.setAreaCode(this.data.areaCode);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'addressDetail';
      this.$emit('focus', key);
    },
    onChangeDetail: function onChangeDetail(val) {
      this.data.addressDetail = val;
      this.$emit('change-detail', val);
    },
    onAreaConfirm: function onAreaConfirm(values) {
      this.showAreaPopup = false;
      this.assignAreaValues();
      this.$emit('change-area', values);
    },
    assignAreaValues: function assignAreaValues(values) {
      var area = this.$refs.area;

      if (area) {
        var detail = area.getArea();
        detail.areaCode = detail.code;
        delete detail.code;

        _extends(this.data, detail);
      }
    },
    onSave: function onSave() {
      var _this = this;

      var items = ['name', 'tel', 'areaCode', 'addressDetail'];

      if (this.showPostal) {
        items.push('postalCode');
      }

      var isValid = items.every(function (item) {
        var msg = _this.getErrorMessage(item);

        if (msg) {
          _this.errorInfo[item] = true;
          Toast(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    getErrorMessage: function getErrorMessage(key) {
      var value = String(this.data[key] || '').trim();
      var $t = this.$t;

      if (this.validator) {
        var message = this.validator(key, value);

        if (message) {
          return message;
        }
      }

      switch (key) {
        case 'name':
          return value ? '' : $t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : $t('telInvalid');

        case 'areaCode':
          return value ? '' : $t('areaEmpty');

        case 'addressDetail':
          return value ? '' : $t('addressEmpty');

        case 'postalCode':
          return value && !/^\d{6}$/.test(value) ? $t('postalEmpty') : '';
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      Dialog.confirm({
        title: this.$t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      }).catch(function () {
        _this2.$emit('cancel-delete', _this2.data);
      });
    },
    // get values of area component
    getArea: function getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },
    // set area code to area component
    setAreaCode: function setAreaCode(code) {
      this.data.areaCode = code || '';
      code && this.$nextTick(this.assignAreaValues);
    },
    setAddressDetail: function setAddressDetail(value) {
      this.data.addressDetail = value;
    }
  }
});