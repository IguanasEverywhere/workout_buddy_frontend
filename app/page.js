'use client'
import Link from 'next/link'


function Home() {


  return (
    <div className="text-center border rounded-lg p-3 shadow-md shadow-gray-500 bg-blue-50">
       <h1 className="text-center text-4xl font-style: italic my-4">💪Your AI Workout Buddy is Here!</h1>
       <input className="border my-4" placeholder="Enter username"></input>
       <p>
       <button className="cursor-pointer bg-yellow-200 hover:bg-yellow-500 p-2 my-4"><Link href='/workouts'>Take Me To My AI Workout Buddy!</Link></button>
       </p>
    </div>
  )
}



export default Home;