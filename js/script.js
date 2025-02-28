//推特相关
var toggleButton = document.querySelector('.togglebutton');
var twitterbox = document.querySelector('#twitterbox');

if (twitterbox) {
  // 显示Twitter
  twitterbox.style.display = 'none';
  
  // 绑定按钮点击事件
  toggleButton.addEventListener('click', function() {
    if (twitterbox.style.display === 'block') {
      // 隐藏 Twitter 
      twitterbox.style.display = 'none';
      toggleButton.innerText = 'Random words';
      
    } else {
      // 读取文件并随机选择一行
      fetch('js/famous.txt')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n');  // 将文件内容按行分割
        const randomLine = lines[Math.floor(Math.random() * lines.length)];  // 随机选择一行
        const contentToDisplay = "\n\n\n" + randomLine;
        twitterbox.innerText = contentToDisplay;// 将内容显示到 twitterbox 中
        // 设置字体样式和大小
        // twitterbox.style.fontFamily = 'Arial, sans-serif'; // 设置字体
        twitterbox.style.fontSize = '40px'; // 设置字体大小
      })
      .catch(error => console.error('Error fetching famous.txt:', error));

      twitterbox.style.display = 'block';
      toggleButton.innerText = 'Hide';
    }
  });
}


//公用

//跳转到指定位置
function smoothScroll(target) {
    var targetPosition = document.querySelector(target).offsetTop-68;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 500; // 设置滚动时间
  
    var start = null;
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      var newPosition = easeInOutQuad(progress, startPosition, distance, duration);
      window.scrollTo(0, newPosition);
      if (progress < duration) window.requestAnimationFrame(step);
    });
  }
  
  // 缓动函数，可选
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }