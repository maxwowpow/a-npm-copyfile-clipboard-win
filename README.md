# Amathron Copy File To Clipboard (Windows)

# AmathronUtilClipboard

`AmathronUtilClipboardWin` is a Node.js utility module for copying file paths to the Windows clipboard asynchronously. It is especially useful in desktop and command-line applications where integrating clipboard operations is required. It uses PowerShell to interact with the clipboard as this is the most straightforward way without involving extra apps.

## Installation

To install `AmathronUtilClipboardWin`, use npm:

```bash
npm install @amathron/copy-file-to-clipboard-win
```

Or if you are using Yarn:

```bash
yarn add @amathron/copy-file-to-clipboard-win
```

## Usage

Here's a quick example to get you started:

```typescript
import AmathronUtilClipboardWin from '@amathron/copy-file-to-clipboard-win';

async function copyFiles() {
    const filePaths = ['path/to/your/file1.txt', 'path/to/your/file2.txt'];
    
    try {
        await AmathronUtilClipboardWin.copyFileToClipboardAsync(filePaths);
        console.log('Files have been copied to the clipboard.');
    } catch (error) {
        console.error('Error copying files to the clipboard:', error);
    }
}

copyFiles();
```

## API

### `copyFileToClipboardAsync(filePaths: string[]): Promise<string>`

- **Description**: Copies the contents of the specified files to the Windows clipboard.
- **Parameters**:
  - `filePaths`: An array of strings, where each string is a path to a file.
- **Returns**: A promise that resolves to a string indicating success.

## Requirements

- Node.js (version 12 or higher recommended)
- Windows operating system
- PowerShell execution must be enabled. This should be the case for most developers working on windows.

## Contributing

Contributions to `AmathronUtilClipboardWin` are welcome! Please ensure that your contributions adhere to the following guidelines:

- Write clean, readable code and maintain the existing coding style.
- Add comments to your code where necessary.
- Update the README.md with details of changes to the interface or significant changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or issues, please open an issue on the [GitHub repository](https://github.com/maxwowpow/a-npm-copyfile-clipboard-win).


## Release Notes

### 1.0.0

Initial release.

