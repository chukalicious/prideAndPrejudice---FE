import DashboardContainer from "../components/UserDashboardComponent";

const Home = () => {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        <DashboardContainer />
      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        content
      </div>
    </div>
  );
};

export default Home;
