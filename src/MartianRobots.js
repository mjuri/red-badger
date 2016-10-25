"use strict";
var dangerZones = [];
var MartianRobot = (function () {
    function MartianRobot(initialPos, orientation, world) {
        this.position = initialPos;
        this.orientation = orientation;
        this.world = world;
        this.ignoreInstructions = false;
        this.lost = false;
    }
    MartianRobot.prototype.getCurrentPosition = function () {
        var pos = this.position.posX + ' ' + this.position.posY + ' ' + this.orientation;
        if (this.lost) {
            pos += ' LOST';
        }
        return pos;
    };
    MartianRobot.prototype.showCurrentPosition = function () {
        console.log(this.getCurrentPosition());
    };
    MartianRobot.prototype.move = function (instructions) {
        var commands = instructions.split("");
        this.runCommands(commands);
    };
    MartianRobot.prototype.runCommands = function (commands) {
        switch (commands[0]) {
            case 'L':
                this.turnLeft();
                break;
            case 'R':
                this.turnRight();
                break;
            case 'F':
                this.moveForward();
                break;
        }
        // this.showCurrentPosition();
        if (commands.length > 1 && !this.ignoreInstructions && !this.lost) {
            this.runCommands(commands.slice(1, commands.length));
        }
    };
    MartianRobot.prototype.moveForward = function () {
        var currentPosition = { posX: this.position.posX, posY: this.position.posY };
        switch (this.orientation) {
            case 'N':
                this.position.posY += 1;
                break;
            case 'S':
                this.position.posY -= 1;
                break;
            case 'E':
                this.position.posX += 1;
                break;
            case 'W':
                this.position.posX -= 1;
                break;
        }
        if (this.isOnDangerZone() > -1) {
            this.position = currentPosition;
        }
        if (this.position.posX > this.world.posX || this.position.posX < 0 || this.position.posY > this.world.posY || this.position.posY < 0) {
            this.position = currentPosition;
            dangerZones.push(currentPosition);
            this.lost = true;
        }
    };
    MartianRobot.prototype.isOnDangerZone = function () {
        for (var _i = 0, dangerZones_1 = dangerZones; _i < dangerZones_1.length; _i++) {
            var p = dangerZones_1[_i];
            if (p.posX === this.position.posX && p.posY === this.position.posY) {
                return 0;
            }
        }
        return -1;
    };
    MartianRobot.prototype.turnLeft = function () {
        var coordinates = ['N', 'W', 'S', 'E'];
        this.turnRobot(coordinates);
    };
    MartianRobot.prototype.turnRight = function () {
        var coordinates = ['N', 'E', 'S', 'W'];
        this.turnRobot(coordinates);
    };
    MartianRobot.prototype.turnRobot = function (coordinates) {
        var current = coordinates.indexOf(this.orientation);
        if (current == 3) {
            current = 0;
        }
        else {
            current++;
        }
        this.orientation = coordinates[current];
    };
    return MartianRobot;
}());
exports.MartianRobot = MartianRobot;
var world = { posX: 5, posY: 3 };
var robotA = new MartianRobot({ posX: 1, posY: 1 }, 'E', world);
robotA.move("RFRFRFRF");
var robotB = new MartianRobot({ posX: 3, posY: 2 }, 'N', world);
robotB.move("FRRFLLFFRRFLL");
var robotC = new MartianRobot({ posX: 2, posY: 3 }, 'W', world);
robotC.move("LLFFFLFLFL");
robotA.showCurrentPosition(); // 1 1 E
robotB.showCurrentPosition(); // Print 3 3 N LOST
robotC.showCurrentPosition(); // Print 2 3 N LOST
