import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({url}) => {
  
  const [list, setList] = useState([]);
  const fetchList = async ()=>{
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  }
  useEffect(()=>{
    fetchList();
  },[]);

  const removeFoodItem = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove/`,{id:foodId});
    if (response.data.success) {
      toast.success(response.data.message);
      await fetchList();
    } else {
      toast.error(response.data.message);
    }
  }

  return (
    <div className='list add flex-col'>
      <h1>All Food List</h1>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b className='description'>Description</b>
          <b>Price</b>
          <b>Category</b>
          <b>Action</b>
        </div>
            {
              list.map((item, index) => {
                return (
                  <div key={index} className="list-table-format">
                    <img src={`${url}/images/`+item.image} alt=''/>
                    <p>{item.name}</p>
                    <p className='description'>{item.description}</p>
                    <p>{item.price} ₹</p>
                    <p>{item.category}</p>
                    <p onClick={()=>removeFoodItem(item._id)} className='cursor'>x</p>
                  </div>
                )
              })
            }
      </div>
    </div>
  )
}

export default List
