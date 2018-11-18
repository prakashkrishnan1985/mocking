var chaihttp = require('chai-http');
var chai = require('chai'); 
chai.use(chaihttp);
var expect = chai.expect;

describe('Test file to check the working of the mock server', function(){

    it('Test to ensure that the mock server responds to get calls', function(done){
        chai.request('localhost:8081')
                .get('/prakash')
                .end(function(err, res){
                    expect (res).to.have.status(200);
                    expect(res.text).to.contain('Mocking is Awesome')
                    done();
                })
    })


    it('Test to ensure that the mock server responds to post calls', function(done){
        chai.request('localhost:8081')
                .post('/prakash')
                .end(function(err, res){
                    expect (res).to.have.status(201);
                    expect(res.text).to.contain('krishnan')
                    done();
                })
    })

    it('Test to ensure that the mock server responds to put calls', function(done){
        chai.request('localhost:8081')
                .put('/krishnan')
                .end(function(err, res){
                    expect (res).to.have.status(201);
                    expect(res.text).to.contain('prakash')
                    done();
                })
    })

    it('Test to ensure that the mock server responds to delete calls', function(done){
        chai.request('localhost:8081')
                .delete('/')
                .end(function(err, res){
                    expect (res).to.have.status(200);
                    expect(res.text).to.contain('Hello from the other side')
                    done();
                })
    })

});