<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  let validator = (value) => {
    let keys = value ? Object.keys(value) : []
    let valid = true
    keys.forEach(key => {
      if(!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }

  export default {
    name: "s-col",
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      ipad: {
        type: Object,
        validator
      },
      narrowPc: {
        type: Object,
        validator
      },
      pc: {
        type: Object,
        validator
      },
      widePc: {
        type: Object,
        validator
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    computed: {
      colClass() {
        let { span, offset, ipad, narrowPc, pc, widePc } = this
        let createClass = this.createClass
        return [
          ...createClass({span, offset}),
          ...createClass(ipad, 'ipad-'),
          ...createClass(narrowPc, 'narrow-pc-'),
          ...createClass(pc, 'pc-'),
          ...createClass(widePc, 'wide-pc-'),
        ]
      },
      colStyle() {
        let { gutter } = this
        return gutter ? {marginLeft: gutter / 2 + 'px', marginRight: gutter / 2 + 'px'} : null
      }
    },
    methods: {
      createClass(obj, str= '') {
        if(!obj) { return [] }
        let array = []
        if(obj.span) { array.push(`col-${str}${obj.span}`) }
        if(obj.offset) { array.push(`offset-${str}${obj.offset}`) }
        return array
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

    @media (min-width: 557px) {
      $class: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%
        }
      }

      $class: offset-ipad;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n / 24) * 100%
        }
      }
    }

    @media (min-width: 769px) {
      $class: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%
        }
      }

      $class: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n / 24) * 100%
        }
      }
    }

    @media (min-width: 993px) {
      $class: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%
        }
      }

      $class: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n / 24) * 100%
        }
      }
    }

    @media (min-width: 993px) {
      $class: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          width: ($n / 24) * 100%
        }
      }

      $class: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class}#{$n} {
          margin-left: ($n / 24) * 100%
        }
      }
    }
  }
</style>