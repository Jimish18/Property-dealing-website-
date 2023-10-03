import React , {useState} from 'react'
import './mainBody.css'
import PropertyCard from '../propertycard/PropertyCard'
import propertyData from '../../data'
import {CgSandClock} from 'react-icons/cg'

const MainBody = () => {

  const initialCards = propertyData.slice(0,6);
  const [cards , setCards] = useState(initialCards);
  const [isCompleted , setIsCompleted] = useState(false);
  const [index , setIndex] = useState(6);

  const loadMore = () => {
    const newCards = propertyData.slice(index , index + 3);
    setIndex(index + 3);
    setCards([...cards , ...newCards]);
    if(index >= propertyData.length){
      setIsCompleted(true);
    }
  }

  return (
    <main className='mainSection'>
        <div className="filterButtons">
            <button>New York</button>
            <button>Mumbai</button>
            <button>Paris</button>
            <button>London</button>
        </div>

        <div className="container-fluid">

          {/* map each property data */}

          
            {
              cards.map((property) => {
                return (                    
                        <PropertyCard key={property.id} {...property} />                    
                )
              })
            }

        </div>
        {/* load more button */}
        <div className='loadmoreSection'>
        {
          !isCompleted && <button onClick={loadMore}> <CgSandClock/> Show More...</button>
        }
        </div>
    </main>
  )
}

export default MainBody