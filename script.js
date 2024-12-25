// Get references to the IP text, button, and notification elements
const copyIpButton = document.getElementById('copy-ip-button');
        const serverIp = document.getElementById('server-ip');
        const notification = document.getElementById('notification');

// Add a click event listener to the button
        copy-ip-button.addEventListener('click', () => {
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = serverIp.innerText; // Set the value to the server IP
        document.body.appendChild(textarea); // Append it to the body
        textarea.select(); // Select the text
        document.execCommand('copy'); // Execute the copy command
        document.body.removeChild(textarea); // Remove the textarea

        // Show notification
        notification.classList.remove('hidden');
        notification.style.display = 'block'; // Show the notification

        // Hide notification after 1.5 seconds
        setTimeout(() => {
        notification.style.display = 'none'; // Hide it again
        notification.classList.add('hidden');
        }, 1400); // 1500 milliseconds
        });
