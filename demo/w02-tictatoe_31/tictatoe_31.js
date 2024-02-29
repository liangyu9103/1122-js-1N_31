/*const,let宣告變數時,要放在最外面,不能在function內*/
/*定const資料不能改*/
const o = 'o';
const x = 'x';
/*定let資料可以更改*/
let turn = 0;
let done = false;

/*querySelectorAll選擇器*/
const container = document.querySelector('#container');

/*querySelectorAll取得所有,'css選擇器'*/
const allLi = document.querySelectorAll('#board li');
const resetBtn = document.querySelector('#reset');

console.log('container', container);
console.log('allLi', allLi);
console.log('restBtn', resetBtn);

/*reset Arrow function: "const x = () => {}" */
const reset = () => {
  /*點reset,class會變空值
  allLi[0].classList = '';
  點reset會變回＋號，改變文字內容
  allLi[0].textContent = '+';
  allLi[4].classList = '';
  allLi[4].textContent = '+'; */

  /*item每一個值[0]~[8]*/
  allLi.forEach((item) => {
    item.classList = '';
    item.textContent = '+';
  });

  //css搬過來要去掉“-"符號,第二個字開頭變大寫
  container.style.backgroundColor = '#666';
  turn = 0;
  done = false;
};

//當'click'後,交給reset function
resetBtn.addEventListener('click', reset);
