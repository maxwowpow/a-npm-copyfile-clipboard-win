

// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
/**
 * Class providing utilities for copying file paths to the Windows clipboard.
 */
declare class AmathronUtilClipboardWin {
    private static readonly psScriptName;
    private static readonly __dirname;
    private static readonly psScriptPath;
    /**
     * Copies the provided file paths to the Windows clipboard.
     *
     * @param filePaths - An array of file paths to be copied.
     * @returns A promise that resolves when the operation is complete.
     */
    static copyFileToClipboardAsync(filePaths: string[]): Promise<string>;
}

export { AmathronUtilClipboardWin as default };
