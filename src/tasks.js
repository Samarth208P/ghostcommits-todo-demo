export function addTask(tasks, text) {
  if (!text.trim()) throw new Error('Task text is required.');
  return [...tasks, { id: Math.max(0, ...tasks.map(task => task.id)) + 1, text: text.trim(), done: false }];
}
export function completeTask(tasks, id) {
  if (!tasks.some(task => task.id === id)) throw new Error('Task not found.');
  return tasks.map(task => task.id === id ? { ...task, done: true } : task);
}
export function formatTasks(tasks) {
  return tasks.length ? tasks.map(task => `${task.id}. [${task.done ? 'x' : ' '}] ${task.text}`).join('\n') : 'No tasks yet.';
}
