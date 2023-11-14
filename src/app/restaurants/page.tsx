"use client";
import { useEffect, useState } from "react";
import restaurants from "./restaurants";
import styles from "./restaurants.module.css";
import Select from "react-select";

const sortedRestaurants = restaurants.sort((r1, r2) =>
    r1.name > r2.name ? 1 : r1.name < r2.name ? -1 : 0,
);

const categories = [
    "drinks",
    "fancy",
    "weekend",
    "tiki drinks",
    "beer",
    "kid friendly",
    "dog friendly",
    "patio",
    "burgers",
    "southern",
    "sandwiches",
    "american",
    "seafood",
    "pizza",
    "quick/casual",
    "italian",
    "happy hour food",
    "japanese",
    "frozen drinks",
    "mexican",
    "bbq",
    "asian",
    "french",
    "mediterranean",
    "thai",
    "chinese",
    "foodtruck",
    "indian",
    "vietnamese",
    "korean",
    "brunch",
    "bakery",
    "coffeeshop",
    "desserts",
    "pub food",
    "latin american",
    "cajun",
    "jamaican",
].sort((r1, r2) => (r1 > r2 ? 1 : r1 < r2 ? -1 : 0));

const locations = [
    "North",
    "Central",
    "East Side",
    "South 1st/Lamar",
    "Downtown",
    "West",
    "South",
    "Cedar Park",
];

const categoryOptions = categories.map((category) => {
    return { value: category, label: category };
});
const locationOptions = locations.map((category) => {
    return { value: category, label: category };
});

export default function Restaurants() {
    const [activeCategories, setActiveCategories] = useState([]);

    const [activeRestaurants, setActiveRestaurants] =
        useState(sortedRestaurants);
    const [activeLocations, setActiveLocations] = useState([]);

    const handleUpdateCategories = async (
        options: { label: string; value: string }[],
    ) => {
        const categories = options.map((option) => option.value);
        // @ts-ignore
        setActiveCategories(categories.length ? categories : []);
    };

    const handleUpdateLocations = async (
        options: { label: string; value: string }[],
    ) => {
        const locations = options.map((option) => option.value);
        // @ts-ignore
        setActiveLocations(locations.length ? locations : []);
    };

    const handleUpdateRestaurants = () => {
        let restaurants = sortedRestaurants;
        if (activeCategories.length) {
            const filterCategory = restaurants.filter((restaurant) => {
                const restaurantCategories = restaurant.categories;
                return activeCategories.every((category) =>
                    restaurantCategories.includes(category),
                );
            });
            restaurants = filterCategory;
        }
        if (activeLocations.length) {
            const filterLocation = restaurants.filter((restaurant) => {
                // @ts-ignore
                return activeLocations.includes(restaurant.location);
            });
            restaurants = filterLocation;
        }
        setActiveRestaurants(restaurants);
    };

    useEffect(() => {
        handleUpdateRestaurants();
    }, [activeCategories, activeLocations]);

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
                            isClearable={false}
                            name="categories"
                            options={categoryOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(options) =>
                                // @ts-ignore
                                handleUpdateCategories(options)
                            }
                        />
                    </div>
                    <div className={styles.filter}>
                        <label>Location:</label>
                        <Select
                            isClearable={false}
                            isMulti
                            name="locations"
                            options={locationOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={(options) =>
                                // @ts-ignore
                                handleUpdateLocations(options)
                            }
                        />
                    </div>
                </div>
                <div className={styles.restaurantsContainer}>
                    {!activeRestaurants.length ? (
                        <p>No restaurants matching criteria were found</p>
                    ) : (
                        activeRestaurants.map((restaurant) => (
                            <div
                                key={restaurant.name}
                                className={styles.restaurant}
                            >
                                <p className={styles.name}>
                                    {restaurant.name} - {restaurant.location}
                                </p>
                                <div className={styles.restaurantTags}>
                                    {restaurant.categories.map(
                                        (category, i) => (
                                            <p
                                                key={category + i}
                                            >{`${category}${
                                                i ===
                                                restaurant.categories.length - 1
                                                    ? ""
                                                    : ","
                                            }`}</p>
                                        ),
                                    )}
                                </div>
                                <a href={restaurant.menu}>{restaurant.menu}</a>
                                <div className="h-12"></div>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}
