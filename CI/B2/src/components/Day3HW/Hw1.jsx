import React from 'react'

const Hw1 = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => { sessionStorage.setItem("lmao", JSON.stringify(data)) })
    const Bruh = JSON.parse(sessionStorage.getItem("lmao"));
    return (
        <div className='hw1'>
            {
                Bruh.map((item, index) => {
                    return (
                        <div className='user-profile' key={index}>
                            <p>Name: <span>{item.name}</span></p>
                            <p>User name: <span>{item.username}</span></p>
                            <p>Email: <span>{item.email}</span></p>
                            <p>Stress: <span>{item.address.street}</span></p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Hw1