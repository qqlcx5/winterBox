import VanUploader from '../../uploader';
import create from '../../utils/create';
export default create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b()
    }, [_c('van-uploader', {
      attrs: {
        "disabled": !!_vm.paddingImg,
        "after-read": _vm.afterReadFile,
        "max-size": _vm.maxSize * 1024 * 1024
      },
      on: {
        "oversize": _vm.onOversize
      }
    }, [_c('div', {
      class: _vm.b('header')
    }, [_vm.paddingImg ? _c('div', [_vm._v("正在上传...")]) : [_c('icon', {
      attrs: {
        "name": "photograph"
      }
    }), _c('span', {
      staticClass: "label"
    }, [_vm._v(_vm._s(_vm.value ? '重拍' : '拍照'))]), _vm._v(" 或\n        "), _c('icon', {
      attrs: {
        "name": "photo"
      }
    }), _c('span', {
      staticClass: "label"
    }, [_vm._v(_vm._s(_vm.value ? '重新选择照片' : '选择照片'))])]], 2)]), _vm.paddingImg || _vm.imgList.length > 0 ? _c('div', {
      staticClass: "van-clearfix"
    }, [_vm._l(_vm.imgList, function (img) {
      return _c('div', {
        class: _vm.b('img')
      }, [_c('img', {
        attrs: {
          "src": img
        }
      }), _c('icon', {
        class: _vm.b('delete'),
        attrs: {
          "name": "clear"
        },
        on: {
          "click": function click($event) {
            _vm.$emit('input', '');
          }
        }
      })], 1);
    }), _vm.paddingImg ? _c('div', {
      class: _vm.b('img')
    }, [_c('img', {
      attrs: {
        "src": _vm.paddingImg
      }
    }), _c('loading', {
      class: _vm.b('uploading'),
      attrs: {
        "type": "spinner"
      }
    })], 1) : _vm._e()], 2) : _vm._e()], 1);
  },
  name: 'sku-img-uploader',
  components: {
    VanUploader: VanUploader
  },
  props: {
    value: String,
    uploadImg: {
      type: Function,
      required: true
    },
    maxSize: {
      type: Number,
      default: 6
    }
  },
  data: function data() {
    return {
      // 正在上传的图片base 64
      paddingImg: ''
    };
  },
  computed: {
    imgList: function imgList() {
      return this.value && !this.paddingImg ? [this.value] : [];
    }
  },
  methods: {
    afterReadFile: function afterReadFile(file) {
      var _this = this;

      // 上传文件
      this.paddingImg = file.content;
      this.uploadImg(file.file, file.content).then(function (img) {
        _this.$emit('input', img);

        _this.$nextTick(function () {
          _this.paddingImg = '';
        });
      }).catch(function () {
        _this.paddingImg = '';
      });
    },
    onOversize: function onOversize() {
      this.$toast("\u6700\u5927\u53EF\u4E0A\u4F20\u56FE\u7247\u4E3A" + this.maxSize + "MB\uFF0C\u8BF7\u5C1D\u8BD5\u538B\u7F29\u56FE\u7247\u5C3A\u5BF8");
    }
  }
});