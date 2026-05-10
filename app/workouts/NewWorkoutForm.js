'use client'

import { useFormik } from 'formik';
import * as yup from 'yup';

function NewWorkoutForm() {

  const schema = yup.object().shape({
    exercise: yup.string().required(),
    weight: yup.number(),
    reps: yup.number(),
    notes: yup.string(),
  })

  const formik = useFormik({
    initialValues: {
      exercise: "",
      weight: 0,
      reps: 0,
      notes: ""
    },
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const formattedValues = {
        ...values,
        weight: Number(values.weight),
        reps: Number(values.reps)
      }
      fetch(`http://127.0.0.1:5555/data/1`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedValues)
      }).then(r => r.json()).then(confirmation => {
        console.log(confirmation)
      })
    }
  })

  return (
    <>
    <h1>New Workout form</h1>
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="exercise">Exercise Name</label>
        <input
          id="exercise"
          name="exercise"
          onChange={formik.handleChange}
          value={formik.values.exercise}>
        </input>

        <label htmlFor="weight">Weight</label>
        <input
          id="weight"
          name="weight"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.weight}>
        </input>

        <label htmlFor="reps">Reps</label>
        <input
          id="reps"
          name="reps"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.reps}>
        </input>

        <label htmlFor="notes">Notes</label>
        <input
          id="notes"
          name="notes"
          onChange={formik.handleChange}
          value={formik.values.notes}>
        </input>

        <button className="cursor-pointer bg-blue-500" type="submit">Add New Workout</button>
    </form>
    </>

  )
}

export default NewWorkoutForm;