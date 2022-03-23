import React from 'react'
import loading from './loading.gif'
const Loader = () => {
  return (
    <div className='text-center my-5'>
      <img src={loading} alt="Loading" />
    </div>
  )
}
export default Loader;