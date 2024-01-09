module.exports = {
  require: 'ts-node/register',
  extension: ['ts'],
  spec: 'test/**/*.ts'
  // file: ['test/setup.ts'], // If you have any global setup file for tests
  // 'node-option': [
  //   'project tsconfig.test.json'
  // ]
};
