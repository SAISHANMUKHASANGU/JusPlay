    // import React from 'react'
    
    function User({user,onEdit,onDelete}) {
      return (
        <>
            <div>
                <div>
                    <strong>{user.email}</strong> - favorite_game:{user.favorite_game}
                </div>
                <button onClick={()=>onEdit(user)}>Edit</button>
                <button onClick={()=>onDelete(user.id)}>Delete</button>
            </div>
        </>
      )
    }
    
    export default User