import React , {useEffect, useState} from 'react'
import './mainBody.css'
import PropertyCard from '../propertycard/PropertyCard'
import propertyData from '../../data'
import {CgSandClock} from 'react-icons/cg'
import { useFilter } from '../../context/filterContext'

const MainBody = () => {

  const [filterCity , setFilterCity] = useFilter();

  let defaultData = propertyData.filter((property) => property.city === filterCity);

  const [filterPropertyData , setFilterPropertyData] = useState(defaultData);


  // create useEffect to filter the data based on filterCity and render each time filterCity changes and update the data and display the first 6 cards
  useEffect(() => {

    const newData = propertyData.filter((property) => property.city === filterCity);
    setFilterPropertyData(newData);
    setIndex(6);
    setCards(newData.slice(0,6));
    setIsCompleted(false);

  },[filterCity])

  let initialCards = filterPropertyData.slice(0,6);
  const [cards , setCards] = useState(initialCards);
  const [isCompleted , setIsCompleted] = useState(false);
  const [index , setIndex] = useState(6);

  const loadMore = () => {
    const newCards = filterPropertyData.slice(index , index + 3);
    setIndex(index + 3);
    setCards([...cards , ...newCards]);
    if(index >= filterPropertyData.length){
      setIsCompleted(true);
    }
  }

  const handleFilter = (city) => () => 
  {
    // set the filterCity and reset the cards and display the first 6 cards
    setFilterCity(city);
    setIndex(6);
    setCards(filterPropertyData.slice(0,6));
    setIsCompleted(false);

    const buttons = document.querySelectorAll('.filterButtons button');
      buttons.forEach((button) => 
      {
        if(button.innerText.toLowerCase() === city)
        {
          button.classList.add('activeButton');
        }
        else
        {
          button.classList.remove('activeButton');
        }
      })
  }

  


  return (
    <main className='mainSection'>
        <div className="filterButtons">
            <button onClick={handleFilter("new york")} className='activeButton'>New York</button>
            <button onClick={handleFilter("mumbai")}>Mumbai</button>
            <button onClick={handleFilter("paris")}>Paris</button>
            <button onClick={handleFilter("london")}>London</button>
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