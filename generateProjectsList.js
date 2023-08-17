// Import the 'fs' and 'path' modules to work with the file system and file paths
const fs = require('fs');
const path = require('path');

// Define the path to the workspace difrectory
const workspacePath = path.join(__dirname, './');

// List of directories and files to ignore
const ignoredDirectories = [`.git`, `node_modules`, `.vscode`, `.idea`, `dist`, `build`, `coverage`];
const ingnoredFiles = [];

// Read the workspace directory and filter out all specified directories and files
const projects = fs.readdirSync(workspacePath).filter(item => fs.statSync(path.join(workspacePath, item)).isDirectory()).filter(project => !ignoredDirectories.includes(project)).filter(project => !ingnoredFiles.includes(project));

// Create a numbered list of projects
const numberedProjectsList = projects.map((project, index) => `${index + 1}. ${project}`).join('\n');


// Path to the README.md file and read its content
const readmePath = path.join(__dirname, './README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// Define the start and end markers for the projects list within the README.md file
const markerStart = '<!-- START: projects list -->';
const markerEnd = '<!-- END: projects list -->';

// Replace the projects list within the README.md file with the updated list
const updateReadmeContent = readmeContent.replace(new RegExp(`${markerStart}[\\s\\S]*${markerEnd}`), `${markerStart}\n${numberedProjectsList}\n${markerEnd}`);

// Write the updated README.md file
fs.writeFileSync(readmePath, updateReadmeContent, 'utf8');