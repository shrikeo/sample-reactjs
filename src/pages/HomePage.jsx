import React, {useState} from 'react';
import Modal from "../components/Modal"
import Header from "../components/Header"
import WishlistItems from "../components/WishListItems"

function HomePage() {
  const [data, setData] = useState({
    name: "",
    description: "",
    criteriaA: 0,
    criteriaB: 0
  })

  function updateData(data) {
    setData(data)
  }

  return (
    <div>
      <div className="flex justify-between my-6 mx-8">
          <div>
              <h1 className="font-bold text-2xl">User Wishlist</h1>
              <p className="text-gray-600">Manage and prioritize wishlist items using weighted decision matrix</p>
          </div>
          <Modal onSave={updateData}/>
      </div>
      <p>Name: {data.name}</p>
      <p>Descriotion: {data.description}</p>
      <p>criteriaA: {data.criteriaA}</p>
      <p>criteriaB: {data.criteriaB}</p>

    </div>
  )
}

export default HomePage