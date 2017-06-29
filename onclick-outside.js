(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.OnclickOutside = factory());
}(this, (function () { 'use strict';

var index = {
  name: 'onclick-outside',
  props: {
    handler: {
      type: Function,
      required: true
    },
    touch: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted() {
    document.addEventListener('click', this.handleClickOutside, true);
    if (this.touch) {
      document.addEventListener('touchstart', this.handleClickOutside, true);
    }
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside, true);
    if (this.touch) {
      document.removeEventListener('touchstart', this.handleClickOutside, true);
    }
  },
  methods: {
    handleClickOutside: function handleClickOutside(e) {
      var el = this.$refs.container;
      if (!el.contains(e.target))
        { this.handler(e); }
    }
  },
  render: function render(h) {
    return h(
      'div',
      {
        ref: 'container'
      },
      this.$slots.default
    )
  }
};

return index;

})));
