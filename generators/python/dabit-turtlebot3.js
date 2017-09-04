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

Blockly.Python['turn_left'] = function(block) {

  var dropdown_speed = block.getFieldValue('speed');

  var code = "";
  code += "dropdown_speed = \"" + dropdown_speed.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/turtlebot3/turn_left.py");
  return code;

};

Blockly.Python['turn_right'] = function(block) {

  var dropdown_speed = block.getFieldValue('speed');

  var code = "";
  code += "dropdown_speed = \"" + dropdown_speed.toString() + "\"\n";
  code += Blockly.readPythonFile("../blockly/generators/python/scripts/turtlebot3/turn_right.py");
  return code;

};

Blockly.Python['turn_degrees'] = function(block) {
    var degrees = block.getFieldValue('TURN_DEGREES');
    var dropdown_direction = block.getFieldValue('direction');
    var value_direction = Blockly.Python.valueToCode(block, 'direction', Blockly.Python.ORDER_ATOMIC);

    var code = "";
    code += "dropdown_direction = \"" + dropdown_direction.toString() + "\"\n";
    code += "degrees = \"" + degrees.toString() + "\"\n";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/turtlebot3/turn_degrees.py");
    return code;

};

Blockly.Python['stop'] = function(block) {
    
    var code = "";
    code += Blockly.readPythonFile("../blockly/generators/python/scripts/turtlebot3/stop.py");
    return code;

};