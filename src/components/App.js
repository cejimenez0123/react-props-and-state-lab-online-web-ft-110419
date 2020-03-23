import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  };
  
  onAdoptPet = id => {
    this.setState(prevState => {
      let pets = prevState.pets.map(pet => {
        return pet.id === id ? { ...pet, isAdopted: true } : pet;
      });
      return { pets };
    },() => console.log(this.state));

  };
  onFindPetsClick = () => {
    const type = this.state.filters.type;
    let url = type === "all" ? "/api/pets" : `/api/pets?type=${type}`;
    fetch(url)
      .then(res => res.json())
      .then(petsObj => this.setState({ pets: petsObj }));
  }; 
  
  onChangeType = () =>{

  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
