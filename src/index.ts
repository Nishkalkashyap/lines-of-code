import * as fs from 'fs-extra';
import { execSync } from 'child_process';

printLoc();
function printLoc() {
    try {
        let result = execSync('git ls-files').toString();
        const files = result.split(/\n/);
        console.log(files, result);
    } catch (err) {
        console.log(err);
    }
}