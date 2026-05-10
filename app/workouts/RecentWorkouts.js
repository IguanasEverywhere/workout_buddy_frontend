"use client";

import { useState, useEffect } from "react";

function RecentWorkouts({status}) {
  const [userWorkouts, setUserWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/data/1")
      .then((res) => res.json())
      .then((data) => {
        setUserWorkouts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [status]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading workouts.</p>;


  return (
    <div>
      <h1 className="text-center text-2xl">Your Most Recent Workout Exercises:</h1>
      <ul>
      {userWorkouts.length > 0
        ? userWorkouts.map((workout) => (
            <li key={workout.id}
            className="text-xl border-2 border-style: solid;">
              {workout.exercise_name} | {workout.reps} reps | {workout.weight} lbs
              <p className="text-sm">{workout.notes}</p>
            </li>
          ))
        : <p>No workouts</p>
      }
      </ul>
    </div>
  );
}

export default RecentWorkouts;