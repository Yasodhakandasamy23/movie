import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';






export function Counter() {
  //let like = 10;
  const [like, setlike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="container">
    
    <IconButton  aria-label="Like"  onClick={() => setlike(like + 1)}  color="primary" > 
    <Badge badgeContent={like} color="primary">
      👍
    </Badge>
    </IconButton>
  <IconButton  aria-label="DisLike"  onClick={() => setDislike(dislike + 1)} color="secondary" > 
  <Badge badgeContent={dislike} color="error">
  👎
  </Badge>
  </IconButton>
  
      </div>
  );
}
export default Counter;
