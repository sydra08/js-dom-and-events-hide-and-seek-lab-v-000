function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  // find #nested then find the .target from it
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < lis.length; i++){
    let c = lis[i].children
    for(let x = 0; x < c.length; x++){
      c[x].innerHTML = parseInt(c[x].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let current = document.querySelector('#grand-node');
  let next = current.children[0]

  while (next) {
    current = next
    next = current.children[0]
  }
  
  return current
}
