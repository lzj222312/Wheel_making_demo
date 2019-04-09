<template>
  <div class="col" :class="colClass"
    :style="colStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "s-col",
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colClass() {
        let { span, offset } = this
        return [span && `col-${span}`, offset && `offset-${offset}`]
      },
      colStyle() {
        let { gutter } = this
        return gutter ? {marginLeft: gutter / 2 + 'px', marginRight: gutter / 2 + 'px'} : null
      }
    }
  }
</script>

<style scoped lang="scss">
  .col {
    $class: col-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%
      }
    }

    $class: offset-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n / 24) * 100%
      }
    }
  }
</style>