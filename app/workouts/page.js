

async function Workouts() {
  const dataFetch = await fetch('http://127.0.0.1:5555/next-workout/1')
  const userWorkouts = await dataFetch.json()

  console.log(userWorkouts)
  return (
    <h3>Workouts</h3>


  )
}

export default Workouts;