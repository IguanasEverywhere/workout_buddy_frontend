# AI Workout Buddy Backend

## Description
AI Workout Buddy provides AI-generated workout advice based on a user's previous exercises and their own descriptions of concerns and goals.

Please see demo & discussion video here: [Loom Demo](https://www.loom.com/share/55652b236896401d919fd09c99775047)

## Instructions for Use with Docker
* If you haven't already, follow instructions to spin up the [AI Workout Buddy Backend](https://github.com/IguanasEverywhere/workout_buddy_backend)
* Clone this repo to your system
* In the project directory, run `docker build -t workout_buddy_frontend .`
* After build is complete, run `docker run -p 3000:3000 my-frontend`

With the backend running on on port 5555, you should now be able to view (and interact with) the project at [http://localhost:3000/](http://localhost:3000/).

Alternatively, if you don't wish to use Docker, you can `npm run dev` from the root project directory (after installing all dependencies).

## Ideas for Future Improvement
* Shelves or dropdowns by workout date
    * Data is currently limited to a simple list, but as most workouts comprise of many exercises, it would be ideal to have exercises with more hardier groupings, both in terms of presentation and the data itself
* Clear the input fields after submission of New Exercise form (easy to do)
* Better loading screens
    * Currently provides user with "Loading..." feedback, but a more imaginative spinner or animation would be ideal
* Clean up AI text, visually
    * The AI suggestions are currently in a single wall of text. Investigating ways of splitting this data on new lines/paragraphs, at the very least, would improve the user experience significantly.
* Actual user login/authentication
    * All endpoints are currently hard-coded to one "User"
* Explore models with deeper context, and allow for more robust data on my own back end