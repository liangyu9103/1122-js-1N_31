import { tours_31 } from './data_31.js';

console.log('tours_31', tours_31);

const section = document.querySelector('.section-center');

//toursInfo:陣列
//map處理陣列,把陣列裡資料一個一個讀進去
//(tour):每一個變數,自己設的
// ``:夾字串,網頁資料
const displayTours_31 = () => {
  const toursInfo = tours_31
    .map((tour) => {
      return `
        <article class="single-tour">
        <img src="./img/paris.jpg" alt="Best of Paris in 7 Days Tour" />
        <footer>
          <div class="tour-info">
            <h4>Best of Paris in 7 Days Tour</h4>
            <h4 class="tour-price">$1,995</h4>
          </div>
          <p>
            Paris is synonymous with the finest things that culture can
            offer — in art, fashion, food, literature, and ideas. On this
            tour, your Paris-savvy Rick Steves guide will immerse you in the
            very best of ...<button>read more</button>
          </p>
          <button class="delete-btn">not interested</button>
        </footer>
      </article>
        `;
    })
    .join('');
  //inner一個網頁進來section
  section.innerHTML = toursInfo;
};

//擺進html .section-center
window.addEventListener('DOMContentLoaded', () => {
  displayTours_31();
});
