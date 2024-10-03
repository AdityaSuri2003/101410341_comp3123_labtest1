const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

function removeLogs(){
    if(fs.existsSync(logDir)){
        fs.readdirSync(logDir).forEach(file =>{
            const filePath = path.join(logDir, file);
            fs.unlinkSync(filePath);
            console.log(`Deleted file: ${file}`);
        });

        fs.rmdirSync(logDir);
        console.log('Logs directory removed.');

    } 
    else{
        console.log('No logs directory found');
    }
}
removeLogs();