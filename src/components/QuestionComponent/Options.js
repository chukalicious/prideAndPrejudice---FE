const Options = (props) => {
  console.log("Options: props: ", props);
  const { option } = props;
  return (
    <>
      <label className="label-text">
        <input
          type="radio"
          className="radio radio-secondary"
          value={option}
          //   checked={question.options === option}
          //   name={question.id}
          onChange={() => {}}
        />{" "}
        {option}
      </label>
    </>
  );
};

export default Options;
