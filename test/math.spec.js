const assert= require('assert')
const exp = require('constants')
const Math = require('../src/math.js')
const expect = require('chai').expect
const sinon = require('sinon')

let value = 0

describe('Math class', function(){
    //hooks
    beforeEach(function(){
        value = 0
    })


    it('Sum two numbers', function(done){
        const math = new Math()
        this.timeout(3000)

        value = 5

        math.sum(value,5,(value) => {
            expect(value).to.equal(10)
            done()
        })   
    })

    it('Multiply two numbers',function(){
        const math=new Math()
        const obj = {
            name: 'Matheus'
        }
        expect(obj)
        .to.have.property('name')
        .equal('Matheus')

        expect(math.multiply(value,5)).to.equal(0)
    })

    it.only('Calls req wth sum and index values', function(){
        const req = {}
        const res = {
            load:function load(){
                console.log('Called!')
            }
        }
        sinon.stub(res, 'load')
        const math = new Math()

        math.printSum(req, res, 5, 5)

        expect(res.load.args[0][1]).to.equal(10)
       // expect(res.load.calledOnce).to.be.true
    })
})