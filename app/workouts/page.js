'use client'
import RecentWorkouts from './RecentWorkouts';
import NewWorkoutForm from './NewWorkoutForm';
import WorkoutAdvice from './WorkoutAdvice';

import { useState } from "react";


function WorkoutsLanding() {
  const [newWorkouts, setNewWorkouts] = useState(false);

  const updateWorkouts = () => {
    setNewWorkouts(prevVal => !prevVal);
  }

  return (
    <>
    <div>
      <h1>Hello, Scott!</h1>
    </div>
    <div className="bg-green-500 p-4 rounded-lg grid grid-cols-3 gap-4">
      <div className="bg-red-500">
      <RecentWorkouts status={newWorkouts}/>
      </div>
      <div className="bg-yellow-500">
      <NewWorkoutForm handleUpdateWorkouts={updateWorkouts} />
      </div>
      <div className="bg-blue-500">
      <WorkoutAdvice />
      </div>
   </div>
   </>
  )
}


export default WorkoutsLanding;