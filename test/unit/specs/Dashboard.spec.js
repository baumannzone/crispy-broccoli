import Vue from 'vue'
import Dashboard from '@/components/Users'
import router from '@/router'

describe('Users.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Dashboard)
    const vm = new Constructor({router}).$mount()
    expect(vm.$el.querySelector('.dashboard h1').textContent)
      .to.equal('Welcome to your truffle-vue dApp')
  })
})
