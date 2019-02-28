(function() {
  'use strict';
  // 要素の取得
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var result = document.getElementById('result');
  var startTime;      // スタート時間の変数宣言
  var isStarted = false;  // Startが押されたかどうか

  start.addEventListener('click', function() {
    if (isStarted === true) { // 始まっていたら
      return;                 // 処理を行わない
    }
    isStarted = true;           // Startが押された
    startTime = Date.now();    // 現在時刻から経過時間取得
    this.className = 'pushed';  // clickされたらclassNameのpushedをつける
    stop.className = '';      // stopがclickされたら元に戻す
    result.textContent = '0.000';   // カウンターを0に戻す
    result.className = 'stanby';  // カウンターを薄く戻す
  });

  stop.addEventListener('click', function() {
    var elapsedTime;  // 経過時間の変数宣言
    var diff;
    if (isStarted === false) { // 始まっていない時
      return;                 // 処理を行わない
    }
    isStarted = false;           // Stopが押されたので
    elapsedTime = (Date.now() - startTime) / 1000;
    // elapsedTime = 4;
    // result.textContent = elapsedTime;     // resultに表示
    result.textContent = elapsedTime.toFixed(3);   // 小数点3位まで停止時間表示
    this.className = 'pushed';  // clickされたらclassNameのpushedをつける
    start.className = '';      // startがclickされたら元に戻す
    result.className = '';    // resultのクラス名stanbyを外す
    diff = elapsedTime - 5.0;             // 5秒に近い値
    // if (diff > -1.0 && < 1.0) {           // 1秒前後
    if (Math.abs(diff) < 0.5) {   // 絶対値（マイナスも正数に置換え）で比較
      result.className = 'perfect';
    }
  });
})();
