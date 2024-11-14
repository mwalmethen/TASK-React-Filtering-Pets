import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";
import SearchBar from "./SearchBar";
import TypeSelector from "./TypeSelector";

function PetsList() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [adopt, setAdopt] = useState(pets);

  const handleAdopt = (petId) => {
    const petList = adopt.filter((pet) => pet.id !== petId);
    setAdopt(petList);
  }

const filteredData = adopt.filter((pet) => {
  return pet.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
})

const filterByname = filteredData.filter((pet) => {
  return pet.type.includes(type);
})

  const petList = filterByname.map((pet) => {
    return <PetItem adoptFunction={handleAdopt} pet={pet} key={pet.id}/>
  })

  




  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <SearchBar setSearch={setSearch} />
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
