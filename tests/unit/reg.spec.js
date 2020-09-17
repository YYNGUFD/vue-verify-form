 
import { expect } from 'chai' 
import regObj,{verifyFn} from '../../lib/reg-list'
describe('测试正则表达式', () => {

// 写代码 使用mocha + chai(断言库) 
describe('测试密码  6-9位字母或者数字', () => { 
  it("测试密码 1wd121212 ✅",()=>{
    expect(verifyFn(regObj.pwd,'1wd121212')).to.be.equal(true)
  }) 
  it("测试密码 '呃呃呃'❎",()=>{
    expect(verifyFn(regObj.pwd,'呃呃呃')).to.be.equal(false)
  }) 
  it("测试密码 '121222'✅",()=>{
    expect(verifyFn(regObj.pwd,'121222')).to.be.equal(true)
  }) 
});

describe('测试手机号  11位数字', () => { 
  it("18220188039 ✅",()=>{
    expect(verifyFn(regObj.mobile,'18220188039')).to.be.equal(true)
  }) 
  it("1822018803  ❎",()=>{
    expect(verifyFn(regObj.mobile,'1822018803')).to.be.equal(false)
  }) 
  it("12912121212 ✅",()=>{
    expect(verifyFn(regObj.mobile,'12912121212')).to.be.equal(true)
  })
  it("32ddwefvwewe ❎",()=>{
    expect(verifyFn(regObj.mobile,'32ddwefvwewe')).to.be.equal(false)
  })  
});
describe('测试身份证号', () => {
  it('612392200409120732 ✅',()=>{ 
    expect(verifyFn(regObj.idCard,'612392200409120732')).to.be.equal(true)
  })
  it('15042920040912073X ✅',()=>{ 
    expect(verifyFn(regObj.idCard,'15042920040912073X')).to.be.equal(true)
  })
  it('15042920040912073x ✅',()=>{ 
    expect(verifyFn(regObj.idCard,'15042920040912073x')).to.be.equal(true)
  })
  it('15042919360956827 ❎',()=>{ 
    expect(verifyFn(regObj.idCard,'15042919360956827')).to.be.equal(false)
  })
  it('1504291e360956827 ❎',()=>{ 
    expect(verifyFn(regObj.idCard,'1504291e360956827')).to.be.equal(false)
  })
  it('1504291e36095682eee7 ❎',()=>{ 
    expect(verifyFn(regObj.idCard,'1504291e36095682eee7')).to.be.equal(false)
  })  
});

describe('测试邮箱', () => {
   it('129@qq.com ✅',()=>{
      expect(verifyFn(regObj.email,'129@qq.com')).to.be.equal(true)
   })
   it('12229@163.com ✅',()=>{
     expect(verifyFn(regObj.email,'12229@163.com')).to.be.equal(true)
   })
   it('1212121@ ❎',()=>{
      expect(verifyFn(regObj.email,'1212121@')).to.be.equal(false)
   })
});
describe('测试整数', () => {
  it('1212 ✅',()=>{
    expect(verifyFn(regObj.integer,'1212')).to.be.equal(true)
  })
  it('121d ❎',()=>{
    expect(verifyFn(regObj.integer,'121d')).to.be.equal(false)
  })
  it('222e ❎',()=>{
    expect(verifyFn(regObj.integer,'222e')).to.be.equal(false)
  })
});

describe('测试验证码', () => {
  it('1212 ✅',()=>{
    expect(verifyFn(regObj.msgcode,'1212')).to.be.equal(true)
  })
  it('121d ❎',()=>{
    expect(verifyFn(regObj.msgcode,'121d')).to.be.equal(false)
  })
  it('32方法232 ❎',()=>{
    expect(verifyFn(regObj.msgcode,'222e')).to.be.equal(false)
  })
});


describe('测试url', () => {
  it('http://127.0.0.1:8081/ ✅',()=>{
    expect(verifyFn(regObj.url,'http://127.0.0.1:8081/')).to.be.equal(false)
  })
  it('https://www.baidu:8081/ ✅',()=>{
    expect(verifyFn(regObj.url,'https://www.baidu:8081/')).to.be.equal(true)
  })
  it('ftp://www.baidu.com:8081/ ✅',()=>{
    expect(verifyFn(regObj.url,'ftp://www.baidu.com:8081/')).to.be.equal(true)
  })
  it('www.baidu.com ❎',()=>{
    expect(verifyFn(regObj.url,'www.baidu.com')).to.be.equal(false)
  })
  it('33/1312 ❎',()=>{
    expect(verifyFn(regObj.url,'33/1312')).to.be.equal(false)
  })
});
describe('校验中文名字', () => {
  it('物理眼 ✅',()=>{
     expect(verifyFn(regObj.chineseName,'物理眼')).to.be.equal(true)
  }) 
  it('物理·眼 ✅',()=>{
    expect(verifyFn(regObj.chineseName,'物理·眼')).to.be.equal(true)
   }) 
  it('物理眼· ✅',()=>{
    expect(verifyFn(regObj.chineseName,'物理眼·')).to.be.equal(true)
  }) 
  it('物理眼·伊丽莎白 ✅',()=>{
    expect(verifyFn(regObj.chineseName,'物理眼·伊丽莎白')).to.be.equal(true)
  }) 
  it('物理眼·····伊丽莎白 ❎',()=>{
    expect(verifyFn(regObj.chineseName,'物理眼·伊丽莎白')).to.be.equal(true)
  })
});
  
});
