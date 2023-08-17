const fs = require('fs');
const path = require('path');

const workspacePath = path.join(__dirname, './');
const ignoredDirectories = [`.git`, `node_modules`, `.vscode`, `.idea`, `dist`, `build`, `coverage`];
const ingnoredFiles = [];
const projects = fs.readdirSync(workspacePath).filter(item => fs.statSync(path.join(workspacePath, item)).isDirectory()).filter(project => !ignoredDirectories.includes(project)).filter(project => !ingnoredFiles.includes(project));

const numberedProjectsList = projects.map((project, index) => `${index + 1}. ${project}`).join('\n');

fs.writeFileSync(path.join(__dirname, 'projects_list.txt'), numberedProjectsList);