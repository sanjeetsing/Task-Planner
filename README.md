
Task-Planner Application

## Documentation

[Documentation](https://linktodocumentation)

This is a Task Manager application built using React and TypeScript. The application provides functionality to manage a list of tasks, including adding, editing, deleting, and filtering tasks. It uses Material-UI for the design and includes a simple alert system to notify users of actions taken on the tasks.

##Components
  1) App Component

The main component that holds the state and functions for managing tasks.
Uses Material-UI's Container for layout.
Manages tasks and alert state.
Handles adding, updating, deleting, and filtering tasks.

2) TaskForm Component

A form for adding and editing tasks.
Receives addTask, updateTask, and editingTask as props.

3) TaskList Component

Displays the list of tasks.
Receives tasks, updateTask, and deleteTask as props.

4) TaskFilter Component

Provides an input field to filter tasks based on a query.
Calls filterTasks function passed as a prop to update the displayed task list.

5) AlertMessage Component

Shows alert messages for task actions like adding, updating, and deleting.
Receives open, onClose, severity, and message as props

## State Management

- tasks: Holds the list of all tasks.
- filteredTasks: Manages the list of tasks displayed based on the filter.
- editingTask: Stores the task currently being edited.
- alert: Manages the alert's visibility and message.
## Features

-Add Tasks: Users can add new tasks with a title and description.
-Edit Tasks: Existing tasks can be edited to update their details.
-Delete Tasks: Users can remove tasks from the list.
-Filter Tasks: The application allows filtering tasks based on the title or description.
-Alert System: Provides feedback to the user with success, info, and warning alerts.


## Roadmap

 Dependencies
 
 - React
- TypeScript
- Material-UI

File Structure

- App.tsx: The main component managing the application.
- components/: Contains all reusable components like TaskForm, TaskList, and TaskFilter.
- types.ts: Defines the TypeScript types used in the application.
- TaskManager.css: Custom styles for the application.


## Deployment

How to Run

1-Clone the repository.
2-Install the dependencies using npm install or yarn.
3-Start the development server using npm start or yarn start.
4-Open the application in your browser at http://localhost:3000.
```


## Optimizations

Future Enhancements

- Add task prioritization and categorization.
- Implement a more sophisticated search/filter system.
- Add due dates and notifications for tasks.


## Usage/Examples

How to Use

- Add a Task: Use the form at the top to add a new task with a title and description.
- Edit a Task: Click the edit button next to a task to modify its details.
- Delete a Task: Click the delete button next to a task to remove it.
- Filter Tasks: Use the filter input to search tasks by title or description.


## Authors

- SANJEET SINGH


## License

[MIT](https://choosealicense.com/licenses/mit/)

This project is licensed under the MIT License - see the LICENSE file for details.
## Contributing

Contributions are always welcome!
Feel free to contribute to the project by submitting a pull request or reporting any issues!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

