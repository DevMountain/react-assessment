# React Assessments

<img src="https://github.com/DevMountain/react-assessment/blob/master/readme-assets/1-3.png" />

In the following assessments, we will break down the process of building a to-do list. The to-do list will be capable of creating tasks, deleting tasks, updating tasks, and completing tasks. 

For assessment 1 and 2 you will be responsible for all functionality besides updating. For assessment 3 you will be responsible for all functionality.

In all three assessments you will not be graded on CSS. We only ask that you make the display of information clear so that it can be graded properly. The screenshots above or only to help with visualization.

Assessment 3 will use an API to manage tasks. Here is the documentation for that API:

<details>

<summary> API Documentation </summary>

<br />

The API url: `api url goes here`.

GET - Returns an array of all tasks.

</details>

<br />

## Assessment 1

### Summary

In this assessment, you will create the to-do list using `create-react-app` and you will create all the logic needed to create, complete, and delete tasks. All the functionality should be available to the user on the same view.

### Functionality

* A user must be able to create a task.
* A user must be able to delete a task.
* A user must be able to complete a task.
  * A user must be able to see a visual representation of a completed task.
  * The complete button should be disabled if the task is completed.
* A user must be able to see a list of all their tasks.
* The `add-task` input field must clear after adding a task.
* After adding a new task, the task must be added to the list of visible `tasks`.

### Technical Requirements

* Create a react app from scratch using `create-react-app`.
* Components.
* State.
* Props.
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?v=example">Map</a>.
* Classes ( at least 1 )
* In-line styles ( at least 1 )
* Conditional Classes

## Assessment 2

### Summary

In this assessment, we will use the repository you made in assessment one and modify the logic. 

### Functionality

* No new functionality is added in this assessment. It should function the same as assessment 1.

### Technical Requirements

* Keep track of tasks using redux.
* Create, Complete, and Delete tasks using action creators with redux.

## Assessment 3

### Summary

In this assessment, we will use the repository you made in assessment two and modify the logic.

### Functionality

* A user should be able to click on a task to be taken to a detailed view of that task:
  * A user should be able to modify the title of a task.
  * A user should be able to add/modify the description of a task.
  * A user should be able to save changes to a title/description:
    * This should navigate the user to the main list of tasks after saving changes.
  * A user should be able to cancel text changes:
    * This should set the input fields' values back to their original value.
  * A user should be able to delete a task:
    * This should navigate the user back to the main list of tasks after deleting a task.
  * A user should be able to complete a task:
    * This should navigate a user back to the main list of tasks after completeing a task.


### Technical Requirements

* Use the API to manage tasks.
* Use `redux-promise-middleware`, `Redux`, and `axios` to create, fetch, update, complete, and delete tasks.
* Create a service file that components will use to make API calls:
  * The service file should dispatch actions the store with the `promise` made from `axios`.