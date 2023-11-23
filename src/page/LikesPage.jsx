import { useState } from "react";

function LikesPage() {
  const [likesCount, setLikesCount] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const clickHandle = () => {
    if(likesCount<5){
        setLikesCount(likesCount +1);

    }else {
        setDisplayMessage(true);
    }
    
  };
  const handleMessageChange =()=>{
    setDisplayMessage(false)
  };
// in the first likesCount = 0 
//setLikes will do the changed that i want 
//after that useState will keep my last changed and will do the html render again
  return (
    <main>
        {displayMessage && (
           <div>
             <p>Vous ne pouvez pas liker plus de 5 fois</p>
            <button on onClick={handleMessageChange}>Fermer le message</button>
           </div>
        )}
      <button onClick={clickHandle}>Like</button>
      <p>Vous avez liké {likesCount} fois</p>
    </main>
  );
}

export default LikesPage;