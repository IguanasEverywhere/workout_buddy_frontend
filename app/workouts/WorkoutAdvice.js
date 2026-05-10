'use client'

import { useState, useEffect } from 'react';

function WorkoutAdvice() {

  const [workoutAdvice, setWorkoutAdvice] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [getAdvice, setGetAdvice] = useState(false);


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

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error loading workouts.</p>;


  return (
    <>
      <h1 className="text-center text-2xl">AI Workout Buddy says:</h1>

      <p>{workoutAdvice.workout_advice}</p>
      <div className="text-center">
        <button className="cursor-pointer bg-yellow-200 hover:bg-yellow-500 p-2"
                onClick={handleClick}>
                  Need fresh advice?
        </button>
      </div>
    </>
  )


}

export default WorkoutAdvice;