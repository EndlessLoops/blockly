/**
 * license stuff here
 */

/**
 * @fileoverview Blocks for Dabit-Turtlebot3.
 * @author cosmo@dabitindustries.com (Cosmo Borsky)
 * @author aravind@dabitindustries.com (Aravind Krishnan)
*/
'use strict';

goog.provide('Blockly.Python.turtlebot3');
goog.require('Blockly.Python');

Blockly.Python['circle_mode'] = function(block) {

  var dropdown_direction = block.getFieldValue('direction');
  var dropdown_speed = block.getFieldValue('speed');

  var code = "";
  code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
  code += "dropdown_speed = \"" + dropdown_speed.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/turtlebot3/circle_mode.py");
  return code;

};

Blockly.Python['move_forward'] = function(block) {

  var dropdown_speed = block.getFieldValue('speed');

  var code = "";
  code += "dropdown_speed = \"" + dropdown_speed.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/turtlebot3/move_forward.py");
  return code;

};

Blockly.Python['move_backward'] = function(block) {

  var dropdown_speed = block.getFieldValue('speed');

  var code = "";
  code += "dropdown_speed = \"" + dropdown_speed.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/turtlebot3/move_backward.py");
  return code;

};