import {useRouter} from 'next/router'
import dynamic from 'next/dynamic';
import { useState } from 'react';
//import AddToCartModal from '../../../components/AddToCartModal';
const AddToCartModal = dynamic(
  ()=> import('../../../components/AddToCartModal'),
  {loading: ()=> <p>Loading ...</p>, ssr: false}
  )

export default function Product() {
  const [isAddToCartModalVisible, setIsAddToCartModalVisible]= useState(false);

  const router = useRouter();
  function handleAddToCart(){
    setIsAddToCartModalVisible(true);
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>
      <button onClick={handleAddToCart}>Add to Cart</button>
      { isAddToCartModalVisible && <AddToCartModal/>}
    </div>
  )
}