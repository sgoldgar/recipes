"use client";
import { useEffect, useState } from "react";
import Restaurant from "./restaurants";
import styles from "./restaurants.module.css";
import Select from "react-select";

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

const isLocal = window.location.host.includes("localhost");

export default function Restaurants() {
    const getRestaurants = async () =>
        await fetch(
            `${
                isLocal
                    ? "http://localhost:8888"
                    : "https://magical-puppy-74b22c.netlify.app"
            }/.netlify/functions/get_restaurants`,
        ).then(
            // @ts-ignore
            async (response: any) => {
                const res = await response.json();
                const restaurants = res.sort((r1: any, r2: any) =>
                    r1.name > r2.name ? 1 : r1.name < r2.name ? -1 : 0,
                );
                setRestaurants(restaurants);
                setActiveRestaurants(restaurants);
            },
        );

    useEffect(() => {
        getRestaurants();
    }, []);

    const [restaurants, setRestaurants] = useState([]);

    const [activeCategories, setActiveCategories] = useState([]);

    const [activeRestaurants, setActiveRestaurants] = useState([]);
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
        if (activeCategories.length) {
            console.log("restaurants", restaurants);
            const filterCategory = activeRestaurants.filter((restaurant) => {
                const restaurantCategories = restaurant.categories;
                return activeCategories.every((category) =>
                    restaurantCategories.includes(category),
                );
            });
            setActiveRestaurants(filterCategory);
        }
        if (activeLocations.length) {
            const filterLocation = activeRestaurants.filter((restaurant) => {
                // @ts-ignore
                return activeLocations.includes(restaurant.location);
            });
            setActiveRestaurants(filterLocation);
        }
        // setActiveRestaurants(restaurants);
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
