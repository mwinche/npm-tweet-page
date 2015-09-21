'use strict';

var socket = new WebSocket('ws://localhost:3000/tweets');
require('./styles.css');

document.body.innerHTML = `
  <h1 class="heading">#whatis<img src="./npm-logo.svg" class="logo" width="100" />?</h1>
  <div class="middle">
    <ul class="tweets">
    </ul>
  </div>
`;

var ul = document.querySelector('ul');

function setupSocket(){
  socket.onmessage = message => {
    if (message.data) {
      var li = document.createElement('li');
      var tweet = JSON.parse(message.data);
      var words = tweet.text.split(' ');

      li.className = 'tweet';

      li.innerHTML = `
        <span class="word"><img class="n" src="./n.png" />${words[0].substr(1)}</span>
        <span class="word"><img class="p" src="./p.png" />${words[1].substr(1)}</span>
        <span class="word"><img class="m" src="./m.png" />${words[2].substr(1)}</span>
        <span class="user">@${tweet.user}</span>
        <img class="avatar" src="${tweet.avatar.replace('_normal', '_bigger')}" />
      `;

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

setupSocket();
