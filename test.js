const { expect } = require('chai')
const { test } = require('./controller');
describe('Test return Test CI', () => {

    it('Successfully return Test CI', () => {
      const res = test()
      expect(res).to.equal('Test CI')
    })
})