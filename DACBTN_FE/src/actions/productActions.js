import Axios from 'axios';
import { PRODUCT_CATEGORY_LIST_REQUEST, PRODUCT_CATEGORY_LIST_SUCCESS, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../contants/productContant';

export const listProducts = (
{
  // seller = '',
  name = '',
  category = '',
  order = '',
  min = 0,
  max = 0,
  rating = 0,
}
) => async (dispatch) => {
  // dispatch({
  //   type: PRODUCT_LIST_REQUEST,
  // });
  try {
    const { data } = await Axios.get(
      `/api/products?name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
     
    );
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
     }
};
///// categories
export const listProductCategories = () => async (dispatch) => {
  // dispatch({
  //   type: PRODUCT_CATEGORY_LIST_REQUEST,
  // });
  try {
    const { data } = await Axios.get(`/api/products/categories`);
    dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
   }
};
/// detailproduct
export  const detailProduct=(productId)=> async (dispatch)=>{
    // dispatch({
    //     type:PRODUCT_DETAIL_REQUEST,
    //     payload:productId
    // })
    try {
        const {data}=await Axios.get(`/api/products/${productId}`);
        dispatch({
            type:PRODUCT_DETAIL_SUCCESS,
            payload:data
        })
    } catch (error) {
        
    }
}