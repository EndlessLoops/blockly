/**
 * license stuff here
 */

/**
 * @fileoverview Blocks for Dabit-Turtlebot.
 * @author cosmo@dabitindustries.com (Cosmo Borsky)
 * @author aravind@dabitindustries.com (Aravind Krishnan)
*/
'use strict';

goog.provide('Blockly.Blocks.turtlebot');
goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.turtlebot.HUE = 260;


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

Blockly.Blocks['turn_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn_Left ")
        .appendField(new Blockly.FieldDropdown([["SLOW", "SLOW"], ["NORMAL", "NORMAL"], ["FAST", "FAST"]]), "speed")
        .appendField("Speed");
    this.setPreviousStatement(true);
    this.setNextStatement(true);    
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};

Blockly.Blocks['turn_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn_Right ")
        .appendField(new Blockly.FieldDropdown([["SLOW", "SLOW"], ["NORMAL", "NORMAL"], ["FAST", "FAST"]]), "speed")
        .appendField("Speed");
    this.setPreviousStatement(true);
    this.setNextStatement(true);    
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};

Blockly.Blocks['turn_degrees'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn ")
        .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "direction")
        .appendField(new Blockly.FieldTextInput("1"), "TURN_DEGREES")
        .appendField("degrees");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://erlerobotics.com/docs/Robot_Operating_System/ROS/Blockly/Intro.html');
  }
};