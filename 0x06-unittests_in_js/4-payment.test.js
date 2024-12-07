const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let calculateStub, consoleSpy;

  beforeEach(() => {
    calculateStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateStub.restore();
    consoleSpy.restore();
  });

  it('should call calculateNumber with SUM, 100, 20 and log the correct message', () => {
    sendPaymentRequestToApi(100, 20);

    expect(calculateStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
