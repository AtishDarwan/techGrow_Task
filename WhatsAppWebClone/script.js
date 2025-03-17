function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value.trim();
    
    if (messageText !== "") {
        const chatContent = document.querySelector(".chat-content");
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "sent");
        messageDiv.innerText = messageText;
        chatContent.appendChild(messageDiv);
        messageInput.value = "";
        chatContent.scrollTop = chatContent.scrollHeight;
    }
}

/* JavaScript to Toggle the Menu */
document.getElementById("settingsIcon").addEventListener("click", function() {
    let menu = document.getElementById("settingsMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

// Close the menu if clicked outside
document.addEventListener("click", function(event) {
    let menu = document.getElementById("settingsMenu");
    let icon = document.getElementById("settingsIcon");
    
    if (!menu.contains(event.target) && event.target !== icon) {
        menu.style.display = "none";
    }
});

let currentChat = 'Friends'; // Keep track of the active chat
let chatMessages = {
    'Friends': [
        {type: 'received', text: 'Hey there! How are you?'},
        {type: 'sent', text: 'I am good, what about you?'}
    ],
    'Family': [
        {type: 'received', text: 'You gotta be kidding me!'},
        {type: 'sent', text: 'Haha, I know right!'}
    ],
    'James': [
        {type: 'received', text: 'How are you?'},
        {type: 'sent', text: 'yes..i am alright..'}
    ],
    'Cummins': [
        {type: 'received', text: 'Good Bye'},
        {type: 'sent', text: 'Good Bye sir..'}
    ]

};

// Function to Open a Chat
function openChat(name, avatar) {
    currentChat = name;
    document.getElementById("chatTitle").innerText = name;
    document.getElementById("chatAvatar").src = avatar;

    let chatContent = document.getElementById("chatContent");
    chatContent.innerHTML = ""; // Clear previous messages

    // Load previous chat messages
    if (chatMessages[name]) {
        chatMessages[name].forEach(msg => {
            let messageDiv = document.createElement("div");
            messageDiv.className = `message ${msg.type}`;
            messageDiv.innerText = msg.text;
            chatContent.appendChild(messageDiv);
        });
    } else {
        chatMessages[name] = [];
    }

    chatContent.scrollTop = chatContent.scrollHeight; // Auto-scroll to last message
}


/*Function to Send Messages*/
function sendMessage() {
    let input = document.getElementById("messageInput");
    let messageText = input.value.trim();
    
    if (messageText !== "") {
        let chatContent = document.getElementById("chatContent");
        let messageDiv = document.createElement("div");
        messageDiv.className = "message sent";
        messageDiv.innerText = messageText;
        chatContent.appendChild(messageDiv);
         // Save message to chat history
         if (!chatMessages[currentChat]) {
            chatMessages[currentChat] = [];
        }
        chatMessages[currentChat].push({ type: "sent", text: messageText });

        input.value = ""; // Clear input field
        chatContent.scrollTop = chatContent.scrollHeight; // Auto-scroll
    }
}

/* Toggle the Settings Menu */
document.getElementById("settingsIcon").addEventListener("click", function () {
    let menu = document.getElementById("settingsMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

// Close the menu if clicked outside
document.addEventListener("click", function (event) {
    let menu = document.getElementById("settingsMenu");
    let icon = document.getElementById("settingsIcon");

    if (!menu.contains(event.target) && event.target !== icon) {
        menu.style.display = "none";
    }
});

/* dropdown Menus */
document.addEventListener("DOMContentLoaded", function () {
    const settingsIcon = document.getElementById("settingsIcon");
    const settingsMenu = document.getElementById("settingsMenu");

    settingsIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the event from bubbling up
        settingsMenu.style.display = settingsMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (!settingsIcon.contains(event.target) && !settingsMenu.contains(event.target)) {
            settingsMenu.style.display = "none";
        }
    });
});
