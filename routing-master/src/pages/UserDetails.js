import React, { useEffect, useState } from 'react'
import {  useLocation, useParams } from 'react-router-dom'

const UserDetails = () => {
    const location = useLocation();
    ///
    const {id} = useParams();
    const [user, setUser] = useState(location.state);
    //

    

    useEffect(()=>{
        if(!user.id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => setUser(data));
    }
    },[id, user]);


    return (
    <div>
        <h2>USer Details</h2>
        <pre>
        { user && JSON.stringify(user, null, 2)}
        </pre>
    </div>

  )
}

export default UserDetails