import { Hearts } from "react-loader-spinner";

export const HeartLoader = () => {
  return (
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
  );
};
