'use client'
import { useEffect, useState } from "react";
import restaurants from "./restaurants";
import styles from './restaurants.module.css';
import Select from 'react-select'


const categories = ['drinks', 'fancy', 'weekend', 'tiki drinks', 'beer', 'kid friendly', 'dog friendly', 'patio'
, 'burgers', 'southern', 'sandwiches', 'american', 'seafood', 'pizza', 'quick/casual', 'italian', 'happy hour food'
, 'japanese', 'frozen drinks', 'mexican', 'bbq', 'asian', 'french', 'mediterranean', 'thai', 'chinese'
, 'foodtruck', 'indian', 'vietnamese', 'korean', 'brunch', 'bakery', 'coffeeshop', 'desserts', 'pub food', 'latin american'
, 'cajun', 'jamaican']

const categoryOptions = categories.map(category => { return {value: category, label: category}})


export default function Restaurants() {

  const [activeCategories, setActiveCategories] = useState([]);
  const [activeLocations, setActiveLocations] = useState([]);

  const [activeRestaurants, setActiveRestaurants] = useState(restaurants)

  const handleUpdateCategories =  async (options: {label: string, value: string}[]) => {
    const categories = options.map(option => option.value);
    // @ts-ignore
    setActiveCategories(categories.length ? categories : [])

  }

  const handleUpdateRestaurants =  () => {
    if(activeCategories.length){
      const restaurants = activeRestaurants.filter(restaurant=> activeCategories.some(category => restaurant.categories.includes(category)))
      setActiveRestaurants(restaurants)
    } else {
      setActiveRestaurants(restaurants)
    }
  }

  useEffect(() => {
    handleUpdateRestaurants()
  }, [activeCategories])


  return (
    <div className="container home">
      <main>
        <div className="space-y-4">
          <h1 className="text-center text-5xl">Restaurants</h1>
        </div>
        <div className={styles.filter}>
          <label>Category:</label>
          <Select
            isMulti
            name="categories"
            options={categoryOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(options) => handleUpdateCategories(options)}
          />
        </div>
        <div> 
          {activeRestaurants.map((restaurant) => (
            <div key={restaurant.name} className={styles.restaurant}>
              <p className={styles.name}>{restaurant.name} - {restaurant.location}</p>
              <div className={styles.restaurantTags}>
                {restaurant.categories.map((category, i) => <p>{`${category}${i === restaurant.categories.length - 1  ? '' : ','}`}</p>)}
              </div>
              <a href={restaurant.menu}>{restaurant.menu}</a>
              <div className="h-12"></div>
            </div>
          ))}
        </div>
        
      </main>
    </div>
  );
}