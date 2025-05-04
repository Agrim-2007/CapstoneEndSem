import React from 'react'

function Navbar() {
  return (
    <nav className='nav'>
        <h1 style={{fontSize:'2rem'}}>SiteName</h1>

        <ul >
            {['Home','About'].map((val,idx)=><li key={idx}>{val}</li>)}
        </ul>

    </nav>
  )
}

export default Navbar