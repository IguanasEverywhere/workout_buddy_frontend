'use client'

import { useState, useEffect } from 'react';

function WorkoutAdvice() {

  const [workoutAdvice, setWorkoutAdvice] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/next-workout/1')
    .then((r) => r.json())
    .then((data) => {
      setWorkoutAdvice(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading workouts.</p>;

  return (
    <>
      <button>Click to get workout advice</button>
      <p>{workoutAdvice.workout_advice}</p>
    </>
  )


}

export default WorkoutAdvice;