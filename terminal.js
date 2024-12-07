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
    about: `Hi, I'm Sophie! I'm a developer with a passion for web and app development.`,
    projects: `My projects:<br><a class='link' href='#' target='_blank'>Project 1</a><br><a class='link' href='#' target='_blank'>Project 2</a>`,
    pottery: `My pottery instagram: <a class='link' href='mailto:sophie@example.com'>@potterybysoph</a>`,
    github: `My github: <a class='link' href='mailto:sophie@example.com'>github link</a>`,
    contact: `You can reach me at: <a class='link' href='mailto:sophie@example.com'>sophie@example.com</a>`
};

function executeCommand(command) {
    const output = commands[command] || `Command not found: ${command}`;
    outputDiv.innerHTML += `<div>$ ${command}</div><div>${output}</div>`;
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = commandInput.value.trim();
        executeCommand(command);
        commandInput.value = '';
    }
});
