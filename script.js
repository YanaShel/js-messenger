var newItemForm = document.querySelector('.chat-form');
var newItemTitle = newItemForm.querySelector('.chat-form-input');
var chat = document.querySelector('.chat-content');
var template = document.querySelector('#message-template').content;
var newItemTemplate = template.querySelector('.chat-message');

newItemForm.addEventListener('submit', function(evt) {

    evt.preventDefault();

    var messageText = newItemTitle.value;
    var message = newItemTemplate.cloneNode(true);
    var messageDescription = message.querySelector('.chat-message-text');
    messageDescription.textContent = messageText;

    var removeButton = message.querySelector('.chat-message-button');
    removeButton.addEventListener('click', function() {
        message.remove();
    });

    chat.appendChild(message);
    newItemTitle.value = '';

});