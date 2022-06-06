import kotty from "../kotty";
import popcounter from "../popcounter";




const UploadNew = () => {

const upload = () => {
    console.log(kotty)
    const nowyKot = {id: 'kot11', image: '', likes: 0, dislikes: 0, popularity: popcounter, favourite:false};
    kotty.push(nowyKot)
    console.log(kotty)
}

return (
<div className="upload-new">
    <h1>Upload New</h1>
    <br></br>
    <br></br>
    <p>Click on the "Choose File" button to upload a file:</p>
    <br></br>
    <br></br>
    <input type="file" id="myFile" name="filename" />
    <button
        onClick={upload}
    >
        Upload!
    </button>
    </div>
);
};

export default UploadNew;
