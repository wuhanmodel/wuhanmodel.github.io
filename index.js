var passNode = document.getElementsByClassName('pass')[0];
var inputNode = document.getElementsByTagName('input')[0];
var buttonNode = document.getElementsByTagName('button')[0];
buttonNode.onclick = function () {
  if (inputNode.value == '666666') {
    passNode.style.display = 'none';
    main.style.visibility = 'visible';
  } else {
    alert ('密码错误');
  }
}
var imgs = text.length; // 88
var times = Math.floor(imgs / 20);
console.log(times)
var main = document.getElementsByClassName('main')[0];
main.style.visibility = 'hidden';
var detail = document.getElementsByClassName('detail')[0];
var back = document.getElementsByClassName('back')[0];
var detail_imgs = document.getElementsByClassName('detail_imgs')[0];
var pictures = document.getElementsByClassName('picture');
var length = text.length;
for (let i = length - 1; i > -1; i--) {
  let aNode = document.createElement('a');
  aNode.className = i + 1;
  let imgNode = document.createElement('img');
  imgNode.src = './jpg/' + (i + 1) + '-1';
  aNode.appendChild(imgNode);
  aNode.onclick = function () {
    let ID = this.className;
    pictures[0].src = './jpg/' + ID + '-2';
    pictures[1].src = './jpg/' + ID + '-1';
    detail.style.display = 'block';
  }
  main.appendChild(aNode);
}
back.onclick = function () {
  detail.style.display = 'none';
}