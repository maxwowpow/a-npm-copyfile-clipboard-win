const fs = require('fs');
const path = require('path');
const AmathronUtilClipboardWin = require('../dist/AmathronUtilClipboardWin.cjs');

async function testCopyToClipboard() {
    const testFilePath = path.join(__dirname, 'test.txt');
    const testContent = 'Hello, World!';

    // Write test content to the file
    fs.writeFileSync(testFilePath, testContent);

    try {
        // Call the method to copy the file's content to clipboard
        await AmathronUtilClipboardWin.copyFileToClipboardAsync([testFilePath]);
        console.log('Test file content copied to clipboard. Please manually verify the clipboard content.');
    } catch (error) {
        console.error('Error copying file to clipboard:', error);
    }

    // Clean up: Delete the test file
    //fs.unlinkSync(testFilePath);
}

testCopyToClipboard();
