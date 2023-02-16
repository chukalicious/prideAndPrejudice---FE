import Question from "./Question";
import { useEffect, useState } from "react";

const initialState = {
  loading: false,
  questions: [],
  error: "",
  options: [],
  score: 0,
};

const QuestionContainer = (props) => {
  const [questions, setQuestions] = useState(initialState);
  console.log("questions (after the useEffect", questions);

  useEffect(() => {
    setQuestions(props.questions);
  }, [props.questions]);

  return (
    <>
      {props &&
        props.questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
    </>
  );
};

export default QuestionContainer;
