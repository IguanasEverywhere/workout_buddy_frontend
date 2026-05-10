// 'use client'

// import { useState } from 'react';

async function WorkoutAdvice() {

  // const [workoutAdvice, setWorkoutAdvice] = useState('');


  const dataFetch = await fetch('http://127.0.0.1:5555/next-workout/1')
  const aiResponse = await dataFetch.json()

  return (
    <h3>{aiResponse.workout_advice}</h3>
  )


}

export default WorkoutAdvice;