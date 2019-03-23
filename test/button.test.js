const { expect } = chai
import Vue from 'vue'
import Button from '../src/Button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('Button是否存在', () => {
    expect(Button).to.exist
  })

  it('可以设置icon', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    const href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-setting')
    // 每次验证完后对挂载的dom进行卸载并销毁
    vm.$el.remove()
    vm.$destroy()
  })

  it('可以设置loading', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'setting',
        loading: true
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    const href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$destroy()
  })

  it('默认display: inline-flex order为1', () => {
    const div = document.createElement('div')
    const Constructor = Vue.extend(Button)
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    }).$mount(div)
    const svg = vm.$el.querySelector('svg')
    const { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
  })

  it('设置iconPosition可以改变order的值', () => {
    const div = document.createElement('div')
    const Constructor = Vue.extend(Button)
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: {
        icon: 'setting',
        iconPosition: 'right'
      }
    }).$mount(div)
    const svg = vm.$el.querySelector('svg')
    const { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2')
  })

  it('点击button触发click事件', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'setting',
        loading: true
      }
    }).$mount()
    // 使用sinon的fake（监听方法，相当于chai.spy()）
    const callback = sinon.fake()
    vm.$el.addEventListener('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
  })
})