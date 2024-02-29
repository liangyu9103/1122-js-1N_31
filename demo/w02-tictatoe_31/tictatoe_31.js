/*const,let�ŧi�ܼƮ�,�n��b�̥~��,����bfunction��*/
/*�wconst��Ƥ����*/
const o = 'o';
const x = 'x';
/*�wlet��ƥi�H���*/
let turn = 0;
let done = false;

/*querySelectorAll��ܾ�*/
const container = document.querySelector('#container');

/*querySelectorAll���o�Ҧ�,'css��ܾ�'*/
const allLi = document.querySelectorAll('#board li');
const resetBtn = document.querySelector('#reset');

console.log('container', container);
console.log('allLi', allLi);
console.log('restBtn', resetBtn);

/*reset Arrow function: "const x = () => {}" */
const reset = () => {
  /*�Ireset,class�|�ܪŭ�
  allLi[0].classList = '';
  �Ireset�|�ܦ^�ϸ��A���ܤ�r���e
  allLi[0].textContent = '+';
  allLi[4].classList = '';
  allLi[4].textContent = '+'; */

  /*item�C�@�ӭ�[0]~[8]*/
  allLi.forEach((item) => {
    item.classList = '';
    item.textContent = '+';
  });

  //css�h�L�ӭn�h����-"�Ÿ�,�ĤG�Ӧr�}�Y�ܤj�g
  container.style.backgroundColor = '#666';
  turn = 0;
  done = false;
};

//��'click'��,�浹reset function
resetBtn.addEventListener('click', reset);
