'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var interestCtrlStub = {
  index: 'interestCtrl.index',
  show: 'interestCtrl.show',
  create: 'interestCtrl.create',
  update: 'interestCtrl.update',
  destroy: 'interestCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var interestIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './interest.controller': interestCtrlStub
});

describe('Interest API Router:', function() {

  it('should return an express router instance', function() {
    interestIndex.should.equal(routerStub);
  });

  describe('GET /api/interests', function() {

    it('should route to interest.controller.index', function() {
      routerStub.get
        .withArgs('/', 'interestCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/interests/:id', function() {

    it('should route to interest.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'interestCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/interests', function() {

    it('should route to interest.controller.create', function() {
      routerStub.post
        .withArgs('/', 'interestCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/interests/:id', function() {

    it('should route to interest.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'interestCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/interests/:id', function() {

    it('should route to interest.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'interestCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/interests/:id', function() {

    it('should route to interest.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'interestCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
