
const outputDiv = document.getElementById('output');
const commandInput = document.getElementById('commandInput');

const commands = {
    help: `Available commands:<br>
           <span class='link' onclick="executeCommand('ls')">ls</span> - List categories<br>
           <span class='link' onclick="executeCommand('about')">about</span> - About Me<br>
           <span class='link' onclick="executeCommand('projects')">projects</span> - My Projects<br>
           <span class='link' onclick="executeCommand('pottery')">pottery</span> - My Pottery<br>
           <span class='link' onclick="executeCommand('github')">github</span> - My Github<br>
           <span class='link' onclick="executeCommand('contact')">contact</span> - Contact Me`,
    ls: `Categories:<br>- about<br>- projects<br>- pottery<br>- github<br>- contact`,
    about: `Hi, I'm Sophie! I'm a developer with a passion for coding, art, and design. Navigate through the terminal to check out some of my work!`,
    pottery: `My pottery Instagram: <a class='link' href='https://instagram.com/potterybysoph' target='_blank'>@potterybysoph</a>`,
    github: `My Github: <a class='link' href='https://github.com/socr6902' target='_blank'>https://github.com/socr6902</a>`,
    contact: `You can reach me at: <a class='link' href='mailto:socr6902@colorado.edu'>socr6902@colorado.edu</a>`,
};
//is this even working
function executeCommand(command) {
    if (command === 'projects') {
        window.location.href = 'https://socr6902.github.io/web/terminal/projects.html';
        return;
    }

    const output = commands[command] || `Command not found: ${command}`;
    outputDiv.innerHTML += `<div>$ ${command}</div><div>${output}</div>`;
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = commandInput.value.trim();
        if (command) {
            executeCommand(command);
            commandInput.value = '';
        }
    }
});
