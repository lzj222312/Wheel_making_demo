const {expect} = chai
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('Input是否存在', () => {
    expect(Col).to.exist
  })

  it('接收span属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: '1'
      }
    }).$mount(div)
    const className = vm.$el.classList.contains('col-1')
    expect(className).to.equal(true)
    vm.$destroy()
  })

  it('接收offset属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: '1'
      }
    }).$mount(div)
    const className = vm.$el.classList.contains('offset-1')
    expect(className).to.equal(true)
    vm.$destroy()
  })

  it('接收ipad属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        ipad: {
          span: '1',
          offset: '1'
        }
      }
    }).$mount(div)
    const colClassName = vm.$el.classList.contains('col-ipad-1')
    const offsetClassName = vm.$el.classList.contains('offset-ipad-1')
    expect(colClassName).to.equal(true)
    expect(offsetClassName).to.equal(true)
    vm.$destroy()
  })

  it('接收pc属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        pc: {
          span: '1',
          offset: '1'
        }
      }
    }).$mount(div)
    const colClassName = vm.$el.classList.contains('col-pc-1')
    const offsetClassName = vm.$el.classList.contains('offset-pc-1')
    expect(colClassName).to.equal(true)
    expect(offsetClassName).to.equal(true)
    vm.$destroy()
  })

  it('接收narrowPc属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        narrowPc: {
          span: '1',
          offset: '1'
        }
      }
    }).$mount(div)
    const colClassName = vm.$el.classList.contains('col-narrow-pc-1')
    const offsetClassName = vm.$el.classList.contains('offset-narrow-pc-1')
    expect(colClassName).to.equal(true)
    expect(offsetClassName).to.equal(true)
    vm.$destroy()
  })

  it('接收widePc属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        widePc: {
          span: '1',
          offset: '1'
        }
      }
    }).$mount(div)
    const colClassName = vm.$el.classList.contains('col-wide-pc-1')
    const offsetClassName = vm.$el.classList.contains('offset-wide-pc-1')
    expect(colClassName).to.equal(true)
    expect(offsetClassName).to.equal(true)
    vm.$destroy()
  })
})