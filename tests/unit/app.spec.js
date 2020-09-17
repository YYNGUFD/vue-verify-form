
 
import App from '../../src/App.vue'
import { expect } from 'chai';
import {mount} from '@vue/test-utils' 
describe('测试App.vue', () => {
  describe('App.vue', () => { 
    let wrapper = mount(App);
    it("输入数字",()=>{ 
      //技术不精 测试不会写
      // var el = wrapper.find('#number');
      // wrapper.vm.data1 = '33333ddddd'
      // el.trigger('input');   
      // expect( wrapper.vm.data1).to.be.equal('33333');
    })
  }); 
});



 
