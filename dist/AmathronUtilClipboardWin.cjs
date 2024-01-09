'use strict';

const child_process = require('child_process');
const path = require('path');
const url = require('url');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const path__default = /*#__PURE__*/_interopDefaultCompat(path);

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
      child_process.exec(`powershell -File "${_AmathronUtilClipboardWin.psScriptPath}" -filePaths "${filePathsString}"`, (error, stdout, stderr) => {
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
__publicField(_AmathronUtilClipboardWin, "__dirname", path__default.dirname(url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('AmathronUtilClipboardWin.cjs', document.baseURI).href)))));
__publicField(_AmathronUtilClipboardWin, "psScriptPath", path__default.join(_AmathronUtilClipboardWin.__dirname, _AmathronUtilClipboardWin.psScriptName));
let AmathronUtilClipboardWin = _AmathronUtilClipboardWin;

module.exports = AmathronUtilClipboardWin;
