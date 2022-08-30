import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';
import { Counter } from "./Counter";
import { Routes, Route, Link, useNavigate, useParams, Navigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { dark } from '@mui/material/styles/createPalette';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

function App() {
  const[movie,setMovie]=useState([]);  
  const navigate = useNavigate();
  const [mode,setMode]=useState('dark');
  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
   return (
      <div>
        <ThemeProvider theme={Theme}>
      <CssBaseline />
    
        <AppBar position="">
        <Toolbar>
         
          <Button color="inherit" onClick={()=>navigate("/MovieItem")}>Home</Button>
          <Button color="inherit" onClick={()=>navigate("/MovieItem")}>Movie</Button>
          <Button color="inherit" onClick={()=>navigate("MovieItem/AddMovie")}>AddMovie </Button>
          <Button startIcon = {mode === "dark"?< Brightness7Icon />:<Brightness4Icon />} color="inherit" onClick={()=>setMode(mode === "dark" ? "light" : "dark")}>
          {mode === "dark" ? "light" : "dark"}mode</Button>                  
        </Toolbar>        
      </AppBar>      
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieItem/AddMovie" element={<AddMovie movie={movie} setMovie={setMovie} />} />
        <Route path="/MovieItem" element={<MovieItem movie={movie} setMovie={setMovie}  />} />
        <Route path="/ListItem" element={<Navigate replace to ="/MovieItem" />} />
        <Route path="/MovieItem/:id" element={<MovieDetails movie={movie} setMovie={setMovie} />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </ThemeProvider>
      
         </div>
        
   
  );
 
}



function AddMovie({movie,setMovie})
{// const movie = movielist;  
  const [name,setName]=useState("");
  const [image,setImage]=useState("");
  const [rate,setRate]=useState("");
  const [review,setReview]=useState("");  
  const [trailer,setTrailer]=useState("");
  const AddMovie=()=>{ const newMovie={name,image,rate,review,trailer
  };
  console.log(newMovie);
  setMovie([...movie,newMovie]);
  }
return(<div className='addmovie' >
<TextField onChange={(event)=>setName(event.target.value)} type="text" id="outlined-basic" label="Name" variant="outlined" />

<TextField onChange={(event)=>setImage(event.target.value)} type="text"id="outlined-basic" label="Image" variant="outlined"/>
<TextField onChange={(event)=>setRate(event.target.value)} type="text" id="outlined-basic" label="Rate" variant="outlined"/>
<TextField onChange={(event)=>setReview(event.target.value)} type="text" id="outlined-basic" label="Review" variant="outlined"/>
<TextField onChange={(event)=>setTrailer(event.target.value)} type="text"id="outlined-basic" label="Trailer" variant="outlined" />
<Button variant="outlined"onClick= {AddMovie}>Add Movie</Button>



</div>)

}



function NotFound({movielist}){
  const {id} = useParams();
  const movie = movielist[id];  
return(
  <div>
    <img src='https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif' alt="not found" className='not-found' >{movie}</img>
  </div>
)
}
function MovieDetails({movie}){
  const {id} = useParams();
  const movielist = movie[id];
 
  const backnavigate = useNavigate(-1);
  const style={
    color: movie.rate > 8 ? "green" :"Red",
  };
  return( 
     
      <div className='movie_detail-container'>
            <div>
              <iframe width="1097" height="617" src={movielist.trailer}
               title="RRR Trailer (Telugu) - NTR, Ram Charan, Ajay Devgn, Alia Bhatt | SS Rajamouli | 25th March 2022"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
            <div className="movie_spe">
      <h1> {movielist.name}</h1>
      <p  style={style} className="movie_rate">⭐{movielist.rate}</p>
      </div> 
      </div>
      <p className='movie_review'>{movielist.review}</p> 
      
      <button onClick={()=>backnavigate(-1)}>Back</button>
      </div>
    )
  }

function MovieItem({movie,setMovie}){
  //const movie = movielist;
  useEffect(()=>{fetch("https://630500a794b8c58fd729fe6a.mockapi.io/Movies")
.then((data)=>data.json())
.then((Movies)=>setMovie(Movies)); },[]);
  

return( 
  
 
<div className="movie_list" >    
{
  movie.map((user,index)=>(
    <Movietem key={index} name={user.name} image={user.image} rate={user.rate} review={user.review}  id={index}/>
      )
  )
  }</div>
 
)
}

function Home(){
  return(
  <h1>Welcom to my web movie web page</h1>
  )  
  } 
function Movietem({name,image,rate,review,id}){
const style={
  color: rate > 8 ? "green" :"Red",
};
const [show, setShow ] = useState(true);

/*const reviewstyles = {
  display : show ? "block" :"none",
};*/
const navigate = useNavigate();
const backnavigate = useNavigate(-1);
  return(
    
<Card className='movie_container'>
<img  className="image"src ={image} alt="RRR"></img> 
<CardContent>
<div className="movie_spe">
        
<Typography gutterBottom variant="h5" component="div">
{name}</Typography>
        <Typography style={style} variant="body2" color="text.secondary">
        ⭐{rate}
        </Typography>
</div>

<InfoRoundedIcon color = "primary" onClick={()=>navigate("/MovieItem/"+id)}>info</InfoRoundedIcon>
<IconButton  aria-label="DisLike"  onClick={() => setShow(!show)} color="secondary" > 
{show ? <ExpandLessIcon/> :<ExpandMoreIcon/>}
</IconButton>
{show ? <p className='movie_review'>{review}</p> :" "}  </CardContent>
<CardActions>
<Counter/>
</CardActions>
<Button onClick={()=>backnavigate(-1)} variant="outlined">Back</Button>
</Card>



  )
  
}
export default App;