import 'mocha';
import fs from 'fs';
import path from 'path';
import AmathronUtilClipboardWin from '../src/AmathronUtilClipboardWin';
import inquirer from 'inquirer';
import { expect, assert } from 'chai';

import axios from 'axios';

describe('get()', function() {
  it('works', async function() {
    const res = await axios.get('http://httpbin.org/get?answer=42');
    assert.equal(res.data.args.answer, 42);
  });
});

// describe('Copy File to Clipboard Test', function () {
//   it('should copy file content to clipboard and verify manually', async function () {
//     const testFilePath = path.join(__dirname, '..', 'tmp', '1.txt');
//     const testContent = 'Hello, World!';

//     // Ensure tmp directory exists
//     if (!fs.existsSync(path.dirname(testFilePath))) {
//       fs.mkdirSync(path.dirname(testFilePath));
//     }

//     // Write to the test file
//     fs.writeFileSync(testFilePath, testContent);

//     // Call the method to copy the file's content to clipboard
//     await AmathronUtilClipboardWin.copyFileToClipboardAsync([testFilePath]);

//     // Ask user for manual verification
//     console.log("Please manually paste the content from the clipboard into a text editor.");

//     const answers = await inquirer.prompt([{
//       type: 'confirm',
//       name: 'isCorrect',
//       message: 'Does the pasted content match "Hello, World!"?',
//     }]);

//     // Assert based on user input
//     expect(answers.isCorrect).to.be.true;
//   });
// });
