import React, { useState } from "react";
import './App.css';
import Footer from "./Footer";

function App() {

  const [imageLink, setImageLink] = useState("");
  const [emotions, setEmotions] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function fetchData(){
    fetch("https://facial-emotion-recognition.p.rapidapi.com/cloudVision/facialEmotionRecognition?source=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527631120902-378417754324%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D2250%26q%3D80&sourceType=url", 
    {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "facial-emotion-recognition.p.rapidapi.com",
      "x-rapidapi-key": "2afc1e1754msh804a74f12359d08p120586jsndc64f676a563"
    },
    body: JSON.stringify( {
      "source": imageLink,
      "sourceType": "url"
    })
  })
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    setEmotions(data.emotions[0]);
    console.log(emotions);
    setIsLoading(false);
  })
  .catch((err)=>{
    console.error(err);
  });

  }
  
  
  
  return (
    
    <div>
    <h1>Emotion Recognition</h1>
    <form onSubmit={(event) => {
      event.preventDefault();
      fetchData();
      setImageLink("");
      setIsLoading(true);
    }} action="">
      
      <input 
      onChange={(event) => setImageLink(event.target.value)}
      type="url" name="url" className="search-input" id="url" placeholder="https://..."/>  
      <input className="btn" type="submit" value="Send Request"/>
    </form>
    {isLoading ? (
        ""
      ) : (
        <div className="data">
          <p>
            Joy: <span>{emotions.joyLikelihood}</span>
          </p>
          <p>
            Anger: <span>{emotions.angerLikelihood}</span>
          </p>
          <p>
            Suprise: <span>{emotions.surpriseLikelihood}</span>
          </p>
          <p>
            Sorrow: <span>{emotions.sorrowLikelihood}</span>
          </p>
        </div>
      )}
        <div className="footer">
      
      </div>
        <Footer/>
    </div>

  ); 
}



export default App;
