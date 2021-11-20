import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="container-fluid h1 p-5">
      Home Page {JSON.stringify(user)}
    </div>
  );
};

export default Home;
