/**
 * license stuff here
 */

/**
 * @fileoverview Blocks for Dabit-Turtlebot3.
 * @author cosmo@dabitindustries.com (Cosmo Borsky)
 * @author aravind@dabitindustries.com (Aravind Krishnan)
*/
'use strict';

goog.provide('Blockly.Blocks.turtlebot3');
goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.turtlebot3.HUE = 260;


Blockly.Blocks['circle_mode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Circle_Mode ")
	    .appendField(new Blockly.FieldDropdown([["CLOCKWISE", "CLOCKWISE"], ["COUNTER-CLOCKWISE", "COUNTER-CLOCKWISE"]]), "direction")
        .appendField("Direction")
        .appendField(new Blockly.FieldDropdown([["SLOW", "SLOW"], ["NORMAL", "NORMAL"], ["FAST", "FAST"]]), "speed")
        .appendField("Speed");
    this.setPreviousStatement(true);
    this.setNextStatement(true);    
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};

Blockly.Blocks['move_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move_Forward ")
        .appendField(new Blockly.FieldDropdown([["SLOW", "SLOW"], ["NORMAL", "NORMAL"], ["FAST", "FAST"]]), "speed")
        .appendField("Speed");
    this.setPreviousStatement(true);
    this.setNextStatement(true);    
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};

Blockly.Blocks['move_backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move_Backward ")
        .appendField(new Blockly.FieldDropdown([["SLOW", "SLOW"], ["NORMAL", "NORMAL"], ["FAST", "FAST"]]), "speed")
        .appendField("Speed");
    this.setPreviousStatement(true);
    this.setNextStatement(true);    
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};