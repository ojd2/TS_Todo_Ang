/*

 * ABOUT *

A simple Todo List Application for the following Dissertation Project for student 150033255.

Also, the application has been created in order to explore and learn more about the TypeScript Programming Language.

*/
/*

* _CONTROLLER *

Our `_Controller` method below acts in the same way the controller method works in a generic MVC pattern.

However, we just follow and track our `Task` interface all the way through.

Within our `class` we have small functions all mutating our data (our `Task` type) in some way.

*/
var _Controller = (function () {
    /* Set up a global constructor to do something with these types in memory. */
    function _Controller() {
        this.description = '';
        this.Items = [];
    }
    /* Add a task by pushing 'this' (description = string) into an [] called `Items`. */
    _Controller.prototype.addTask = function () {
        this.Items.push({
            completed: false,
            description: this.description
        });
        this.description = ''; /* Then `description` stays empty. */
    };
    ;
    /* Removes all items in the model by re-assigning `Items` = [] (empty array) */
    _Controller.prototype.removeAll = function () {
        this.Items = [];
    };
    ;
    /* Marks all `Task`'s inside the `Items` array as completed. */
    _Controller.prototype.markAll = function (completed) {
        this.Items.forEach(function (todoItem) { todoItem.completed = !todoItem.completed; });
    };
    ;
    /* Here we have a function with a static type called 'todoItem' which uses the type 'Task'. */
    /* We simply traverse through the Items [] and splice the array removing the selected 'todoItem'. */
    _Controller.prototype.removeTask = function (todoItem) {
        /* `const` is a very welcome addition offered by ES6 / TypeScript. It allows you to be immutable with variables. */
        var index = this.Items.indexOf(todoItem);
        if (index > -1) {
            this.Items.splice(index, 1);
        }
    };
    ;
    /* Update is performed, this is for whenever the `add` button is clicked. */
    /* This also makes sure that the item is not completed until chosen so. */
    _Controller.prototype.updateTask = function (todoItem) {
        todoItem.completed = !todoItem.completed;
    };
    ;
    /* Simple function that uses a simple for loop method to count all the `Task`s in `Items`. */
    /* It finds all `Task`s that have their boolean == false for `completed` status. */
    _Controller.prototype.remaining = function () {
        var count = 0;
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var todoItem = _a[_i];
            if (todoItem.completed == false) {
                count++;
            }
        }
        return count; /* Returns the number of count. */
    };
    ;
    return _Controller;
}());
/*

* VALIDATION *

Source: http://www.kirjai.com/validation-model-driven-forms-ng2/

*/
// import { validateInput } from './input.component';
/*

* ANGULAR *

Here we initiate our `View` component but through the interface of Angular JS.

* VIEW *

The view is left out of the TS code below because we generate the view using Angular JS.

More information about Angular JS can be found here @ https://www.angularjs.org/

More and more we are seeing TS being integrated with various HTML libraries like Backbone JS and Angular JS or even React.

More on this is covered in the dissertation thesis.

Angular JS was chosen over Backbone JS because it allows us more freedom to extend the vocabulary of our program into the HTML.

We essentially loop in our `_Controller` method into the HTML.

The HTML is then rendered depending on what the state of our program or 'state of the world' our model is in.

Our state could be something like `addTask` or `removeAll`, where the program state is changes.

*/
var App = angular.module('App', []);
App.controller('_Controller', _Controller);
