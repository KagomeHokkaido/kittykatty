import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/navbar/navbar";
import Home from "./pages/Home";
import UploadNew from "./pages/UploadNew";
import { useEffect, useState } from "react";
import kotty from "./kotty";
import Kitty from "./components/kitties/Kitty";




function App() {

  const [listOfCats, setListOfCats] = useState([...kotty]);


  const likesHandler = ({ id, value }) => {
    const copyList = listOfCats.map((cat) =>
      cat.id === id ? { ...cat, likes: cat.likes + value } : cat
    );
    setListOfCats(copyList);
  };

  const dislikesHandler = ({ id, value }) => {
    const copyList = listOfCats.map((cat) =>
      cat.id === id ? { ...cat, dislikes: cat.dislikes + value } : cat
    );
    setListOfCats(copyList);
  };

  const favouriteHandler = (id) => {
    const copyList = listOfCats.map((cat) =>
      cat.id === id ? { ...cat, favourite: !cat.favourite } : cat
    );
    setListOfCats(copyList);
  };

  


  useEffect(() => {
    console.log("listOfCats", listOfCats);
  }, [listOfCats]);

  return (
    <Router>
      <div className="main_container">
        <div className="nav_container">
        <Navigation />

        </div>
        <div className="main">
          
          
          
          
          <Routes>
            <Route path="/" element={<Home />} />


            <Route
              path="Hot"
              element={
                <Kitty
                  listOfElements={listOfCats.filter(
                    (cat) => cat.popularity() === "hot"
                  )}
                  likesHandler={likesHandler}
                  dislikesHandler={dislikesHandler}
                  favouriteHandler={favouriteHandler}
                />
              }
            />
            <Route
              path="All"
              element={
                <Kitty
                  listOfElements={listOfCats.filter(
                    (cat) => cat.popularity() === "hot" || cat.popularity() === "regular"
                  )}
                  likesHandler={likesHandler}
                  dislikesHandler={dislikesHandler}
                  favouriteHandler={favouriteHandler}
                />
              }
            />
            <Route
              path="Regular"
              element={
                <Kitty
                  listOfElements={listOfCats.filter(
                    (cat) => cat.popularity() === "regular"
                  )}
                  likesHandler={likesHandler}
                  dislikesHandler={dislikesHandler}
                  favouriteHandler={favouriteHandler}
                />
              }
            />
            
            <Route
              path="Favourites"
              element={
                <Kitty
                  listOfElements={listOfCats.filter(
                    (cat) => cat.favourite === true
                  )}
                  likesHandler={likesHandler}
                  dislikesHandler={dislikesHandler}
                  favouriteHandler={favouriteHandler}
                />
              }
            />

            <Route path="UploadNew" element={<UploadNew />} />
            
            
            
            
          </Routes>
          </div>
        
      </div>
    </Router>
  );
}

export default App;
