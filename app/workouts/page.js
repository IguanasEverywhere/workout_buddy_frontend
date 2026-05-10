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
      {/* <h1 className="text-center text-4xl font-style: italic">💪Your AI Workout Buddy is here, Scott!</h1> */}
    </div>
    <div className="p-4 grid grid-cols-3 gap-4">
      <div className="border rounded-lg p-3 shadow-md shadow-gray-500 bg-blue-50">
      <RecentWorkouts status={newWorkouts}/>
      </div>
      <div className="border rounded-lg p-3 shadow-md shadow-gray-500 bg-blue-50">
      <NewWorkoutForm handleUpdateWorkouts={updateWorkouts} />
      </div>
      <div className="border rounded-lg p-3 shadow-md shadow-gray-500 bg-yellow-50">
      <WorkoutAdvice />
      </div>
   </div>
   </>
  )
}


export default WorkoutsLanding;