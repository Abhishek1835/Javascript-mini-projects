# 📋 Kanban Board

A simple and interactive **Kanban Board** built using **HTML, CSS, and JavaScript**.

This project allows users to create, organize, move, and delete tasks using a drag-and-drop interface. Tasks are stored in the browser using `localStorage`, so the board data can be restored when the page is opened again.

---

## ✨ Features

* 📋 Three task columns:

  * 📝 To Do
  * 🔄 In Progress
  * ✅ Done
* ➕ Add new tasks
* 🖱️ Drag and drop tasks between columns
* 🗑️ Delete tasks
* 🔢 Automatic task count for each column
* 💾 Tasks saved using `localStorage`
* 🔄 Tasks restored after refreshing the page
* 🪟 Modal form for adding new tasks
* ❌ Click outside the modal to close it
* 🌙 Dark-themed interface
* 📱 Flexible layout using CSS Flexbox

---

## 🛠️ Technologies Used

| Technology        | Purpose                                |
| ----------------- | -------------------------------------- |
| HTML5             | Structure of the Kanban board          |
| CSS3              | Styling, layout, modal, and task cards |
| JavaScript        | Task management and interactions       |
| LocalStorage      | Persistent task data                   |
| Drag and Drop API | Moving tasks between columns           |

---

## 🎯 How to Use

### 1. Add a Task

Click the **Add New Task** button.

Enter:

* Task Title
* Task Description

Then click **Add Task**.

The new task will automatically appear in the **To Do** column.

---

### 2. Move a Task

Click and drag a task card.

Drop it into:

* 📝 **To Do**
* 🔄 **In Progress**
* ✅ **Done**

The task count will automatically update after moving a task.

---

### 3. Delete a Task

Click the **Delete** button on a task card.

The task will be removed from the board and the column count will be updated.

---

## 💾 Data Persistence

The project uses the browser's **LocalStorage API** to save the current state of the board.

Whenever tasks are:

* Added
* Moved
* Deleted

the current board data is stored in `localStorage`.

When the page is loaded again, the saved tasks are retrieved and displayed in their previous columns.

---

## 📂 Project Structure

```text
KANBAN_BOARD/
│
├── index.html
├── index.css
├── index.js
└── README.md
```

---

## 🧠 How It Works

The board contains three columns represented by:

```text
To Do → In Progress → Done
```

Each task is represented as a draggable HTML element.

JavaScript handles the main functionality:

1. Loads previously saved tasks from `localStorage`.
2. Creates task elements dynamically.
3. Adds drag-and-drop functionality to the columns.
4. Updates task counts.
5. Saves the board state after changes.
6. Opens and closes the add-task modal.
7. Creates new tasks.
8. Deletes existing tasks.

The task information is stored as objects containing the task title and description.

---

## 🖱️ Drag and Drop

The project uses JavaScript drag-and-drop events to move tasks between columns.

When a task is dropped into a different column:

```text
Task
 ↓
Drag
 ↓
Drop into another column
 ↓
Update column
 ↓
Update task count
 ↓
Save to LocalStorage
```

---

## 🚀 Getting Started

No external libraries or installations are required.

### Run the Project

1. Open the `KANBAN_BOARD` folder.
2. Open `index.html` in a web browser.
3. Click **Add New Task** to create your first task.
4. Drag tasks between the different columns.

---

## 📸 Preview

Add a screenshot of your Kanban Board here:

```markdown
![Kanban Board](assets/screenshot.png)
```

You can create an `assets` folder later and upload your project screenshot there.

---

## 🔮 Future Improvements

* [ ] Add task editing functionality
* [ ] Add task priorities
* [ ] Add due dates
* [ ] Add task categories
* [ ] Add search functionality
* [ ] Add filtering
* [ ] Add dark/light theme switch
* [ ] Add task completion animations
* [ ] Add mobile touch drag-and-drop support
* [ ] Add confirmation before deleting a task

---

## 👨‍💻 Author

**Abhishek**

---

⭐ If you like this project, consider giving the repository a star!

---

### 📌 Part of My Projects Collection

This project is part of a collection of small web development projects built while learning and practicing **HTML, CSS, and JavaScript**.
