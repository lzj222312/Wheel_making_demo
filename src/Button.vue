<template>
  <button class="s-button abc123" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('g-click')">
    <s-icon class="loading icon" v-if="loading" name="loading"></s-icon>
    <s-icon v-if="icon && !loading" class="icon" :name="icon"></s-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from './icon'

  export default {
    name: "s-button",
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return !(value !== 'left' && value !== 'right')
        }
      }
    },
    components: {
      's-icon': Icon
    }
  }
</script>

<style lang="scss">
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .s-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
    > .content {
      order: 2;
      margin-bottom: .1em;
    }
    > .icon {
      order: 1;
      margin-right: .2em;
    }
    &.icon-right {
      > .content {
        order: 1
      }
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .2em;
      }
    }
    .loading {
      animation: spin 2s infinite linear;
      margin-right: .2em;
    }
  }
</style>