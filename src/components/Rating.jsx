import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Button from "./Button";
const Rating = ({heading = 'Avalie sua experiência',
   color = 'gold',
   feedbackMessages = ['Terrível', 'Ruim', 'Mediana', 'Boa', 'Muito boa']
  }) => {
    const[rating, setRating] = useState(0);
    const[hover, setHover] = useState(0);
    const[submitted, setSubmitted] = useState(false);

    const stars = Array.from({length:5}, (_,i) => i + 1)

    const handleSubmit= () => {
      if (rating > 0){
        setSubmitted(true);
      }
    };
    //Close modal and reset UI
    const closeModal = () => {
      setSubmitted(false);
      setRating (0);
      setHover(0);
    }
    
  return (
<div className="rating-container">
   <h2>{heading}</h2> 
   <div className="stars">
    { stars.map((star) => (
      <Star
        key={star}
        star= {star}
        rating={rating}
        hover={hover}
        color={color}
        ratingClick= {setRating}
        hoverEnter={setHover}
        hoverLeave={ () => setHover(null)}
        />
      
    ))}
   </div>
   {rating > 0 && <p className="feedback">{feedbackMessages[rating -1]}</p>}


     <Modal isOpen={submitted} onClose={closeModal}
     rating={rating}/>


     <Button
     className = 'submit-btn'
     disabled={rating === 0 }
     onClick={handleSubmit}>
     
      Enviar
     </Button>


</div>
);
};

export default Rating;