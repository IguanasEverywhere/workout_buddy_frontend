'use client'
import Link from 'next/link'
import { useState } from 'react';

function Home() {

  const [user, setUser] = useState('')

  function handleInput(e) {
    setUser(e.target.value)
}
  return (
    <div>
      <h1>Home</h1>
    {/* <Form action="/workouts">
       <input name="username"/>
       <button type="submit">Login</button>
    </Form> */}
      <input title="username" onChange={handleInput}></input>
      <p>{user}</p>
      <button><Link href="/workouts">Workouts</Link></button>
    </div>
  )
}



export default Home;