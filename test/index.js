const { expect } = require('chai');
const StatusHelper = require('./../app')();

describe('Tests of StatusHelper Class', () => {
    
    const status = new StatusHelper();

    it('status.getInfoStatusCode(statusCode) - OK', () => {
        expect(status.getInfoStatusCode(200)).to.be.an('object');
        expect(status.getInfoStatusCode(200)).to.not.be.an('error');
    });

    it('status.getInfoStatusCode(statusCode) - NOK', () => {
        expect(status.getInfoStatusCode()).to.be.an('error');
        expect(status.getInfoStatusCode()).to.not.be.an('object');
    });

    it('status.getInfoStatusByName(statusName) - OK', () => {
        expect(status.getInfoStatusByName('OK')).to.be.an('object');
        expect(status.getInfoStatusByName('OK')).to.not.be.an('error');
    });

    it('status.getInfoStatusByName(statusName) - NOK', () => {
        expect(status.getInfoStatusByName()).to.be.an('error');
        expect(status.getInfoStatusByName()).to.not.be.an('object');
    });

    it('status.getAllStatusList() - OK', () => {
        expect(status.getAllStatusList()).to.be.an('array');
        expect(status.getAllStatusList()).to.not.be.an('error');
    });

    it('status.getAllStatusWithDescription() - OK (List an Object)', () => {
        expect(status.getAllStatusWithDescription()).to.be.an('object');
        expect(status.getAllStatusWithDescription()).to.not.be.an('error');
    });

     it('status.getAllStatusWithDescription(isArrayFlag) - OK (List an Array)', () => {
        expect(status.getAllStatusWithDescription(true)).to.be.an('array');
        expect(status.getAllStatusWithDescription(true)).to.not.be.an('error');
    });

    it('status.getStatus(statusCode) - OK (Return StatusCode)', () => {
        expect(status.getStatus('OK')).to.be.an('string');
        expect(status.getStatus('OK')).to.not.be.an('error');
    });

    it('status.getStatus(statusCode) - OK (Return StatusDescription)', () => {
        expect(status.getStatus('OK')).to.be.an('string');
        expect(status.getStatus('OK')).to.not.be.an('error');
    });

    it('status.getStatus(statusCode) - OK (Return Metadata)', () => {
        expect(status.getStatus('OK')).to.be.an('string');
        expect(status.getStatus('OK')).to.not.be.an('error');
    });

    it('status.getStatus() - NOK', () => {
        expect(status.getStatus()).to.be.an('error');
        expect(status.getStatus()).to.not.be.an('object');
    });
})