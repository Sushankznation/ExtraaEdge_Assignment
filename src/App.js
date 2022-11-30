import Cards from "./components/card/Cards";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUserData(response.data);
      if (userData) {
        setLoading(false);
      }
    });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      ) : (
        <div className="wrapper">
          {userData.map((data, index) => {
            return <Cards data={data} key={data.id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
