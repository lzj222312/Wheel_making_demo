<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "button-group",
    mounted() {
      for(let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if(name !== 'button') {
          console.log(`g-button-group内只能使用g-button!如要进行嵌套，请自行调整样式！当前g-button父元素是${name}`)
        }
      }
    }
  }
</script>

<style lang="scss">
  .g-button-group {
    display: inline-flex;
    vertical-align: top;
    > .g-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>