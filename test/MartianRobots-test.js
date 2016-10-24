var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var MartianRobots = require('../src/MartianRobots.js');

describe('MartianRobots', function() {
  it('orientation should return E', function() {
    var robot =  MartianRobot([1,1],'E',[5,3]);
    expect(robot.orientation).to.equal('E');
  });
});