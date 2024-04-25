//import { products_31, all_products_31 } from './p1_data_31.js';

/*從supabase資料庫抓資料*/
import { _supabase } from './clientSupabase_31.js';

//console.log('_supabase', _supabase);

let product_31 = [];

const getProductsSupabase_31 = async () => {
  try {
    let { data, error } = await _supabase.from('product_31').select('*');
    console.log('product data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const productContainer = document.querySelector('.products-container');

console.log('product_31', product_31);

const DisplayProducts = (products) => {};

/*async:非同步 */
document.addEventListener('DOMContentLoaded', async () => {
  /*先抓資料getProductsSupabase，await後再product_31 */
  product_31 = await getProductsSupabase_31();
  /*再繼續往下做 */
  DisplayProducts(product_31);
});
