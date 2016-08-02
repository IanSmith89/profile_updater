'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Updater app', () => {
  describe('on load', () => {
    beforeEach(function() {
      browser.get('index.html');
    });

    it('should have a title', () => {
      const title = browser.getTitle();

      return expect(Promise.resolve(title)).to.eventually.equal('Profile Updater');
    });

    it('should be pre-loaded with username', () => {
      const username = element(by.model('profile.user.username'));

      return expect(Promise.resolve(username.getText())).to.eventually.equal('');
    });

    it('should be pre-loaded with email', () => {
      const email = element(by.model('profile.user.email'));

      return expect(Promise.resolve(email.getText())).to.eventually.equal('');
    });

    it('should be pre-loaded with password', () => {
      const password = element(by.model('profile.user.password'));

      return expect(Promise.resolve(password.getText())).to.eventually.equal('');
    });

    it('save button should be disabled', () => {
      const saveButton = element(by.id('save'));

      return expect(Promise.resolve(saveButton.isEnabled())).to.eventually.be.false;
    });
  });
});
