import "alpinejs";
import { nanoid } from "nanoid";

window.app = function () {
	return {
		todos: [
			{ id: nanoid(8), title: "task 1", completed: false },
			{ id: nanoid(8), title: "task 2", completed: true },
			{ id: nanoid(8), title: "task 3", completed: false },
			{ id: nanoid(8), title: "task 4", completed: false },
			{ id: nanoid(8), title: "task 5", completed: true },
		],
		addTodo(newTask) {
			if (!newTask) return;

			this.todos.push({
				title: newTask,
				isDone: false,
			});

			this.sortTodos();
		},
		completeTodo(index, id) {
			this.todos[index].completed = !this.todos[index].completed;
			this.sortTodos();
		},
		deleteTodo(index, id) {
			this.todos.splice(index, 1);
		},
		sortTodos() {
			this.todos.sort(function (x, y) {
				return x.completed === y.completed ? 0 : x.completed ? 1 : -1;
			});
		},
		darkMode: true,
		toggleTheme(el, isDark) {
			if (!el.classList.contains("dark") && isDark) {
				el.classList.add("dark");
			} else if (el.classList.contains("dark") && !isDark) {
				el.classList.remove("dark");
			}
		},
	};
};
