'use client'

import { useState, useEffect } from 'react';

function WorkoutAdvice() {

  const [workoutAdvice, setWorkoutAdvice] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [getAdvice, setGetAdvice] = useState(false);

  // const advicePars = [];


  const handleClick = () => {
    setGetAdvice(prevVal => !prevVal)
  }

  // useEffect(() => {
  //   fetch('http://127.0.0.1:5555/next-workout/1')
  //   .then((r) => r.json())
  //   .then((data) => {
  //     setWorkoutAdvice(data);
  //     setLoading(false);
  //   })
  //   .catch((err) => {
  //     setError(err);
  //     setLoading(false);
  //   });
  // }, [getAdvice]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading workouts.</p>;


  return (
    <>
      <button onClick={handleClick}>Click to get workout advice</button>
      <p>{workoutAdvice.workout_advice}</p>
    </>
  )


}

export default WorkoutAdvice;