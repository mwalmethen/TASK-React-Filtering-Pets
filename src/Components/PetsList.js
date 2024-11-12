import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";
import SearchBar from "./SearchBar";
import TypeSelector from "./TypeSelector";

function PetsList() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  let filterData = pets.filter((pet) => 
    pet.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) && (type === "" || pet.type === type)
  );
  const petList = filterData.map((pet) => <PetItem pet={pet} key={pet.id} />);

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <SearchBar setQuery={setQuery}/>
              <br />
              Type:
              <TypeSelector setType={setType}/>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
