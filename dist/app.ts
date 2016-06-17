// Essentially, here we will create some types:
interface Task {
    completed: boolean;
    description: string;
}

// Here we have a controller, similar to the way MVC's behave:
class _Controller {
    // Set up some of the global parameters we shall be using throughout.
    public description: string;
    public Items: Task[];
    // Set up a global constructor to do something with these variables.
    constructor() {
        this.description = '';
        this.Items = [];
    }
    // Add a task by pushing 'this' (description = string) into an [] called Items.
    addTask() {
        this.Items.push({
            completed: false,
            description: this.description
        });
        this.description = '';
    };
    removeAll() {
        this.Items = [];
    };
    markAll(completed: boolean) {
            this.Items.forEach(todoItem => { todoItem.completed = !todoItem.completed; });
    };
    // here we have a function with a static type called 'todoItem' which uses the type 'Task'.
    // We simply traverse through the Items [] and splice the array removing the selected 'todoItem'.
    removeTask(todoItem: Task) {
        const index = this.Items.indexOf(todoItem);
        if (index > -1) {
            this.Items.splice(index, 1);
        }
    };
    // Update is performed, this is for whenever the add button is clicked.
    // Uses the type 'todoItem', and then identifies the boolean 'completed'.
    updateTask(todoItem: Task) {
        todoItem.completed = !todoItem.completed;
    };
    // Simple function that uses a simple for loop in function.
    remaining(): number {
        let count = 0;
        for (let todoItem of this.Items) {
            if (todoItem.completed == false) {
                count++;
            }
        }
        return count;
    };
}

var App = angular.module('App', []);
App.controller('_Controller', _Controller);
