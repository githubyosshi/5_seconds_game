(function() {
  'use strict';
  // 要素の取得
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var result = document.getElementById('result');
  var startTime;      // スタート時間の変数宣言

  start.addEventListener('click', function() {
    startTime = Date.now();    // 現在時刻から経過時間取得
  });

  stop.addEventListener('click', function() {
    var elapsedTime;  // 経過時間の変数宣言
    elapsedTime = (Date.now() - startTime) / 1000;
    // elapsedTime = 4;
    // result.textContent = elapsedTime;     // resultに表示
    result.textContent = elapsedTime.toFixed(3);   // 小数点3位まで停止時間表示
  });
})();
