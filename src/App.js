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

  const changeInfo = (index, name, email, phone, website) => {
    const newData = [...userData];
    newData[index].name = name;
    newData[index].email = email;
    newData[index].phone = phone;
    newData[index].website = website;
    setUserData(newData);
  };

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
            return (
              <Cards
                data={data}
                changeInfo={changeInfo}
                index={index}
                key={data.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;