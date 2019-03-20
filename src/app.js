import Vue from 'vue'
import Buttom from './Button'
import icon from './icon'

Vue.component('g-button', Buttom)
Vue.component('g-icon', icon)

new Vue({
  el: '#app'
})