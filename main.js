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
    }
    render(state, listContainer);
    console.log(`State.toDoItems from delegate - ${state.toDoItems}`);
  });

  // // The view
  // function render(data, into) {
  //   into.innerHTML = data.toDoItems.map(function(item, index) {
  //     var content = `<li class="list-thing">${data.toDoItems}</li>`;
  //     return content;
  //   });
  //   console.log('into.innerHTML from render - ' + into.innerHTML);
  // }

  // The view
  // function render(data, into) {
  //   var renderReady = data.toDoItems.map(function(item) {
  //     var content = `<li class="list-thing">${data.toDoItems}</li>`;
  //     return content;
  //   });
  //
  //   // listComponent.remove();
  //   // container.innerHTML = `
  //   // <div id="listComponent">
  //   //   <ul id="my-list">
  //   //   </ul>
  //   //   <input id="new-thing" placeholder="Task goes here" />
  //   //   <button>Add a thing</button>
  //   // </div>
  //   //   `;
  //   renderReady.forEach(function (item, index) {
  //     listContainer.innerHTML = item;
  //   })
  //   console.log(renderReady);
  // }

})()



// (function() {
//   var container = document.querySelector('#container')
//   var state = {light: 'off', button: 'Turn On'}
//
//   delegate('#container', 'click', 'button', () => {
//     if (state.light === 'on') {
//       state.light = 'off'
//       state.button = 'Turn On' } else {
//       state.light = 'on'
//       state.button = 'Turn Off'
//     }
//     render(state, container)
// });
//
//   function render(data, into) {
//     into.innerHTML = '<div id="light">' + data.light + '</div>' into.innerHTML += '<button>' + data.button + '</button>'
//   }
// })()
