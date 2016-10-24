var chai = require('chai');
var expect = chai.expect; 



describe('MartianRobots', function() {
     
  it('Output should be 1 1 E', function() { 
    var MartianRobots = require('../src/MartianRobots.js');
    var robot =  new MartianRobots.MartianRobot([1,1],'E',[5,3]);   
    robot.move('RFRFRFRF');
    expect(robot.orientation).to.equal('E');
    expect(robot.lost).to.equal(false);
    expect(robot.getCurrentPosition).to.equals("1 1 E");  
  });
  it('Output should be 3 3 N LOST', function() { 
    var MartianRobots = require('../src/MartianRobots.js');
    var robot =  new MartianRobots.MartianRobot([3,2],'N',[5,3]);   
    robot.move('FRRFLLFFRRFLL');
    expect(robot.orientation).to.equal('N');
    expect(robot.lost).to.equal(true);
    expect(robot.getCurrentPosition).to.equals("3 3 N LOST");  
  });
  it('Output should be 2 3 N', function() { 
    var MartianRobots = require('../src/MartianRobots.js');
    var robot =  new MartianRobots.MartianRobot([0,3],'W',[5,3]);   
    robot.move('LLFFLFLFL');
    expect(robot.orientation).to.equal('E');
    expect(robot.lost).to.equal(false);
    expect(robot.getCurrentPosition()).to.equals("2 3 N");  
  });    
});