import React from 'react'
import Table from '../UI/Cart/Table'
import Submit from '../UI/Form/Submit/Submit'

const Cart = () => {
  return (
    <div className='px-[15px] xl:px-[100px] py-[25px]  bg-[#f0f0fa] min-h-[calc(100vh-4.5rem)]'> 
      <Table/>
      <Submit value='Check out'/>
    </div>
  )
}

export default Cart
