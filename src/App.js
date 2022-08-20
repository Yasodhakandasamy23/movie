import { useState } from 'react';

import './App.css';
import { Counter } from "./Counter";
import { Routes, Route, Link, useNavigate, useParams, Navigate } from "react-router-dom";
const movielist=[{

  name: "RRR",
    image:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rate: 8.8,
    review:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer : "https://www.youtube.com/embed/f_vbAtFSEc0"
},
  {
    name: "Iron man 2",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rate: 7,
    review:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU" },
  {
    name: "No Country for Old Men",
   image:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rate: 8.1,
    review:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0"},
  {
    name: "Jai Bhim",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    review:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rate: 8.8,
    trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
  },
  {
    name: "The Avengers",
    rate: 8,
    review:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
  },
  {
    name: "Interstellar",
    image: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rate: 8.6,
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    review:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
  },
  {
    name: "Baahubali",
    image: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rate: 8,
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
    review:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
  },
  {
    name: "Ratatouille",
    image:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rate: 8,
    trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
   review:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
  }
];
function App() {
   return (
      <div>
        <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="MovieItem">movie</Link></li>
        
</nav>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieItem" element={<MovieItem />} />
        <Route path="/ListItem" element={<Navigate replace to ="/MovieItem" />} />
        <Route path="/MovieItem/:id" element={<MovieDetails/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
   
         </div>
        
   
  );
 
}
function NotFound(){
  const {id} = useParams();
  const movie = movielist[id];  
return(
  <div>
    <img src='https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif' alt="not found" className='not-found' >{movie}</img>
  </div>
)


}
function MovieDetails({rate,name,review,trailer}){
  const {id} = useParams();
  const movie = movielist[id];
  console.log(movie);
  const backnavigate = useNavigate(-1);
  const style={
    color: rate > 8 ? "green" :"Red",
  };
  return( 
     
      <div className='movie_detail-container'>
            <div>
              <iframe width="1097" height="617" src={movie.trailer} title="RRR Trailer (Telugu) - NTR, Ram Charan, Ajay Devgn, Alia Bhatt | SS Rajamouli | 25th March 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
            <div className="movie_spe">
      <h1> {movie.name}</h1>
      <p  style={style} className="movie_rate">⭐{rate}</p>
      </div> 
      </div>
      <p className='movie_review'>{movie.review}</p> 
      
      
       
         
     
      <button onClick={()=>backnavigate(-1)}>Back</button>
      </div>
    )
  }

function MovieItem(){
  const movie = movielist;
return( <div className="movie_list" >    
{
  movie.map((user,index)=>(
    <Movietem key={index} name={user.name} image={user.image} rate={user.rate} review={user.review} id={index}/>
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
<div className='movie_container'>
<img  className="image"src ={image} alt="RRR"></img> 
<div className="movie_spe">
<h2 className="movie_title">{name}</h2>
<p  style={style} className="movie_rate">⭐{rate}</p>
</div>
< button onClick={()=>navigate("/MovieItem/"+id)}>info</button>
<button onClick={()=>setShow(!show)}>Toggle description</button>
{show ? <p className='movie_review'>{review}</p> :" "}
   
<Counter/>
<button onClick={()=>backnavigate(-1)}>Back</button>
</div>


  )
  
}

export default App;