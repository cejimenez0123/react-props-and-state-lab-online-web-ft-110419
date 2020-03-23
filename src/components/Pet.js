import React from 'react'

class Pet extends React.Component {
 buttonRender =(obj )=>{
  
   if (obj.isAdopted === false)
   {return  (<button onClick={()=> this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>)}
   else{
    return (<button className="ui disabled button">Already adopted</button>)
   }
   
         
 }
  render() {
    let obj = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a href='#' className="header">
            {obj.gender === 'female'? '♀':'♂'}
            {obj.name}
          </a>
          <div className="meta">
            <span className="date">{obj.type}</span>
          </div>
          <div className="description">
            <p>Age: {obj.age}</p>
            <p>Weight: {obj.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.buttonRender(obj)}
          

        </div>
      </div>
    )
  }
}

export default Pet
