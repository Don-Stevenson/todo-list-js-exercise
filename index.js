function newTask(title, descrition) {
  const task = {
    title: title,
    descrition: descrition,
    complete: false,

    // prints out the provided task's details
    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    // marks the provided task as completed
    markCompleted() {
      this.complete = true;
    }
  };
  return task;
}


// // prints out the provided task's details
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }



// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "☹");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

// console.log(tasks);

