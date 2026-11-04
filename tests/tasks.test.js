import test from 'node:test';
import assert from 'node:assert/strict';
import { addTask, completeTask, formatTasks } from '../src/tasks.js';
test('add, list and complete a task without mutating earlier state', () => {
  const first = addTask([], ' Write docs ');
  assert.equal(formatTasks(first), '1. [ ] Write docs');
  const completed = completeTask(first, 1);
  assert.equal(formatTasks(completed), '1. [x] Write docs');
  assert.equal(first[0].done, false);
  assert.equal(addTask(completed, 'Run tests')[1].id, 2);
});
test('empty and invalid inputs', () => {
  assert.equal(formatTasks([]), 'No tasks yet.');
  assert.throws(() => addTask([], ' '), /required/);
  assert.throws(() => completeTask([], 42), /not found/);
});
