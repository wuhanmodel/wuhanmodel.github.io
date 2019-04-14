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

var main = document.getElementsByClassName('main')[0];
main.style.visibility = 'hidden';
var detail = document.getElementsByClassName('detail')[0];
var back = document.getElementsByClassName('back')[0];
var detail_imgs = document.getElementsByClassName('detail_imgs')[0];
var length = text.length;
for (let i = length - 1; i > -1; i--) {
  let aNode = document.createElement('a');
  aNode.className = i + 1;
  let imgNode = document.createElement('img');
  imgNode.src = './jpg/' + (i + 1) + '-1';
  let txtNode = document.createElement('p');
  txtNode.innerHTML = text.detail[i];
  aNode.appendChild(imgNode);
  aNode.appendChild(txtNode);
  aNode.onclick = function () {
    childNodes = detail_imgs.childNodes;
    for (let i = childNodes.length - 1; i > -1; i--) {
      detail_imgs.removeChild(childNodes[i])
    }
    detail.style.display = 'block';
    let ID = this.className;
    for (let i = 1; i < 3; i++) {
      let imgNode = document.createElement('img');
      imgNode.src = './jpg/' + ID + '-' + i;
      detail_imgs.appendChild(imgNode);
    }
  }
  main.appendChild(aNode);
}
back.onclick = function () {
  detail.style.display = 'none';
}