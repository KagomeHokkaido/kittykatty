import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import './navbar.css'

const Navigation = () => {
  const { pathname } = useLocation();
  console.log("location", pathname);

  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  useEffect(() => {
    console.log("activePath", activePath);
  }, [activePath]);

  const navigate = useNavigate();

  const navigateToAll = () => {
    navigate("/All");
  };

  const navigateToHot = () => {
    navigate("/Hot");
  };
  const navigateToRegular = () => {
    navigate("/Regular");
  };

  const navigateToFavourites = () => {
    navigate("/Favourites");
  };

  const navigateToUploadNew = () => {
    navigate("/UploadNew");
  };




  return (
    <div className="side-nav">
      <div className="logo">
        <a href="/">KittyKatty </a>
      </div>
      <ul className="nav-links">
        <li><button
          className={`${"/All" === activePath ? "nav_active" : "nav_inactive"}`}
          onClick={navigateToAll}
        >
          <InsertEmoticonIcon sx={{fontSize: "60px"}}/>   All
        </button></li>
        <li><button
          className={`${"/Hot" === activePath ? "nav_active" : "nav_inactive"}`}
          onClick={navigateToHot}
        >
          <WhatshotIcon sx={{fontSize: "60px"}}/>   Hot
        </button></li>
        <li><button
          className={`${"/Regular" === activePath ? "nav_active" : "nav_inactive"}`}
          onClick={navigateToRegular}
        >
          <CropSquareIcon sx={{fontSize: "60px"}}/>   Regular
        </button></li>
        <li><button
          className={`${"/Favourites" === activePath ? "nav_active" : "nav_inactive"}`}
          onClick={navigateToFavourites}
        >
         <FavoriteBorderIcon sx={{fontSize: "60px"}}/>   Favourites
        </button></li>
        <li><button
          className={`${"/UploadNew" === activePath ? "nav_active" : "nav_inactive"}`}
          onClick={navigateToUploadNew}
        >
         <FileUploadIcon sx={{fontSize: "60px"}}/> Upload New
        </button></li>


      </ul>
    </div>
  );
};

export default Navigation;
