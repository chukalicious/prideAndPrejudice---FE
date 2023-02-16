import axios from "axios";
import { useReducer, useState } from "react";
import questionsReducer from "../../reducers/questionsReducer";
import { HeartLoader } from "../../common/HeartLoader";
import QuestionContainer from "../QuestionComponent";
const Dashboard = () => {
  const [state, dispatch] = useReducer(questionsReducer, {
    loading: false,
    questions: [],
  });
  console.log("state", state);

  const handleClick = () => {
    dispatch({ type: "FETCH_START" });
    axios
      .get("http://localhost:4000/questions")
      .then((res) => {
        const data = res.data;
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      });
  };

  return (
    <div className="bg-base-100 min-h-[65vh]">
      <div className="card mx-auto my-8 w-[75%] bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://live.staticflickr.com/65535/52691848386_6cacd90857_o.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl text-center font-serif capitalize">
            Start a new game!
          </h2>
          <p className="text-center font-sans font-semibold text-lg">
            Test your wit and wisdom with a Pride and Prejudice trivia game. Are
            you ready?
          </p>
          <div className="card-actions justify-center mt-4">
            <button onClick={handleClick} className="btn btn-primary font-sans">
              Start Now
            </button>
          </div>
        </div>
      </div>
      {/* question cards will go here */}
      <div className="bg-base-100">
        {state.loading ? (
          <HeartLoader />
        ) : (
          <QuestionContainer questions={state.questions} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
