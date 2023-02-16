import { useEffect, useState } from "react";
import Options from "./Options";

const Question = (props) => {
  console.log("Question: props: ", props);
  const { question } = props;
  console.log("Question: question: ", question);

  return (
    <>
      <div
        key={question.id}
        className="card mx-auto mb-8 w-[75%] bg-base-100 shadow-xl image-full"
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
              <>
                {question.options &&
                  question.options.map((option, i) => (
                    <Options option={option} key={i} />
                  ))}{" "}
              </>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Question;
