// Here we have a controller, similar to the way MVC's behave:
var _Controller = (function () {
    // Set up a global constructor to do something with these variables.
    function _Controller() {
        this.description = '';
        this.Items = [];
    }
    // Add a task by pushing 'this' (description = string) into an [] called Items.
    _Controller.prototype.addTask = function () {
        this.Items.push({
            completed: false,
            description: this.description
        });
        this.description = '';
    };
    ;
    _Controller.prototype.removeAll = function () {
        this.Items = [];
    };
    ;
    _Controller.prototype.markAll = function (completed) {
        this.Items.forEach(function (todoItem) { todoItem.completed = !todoItem.completed; });
    };
    ;
    // here we have a function with a static type called 'todoItem' which uses the type 'Task'.
    // We simply traverse through the Items [] and splice the array removing the selected 'todoItem'.
    _Controller.prototype.removeTask = function (todoItem) {
        var index = this.Items.indexOf(todoItem);
        if (index > -1) {
            this.Items.splice(index, 1);
        }
    };
    ;
    // Update is performed, this is for whenever the add button is clicked.
    // Uses the type 'todoItem', and then identifies the boolean 'completed'.
    _Controller.prototype.updateTask = function (todoItem) {
        todoItem.completed = !todoItem.completed;
    };
    ;
    // Simple function that uses a simple for loop in function.
    _Controller.prototype.remaining = function () {
        var count = 0;
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var todoItem = _a[_i];
            if (todoItem.completed == false) {
                count++;
            }
        }
        return count;
    };
    ;
    return _Controller;
}());
var App = angular.module('App', []);
App.controller('_Controller', _Controller);
