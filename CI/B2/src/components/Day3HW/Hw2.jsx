import React from 'react'

const Hw2 = () => {
    fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => { sessionStorage.setItem("lul", JSON.stringify(data)) })
    const Boiz = JSON.parse(sessionStorage.getItem("lul"));
    return (
        <div className='hw2'>
            {
                Boiz.map((item, index) => {
                    return (
                        <div className='user-profile hw2-content' key={index}>
                            <p>Name: <span>{item.title}</span></p>
                            <p>Category: <span>{item.category}</span></p>
                            <p>Description: <span>{item.description}</span></p>
                            <p>Price: <span>{item.price}$</span></p>
                            <img src={item.image} alt="nope" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Hw2