#🐍 Snake Game

A simple and interactive Snake Game built using HTML, CSS, and JavaScript.

The game includes score tracking, high-score persistence, a timer, randomly generated food, keyboard controls, and start/restart screens.

##🎮 Features
🐍 Classic Snake gameplay
🍎 Random food generation
🎯 Score tracking
🏆 High-score system
💾 High score saved using localStorage
⏱️ Game timer
⌨️ Arrow-key controls
🔄 Restart game functionality
▶️ Start game screen
💀 Game-over screen
🌙 Dark-themed interface

##🛠️ Technologies Used
HTML5 — Structure of the game
CSS3 — Styling and game board
JavaScript — Game logic and interactions
LocalStorage — Persistent high score

##🎮 How to Play
Click the START button.
Use the arrow keys to control the snake.
Key	Movement
⬆️ Arrow Up	Move Up
⬇️ Arrow Down	Move Down
⬅️ Arrow Left	Move Left
➡️ Arrow Right	Move Right
Eat the food to increase your score.
Avoid hitting the game boundaries.
When the game ends, click Restart Game to play again.

##📂 Project Structure
SNAKE_GAME/
│
├── index.html
├── index.css
├── index.js
└── README.md


##🧠 How It Works

The game board is created dynamically using JavaScript. The board is divided into blocks, and the snake and food are positioned using row and column coordinates.

The snake moves continuously based on the selected direction. When the snake reaches the food:

The food is moved to a new random position.
The snake grows.
The score increases.
The high score is updated when a new record is achieved.

The high score is stored in the browser using localStorage, so the best score can be retained between sessions.

The game also checks whether the snake reaches the boundary. When this happens, the game loop stops and the Game Over screen is displayed.

👨‍💻 Author

Abhishek

If you enjoyed this project, consider giving the repository a ⭐.

📌 Part of My Projects Collection

This project is part of a collection of small web development projects built while learning and practicing HTML, CSS, and JavaScript.
