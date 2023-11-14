"use client";
import { useEffect, useState } from "react";
import happyHours from "./happyHours";
import styles from "../restaurants/restaurants.module.css";
import Select from "react-select";

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
const locationOptions = locations.map((category) => {
    return { value: category, label: category };
});

export default function HappyHours() {
    const [activeDay, setActiveDay] = useState({
        day: " ",
        specials: [],
    });
    const [activeLocations, setActiveLocations] = useState([]);

    const handleUpdateLocations = async (
        options: { label: string; value: string }[],
    ) => {
        const locations = options.map((option) => option.value);
        // @ts-ignore
        setActiveLocations(locations.length ? locations : []);
    };
    const handleUpdateRestaurants = () => {
        // @ts-ignore
        let activeRestaurants = happyHours[activeDay.day];

        if (activeLocations.length) {
            activeRestaurants = activeRestaurants.filter((restaurant: any) => {
                // @ts-ignore
                return activeLocations.includes(restaurant.location);
            });
        }
        setActiveDay({
            day: activeDay.day,
            specials: activeRestaurants,
        });
    };

    useEffect(() => {
        handleUpdateRestaurants();
    }, [activeLocations]);

    useEffect(() => {
        const date = new Date();
        const dayName = date
            .toLocaleDateString("en-US", { weekday: "long" })
            .toLowerCase();
        setActiveDay({
            day: dayName,
            // @ts-ignore
            specials: happyHours[dayName].sort((r1, r2) =>
                r1.location > r2.location
                    ? 1
                    : r1.location < r2.location
                      ? -1
                      : 0,
            ),
        });
    }, []);

    return (
        <div className="container home">
            <main>
                <div className="space-y-4">
                    <h1 className="text-center text-5xl">Happy Hours</h1>
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
                        // @ts-ignore
                        onChange={(options) => handleUpdateLocations(options)}
                    />
                </div>

                <div className={styles.restaurantsContainer}>
                    <h2 className={styles.day}>{activeDay.day}</h2>
                    {activeDay.specials.map((restaurant: any) => (
                        <div
                            key={restaurant.name}
                            className={styles.restaurant}
                        >
                            <p className={styles.happyHourName}>
                                {restaurant.name} - {restaurant.location}
                            </p>
                            <p className={styles.subtext}>
                                <span className={styles.subname}>
                                    HH Times:
                                </span>{" "}
                                {restaurant.time}
                            </p>
                            <p className={styles.subtext}>
                                <span className={styles.subname}>Special:</span>{" "}
                                {restaurant.special}
                            </p>
                            <a href={restaurant.link}>{restaurant.link}</a>
                            <div className="h-12"></div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
