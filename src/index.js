'use strict';

var socket = new WebSocket('ws://localhost:3000/tweets');

document.body.innerHTML = `
  <div>
    <ul>
    </ul>
  </div>
`;

var ul = document.querySelector('ul');

function setupSocket(){
  socket.onmessage = message => {
    console.log(message.data);
    if (message.data) {
      var li = document.createElement('li');
      li.innerHTML = `<pre>${message.data}</pre>`;

      ul.insertBefore(li, ul.childNodes[0]);
    }
  };

  socket.onerror = () => {
    socket = new WebSocket('ws://localhost:3000/tweets');
    setupSocket();
  };

  socket.onclose = () => {
    socket = new WebSocket('ws://localhost:3000/tweets');
    setupSocket();
  };
}

socket.onmessage = message => {
  console.log(message.data);
  if (message.data) {
    var li = document.createElement('li');
    li.innerHTML = `<pre>${message.data}</pre>`;

    ul.insertBefore(li, ul.childNodes[0]);
  }
};
