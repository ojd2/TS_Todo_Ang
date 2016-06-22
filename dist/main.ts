/* 

 * ABOUT *

A simple Todo List Application for the following Dissertation Project for student 150033255.

Also, the application has been created in order to explore and learn more about the TypeScript Programming Language.

*/

/* 

* ARCHITECTURE * 

The Application has been broken down and uses a more verbose MVC pattern as we are not using any real kind of a lazy initialization.

Instead of the more generic MVC pattern that is all under one `class`. 

With this in mind, we can create quite large applications in a more compositional way. b

However, more importantly we do not cross over any global variables.

This way we cannot trip ourselves up like JavaScript often does for us.

Our main `_Controller` class adopts a simple `constructor` method that stores the state variables:

- description
- items

Whenever each of the following two variables changes or identifies change, we store them into a string and array type respectively.

As it turns out, squeezing functions into functions (prototype) to create objects and associated classes -> Becomes very hard.

Instead, TS comes into the picture and let's us use the same approach but with more scalable architectures.

Scalable Logic:

Starts with JS -> Optional static type system for types, classes, objects -> Ends with JS.

It makes things a little bit more useful for such object interface interaction.

Furthermore, there are two ways of looking at type systems:

Static (Nominally) - where you explicitly say you are going to target and extend the person interface before doing so.

Dynamic - you can just layer and pass in extensions.

With TS, we are dealing with a more Nominally static type system. 

*/

/*

* INTERFACES *

You can pass interfaces which are essentially the TS version of objects / ADTs.

In other functional languages, interfaces would be in theory - just Types.

Below we only have an interface for what a `Task` should represent in our application.

For now, we only have a `description` and `completed` field in our object, as we need to identify whether the object has been:

a) completed and b) added a description or name for the Todo Task.

*/
interface Task {
    completed: boolean; // Denotes true or false.
    description: string; // Stores a string.
}
/*

* _CONTROLLER *

Our `_Controller` method below acts in the same way the controller method works in a generic MVC pattern.

However, we just follow and track our `Task` interface all the way through.

Within our `class` we have small functions all mutating our data (our `Task` type) in some way.

*/
class _Controller {
    /* Set up some of the global / public types we shall be using throughout. */
    public description: string;
    public Items: Task[];
    /* Set up a global constructor to do something with these types in memory. */
    constructor() {
        this.description = '';
        this.Items = [];
    }
    /* Add a task by pushing 'this' (description = string) into an [] called `Items`. */
    addTask() {
        this.Items.push({
                completed: false, 
                description: this.description
            });
        this.description = ''; /* Then `description` stays empty. */            
    };
    /* Removes all items in the model by re-assigning `Items` = [] (empty array) */
    removeAll() {
        this.Items = [];
    };
    /* Here we have a function with a static type called 'todoItem' which uses the type 'Task'. */
    /* We simply traverse through the Items [] and splice the array removing the selected 'todoItem'. */
    removeTask(todoItem: Task) {
        /* `const` is a very welcome addition offered by ES6 / TypeScript. It allows you to be immutable with variables. */
        const index = this.Items.indexOf(todoItem);
        if (index > -1) {
            this.Items.splice(index, 1);
        }
    };
    /* A method to delete selected items which are completed = true */
    /* Removes the `indexOf(todoItem.completed)` from the array `Items`. */
    removeSelected(completed: boolean, todoItem: Task) {
        // if((<HTMLInputElement>document.getElementById(“checked”).checked)) {…}
        const selected = todoItem.completed;
        const index = this.Items.indexOf(selected);
        if (selected == true) {
            this.Items.splice(index, 1);
        }
    };
    /* Marks all `Task`'s inside the `Items` array as completed. */ 
    markAll(completed: boolean) {
            this.Items.forEach(todoItem => { todoItem.completed = !todoItem.completed; });
    };
    /* Update is performed, this is for whenever the `add` button is clicked. */
    /* This also makes sure that the item is not completed until chosen so. */
    updateTask(todoItem: Task) {
        todoItem.completed = !todoItem.completed;
    };
    /* Simple function that uses a simple for loop method to count all the `Task`s in `Items`. */
    /* It finds all `Task`s that have their boolean == false for `completed` status. */
    remaining(): number {
        let count = 0;
        for (let todoItem of this.Items) {
            if (todoItem.completed == false) {
                count++;
            }
        }
        return count; /* Returns the number of count. */
    };
}

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
