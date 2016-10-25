var chai = require('chai');
var expect = chai.expect; 


const MartianRobots = require('../src/MartianRobots.js');
const world = {posX: 5,posY: 3};

describe('MartianRobots', function() {
 
  it('Output should be 1 1 E', function() { 
    var robot =  new MartianRobots.MartianRobot({posX: 1, posY: 1},'E', world);
    robot.move('RFRFRFRF');
      
    expect(false).to.equals(robot.lost);  
    expect("1 1 E").to.equals(robot.getCurrentPosition());
      
  });
    
  it('Output should be 3 3 N LOST', function() { 

    var robot =  new MartianRobots.MartianRobot({posX: 3, posY: 2},'N', world);
    robot.move('FRRFLLFFRRFLL');

    expect(true).to.equals(robot.lost);  
    expect("3 3 N LOST").to.equals(robot.getCurrentPosition());
  });
    
  it('Output should be 2 3 N LOST', function() { 

    var robot =  new MartianRobots.MartianRobot({posX: 0, posY: 3},'W', world);
    robot.move('LLFFFLFLFL');
    
    expect(true).to.equals(robot.lost);  
    expect("2 3 N LOST").to.equals(robot.getCurrentPosition());
  });
    
  it('Output should be 5 1 E LOST', function() { 

    var robot =  new MartianRobots.MartianRobot({posX: 2, posY: 1},'S', world);
    robot.move('LFFFF');
    expect(true).to.equals(robot.lost);
    expect("5 1 E LOST").to.equals(robot.getCurrentPosition());
      
  });    
});