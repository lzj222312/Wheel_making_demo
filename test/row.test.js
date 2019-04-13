const {expect} = chai
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('Input是否存在', () => {
    expect(Row).to.exist
  })

  it('接收gutter属性', (done) => {
    Vue.component('g-row', Row)
    Vue.component('g-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-row gutter="20">
        <g-col span="12"></g-col>
        <g-col span="12"></g-col>
      </g-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.equal('-10px')
      expect(getComputedStyle(row).marginRight).to.equal('-10px')
      const col = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(col[0]).paddingRight).to.equal('10px')
      expect(getComputedStyle(col[1]).paddingLeft).to.equal('10px')
      done() // mocha异步测试回调，就是告诉mocha要等这个回调使用时才能完成测试
      vm.$el.remove()
      vm.$destroy()
    })
  })

  it('接收align属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)
    const row = vm.$el
    expect(getComputedStyle(row).justifyContent).to.equal('flex-end')
    div.remove()
    vm.$destroy()
  })
})