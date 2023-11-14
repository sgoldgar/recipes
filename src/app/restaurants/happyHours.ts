type Located =
    | "North"
    | "Central"
    | "South 1st/Lamar"
    | "East Side"
    | "Downtown"
    | "West"
    | "South"
    | "Cedar Park";

type HappyHour = {
    restaurant: string;
    location: Located;
    special: string;
    time: string;
    link: string;
};

const happyHours: {
    monday: HappyHour[];
    tuesday: HappyHour[];
    wednesday: HappyHour[];
    thursday: HappyHour[];
    friday: HappyHour[];
    saturday: HappyHour[];
    sunday: HappyHour[];
} = {
    monday: [
        {
            restaurant: "Double Trouble",
            location: "Central",
            special: "unknown",
            time: "3-6",
            link: 'https://www.instagram.com/double_trouble_atx/?hl=en'
        },
        {
            restaurant: "Kinda Tropical",
            location: "East Side",
            special: "$8 frozens, $9 burger, $8 chicken sandwich",
            time: "3-6",
            link: 'https://kindatropical.com/menu/'
        },
        {
            restaurant: "Garbo's",
            location: "North",
            special: "Fish and chips - $14",
            time: "all day",
            link: 'https://www.garboslobsteratx.com/menu'
        },
        {
            restaurant: "Perry's Bar 79",
            location: "North",
            special: "Cocktails (including mini martini trio) are $2 off",
            time: "4-7 M-F",
            link: 'https://perryssteakhouse.com/locations/tx/austin/domain-northside/#'
        },
        {
            restaurant: "Juliet",
            location: "North",
            special: "$10-$14 mains, $6 electric jellyfish",
            time: "3-6 M-F",
            link: 'https://www.juliet-austin.com/arboretum-menu#menu=happy-hour-ordering'
        },
        {
            restaurant: "Uchiba",
            location: "Downtown",
            special: "Lots of $10 drinks and food",
            time: "4-530",
            link: 'https://uchiba.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_skewers'
        },
        {
            restaurant: "Hanks",
            location: "Central",
            special: "1/2 off all burgers (11am - 10pm), $7 frozen and tap cocktails, $7 wine",
            time: "4-530",
            link: 'https://www.hanksaustin.com/menus'
        },
        {
            restaurant: "Bulevar",
            location: "North",
            special: "$10 margaritas, $5 drafts, $10 small plates",
            time: "all night bar top, 5-6 patio/lounge",
            link: 'https://static1.squarespace.com/static/62333906295dd653f0079bad/t/64e5061b437ca00203e4b70c/1692730907414/Bulevar_HHMenu_8.15.23.pdf'
        },
        {
            restaurant: "Salty Sow",
            location: "Central",
            special: "$6-8 tacos, fries, fried chicken",
            time: "430-630",
            link: 'https://www.saltysow.com/menus/SSM_Menu.pdf'
        },
        {
            restaurant: "Loro",
            location: "North",
            special: "$6 specialty bites, under $10 sandwiches, $5 slushes, $5 cocktails/wine/sake",
            time: "2-5",
            link: 'https://www.loroeats.com/locations/austin/south-lamar/menu/'
        },
        {
            restaurant: "Uchkio",
            location: "Central",
            special: "~$10 small plates",
            time: "4-6",
            link: 'https://uchiko.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_nigiri-2-pc'
        },
        {
            restaurant: "Comedor",
            location: "Downtown",
            special: "$5 tacos, $8 margarita",
            time: "5-630",
            link: 'https://comedortx.com/menu/'
        },
        {
            restaurant: "Nomade",
            location: "South 1st/Lamar",
            special: "$5 drinks, $5-10 starters",
            time: "430-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            restaurant: "Wu Chow",
            location: "Central",
            special: "Patio/cocktail area only -- $10 cocktails and $7 skewers",
            time: "430-6",
            link: 'https://www.wuchowaustin.com/north-lamar-menu/'
        },
        {
            restaurant: "Cedro",
            location: "North",
            special: "$9 half pizza, $6 meatballs, $8 risotto balls, etc",
            time: "3-6",
            link: 'https://www.wuchowaustin.com/north-lamar-menu/'
        },
        {
            restaurant: "Backspace Pizza",
            location: "Central",
            special: "1/2 off house cocktails, beer, wine, antipasti",
            time: "4-6",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            restaurant: "Lucky Robot",
            location: "South 1st/Lamar",
            special: "Half off lots of food",
            time: "430-530",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
    ],
    tuesday: [
        {
            restaurant: "Double Trouble",
            location: "Central",
            special: "unknown",
            time: "3-6",
            link: 'https://www.instagram.com/double_trouble_atx/?hl=en'
        },
        {
            restaurant: "Kinda Tropical",
            location: "East Side",
            special: "$8 frozens, $9 burger, $8 chicken sandwich",
            time: "3-6",
            link: 'https://kindatropical.com/menu/'
        },
        {
            restaurant: "Oseyo",
            location: "East Side",
            special: "Lots of discounted food and drinks",
            time: "430-630",
            link: 'https://www.oseyoaustin.com/happy-hour'
        },
        {
            restaurant: "Perry's Bar 79",
            location: "North",
            special: "Cocktails (including mini martini trio) are $2 off",
            time: "4-7",
            link: 'https://perryssteakhouse.com/locations/tx/austin/domain-northside/#'
        },
        {
            restaurant: "Foxhole Tavern",
            location: "North",
            special: "$5 tacos, house wine $7",
            time: "3-9",
            link: "https://foxholeaustin.com/austin-foxhole-culinary-tavern-happy-hours-specials"
        },
        {
            restaurant: "Juliet",
            location: "North",
            special: "$10-$14 mains, $6 electric jellyfish",
            time: "3-6",
            link: 'https://www.juliet-austin.com/arboretum-menu#menu=happy-hour-ordering'
        },
        {
            restaurant: "Uchiba",
            location: "Downtown",
            special: "Lots of $10 drinks and food",
            time: "4-530",
            link: 'https://uchiba.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_skewers'
        },
        {
            restaurant: "Hanks",
            location: "Central",
            special: "$7 frozen and tap cocktails, $7 wine",
            time: "4-530",
            link: 'https://www.hanksaustin.com/menus'
        },
        {
            restaurant: "Bulevar",
            location: "North",
            special: "$10 margaritas, $5 drafts, $10 small plates",
            time: "all night bar top, 5-6 patio/lounge",
            link: 'https://static1.squarespace.com/static/62333906295dd653f0079bad/t/64e5061b437ca00203e4b70c/1692730907414/Bulevar_HHMenu_8.15.23.pdf'
        },
        {
            restaurant: "Salty Sow",
            location: "Central",
            special: "$6-8 tacos, fries, fried chicken",
            time: "430-630",
            link: 'https://www.saltysow.com/menus/SSM_Menu.pdf'
        },
        {
            restaurant: "Loro",
            location: "North",
            special: "$6 specialty bites, under $10 sandwiches, $5 slushes, $5 cocktails/wine/sake",
            time: "2-5",
            link: 'https://www.loroeats.com/locations/austin/south-lamar/menu/'
        },
        {
            restaurant: "Uchkio",
            location: "Central",
            special: "~$10 small plates",
            time: "4-6",
            link: 'https://uchiko.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_nigiri-2-pc'
        },
        {
            restaurant: "Peached Tortilla",
            location: "Central",
            special: "Patio only -- $5 beer, $7 cocktails, $4.50 tacos, $6 snacks, $9 burger. ",
            time: "5-7",
            link: 'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/64c9c2bce8660221b0192e52/1690944188263/SocialHour_Menu-08_2023-web.pdf'
        },
        {
            restaurant: "Peached Tortilla",
            location: "Central",
            special: "Anywhere -- tacos a la carte for $4.50",
            time: "all day",
            link:  'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/6463ec21b11c8d73655eaa6e/1684270113435/TacoTuesday-05_2023-web.pdf'
        },
        {
            restaurant: "Comedor",
            location: "Downtown",
            special: "$5 tacos, $8 margarita",
            time: "5-630",
            link: 'https://comedortx.com/menu/'
        },
        {
            restaurant: "Nomade",
            location: "South 1st/Lamar",
            special: "$5 drinks, $5-10 starters",
            time: "430-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            restaurant: "gracia",
            location: "Central",
            special: "Half price sangria and spritz, half price hummus and flat bread",
            time: "5-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            restaurant: "Cedro",
            location: "North",
            special: "BOGO pizza night, $9 half pizza, $6 meatballs, $8 risotto balls, etc",
            time: "3-6",
            link: 'https://www.wuchowaustin.com/north-lamar-menu/'
        },
        {
            restaurant: "Backspace Pizza",
            location: "Central",
            special: "1/2 off house cocktails, beer, wine, antipasti",
            time: "4-6",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            restaurant: "Lucky Robot",
            location: "South 1st/Lamar",
            special: "Half off lots of food",
            time: "430-530",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            restaurant: "Central Machine Works",
            location: "East Side",
            special: "$5 pints and pretzels, $15 pitchers and cheese/pepperoni pizza",
            time: "9pm to close",
            link: 'https://www.cmwbrewery.com/menu'
        },
    ],
    wednesday: [
        {
            restaurant: "Double Trouble",
            location: "Central",
            special: "unknown",
            time: "3-6",
            link: 'https://www.instagram.com/double_trouble_atx/?hl=en'
        },
        {
            restaurant: "Kinda Tropical",
            location: "East Side",
            special: "$8 frozens, $9 burger, $8 chicken sandwich",
            time: "3-6",
            link: 'https://kindatropical.com/menu/'
        },
        {
            restaurant: "Oseyo",
            location: "East Side",
            special: "Lots of discounted food and drinks",
            time: "430-630",
            link: 'https://www.oseyoaustin.com/happy-hour'
        },
        {
            restaurant: "Perry's Bar 79",
            location: "North",
            special: "Cocktails (including mini martini trio) are $2 off",
            time: "4-7",
            link: 'https://perryssteakhouse.com/locations/tx/austin/domain-northside/#'
        },
        {
            restaurant: "Sour Duck Market",
            location: "East Side",
            special:
                "$6 burger (add pilsner or tiny marg for $4), $6 paloma and mule",
            time: "3-6",
            link: "https://www.sourduckmarket.com/"
        },
        {
            restaurant: "Juliet",
            location: "North",
            special: "$10-$14 mains, $6 electric jellyfish",
            time: "3-6",
            link: 'https://www.juliet-austin.com/arboretum-menu#menu=happy-hour-ordering'
        },
        {
            restaurant: "Uchiba",
            location: "Downtown",
            special: "Lots of $10 drinks and food",
            time: "4-530",
            link: 'https://uchiba.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_skewers'
        },
        {
            restaurant: "Hanks",
            location: "Central",
            special: "$7 frozen and tap cocktails, $7 wine",
            time: "4-530",
            link: 'https://www.hanksaustin.com/menus'
        },
        {
            restaurant: "Bulevar",
            location: "North",
            special: "$10 margaritas, $5 drafts, $10 small plates",
            time: "5-6",
            link: 'https://static1.squarespace.com/static/62333906295dd653f0079bad/t/64e5061b437ca00203e4b70c/1692730907414/Bulevar_HHMenu_8.15.23.pdf'
        },
        {
            restaurant: "Salty Sow",
            location: "Central",
            special: "$6-8 tacos, fries, fried chicken",
            time: "430-630",
            link: 'https://www.saltysow.com/menus/SSM_Menu.pdf'
        },
        {
            restaurant: "Loro",
            location: "North",
            special: "$6 specialty bites, under $10 sandwiches, $5 slushes, $5 cocktails/wine/sake",
            time: "2-5",
            link: 'https://www.loroeats.com/locations/austin/south-lamar/menu/'
        },
        {
            restaurant: "Uchkio",
            location: "Central",
            special: "~$10 small plates",
            time: "4-6",
            link: 'https://uchiko.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_nigiri-2-pc'
        },
        {
            restaurant: "Peached Tortilla",
            location: "Central",
            special: "Patio only -- $5 beer, $7 cocktails, $4.50 tacos, $6 snacks, $9 burger. ",
            time: "5-7",
            link: 'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/64c9c2bce8660221b0192e52/1690944188263/SocialHour_Menu-08_2023-web.pdf'
        },
        {
            restaurant: "Peached Tortilla",
            location: "Central",
            special: "Anywhere -- fried chicken meal, $19 and whiskey cocktail for $10",
            time: "all day",
            link: 'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/647feec434f8674392638723/1686105796688/ChickenWhiskeyMenu-06_2023-web.pdf'
        },
        {
            restaurant: "Comedor",
            location: "Downtown",
            special: "$5 tacos, $8 margarita",
            time: "5-630",
            link: 'https://comedortx.com/menu/'
        },
        {
            restaurant: "Nomade",
            location: "South 1st/Lamar",
            special: "$5 drinks, $5-10 starters",
            time: "430-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            restaurant: "gracia",
            location: "Central",
            special: "Half price sangria and spritz, half price hummus and flat bread",
            time: "5-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            restaurant: "Cedro",
            location: "North",
            special: "$9 half pizza, $6 meatballs, $8 risotto balls, etc",
            time: "3-6",
            link: 'https://www.wuchowaustin.com/north-lamar-menu/'
        },
        {
            restaurant: "Backspace Pizza",
            location: "Central",
            special: "1/2 off house cocktails, beer, wine, antipasti",
            time: "4-6",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            restaurant: "Lucky Robot",
            location: "South 1st/Lamar",
            special: "Half off lots of food",
            time: "430-530",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            restaurant: "Central Machine Works",
            location: "East Side",
            special: "$5 pints and pretzels, $15 pitchers and cheese/pepperoni pizza",
            time: "9pm to close",
            link: 'https://www.cmwbrewery.com/menu'
        },
    ],
    thursday: [
        {
            restaurant: "Double Trouble",
            location: "Central",
            special: "unknown",
            time: "3-6",
            link: 'https://www.instagram.com/double_trouble_atx/?hl=en'
        },
        {
            restaurant: "Kinda Tropical",
            location: "East Side",
            special: "$8 frozens, $9 burger, $8 chicken sandwich",
            time: "3-6",
            link: 'https://kindatropical.com/menu/'
        },
        {
            restaurant: "Oseyo",
            location: "East Side",
            special: "Lots of discounted food and drinks",
            time: "all day",
            link: 'https://www.oseyoaustin.com/happy-hour'
        },
        {
            restaurant: "Perry's Bar 79",
            location: "North",
            special: "Cocktails (including mini martini trio) are $2 off",
            time: "4-7",
            link: 'https://perryssteakhouse.com/locations/tx/austin/domain-northside/#'
        },
        {
            restaurant: "Sour Duck Market",
            location: "East Side",
            special:
                "$6 burger (add pilsner or tiny marg for $4), $6 paloma and mule",
            time: "3-6",
            link: "https://www.sourduckmarket.com/"
        },
        {
            restaurant: "Foxhole Tavern",
            location: "North",
            special: "$5 tacos, house wine $7",
            time: "3-9",
            link: "https://foxholeaustin.com/austin-foxhole-culinary-tavern-happy-hours-specials"
        },
        {
            restaurant: "Juliet",
            location: "North",
            special: "$10-$14 mains, $6 electric jellyfish",
            time: "3-6",
            link: 'https://www.juliet-austin.com/arboretum-menu#menu=happy-hour-ordering'
        },
        {
            restaurant: "Uchiba",
            location: "Downtown",
            special: "Lots of $10 drinks and food",
            time: "4-530",
            link: 'https://uchiba.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_skewers'
        },
        {
            restaurant: "Hanks",
            location: "Central",
            special: "$7 frozen and tap cocktails, $7 wine",
            time: "4-530",
            link: 'https://www.hanksaustin.com/menus'
        },
        {
            restaurant: "Bulevar",
            location: "North",
            special: "$10 margaritas, $5 drafts, $10 small plates",
            time: "4-6",
            link: 'https://static1.squarespace.com/static/62333906295dd653f0079bad/t/64e5061b437ca00203e4b70c/1692730907414/Bulevar_HHMenu_8.15.23.pdf'
        },
        {
            restaurant: "Salty Sow",
            location: "Central",
            special: "$6-8 tacos, fries, fried chicken",
            time: "430-630",
            link: 'https://www.saltysow.com/menus/SSM_Menu.pdf'
        },
        {
            restaurant: "Loro",
            location: "North",
            special: "$6 specialty bites, under $10 sandwiches, $5 slushes, $5 cocktails/wine/sake",
            time: "2-5",
            link: 'https://www.loroeats.com/locations/austin/south-lamar/menu/'
        },
        {
            restaurant: "Uchkio",
            location: "Central",
            special: "~$10 small plates",
            time: "4-6",
            link: 'https://uchiko.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_nigiri-2-pc'
        },
        {
            restaurant: "Peached Tortilla",
            location: "Central",
            special: "Patio only -- $5 beer, $7 cocktails, $4.50 tacos, $6 snacks, $9 burger. ",
            time: "5-7",
            link: 'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/64c9c2bce8660221b0192e52/1690944188263/SocialHour_Menu-08_2023-web.pdf'
        },
        {
            restaurant: "Comedor",
            location: "Downtown",
            special: "$5 tacos, $8 margarita",
            time: "5-630",
            link: 'https://comedortx.com/menu/'
        },
        {
            restaurant: "Nomade",
            location: "South 1st/Lamar",
            special: "$5 drinks, $5-10 starters",
            time: "430-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            restaurant: "Luties",
            location: "Central",
            special: "unknown",
            time: "5-6",
            link: 'https://www.luties.com/menu-2/'
        },
        {
            restaurant: "gracia",
            location: "Central",
            special: "Half price sangria and spritz, half price hummus and flat bread",
            time: "5-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            restaurant: "gracia",
            location: "Central",
            special: "Half price classic and house cocktails",
            time: "9-11",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            restaurant: "Cedro",
            location: "North",
            special: "$9 half pizza, $6 meatballs, $8 risotto balls, etc",
            time: "3-6",
            link: 'https://www.wuchowaustin.com/north-lamar-menu/'
        },
        {
            restaurant: "Backspace Pizza",
            location: "Central",
            special: "1/2 off house cocktails, beer, wine, antipasti",
            time: "4-6",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            restaurant: "Lucky Robot",
            location: "South 1st/Lamar",
            special: "Half off lots of food",
            time: "430-530",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            restaurant: "Central Machine Works",
            location: "East Side",
            special: "$5 pints and pretzels, $15 pitchers and cheese/pepperoni pizza",
            time: "9pm to close",
            link: 'https://www.cmwbrewery.com/menu'
        },
    ],
    friday: [
        {
            restaurant: "Double Trouble",
            location: "Central",
            special: "unknown",
            time: "3-6",
            link: 'https://www.instagram.com/double_trouble_atx/?hl=en'
        },
        {
            restaurant: "Kinda Tropical",
            location: "East Side",
            special: "$8 frozens, $9 burger, $8 chicken sandwich",
            time: "3-6",
            link: 'https://kindatropical.com/menu/'
        },
        {
            restaurant: "Oseyo",
            location: "East Side",
            special: "Lots of discounted food and drinks",
            time: "430-630",
            link: 'https://www.oseyoaustin.com/happy-hour'
        },
        {
            restaurant: "Perry's Bar 79",
            location: "North",
            special: "Cocktails (including mini martini trio) are $2 off",
            time: "4-7",
            link: 'https://perryssteakhouse.com/locations/tx/austin/domain-northside/#'
        },
        {
            restaurant: "Sour Duck Market",
            location: "East Side",
            special:
                "$6 burger (add pilsner or tiny marg for $4), $6 paloma and mule",
            time: "3-6",
            link: "https://www.sourduckmarket.com/"
        },
        {
            restaurant: "Juliet",
            location: "North",
            special: "$10-$14 mains, $6 electric jellyfish",
            time: "3-6",
            link: 'https://www.juliet-austin.com/arboretum-menu#menu=happy-hour-ordering'
        },
        {
            restaurant: "Uchiba",
            location: "Downtown",
            special: "Lots of $10 drinks and food",
            time: "4-530",
            link: 'https://uchiba.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_skewers'
        },
        {
            restaurant: "Hanks",
            location: "Central",
            special: "$7 frozen and tap cocktails, $7 wine",
            time: "4-530",
            link: 'https://www.hanksaustin.com/menus'
        },
        {
            restaurant: "Bulevar",
            location: "North",
            special: "$10 margaritas, $5 drafts, $10 small plates",
            time: "4-6",
            link: 'https://static1.squarespace.com/static/62333906295dd653f0079bad/t/64e5061b437ca00203e4b70c/1692730907414/Bulevar_HHMenu_8.15.23.pdf'
        },
        {
            restaurant: "Salty Sow",
            location: "Central",
            special: "$6-8 tacos, fries, fried chicken",
            time: "430-630",
            link: 'https://www.saltysow.com/menus/SSM_Menu.pdf'
        },
        {
            restaurant: "Loro",
            location: "North",
            special: "$6 specialty bites, under $10 sandwiches, $5 slushes, $5 cocktails/wine/sake",
            time: "2-5",
            link: 'https://www.loroeats.com/locations/austin/south-lamar/menu/'
        },
        {
            restaurant: "Uchkio",
            location: "Central",
            special: "~$10 small plates",
            time: "4-6",
            link: 'https://uchiko.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_nigiri-2-pc'
        },
        {
            restaurant: "Peached Tortilla",
            location: "Central",
            special: "Patio only -- $5 beer, $7 cocktails, $4.50 tacos, $6 snacks, $9 burger. ",
            time: "5-7",
            link: 'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/64c9c2bce8660221b0192e52/1690944188263/SocialHour_Menu-08_2023-web.pdf'
        },
        {
            restaurant: "Comedor",
            location: "Downtown",
            special: "$5 tacos, $8 margarita",
            time: "5-630",
            link: 'https://comedortx.com/menu/'
        },
        {
            restaurant: "Nomade",
            location: "South 1st/Lamar",
            special: "$5 drinks, $5-10 starters",
            time: "430-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            restaurant: "Luties",
            location: "Central",
            special: "unknown",
            time: "5-6",
            link: 'https://www.luties.com/menu-2/'
        },
        {
            restaurant: "gracia",
            location: "Central",
            special: "Half price sangria and spritz, half price hummus and flat bread",
            time: "5-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            restaurant: "Cedro",
            location: "North",
            special: "$9 half pizza, $6 meatballs, $8 risotto balls, etc",
            time: "3-6",
            link: 'https://www.wuchowaustin.com/north-lamar-menu/'
        },
        {
            restaurant: "Backspace Pizza",
            location: "Central",
            special: "1/2 off house cocktails, beer, wine, antipasti",
            time: "4-6",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            restaurant: "Lucky Robot",
            location: "South 1st/Lamar",
            special: "Half off lots of food",
            time: "430-530",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
    ],
    saturday: [
        {
            restaurant: "Oseyo",
            location: "East Side",
            special: "Lots of discounted food and drinks",
            time: "430-630",
            link: 'https://www.oseyoaustin.com/happy-hour'
        },
        {
            restaurant: "Perry's Bar 79",
            location: "North",
            special: "Cocktails (including mini martini trio) are $2 off",
            time: "4-7",
            link: 'https://perryssteakhouse.com/locations/tx/austin/domain-northside/#'
        },
        {
            restaurant: "Sour Duck Market",
            location: "East Side",
            special:
                "$6 burger (add pilsner or tiny marg for $4), $6 paloma and mule",
            time: "3-6",
            link: "https://www.sourduckmarket.com/"
        },
        {
            restaurant: "Juliet",
            location: "North",
            special: "$10-$14 mains, $6 electric jellyfish",
            time: "3-6",
            link: 'https://www.juliet-austin.com/arboretum-menu#menu=happy-hour-ordering'
        },
        {
            restaurant: "Hanks",
            location: "Central",
            special: "$7 frozen and tap cocktails, $7 wine",
            time: "4-530",
            link: 'https://www.hanksaustin.com/menus'
        },
        {
            restaurant: "Bulevar",
            location: "North",
            special: "$10 margaritas, $5 drafts, $10 small plates",
            time: "4-6",
            link: 'https://static1.squarespace.com/static/62333906295dd653f0079bad/t/64e5061b437ca00203e4b70c/1692730907414/Bulevar_HHMenu_8.15.23.pdf'
        },
        {
            restaurant: "Salty Sow",
            location: "Central",
            special: "$6-8 tacos, fries, fried chicken",
            time: "430-630",
            link: 'https://www.saltysow.com/menus/SSM_Menu.pdf'
        },
        {
            restaurant: "Uchkio",
            location: "Central",
            special: "~$10 small plates",
            time: "4-6",
            link: 'https://uchiko.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_nigiri-2-pc'
        },
        {
            restaurant: "Peached Tortilla",
            location: "Central",
            special: "Patio only -- $5 beer, $7 cocktails, $4.50 tacos, $6 snacks, $9 burger. ",
            time: "5-7",
            link: 'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/64c9c2bce8660221b0192e52/1690944188263/SocialHour_Menu-08_2023-web.pdf'
        },
        {
            restaurant: "Luties",
            location: "Central",
            special: "unknown",
            time: "5-6",
            link: 'https://www.luties.com/menu-2/'
        },
        {
            restaurant: "Backspace Pizza",
            location: "Central",
            special: "1/2 off house cocktails, beer, wine, antipasti",
            time: "4-6",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
    ],
    sunday: [
        {
            restaurant: "Dig Pub",
            location: "Cedar Park",
            special: "Select texas pints are $3.75",
            time: "all day",
            link: "https://thedigpub.com/specials/"
        },
        {
            restaurant: "Perry's Bar 79",
            location: "North",
            special: "Cocktails (including mini martini trio) are $2 off",
            time: "4-9",
            link: 'https://perryssteakhouse.com/locations/tx/austin/domain-northside/#'
        },
        {
            restaurant: "Sour Duck Market",
            location: "East Side",
            special:
                "$6 burger (add pilsner or tiny marg for $4), $6 paloma and mule",
            time: "3-6",
            link: "https://www.sourduckmarket.com/"
        },
        {
            restaurant: "Foxhole Tavern",
            location: "North",
            special: "$5 tacos, house wine $7",
            time: "3-10",
            link: "https://foxholeaustin.com/austin-foxhole-culinary-tavern-happy-hours-specials"
        },
        {
            restaurant: "Juliet",
            location: "North",
            special: "$10-$14 mains, $6 electric jellyfish",
            time: "3-6",
            link: 'https://www.juliet-austin.com/arboretum-menu#menu=happy-hour-ordering'
        },
        {
            restaurant: "Hanks",
            location: "Central",
            special: "$7 frozen and tap cocktails, $7 wine",
            time: "4-530",
            link: 'https://www.hanksaustin.com/menus'
        },
        {
            restaurant: "Bulevar",
            location: "North",
            special: "$10 margaritas, $5 drafts, $10 small plates",
            time: "4-6",
            link: 'https://static1.squarespace.com/static/62333906295dd653f0079bad/t/64e5061b437ca00203e4b70c/1692730907414/Bulevar_HHMenu_8.15.23.pdf'
        },
        {
            restaurant: "Salty Sow",
            location: "Central",
            special: "$6-8 tacos, fries, fried chicken",
            time: "430-630",
            link: 'https://www.saltysow.com/menus/SSM_Menu.pdf'
        },
        {
            restaurant: "Uchkio",
            location: "Central",
            special: "~$10 small plates",
            time: "4-6",
            link: 'https://uchiko.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_nigiri-2-pc'
        },
        {
            restaurant: "Peached Tortilla",
            location: "Central",
            special: "Patio only -- $5 beer, $7 cocktails, $4.50 tacos, $6 snacks, $9 burger. ",
            time: "5-7",
            link: 'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/64c9c2bce8660221b0192e52/1690944188263/SocialHour_Menu-08_2023-web.pdf'
        },
        {
            restaurant: "Luties",
            location: "Central",
            special: "unknown",
            time: "5-6",
            link: 'https://www.luties.com/menu-2/'
        },
        {
            restaurant: "Backspace Pizza",
            location: "Central",
            special: "1/2 off house cocktails, beer, wine, antipasti",
            time: "4-6",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
    ],
};
