<template>
  <div class="s-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "s-button-group",
    mounted() {
      for(let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if(name !== 'button') {
          console.log(`s-button-group内只能使用s-button!如要进行嵌套，请自行调整样式！当前s-button父元素是${name}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .s-button-group {
    display: inline-flex;
    vertical-align: top;
    > .s-button {
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