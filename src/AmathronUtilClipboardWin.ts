import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Class providing utilities for copying file paths to the Windows clipboard.
 */
class AmathronUtilClipboardWin {
    private static readonly psScriptName = './amathron.set-file-to-clipboard.ps1';
    private static readonly __dirname = path.dirname(fileURLToPath(import.meta.url));
    private static readonly psScriptPath = path.join(AmathronUtilClipboardWin.__dirname, AmathronUtilClipboardWin.psScriptName);

    /**
     * Copies the provided file paths to the Windows clipboard.
     * 
     * @param filePaths - An array of file paths to be copied.
     * @returns A promise that resolves when the operation is complete.
     */
    static async copyFileToClipboardAsync(filePaths: string[]): Promise<string> {
        const filePathsString = filePaths.join(',');
        return new Promise((resolve, reject) => {
            exec(`powershell -File "${AmathronUtilClipboardWin.psScriptPath}" -filePaths "${filePathsString}"`, (error, stdout, stderr) => {
                if (error) {
                    reject(`Error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    reject(`Stderr: ${stderr}`);
                    return;
                }
                resolve('File copied to clipboard');
            });
        });
    }
}

export default AmathronUtilClipboardWin;
