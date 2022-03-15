import usePageData from "../../hooks/usePageData";
import "./styles.scss";

const App = () => {
  const { data, loading, error } = usePageData({
    page: 1,
    perPage: 5,
  });

  return <div className="home">dashboard</div>;
};

export default App;
