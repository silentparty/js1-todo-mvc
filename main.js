/* DOM Manipulation: Independent Practice

To complete this excercise, you must meet the following requirements:

- When the user clicks the "#new-thing-button" button, add whatever is in the input box to the "#my-list" list.
- Only add an item if the input box is not blank.
- Clear the input box when the user clicks the button.

Your code must use these features:

- Event delegation (Utilities: http://bit.ly/js1-utilities )
- Separate State from DOM
- Use a View Template

Here are some bonus tasks to push your DOM knowledge!
- Bonus tasks:
  - When a list item is archived, change its background colour to "green"
  - Add a link to each item to delete it completely
  - Instead of deleting it completely, move it to a second list called "Archive"

*/
/*
(function() {

  var container = document.querySelector('#my-list')
  var count = 0;

  // The model
  var state = {toDoItems:[]}

  // The controller
  delegate('#container', 'click', 'button' , function(event) {
    var todoContent = document.querySelector('#new-thing').value;
    if (todoContent) {
      state.toDoItems.push(todoContent);
      document.querySelector('#new-thing').value = '';
    }
    render(state, container);
    count++;
  })

// The view
  function render(data, into) {
    into.innerHTML += `
    <li class="list-thing">${data.toDoItems[count]}</li>
    `
  }

})()
*/



(function() {
  var container = document.querySelector('#container')
  var listContainer = document.querySelector('#my-list')
  var listComponent = document.querySelector('#list-component')

  // The model
  var state = {toDoItems:[]}

  // The controller
  delegate('#container', 'click', 'button' , function(event) {
    var todoContent = document.querySelector('#new-thing').value;
    if (todoContent) {
      state.toDoItems.push(todoContent);
      document.querySelector('#new-thing').value = "";
    }
    render(state, listContainer);
  });


  // The view
  function render(data, into) {
    var renderReady = data.toDoItems.map(function(item, index) {
      var content = `<li class="list-thing">${data.toDoItems[index]}</li>`;
      return content;
    });
    var renderThis = renderReady.join("");
    listContainer.innerHTML = renderThis;
  }

})()
