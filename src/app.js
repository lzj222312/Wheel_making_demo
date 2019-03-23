import Vue from 'vue'
import Button from './Button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false
  }
})


/**
 *
 * 单元测试
 *
 */

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
const {expect} = chai

try {
  {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    })
    vm.$mount()
    console.log(vm.$el)
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-setting')
    // 每次验证完后对挂载的dom进行卸载并销毁
    vm.$el.remove()
    vm.$destroy()
  }

  {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'setting',
        loading: true
      }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    // 每次验证完后对挂载的dom进行卸载并销毁
    vm.$el.remove()
    vm.$destroy()
  }

  {
    const div = document.createElement('div')
    const Constructor = Vue.extend(Button)
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    })

    vm.$mount(div)
    let svgElement = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svgElement)
    expect(order).to.eq('1')
    // 每次验证完后对挂载的dom进行卸载并销毁
    vm.$el.remove()
    vm.$destroy()
  }

  {
    const div = document.createElement('div')
    const Constructor = Vue.extend(Button)
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: {
        icon: 'setting',
        iconPosition: 'right'
      }
    })

    vm.$mount(div)
    let svgElement = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svgElement)
    expect(order).to.eq('2')
    // 每次验证完后对挂载的dom进行卸载并销毁
    vm.$el.remove()
    vm.$destroy()
  }

  {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    })
    vm.$mount()
    let spy = chai.spy(function () {
    })
    let button = vm.$el
    button.addEventListener('click', spy, false)
    button.click()
    expect(spy).to.have.been.called()
    vm.$el.remove()
    vm.$destroy()
  }
} catch (e) {
  window.error = [e]
} finally {
  window.error && window.error.forEach((error) => {
    console.error(error.message)
  })
}