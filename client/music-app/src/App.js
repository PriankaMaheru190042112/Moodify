import logo from "./logo.svg";
// import './App.css';
import { useState } from "react";

function App() {
  const [recommendation, setRecommendation] = useState("");
  const [genre, setGenre] = useState("Rock");
  const [mood, setMood] = useState("Happy");
  const [timeOfDay, setTimeofDay] = useState("Morning");
  const [activity, setActivity] = useState("Working Out");
  const [loading, setLoading] = useState("False");

  const fetchRecommendation = () => {
    setLoading(true);
    fetch(
      `http://localhost:3000//api/music?inputs=${encodeURIComponent(
        JSON.stringify({ genre, mood, timeOfDay, activity })
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecommendation(data.aiResponse);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching AI", error);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <div className="flex justify-center items-center p-8 w-full">
        <div className="w-1/3 p-8 border border-gray-400 rounded-md">
          <div className="mb-4">
            <label
              htmlFor="genre"
              className="block text-gray-900 text-lg font-bold mb-2"
            >
              Genre
            </label>
            <select
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 focus:outline-none"
            >
              <option value="Rock">Rock</option>
              <option value="Pop">Pop</option>
              <option value="Jazz">Jazz</option>
              <option value="Classical">Classical</option>
              <option value="Hip Hop">Hip Hop</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="mood"
              className="block text-gray-900 text-lg font-bold mb-2"
            >
              Mood
            </label>
            <select
              id="mood"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 focus:outline-none"
            >
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Energetic">Energetic</option>
              <option value="Calm">Calm</option>
              <option value="Romantic">Romantic</option>
              <option value="Uplifting">Uplifting</option>
              <option value="Motivational">Motivational</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="timeOfDay"
              className="block text-gray-900 text-lg font-bold mb-2"
            >
              Time of the Day
            </label>
            <select
              id="timeOfDay"
              value={timeOfDay}
              onChange={(e) => setTimeofDay(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 focus:outline-none"
            >
              <option value="Morning">Morning</option>
              <option value="Noon">Noon</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="activity"
              className="block text-gray-900 text-lg font-bold mb-2"
            >
              Activity
            </label>
            <select
              id="activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 focus:outline-none"
            >
              <option value="Working Out">Working Out</option>
              <option value="Studying">Studying</option>
              <option value="Driving">Driving</option>
              <option value="Relaxing">Relaxing</option>
              <option value="Cooking">Cooking</option>
              <option value="Partying">Partying</option>
              <option value="Working">Working</option>
              <option value="Reading">Reading</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button onClick={fetchRecommendation} className=" bg-blue-500 hover:bg-blue-900 text-white font-bold w-full py-4 my-4 rounded-lg text-xl">
              Recommend Song
            </button>
          </div>

          <div>
            {loading ? "Loading Recommendation..." : recommendation}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
