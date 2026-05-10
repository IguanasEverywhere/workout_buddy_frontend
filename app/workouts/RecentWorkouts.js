async function RecentWorkouts() {
  const dataFetch = await fetch('http://127.0.0.1:5555/data/1')
  const userWorkouts = await dataFetch.json()

  let workoutsInfo = userWorkouts.length > 0 ? userWorkouts.map((workout) =>
    <div key={workout.id}>
       {workout.exercise_name}
    </div>
  ) :
  <p>No workouts</p>;


  return (
   <div>
    <h1>Recent Workouts!</h1>
    {workoutsInfo}
   </div>
  )
}

export default RecentWorkouts;