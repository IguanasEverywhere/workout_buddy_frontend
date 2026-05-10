
import RecentWorkouts from './RecentWorkouts';
import NewWorkoutForm from './NewWorkoutForm';
import WorkoutAdvice from './WorkoutAdvice';


function WorkoutsLanding() {

  // const searchParams = useSearchParams();
  // const username = searchParams.get('username');

  return (
    <>
    <div>
      <h1>Hello, ddd!</h1>
    </div>
    <div className="bg-green-500 p-4 rounded-lg grid grid-cols-3 gap-4">
      <div className="bg-red-500">
      <RecentWorkouts />
      </div>
      <div className="bg-yellow-500">
      <NewWorkoutForm />
      </div>
      <div className="bg-blue-500">
      <WorkoutAdvice />
      </div>
   </div>
   </>
  )
}

// async function Workouts() {
//   const dataFetch = await fetch('http://127.0.0.1:5555/next-workout/1')
//   const userWorkouts = await dataFetch.json()

//   console.log(userWorkouts)
//   return (
//     <h3>Workouts</h3>


//   )
// }

export default WorkoutsLanding;