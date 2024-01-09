export default {
    entries: [
      './src/AmathronUtilClipboardWin.ts'
    ],
    // hooks: {
    //   'done': 'node ./copyAssets.mjs'
    // },
    outDir: './dist',
    declaration: true,
    rollup: {
      emitCJS: true,
      cjsBridge: true,
    },
  };