//[PLACEHOLDER:require lm.js]
const lm = require('./aoai/lm.js');

// 標準入力を取得するための設定
process.stdin.setEncoding('utf-8');

function showPrompt() {
  console.log('\nPrompt:');
}
showPrompt();

// 標準入力を受け取る
process.stdin.on('data', async function (data) {

  //[REPLACE:LM output]
  // console.log('\n入力された文字:', data.trim());
  //[REPLACE: RAG Integration]
  console.log(`\nAI : ${await lm.sendMessage(data.trim())}`);

  showPrompt();
});
