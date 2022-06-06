import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './Kitty.css'



const Kitty = ({ listOfElements, likesHandler, dislikesHandler, favouriteHandler }) => {
  console.log("{listOfElements}", { listOfElements });
  const renderElements = listOfElements.map(
    (photo) => (
      <div className="photo_container">
        <img height="300px" src={photo.image} alt="" />
        <div id="favIcon"><FavoriteIcon color={`${photo.favourite === true ? "primary" : "secondary"}`} sx={{fontSize: "100px" }} className onClick={() => favouriteHandler(photo.id) }/></div>
        
        <div className="button_container">
        
            <button
              class="MuiButton-root"
              onClick={() => likesHandler({ id: photo.id, value: 1 })}
            >
              <ThumbUpIcon sx={{fontSize: '50px'}}/> {photo.likes}
            </button>
            <button
              class="MuiButton-root"
              onClick={() => dislikesHandler({ id: photo.id, value: 1 })}
            >
              <ThumbDownIcon sx={{fontSize: '50px'}}/> {photo.dislikes}
            </button>
            

            
          
    
        </div>
      </div>
    )

  
  );
  return <ul>{renderElements}</ul>;
};

export default Kitty;
