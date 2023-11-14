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
    name: string;
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
            name: "Vic and Al's",
            location: "Central",
            special: "Gumbo $6, Red Beans and Rice $5, Red Bean Fritters $5, under $7 drinks",
            time: "3-6",
            link: 'https://www.vicandals.com/menu'
        },
        {
            name: "Mama Betty's",
            location: "North",
            special: " 1/2 off: Chile Con Questo | Queso Flameado | Flautitas De Pollo | Crispy Taco Plates | Soft Taco Plates • $6.00 Frozen MamaRitas & La Playas",
            time: "3-6",
            link: 'https://ilovemamabettys.com/austin-mama-betty-s-tex-mex-y-cantina-happy-hours-specials'
        },
        {
            name: "Habana",
            location: "South 1st/Lamar",
            special: "$7 specialty cocktails, discounted snacks",
            time: "3-6",
            link: 'https://static1.squarespace.com/static/650cf7d2f0091c14ae80b62d/t/65132b0d37894d64fb6bdfb8/1695755033091/Menu'
        },
        {
            name: "El Chile",
            location: "Central",
            special: "unknown",
            time: "3-530",
            link: 'https://static1.squarespace.com/static/63321e1b2b22be1880c25124/t/64e3afc5cbacc8290e046f65/1692643282895/MENU2023-ELCHILECAFE.pdf'
        },
        {
            name: "Kelly's Irish Pub",
            location: "South 1st/Lamar",
            special: "Dubliner Burger & Pint of Harp for $15",
            time: "2-12AM",
            link: 'https://kellysirishpubatx.com/austin-kelly-s-irish-pub-happy-hours-specials'
        },
        {
            name: "Swift's Attic",
            location: "Downtown",
            special: "Under $10 snacks and cocktails",
            time: "4-530",
            link: 'https://swiftsattic.com/happy-hour'
        },
        {
            name: "Double Trouble",
            location: "Central",
            special: "unknown",
            time: "3-6",
            link: 'https://www.instagram.com/double_trouble_atx/?hl=en'
        },
        {
            name: "Kinda Tropical",
            location: "East Side",
            special: "$8 frozens, $9 burger, $8 chicken sandwich",
            time: "3-6",
            link: 'https://kindatropical.com/menu/'
        },
        {
            name: "Garbo's",
            location: "North",
            special: "Fish and chips - $14",
            time: "all day",
            link: 'https://www.garboslobsteratx.com/menu'
        },
        {
            name: "Perry's Bar 79",
            location: "North",
            special: "Cocktails (including mini martini trio) are $2 off",
            time: "4-7 M-F",
            link: 'https://perryssteakhouse.com/locations/tx/austin/domain-northside/#'
        },
        {
            name: "Juliet",
            location: "North",
            special: "$10-$14 mains, $6 electric jellyfish",
            time: "3-6 M-F",
            link: 'https://www.juliet-austin.com/arboretum-menu#menu=happy-hour-ordering'
        },
        {
            name: "Uchiba",
            location: "Downtown",
            special: "Lots of $10 drinks and food",
            time: "4-530",
            link: 'https://uchiba.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_skewers'
        },
        {
            name: "Hanks",
            location: "Central",
            special: "1/2 off all burgers (11am - 10pm), $7 frozen and tap cocktails, $7 wine",
            time: "4-530",
            link: 'https://www.hanksaustin.com/menus'
        },
        {
            name: "Bulevar",
            location: "North",
            special: "$10 margaritas, $5 drafts, $10 small plates",
            time: "all night bar top, 5-6 patio/lounge",
            link: 'https://static1.squarespace.com/static/62333906295dd653f0079bad/t/64e5061b437ca00203e4b70c/1692730907414/Bulevar_HHMenu_8.15.23.pdf'
        },
        {
            name: "Salty Sow",
            location: "Central",
            special: "$6-8 tacos, fries, fried chicken",
            time: "430-630",
            link: 'https://www.saltysow.com/menus/SSM_Menu.pdf'
        },
        {
            name: "Loro",
            location: "North",
            special: "$6 specialty bites, under $10 sandwiches, $5 slushes, $5 cocktails/wine/sake",
            time: "2-5",
            link: 'https://www.loroeats.com/locations/austin/south-lamar/menu/'
        },
        {
            name: "Uchkio",
            location: "Central",
            special: "~$10 small plates",
            time: "4-6",
            link: 'https://uchiko.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_nigiri-2-pc'
        },
        {
            name: "Comedor",
            location: "Downtown",
            special: "$5 tacos, $8 margarita",
            time: "5-630",
            link: 'https://comedortx.com/menu/'
        },
        {
            name: "Nomade",
            location: "South 1st/Lamar",
            special: "$5 drinks, $5-10 starters",
            time: "430-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            name: "Wu Chow",
            location: "Central",
            special: "Patio/cocktail area only -- $10 cocktails and $7 skewers",
            time: "430-6",
            link: 'https://www.wuchowaustin.com/north-lamar-menu/'
        },
        {
            name: "Cedro",
            location: "North",
            special: "$9 half pizza, $6 meatballs, $8 risotto balls, etc",
            time: "3-6",
            link: 'https://www.wuchowaustin.com/north-lamar-menu/'
        },
        {
            name: "Backspace Pizza",
            location: "Central",
            special: "1/2 off house cocktails, beer, wine, antipasti",
            time: "4-6",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            name: "Lucky Robot",
            location: "South 1st/Lamar",
            special: "Half off lots of food",
            time: "430-530",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
    ],
    tuesday: [
        {
            name: "Vic and Al's",
            location: "Central",
            special: "Gumbo $6, Red Beans and Rice $5, Red Bean Fritters $5, under $7 drinks",
            time: "3-6",
            link: 'https://www.vicandals.com/menu'
        },
        {
            name: "Mama Betty's",
            location: "North",
            special: " 1/2 off: Chile Con Questo | Queso Flameado | Flautitas De Pollo | Crispy Taco Plates | Soft Taco Plates • $6.00 Frozen MamaRitas & La Playas",
            time: "3-6",
            link: 'https://ilovemamabettys.com/austin-mama-betty-s-tex-mex-y-cantina-happy-hours-specials'
        },
        {
            name: "Habana",
            location: "South 1st/Lamar",
            special: "$7 specialty cocktails, discounted snacks",
            time: "3-6",
            link: 'https://static1.squarespace.com/static/650cf7d2f0091c14ae80b62d/t/65132b0d37894d64fb6bdfb8/1695755033091/Menu'
        },
        {
            name: "El Chile",
            location: "Central",
            special: "unknown",
            time: "3-530",
            link: 'https://static1.squarespace.com/static/63321e1b2b22be1880c25124/t/64e3afc5cbacc8290e046f65/1692643282895/MENU2023-ELCHILECAFE.pdf'
        },
        {
            name: "Curra's",
            location: "Central",
            special: "$8 street tacos",
            time: "4-9",
            link: 'https://currashydepark.com/austin-hyde-park-curra-s-hyde-park-happy-hours-specials'
        },
        {
            name: "Swift's Attic",
            location: "Downtown",
            special: "Under $10 snacks and cocktails",
            time: "4-530",
            link: 'https://swiftsattic.com/happy-hour'
        },
        {
            name: "Double Trouble",
            location: "Central",
            special: "unknown",
            time: "3-6",
            link: 'https://www.instagram.com/double_trouble_atx/?hl=en'
        },
        {
            name: "Kinda Tropical",
            location: "East Side",
            special: "$8 frozens, $9 burger, $8 chicken sandwich",
            time: "3-6",
            link: 'https://kindatropical.com/menu/'
        },
        {
            name: "Oseyo",
            location: "East Side",
            special: "Lots of discounted food and drinks",
            time: "430-630",
            link: 'https://www.oseyoaustin.com/happy-hour'
        },
        {
            name: "Perry's Bar 79",
            location: "North",
            special: "Cocktails (including mini martini trio) are $2 off",
            time: "4-7",
            link: 'https://perryssteakhouse.com/locations/tx/austin/domain-northside/#'
        },
        {
            name: "Foxhole Tavern",
            location: "North",
            special: "$5 tacos, house wine $7",
            time: "3-9",
            link: "https://foxholeaustin.com/austin-foxhole-culinary-tavern-happy-hours-specials"
        },
        {
            name: "Juliet",
            location: "North",
            special: "$10-$14 mains, $6 electric jellyfish",
            time: "3-6",
            link: 'https://www.juliet-austin.com/arboretum-menu#menu=happy-hour-ordering'
        },
        {
            name: "Uchiba",
            location: "Downtown",
            special: "Lots of $10 drinks and food",
            time: "4-530",
            link: 'https://uchiba.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_skewers'
        },
        {
            name: "Hanks",
            location: "Central",
            special: "$7 frozen and tap cocktails, $7 wine",
            time: "4-530",
            link: 'https://www.hanksaustin.com/menus'
        },
        {
            name: "Bulevar",
            location: "North",
            special: "$10 margaritas, $5 drafts, $10 small plates",
            time: "all night bar top, 5-6 patio/lounge",
            link: 'https://static1.squarespace.com/static/62333906295dd653f0079bad/t/64e5061b437ca00203e4b70c/1692730907414/Bulevar_HHMenu_8.15.23.pdf'
        },
        {
            name: "Salty Sow",
            location: "Central",
            special: "$6-8 tacos, fries, fried chicken",
            time: "430-630",
            link: 'https://www.saltysow.com/menus/SSM_Menu.pdf'
        },
        {
            name: "Loro",
            location: "North",
            special: "$6 specialty bites, under $10 sandwiches, $5 slushes, $5 cocktails/wine/sake",
            time: "2-5",
            link: 'https://www.loroeats.com/locations/austin/south-lamar/menu/'
        },
        {
            name: "Uchkio",
            location: "Central",
            special: "~$10 small plates",
            time: "4-6",
            link: 'https://uchiko.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_nigiri-2-pc'
        },
        {
            name: "Peached Tortilla",
            location: "Central",
            special: "Patio only -- $5 beer, $7 cocktails, $4.50 tacos, $6 snacks, $9 burger. ",
            time: "5-7",
            link: 'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/64c9c2bce8660221b0192e52/1690944188263/SocialHour_Menu-08_2023-web.pdf'
        },
        {
            name: "Peached Tortilla",
            location: "Central",
            special: "Anywhere -- tacos a la carte for $4.50",
            time: "all day",
            link:  'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/6463ec21b11c8d73655eaa6e/1684270113435/TacoTuesday-05_2023-web.pdf'
        },
        {
            name: "Comedor",
            location: "Downtown",
            special: "$5 tacos, $8 margarita",
            time: "5-630",
            link: 'https://comedortx.com/menu/'
        },
        {
            name: "Nomade",
            location: "South 1st/Lamar",
            special: "$5 drinks, $5-10 starters",
            time: "430-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            name: "gracia",
            location: "Central",
            special: "Half price sangria and spritz, half price hummus and flat bread",
            time: "5-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            name: "Cedro",
            location: "North",
            special: "BOGO pizza night, $9 half pizza, $6 meatballs, $8 risotto balls, etc",
            time: "3-6",
            link: 'https://www.wuchowaustin.com/north-lamar-menu/'
        },
        {
            name: "Backspace Pizza",
            location: "Central",
            special: "1/2 off house cocktails, beer, wine, antipasti",
            time: "4-6",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            name: "Lucky Robot",
            location: "South 1st/Lamar",
            special: "Half off lots of food",
            time: "430-530",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            name: "Central Machine Works",
            location: "East Side",
            special: "$5 pints and pretzels, $15 pitchers and cheese/pepperoni pizza",
            time: "9pm to close",
            link: 'https://www.cmwbrewery.com/menu'
        },
    ],
    wednesday: [
        {
            name: "Vic and Al's",
            location: "Central",
            special: "Gumbo $6, Red Beans and Rice $5, Red Bean Fritters $5, under $7 drinks",
            time: "3-6",
            link: 'https://www.vicandals.com/menu'
        },
        {
            name: "Mama Betty's",
            location: "North",
            special: " 1/2 off: Chile Con Questo | Queso Flameado | Flautitas De Pollo | Crispy Taco Plates | Soft Taco Plates • $6.00 Frozen MamaRitas & La Playas",
            time: "3-6",
            link: 'https://ilovemamabettys.com/austin-mama-betty-s-tex-mex-y-cantina-happy-hours-specials'
        },
        {
            name: "Habana",
            location: "South 1st/Lamar",
            special: "$7 specialty cocktails, discounted snacks",
            time: "3-6",
            link: 'https://static1.squarespace.com/static/650cf7d2f0091c14ae80b62d/t/65132b0d37894d64fb6bdfb8/1695755033091/Menu'
        },
        {
            name: "El Chile",
            location: "Central",
            special: "unknown",
            time: "3-530",
            link: 'https://static1.squarespace.com/static/63321e1b2b22be1880c25124/t/64e3afc5cbacc8290e046f65/1692643282895/MENU2023-ELCHILECAFE.pdf'
        },
        {
            name: "Swift's Attic",
            location: "Downtown",
            special: "Under $10 snacks and cocktails",
            time: "4-530",
            link: 'https://swiftsattic.com/happy-hour'
        },
        {
            name: "Double Trouble",
            location: "Central",
            special: "unknown",
            time: "3-6",
            link: 'https://www.instagram.com/double_trouble_atx/?hl=en'
        },
        {
            name: "Kinda Tropical",
            location: "East Side",
            special: "$8 frozens, $9 burger, $8 chicken sandwich",
            time: "3-6",
            link: 'https://kindatropical.com/menu/'
        },
        {
            name: "Oseyo",
            location: "East Side",
            special: "Lots of discounted food and drinks",
            time: "430-630",
            link: 'https://www.oseyoaustin.com/happy-hour'
        },
        {
            name: "Perry's Bar 79",
            location: "North",
            special: "Cocktails (including mini martini trio) are $2 off",
            time: "4-7",
            link: 'https://perryssteakhouse.com/locations/tx/austin/domain-northside/#'
        },
        {
            name: "Sour Duck Market",
            location: "East Side",
            special:
                "$6 burger (add pilsner or tiny marg for $4), $6 paloma and mule",
            time: "3-6",
            link: "https://www.sourduckmarket.com/"
        },
        {
            name: "Juliet",
            location: "North",
            special: "$10-$14 mains, $6 electric jellyfish",
            time: "3-6",
            link: 'https://www.juliet-austin.com/arboretum-menu#menu=happy-hour-ordering'
        },
        {
            name: "Uchiba",
            location: "Downtown",
            special: "Lots of $10 drinks and food",
            time: "4-530",
            link: 'https://uchiba.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_skewers'
        },
        {
            name: "Hanks",
            location: "Central",
            special: "$7 frozen and tap cocktails, $7 wine",
            time: "4-530",
            link: 'https://www.hanksaustin.com/menus'
        },
        {
            name: "Bulevar",
            location: "North",
            special: "$10 margaritas, $5 drafts, $10 small plates",
            time: "5-6",
            link: 'https://static1.squarespace.com/static/62333906295dd653f0079bad/t/64e5061b437ca00203e4b70c/1692730907414/Bulevar_HHMenu_8.15.23.pdf'
        },
        {
            name: "Salty Sow",
            location: "Central",
            special: "$6-8 tacos, fries, fried chicken",
            time: "430-630",
            link: 'https://www.saltysow.com/menus/SSM_Menu.pdf'
        },
        {
            name: "Loro",
            location: "North",
            special: "$6 specialty bites, under $10 sandwiches, $5 slushes, $5 cocktails/wine/sake",
            time: "2-5",
            link: 'https://www.loroeats.com/locations/austin/south-lamar/menu/'
        },
        {
            name: "Uchkio",
            location: "Central",
            special: "~$10 small plates",
            time: "4-6",
            link: 'https://uchiko.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_nigiri-2-pc'
        },
        {
            name: "Peached Tortilla",
            location: "Central",
            special: "Patio only -- $5 beer, $7 cocktails, $4.50 tacos, $6 snacks, $9 burger. ",
            time: "5-7",
            link: 'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/64c9c2bce8660221b0192e52/1690944188263/SocialHour_Menu-08_2023-web.pdf'
        },
        {
            name: "Peached Tortilla",
            location: "Central",
            special: "Anywhere -- fried chicken meal, $19 and whiskey cocktail for $10",
            time: "all day",
            link: 'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/647feec434f8674392638723/1686105796688/ChickenWhiskeyMenu-06_2023-web.pdf'
        },
        {
            name: "Comedor",
            location: "Downtown",
            special: "$5 tacos, $8 margarita",
            time: "5-630",
            link: 'https://comedortx.com/menu/'
        },
        {
            name: "Nomade",
            location: "South 1st/Lamar",
            special: "$5 drinks, $5-10 starters",
            time: "430-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            name: "gracia",
            location: "Central",
            special: "Half price sangria and spritz, half price hummus and flat bread",
            time: "5-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            name: "Cedro",
            location: "North",
            special: "$9 half pizza, $6 meatballs, $8 risotto balls, etc",
            time: "3-6",
            link: 'https://www.wuchowaustin.com/north-lamar-menu/'
        },
        {
            name: "Backspace Pizza",
            location: "Central",
            special: "1/2 off house cocktails, beer, wine, antipasti",
            time: "4-6",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            name: "Lucky Robot",
            location: "South 1st/Lamar",
            special: "Half off lots of food",
            time: "430-530",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            name: "Central Machine Works",
            location: "East Side",
            special: "$5 pints and pretzels, $15 pitchers and cheese/pepperoni pizza",
            time: "9pm to close",
            link: 'https://www.cmwbrewery.com/menu'
        },
    ],
    thursday: [
        {
            name: "Vic and Al's",
            location: "Central",
            special: "Gumbo $6, Red Beans and Rice $5, Red Bean Fritters $5, under $7 drinks",
            time: "3-6",
            link: 'https://www.vicandals.com/menu'
        },
        {
            name: "Mama Betty's",
            location: "North",
            special: " 1/2 off: Chile Con Questo | Queso Flameado | Flautitas De Pollo | Crispy Taco Plates | Soft Taco Plates • $6.00 Frozen MamaRitas & La Playas",
            time: "3-6",
            link: 'https://ilovemamabettys.com/austin-mama-betty-s-tex-mex-y-cantina-happy-hours-specials'
        },
        {
            name: "Habana",
            location: "South 1st/Lamar",
            special: "$7 specialty cocktails, discounted snacks",
            time: "3-6",
            link: 'https://static1.squarespace.com/static/650cf7d2f0091c14ae80b62d/t/65132b0d37894d64fb6bdfb8/1695755033091/Menu'
        },
        {
            name: "El Chile",
            location: "Central",
            special: "unknown",
            time: "3-530",
            link: 'https://static1.squarespace.com/static/63321e1b2b22be1880c25124/t/64e3afc5cbacc8290e046f65/1692643282895/MENU2023-ELCHILECAFE.pdf'
        },
        {
            name: "Swift's Attic",
            location: "Downtown",
            special: "Under $10 snacks and cocktails",
            time: "4-530",
            link: 'https://swiftsattic.com/happy-hour'
        },
        {
            name: "Double Trouble",
            location: "Central",
            special: "unknown",
            time: "3-6",
            link: 'https://www.instagram.com/double_trouble_atx/?hl=en'
        },
        {
            name: "Kinda Tropical",
            location: "East Side",
            special: "$8 frozens, $9 burger, $8 chicken sandwich",
            time: "3-6",
            link: 'https://kindatropical.com/menu/'
        },
        {
            name: "Oseyo",
            location: "East Side",
            special: "Lots of discounted food and drinks",
            time: "all day",
            link: 'https://www.oseyoaustin.com/happy-hour'
        },
        {
            name: "Perry's Bar 79",
            location: "North",
            special: "Cocktails (including mini martini trio) are $2 off",
            time: "4-7",
            link: 'https://perryssteakhouse.com/locations/tx/austin/domain-northside/#'
        },
        {
            name: "Sour Duck Market",
            location: "East Side",
            special:
                "$6 burger (add pilsner or tiny marg for $4), $6 paloma and mule",
            time: "3-6",
            link: "https://www.sourduckmarket.com/"
        },
        {
            name: "Foxhole Tavern",
            location: "North",
            special: "$5 tacos, house wine $7",
            time: "3-9",
            link: "https://foxholeaustin.com/austin-foxhole-culinary-tavern-happy-hours-specials"
        },
        {
            name: "Juliet",
            location: "North",
            special: "$10-$14 mains, $6 electric jellyfish",
            time: "3-6",
            link: 'https://www.juliet-austin.com/arboretum-menu#menu=happy-hour-ordering'
        },
        {
            name: "Uchiba",
            location: "Downtown",
            special: "Lots of $10 drinks and food",
            time: "4-530",
            link: 'https://uchiba.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_skewers'
        },
        {
            name: "Hanks",
            location: "Central",
            special: "$7 frozen and tap cocktails, $7 wine",
            time: "4-530",
            link: 'https://www.hanksaustin.com/menus'
        },
        {
            name: "Bulevar",
            location: "North",
            special: "$10 margaritas, $5 drafts, $10 small plates",
            time: "4-6",
            link: 'https://static1.squarespace.com/static/62333906295dd653f0079bad/t/64e5061b437ca00203e4b70c/1692730907414/Bulevar_HHMenu_8.15.23.pdf'
        },
        {
            name: "Salty Sow",
            location: "Central",
            special: "$6-8 tacos, fries, fried chicken",
            time: "430-630",
            link: 'https://www.saltysow.com/menus/SSM_Menu.pdf'
        },
        {
            name: "Loro",
            location: "North",
            special: "$6 specialty bites, under $10 sandwiches, $5 slushes, $5 cocktails/wine/sake",
            time: "2-5",
            link: 'https://www.loroeats.com/locations/austin/south-lamar/menu/'
        },
        {
            name: "Uchkio",
            location: "Central",
            special: "~$10 small plates",
            time: "4-6",
            link: 'https://uchiko.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_nigiri-2-pc'
        },
        {
            name: "Peached Tortilla",
            location: "Central",
            special: "Patio only -- $5 beer, $7 cocktails, $4.50 tacos, $6 snacks, $9 burger. ",
            time: "5-7",
            link: 'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/64c9c2bce8660221b0192e52/1690944188263/SocialHour_Menu-08_2023-web.pdf'
        },
        {
            name: "Comedor",
            location: "Downtown",
            special: "$5 tacos, $8 margarita",
            time: "5-630",
            link: 'https://comedortx.com/menu/'
        },
        {
            name: "Nomade",
            location: "South 1st/Lamar",
            special: "$5 drinks, $5-10 starters",
            time: "430-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            name: "Luties",
            location: "Central",
            special: "unknown",
            time: "5-6",
            link: 'https://www.luties.com/menu-2/'
        },
        {
            name: "gracia",
            location: "Central",
            special: "Half price sangria and spritz, half price hummus and flat bread",
            time: "5-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            name: "gracia",
            location: "Central",
            special: "Half price classic and house cocktails",
            time: "9-11",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            name: "Cedro",
            location: "North",
            special: "$9 half pizza, $6 meatballs, $8 risotto balls, etc",
            time: "3-6",
            link: 'https://www.wuchowaustin.com/north-lamar-menu/'
        },
        {
            name: "Backspace Pizza",
            location: "Central",
            special: "1/2 off house cocktails, beer, wine, antipasti",
            time: "4-6",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            name: "Lucky Robot",
            location: "South 1st/Lamar",
            special: "Half off lots of food",
            time: "430-530",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            name: "Central Machine Works",
            location: "East Side",
            special: "$5 pints and pretzels, $15 pitchers and cheese/pepperoni pizza",
            time: "9pm to close",
            link: 'https://www.cmwbrewery.com/menu'
        },
    ],
    friday: [
        {
            name: "Vic and Al's",
            location: "Central",
            special: "Gumbo $6, Red Beans and Rice $5, Red Bean Fritters $5, under $7 drinks",
            time: "3-6",
            link: 'https://www.vicandals.com/menu'
        },
        {
            name: "Mama Betty's",
            location: "North",
            special: " 1/2 off: Chile Con Questo | Queso Flameado | Flautitas De Pollo | Crispy Taco Plates | Soft Taco Plates • $6.00 Frozen MamaRitas & La Playas",
            time: "3-6",
            link: 'https://ilovemamabettys.com/austin-mama-betty-s-tex-mex-y-cantina-happy-hours-specials'
        },
        {
            name: "Habana",
            location: "South 1st/Lamar",
            special: "$7 specialty cocktails, discounted snacks",
            time: "3-6",
            link: 'https://static1.squarespace.com/static/650cf7d2f0091c14ae80b62d/t/65132b0d37894d64fb6bdfb8/1695755033091/Menu'
        },
        {
            name: "El Chile",
            location: "Central",
            special: "unknown",
            time: "3-530",
            link: 'https://static1.squarespace.com/static/63321e1b2b22be1880c25124/t/64e3afc5cbacc8290e046f65/1692643282895/MENU2023-ELCHILECAFE.pdf'
        },
        {
            name: "Swift's Attic",
            location: "Downtown",
            special: "Under $10 snacks and cocktails",
            time: "4-530",
            link: 'https://swiftsattic.com/happy-hour'
        },
        {
            name: "Double Trouble",
            location: "Central",
            special: "unknown",
            time: "3-6",
            link: 'https://www.instagram.com/double_trouble_atx/?hl=en'
        },
        {
            name: "Kinda Tropical",
            location: "East Side",
            special: "$8 frozens, $9 burger, $8 chicken sandwich",
            time: "3-6",
            link: 'https://kindatropical.com/menu/'
        },
        {
            name: "Oseyo",
            location: "East Side",
            special: "Lots of discounted food and drinks",
            time: "430-630",
            link: 'https://www.oseyoaustin.com/happy-hour'
        },
        {
            name: "Perry's Bar 79",
            location: "North",
            special: "Cocktails (including mini martini trio) are $2 off",
            time: "4-7",
            link: 'https://perryssteakhouse.com/locations/tx/austin/domain-northside/#'
        },
        {
            name: "Sour Duck Market",
            location: "East Side",
            special:
                "$6 burger (add pilsner or tiny marg for $4), $6 paloma and mule",
            time: "3-6",
            link: "https://www.sourduckmarket.com/"
        },
        {
            name: "Juliet",
            location: "North",
            special: "$10-$14 mains, $6 electric jellyfish",
            time: "3-6",
            link: 'https://www.juliet-austin.com/arboretum-menu#menu=happy-hour-ordering'
        },
        {
            name: "Uchiba",
            location: "Downtown",
            special: "Lots of $10 drinks and food",
            time: "4-530",
            link: 'https://uchiba.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_skewers'
        },
        {
            name: "Hanks",
            location: "Central",
            special: "$7 frozen and tap cocktails, $7 wine",
            time: "4-530",
            link: 'https://www.hanksaustin.com/menus'
        },
        {
            name: "Bulevar",
            location: "North",
            special: "$10 margaritas, $5 drafts, $10 small plates",
            time: "4-6",
            link: 'https://static1.squarespace.com/static/62333906295dd653f0079bad/t/64e5061b437ca00203e4b70c/1692730907414/Bulevar_HHMenu_8.15.23.pdf'
        },
        {
            name: "Salty Sow",
            location: "Central",
            special: "$6-8 tacos, fries, fried chicken",
            time: "430-630",
            link: 'https://www.saltysow.com/menus/SSM_Menu.pdf'
        },
        {
            name: "Loro",
            location: "North",
            special: "$6 specialty bites, under $10 sandwiches, $5 slushes, $5 cocktails/wine/sake",
            time: "2-5",
            link: 'https://www.loroeats.com/locations/austin/south-lamar/menu/'
        },
        {
            name: "Uchkio",
            location: "Central",
            special: "~$10 small plates",
            time: "4-6",
            link: 'https://uchiko.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_nigiri-2-pc'
        },
        {
            name: "Peached Tortilla",
            location: "Central",
            special: "Patio only -- $5 beer, $7 cocktails, $4.50 tacos, $6 snacks, $9 burger. ",
            time: "5-7",
            link: 'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/64c9c2bce8660221b0192e52/1690944188263/SocialHour_Menu-08_2023-web.pdf'
        },
        {
            name: "Comedor",
            location: "Downtown",
            special: "$5 tacos, $8 margarita",
            time: "5-630",
            link: 'https://comedortx.com/menu/'
        },
        {
            name: "Nomade",
            location: "South 1st/Lamar",
            special: "$5 drinks, $5-10 starters",
            time: "430-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            name: "Luties",
            location: "Central",
            special: "unknown",
            time: "5-6",
            link: 'https://www.luties.com/menu-2/'
        },
        {
            name: "gracia",
            location: "Central",
            special: "Half price sangria and spritz, half price hummus and flat bread",
            time: "5-6",
            link: 'https://www.nomadecocina.com/menu/'
        },
        {
            name: "Cedro",
            location: "North",
            special: "$9 half pizza, $6 meatballs, $8 risotto balls, etc",
            time: "3-6",
            link: 'https://www.wuchowaustin.com/north-lamar-menu/'
        },
        {
            name: "Backspace Pizza",
            location: "Central",
            special: "1/2 off house cocktails, beer, wine, antipasti",
            time: "4-6",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
        {
            name: "Lucky Robot",
            location: "South 1st/Lamar",
            special: "Half off lots of food",
            time: "430-530",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
    ],
    saturday: [
        {
            name: "Oseyo",
            location: "East Side",
            special: "Lots of discounted food and drinks",
            time: "430-630",
            link: 'https://www.oseyoaustin.com/happy-hour'
        },
        {
            name: "Perry's Bar 79",
            location: "North",
            special: "Cocktails (including mini martini trio) are $2 off",
            time: "4-7",
            link: 'https://perryssteakhouse.com/locations/tx/austin/domain-northside/#'
        },
        {
            name: "Sour Duck Market",
            location: "East Side",
            special:
                "$6 burger (add pilsner or tiny marg for $4), $6 paloma and mule",
            time: "3-6",
            link: "https://www.sourduckmarket.com/"
        },
        {
            name: "Juliet",
            location: "North",
            special: "$10-$14 mains, $6 electric jellyfish",
            time: "3-6",
            link: 'https://www.juliet-austin.com/arboretum-menu#menu=happy-hour-ordering'
        },
        {
            name: "Hanks",
            location: "Central",
            special: "$7 frozen and tap cocktails, $7 wine",
            time: "4-530",
            link: 'https://www.hanksaustin.com/menus'
        },
        {
            name: "Bulevar",
            location: "North",
            special: "$10 margaritas, $5 drafts, $10 small plates",
            time: "4-6",
            link: 'https://static1.squarespace.com/static/62333906295dd653f0079bad/t/64e5061b437ca00203e4b70c/1692730907414/Bulevar_HHMenu_8.15.23.pdf'
        },
        {
            name: "Salty Sow",
            location: "Central",
            special: "$6-8 tacos, fries, fried chicken",
            time: "430-630",
            link: 'https://www.saltysow.com/menus/SSM_Menu.pdf'
        },
        {
            name: "Uchkio",
            location: "Central",
            special: "~$10 small plates",
            time: "4-6",
            link: 'https://uchiko.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_nigiri-2-pc'
        },
        {
            name: "Peached Tortilla",
            location: "Central",
            special: "Patio only -- $5 beer, $7 cocktails, $4.50 tacos, $6 snacks, $9 burger. ",
            time: "5-7",
            link: 'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/64c9c2bce8660221b0192e52/1690944188263/SocialHour_Menu-08_2023-web.pdf'
        },
        {
            name: "Luties",
            location: "Central",
            special: "unknown",
            time: "5-6",
            link: 'https://www.luties.com/menu-2/'
        },
        {
            name: "Backspace Pizza",
            location: "Central",
            special: "1/2 off house cocktails, beer, wine, antipasti",
            time: "4-6",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
    ],
    sunday: [
        {
            name: "Dig Pub",
            location: "Cedar Park",
            special: "Select texas pints are $3.75",
            time: "all day",
            link: "https://thedigpub.com/specials/"
        },
        {
            name: "Perry's Bar 79",
            location: "North",
            special: "Cocktails (including mini martini trio) are $2 off",
            time: "4-9",
            link: 'https://perryssteakhouse.com/locations/tx/austin/domain-northside/#'
        },
        {
            name: "Sour Duck Market",
            location: "East Side",
            special:
                "$6 burger (add pilsner or tiny marg for $4), $6 paloma and mule",
            time: "3-6",
            link: "https://www.sourduckmarket.com/"
        },
        {
            name: "Foxhole Tavern",
            location: "North",
            special: "$5 tacos, house wine $7",
            time: "3-10",
            link: "https://foxholeaustin.com/austin-foxhole-culinary-tavern-happy-hours-specials"
        },
        {
            name: "Juliet",
            location: "North",
            special: "$10-$14 mains, $6 electric jellyfish",
            time: "3-6",
            link: 'https://www.juliet-austin.com/arboretum-menu#menu=happy-hour-ordering'
        },
        {
            name: "Hanks",
            location: "Central",
            special: "$7 frozen and tap cocktails, $7 wine",
            time: "4-530",
            link: 'https://www.hanksaustin.com/menus'
        },
        {
            name: "Bulevar",
            location: "North",
            special: "$10 margaritas, $5 drafts, $10 small plates",
            time: "4-6",
            link: 'https://static1.squarespace.com/static/62333906295dd653f0079bad/t/64e5061b437ca00203e4b70c/1692730907414/Bulevar_HHMenu_8.15.23.pdf'
        },
        {
            name: "Salty Sow",
            location: "Central",
            special: "$6-8 tacos, fries, fried chicken",
            time: "430-630",
            link: 'https://www.saltysow.com/menus/SSM_Menu.pdf'
        },
        {
            name: "Uchkio",
            location: "Central",
            special: "~$10 small plates",
            time: "4-6",
            link: 'https://uchiko.uchirestaurants.com/location/austin/menu/#happy_hour_sections_menu_sections_nigiri-2-pc'
        },
        {
            name: "Peached Tortilla",
            location: "Central",
            special: "Patio only -- $5 beer, $7 cocktails, $4.50 tacos, $6 snacks, $9 burger. ",
            time: "5-7",
            link: 'https://static1.squarespace.com/static/593a08002994caa3437aa76d/t/64c9c2bce8660221b0192e52/1690944188263/SocialHour_Menu-08_2023-web.pdf'
        },
        {
            name: "Luties",
            location: "Central",
            special: "unknown",
            time: "5-6",
            link: 'https://www.luties.com/menu-2/'
        },
        {
            name: "Backspace Pizza",
            location: "Central",
            special: "1/2 off house cocktails, beer, wine, antipasti",
            time: "4-6",
            link: 'https://thebackspacepizza.com/wp-content/uploads/Anderson-Lane-edit.pdf'
        },
    ],
};

export default happyHours;