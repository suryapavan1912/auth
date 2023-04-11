import React from 'react'
import auth from './firebase';

function Dashboard() {

  return (
    <div className='dashboard'>
        <h1>Hello world</h1>
        <button onClick={()=>auth.signOut()}>Sign out</button>
    </div>
  )
}

export default Dashboard;