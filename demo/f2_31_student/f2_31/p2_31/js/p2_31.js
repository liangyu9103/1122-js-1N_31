import { _supabase } from './clientSupabase_xx.js';

let products_31 = [];

const items = document.querySelector('.items');

const getWomensSupabase_31 = async () => {
  try {
    let { data, error } = await _supabase.from('store_f2_31').select('*'); //除了products2_31裡所有的資料，還要company2_31(*）裡所有的資料
    //console.log('products data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayWomens = (products) => {
  /*把products陣列用map轉到另外一個productsContent陣列*/
  let womensContent = womens
    .map((womens) => {
      const { id, name, category_id, price, local_img, remote_img } = womens;
      //const { id } = product;
      return `
      <div class="collection-item">
            <img class="image" src=${local_img} />
            <div class="collection-footer">
              <span class="name">${name}</span>
              <span class="price">${price}</span>
            </div>
            <button class="custom-button">Add to Cart</button>
          </div>
      `;
    }) /*join把陣列為自串起來然後顯示 */
    .join('');
  items.innerHTML = womensContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  products_31 = await getWomensSupabase_31();

  displayProducts(products_31);
});
