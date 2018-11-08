var _components;

import Info from '../info';
import create from '../utils/create';
export default create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a', {
      class: [_vm.b({
        select: _vm.select
      }), 'van-hairline'],
      attrs: {
        "href": _vm.url
      },
      on: {
        "click": _vm.onClick
      }
    }, [_c('van-info', {
      class: _vm.b('info'),
      attrs: {
        "info": _vm.info
      }
    }), _vm._v("\n  " + _vm._s(_vm.title) + "\n")], 1);
  },
  name: 'badge',
  components: (_components = {}, _components[Info.name] = Info, _components),
  props: {
    url: String,
    info: [String, Number],
    title: String
  },
  inject: ['vanBadgeGroup'],
  created: function created() {
    this.parent.badges.push(this);
  },
  beforeDestroy: function beforeDestroy() {
    var _this = this;

    this.parent.badges = this.parent.badges.filter(function (item) {
      return item !== _this;
    });
  },
  computed: {
    parent: function parent() {
      if (process.env.NODE_ENV !== 'production' && !this.vanBadgeGroup) {
        console.error('[Vant] Badge needs to be child of BadgeGroup');
      }

      return this.vanBadgeGroup;
    },
    select: function select() {
      return this.parent.badges.indexOf(this) === +this.parent.activeKey;
    }
  },
  methods: {
    onClick: function onClick() {
      var index = this.parent.badges.indexOf(this);
      this.$emit('click', index);
      this.parent.$emit('change', index);
    }
  }
});