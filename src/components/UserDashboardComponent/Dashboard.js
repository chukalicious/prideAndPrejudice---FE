import axios from "axios";
import { useReducer } from "react";
import questionsReducer from "../../reducers/questionsReducer";
import { Hearts } from "react-loader-spinner";

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

  const handleAnswer = () => {
    console.log("answer", state.questions[0].correct);
  };

  return (
    <div className="bg-base-100 min-h-[65vh]">
      <div className="card mx-auto py-8 w-[75%] bg-base-100 shadow-xl image-full">
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
      {/* queston cards will go here */}
      <div className="bg-base-100">
        {state.loading ? (
          <div className="text-center mx-auto w-[75%] bg-base-100 text-primary-content">
            <Hearts
              height="150"
              width="150"
              color="#D1C1D8"
              ariaLabel="hearts-loading"
              wrapperStyle={{
                display: "flex",
                justifyContent: "center",
              }}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <div>
            {state.questions.map((question) => (
              <div
                key={question.id}
                className="card mx-auto pb-8 w-[75%] bg-base-100 shadow-xl image-full"
              >
                <div className="card-body">
                  <h2 className="text-xl text-justify font-serif">
                    {question.question}
                  </h2>
                  <div className="card-actions justify-center mt-4">
                    <label className="label-text w-full font-sans text-neutral-content">
                      Pray, which answer will you choose?
                    </label>
                    <ul className="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box font-serif italic font-bold text-neutral-content">
                      <li>
                        <label className="label-text">
                          <input
                            type="radio"
                            name="radio-2"
                            className="radio radio-secondary"
                          />{" "}
                          {question.correct}
                        </label>
                      </li>
                      <li>
                        <label className="label-text">
                          <input
                            type="radio"
                            name="radio-2"
                            className="radio radio-secondary"
                          />{" "}
                          {question.correct}
                        </label>
                      </li>
                      <li>
                        <label className="label-text">
                          <input
                            type="radio"
                            name="radio-2"
                            className="radio radio-secondary"
                          />{" "}
                          {question.correct}
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
