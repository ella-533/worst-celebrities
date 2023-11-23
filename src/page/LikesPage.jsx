import { useState } from "react";

function LikesPage() {
  const [likesCount, setLikesCount] = useState(0);

  const clickHandle = () => {
    setLikesCount(likesCount + 1);
  };
// in the first likesCount = 0 
//setLikes will do the changed that i want 
//after that useState will keep my last changed and will do the loop again 
  return (
    <main>
      <button onClick={clickHandle}>Like</button>
      <p>Vous avez liké {likesCount} fois</p>
    </main>
  );
}

export default LikesPage;