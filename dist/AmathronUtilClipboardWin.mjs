import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';



// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const _AmathronUtilClipboardWin = class _AmathronUtilClipboardWin {
  /**
   * Copies the provided file paths to the Windows clipboard.
   * 
   * @param filePaths - An array of file paths to be copied.
   * @returns A promise that resolves when the operation is complete.
   */
  static async copyFileToClipboardAsync(filePaths) {
    const filePathsString = filePaths.join(",");
    return new Promise((resolve, reject) => {
      exec(`powershell -File "${_AmathronUtilClipboardWin.psScriptPath}" -filePaths "${filePathsString}"`, (error, stdout, stderr) => {
        if (error) {
          reject(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          reject(`Stderr: ${stderr}`);
          return;
        }
        resolve("File copied to clipboard");
      });
    });
  }
};
__publicField(_AmathronUtilClipboardWin, "psScriptName", "./amathron.set-file-to-clipboard.ps1");
__publicField(_AmathronUtilClipboardWin, "__dirname", path.dirname(fileURLToPath(import.meta.url)));
__publicField(_AmathronUtilClipboardWin, "psScriptPath", path.join(_AmathronUtilClipboardWin.__dirname, _AmathronUtilClipboardWin.psScriptName));
let AmathronUtilClipboardWin = _AmathronUtilClipboardWin;

export { AmathronUtilClipboardWin as default };
