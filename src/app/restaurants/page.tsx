'use client'
import { useEffect, useState } from "react";
import restaurants from "./restaurants";
import styles from './restaurants.module.css';
import Select from 'react-select'


const sortedRestaurants = restaurants.sort((r1, r2) => (r1.name > r2.name) ? 1 : (r1.name < r2.name) ? -1 : 0);

const categories = ['drinks', 'fancy', 'weekend', 'tiki drinks', 'beer', 'kid friendly', 'dog friendly', 'patio'
, 'burgers', 'southern', 'sandwiches', 'american', 'seafood', 'pizza', 'quick/casual', 'italian', 'happy hour food'
, 'japanese', 'frozen drinks', 'mexican', 'bbq', 'asian', 'french', 'mediterranean', 'thai', 'chinese'
, 'foodtruck', 'indian', 'vietnamese', 'korean', 'brunch', 'bakery', 'coffeeshop', 'desserts', 'pub food', 'latin american'
, 'cajun', 'jamaican']

const locations = ['North', 'Central', 'South 1st/Lamar', 'East Side', 'Downtown', 'West', 'South', 'Cedar Park']

const categoryOptions = categories.map(category => { return {value: category, label: category}})
const locationOptions = locations.map(category => { return {value: category, label: category}})


export default function Restaurants() {

  const [activeCategories, setActiveCategories] = useState([]);

  const [activeRestaurants, setActiveRestaurants] = useState(sortedRestaurants);
  const [activeLocations, setActiveLocations] = useState(locations)


  const handleUpdateCategories =  async (options: {label: string, value: string}[]) => {
    const categories = options.map(option => option.value);
    // @ts-ignore
    setActiveCategories(categories.length ? categories : [])
  }

  const handleUpdateLocations =  async (options: {label: string, value: string}[]) => {
    const locations = options.map(option => option.value);
    // @ts-ignore
    setActiveLocations(locations.length ? locations : [])
  }


  const handleUpdateRestaurants =  () => {
    const filterCategory = sortedRestaurants.filter((restaurant) => {
        const restaurantCategories = restaurant.categories;
        return activeCategories.every(category => restaurantCategories.includes(category))
    })
    const filterLocation = filterCategory.filter((restaurant) => {
      return activeLocations.includes(restaurant.location)
  })
    setActiveRestaurants(filterLocation)
    
  }

  useEffect(() => {
    handleUpdateRestaurants()
  }, [activeCategories, activeLocations])


  return (
    <div className="container home">
      <main>
        <div className="space-y-4">
          <h1 className="text-center text-5xl">Restaurants</h1>
        </div>
        <div className={styles.filterContainer}>
          <div className={styles.filter}>
            <label>Category:</label>
            <Select
              isMulti
              name="categories"
              options={categoryOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              // @ts-ignore
              onChange={(options) => handleUpdateCategories(options)}
            />
          </div>
          <div className={styles.filter}>
            <label>Location:</label>
            <Select
              isMulti
              name="locations"
              options={locationOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              // @ts-ignore
              onChange={(options) => handleUpdateLocations(options)}
            />
          </div>
        </div>
        <div> 
          {activeRestaurants.map((restaurant) => (
            <div key={restaurant.name} className={styles.restaurant}>
              <p className={styles.name}>{restaurant.name} - {restaurant.location}</p>
              <div className={styles.restaurantTags}>
                {restaurant.categories.map((category, i) => <p key={category + i}>{`${category}${i === restaurant.categories.length - 1  ? '' : ','}`}</p>)}
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