import { useState } from "react";

function PetItem({ pet, adoptFunction }) {
const [changeImage, setchangeImage] = useState(pet.image)

const imagechange = () => {
  setchangeImage((prevImage) => prevImage === pet.image ? pet.image2 : pet.image);
}


  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={changeImage}/>
        <div className="content">
          <h3>{pet.name}</h3>
          <button onClick={imagechange} type="button" className="btn btn-info">
            Pet
          </button>
          <button onClick={() => adoptFunction(pet.id)} type="button" class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
