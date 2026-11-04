import { readFile, writeFile } from 'node:fs/promises';
import { addTask, completeTask, formatTasks } from './tasks.js';
const [command = 'list', ...args] = process.argv.slice(2);
try {
  let tasks;
  try { tasks = JSON.parse(await readFile('todos.json', 'utf8')); }
  catch (error) { if (error.code !== 'ENOENT') throw error; tasks = []; }
  if (command === 'add') tasks = addTask(tasks, args.join(' '));
  else if (command === 'done') tasks = completeTask(tasks, Number(args[0]));
  else if (command !== 'list') throw new Error('Usage: npm start -- list | add <text> | done <id>');
  if (command !== 'list') await writeFile('todos.json', JSON.stringify(tasks, null, 2) + '\n');
  console.log(formatTasks(tasks));
} catch (error) { console.error(error.message); process.exitCode = 1; }
