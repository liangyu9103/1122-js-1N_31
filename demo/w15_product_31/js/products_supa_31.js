//import { products_31, all_products_31 } from './p1_data_31.js';

/*從supabase資料庫抓資料*/
import { _supabase } from './clientSupabase_31.js';

//console.log('_supabase', _supabase);

let products2_31 = [];

//*:指到table裡面所有的資料
const getProductsSupabase_31 = async () => {
  try {
    let { data, error } = await _supabase
      .from('products2_31')
      .select('* company2_31(*)'); //除了products2_31裡所有的資料，還要company2_31(*）裡所有的資料
    console.log('products data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const productContainer = document.querySelector('.products-container');
const companyBtns = document.querySelectorAll('.company-btn');

console.log('product_31', products2_31);

const displayProducts = (products) => {
  /*把products陣列用map轉到另外一個productsContent陣列*/
  let productsContent = products
    .map((product) => {
      const { title, price, localImg } = product;
      //const { id } = product;
      return `
    <div class="single-product">
    <img
      src=${localImg}
      class="single-product-img img"
      alt=${title}
    />
    <footer>
      <h3 class="name">${title}</h3>
      <span class="price">$${price}</span>
    </footer>
  </div>
    `;
    }) /*join把陣列為自串起來然後顯示 */
    .join('');
  productContainer.innerHTML = productsContent;
};

companyBtns.forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    const companyName = e.currentTarget.dataset.id;
    console.log('companyName', companyName);
    if (companyName === 'all') {
      products2_31 = await getProductsSupabase_31();
    } else {
      let { data: company, error1 } = await _supabase
        .from('company2_31')
        .select('id')
        .eq('name', companyName);
      console.log('company data', company[0].id);
      let { data, error } = await _supabase
        .from('products2_31')
        .select('*')
        .eq('companyId', company[0].id);
      console.log(`${companyName} products`, data);
      products2_31 = data;
    }
    displayProducts(products2_31);
  });
});

/*async:非同步 */
document.addEventListener('DOMContentLoaded', async () => {
  /*先抓資料getProductsSupabase，await後再product_31 */
  products2_31 = await getProductsSupabase_31();
  /*再繼續往下做 */
  displayProducts(products2_31);
});
