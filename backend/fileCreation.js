import * as child_process from 'child_process';

export const fileCreation = (lang) => {
    console.log(lang);
    if (lang === "java") {
        child_process.exec("touch Main.java", (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log('File created successfully');
        });
    }else if(lang==='javascript'){
        child_process.exec("touch Main.js", (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log('File created successfully');
        });
    }else if(lang==='cpp'){
        child_process.exec("touch Main.cpp", (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log('File created successfully');
        });
    }else if(lang==='python'){
        child_process.exec("touch Main.py", (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log('File created successfully');
        });
    }
}
