const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname,'Logs');

function createLogs(){
    if(!fs.existsSync(logDir)){
        fs.mkdirSync(logDir);
        console.log('Logs directory created.');
    }
    process.chdir(logDir);
    // 10 logs created

    for(let i = 1; i <= 10; i++){
        const fileName= `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file ${i}`);
        console.log(`created file : ${fileName}`);
    }
}
createLogs();