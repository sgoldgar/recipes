type Restaurant = {
    name: string;
    categories: Category[];
    location: Location;
    menu: string;
}

type Category = 'drinks' | 'fancy' | 'weekend' | 'tiki drinks' | 'beer' | 'kid friendly' | 'dog friendly' | 'patio'
| 'burgers' | 'southern' | 'sandwiches' | 'american' | 'seafood' | 'pizza' | 'quick/casual' | 'italian' | 'happy hour food'
| 'japanese' | 'frozen drinks' | 'mexican' | 'bbq' | 'asian' | 'french' | 'mediterranean' | 'thai' | 'chinese'
| 'foodtruck' | 'indian' | 'vietnamese' | 'korean' | 'brunch' | 'bakery' | 'coffeeshop' | 'desserts' | 'pub food' | 'latin american'
| 'cajun' | 'jamaican' | 'bagels' | 'vegan friendly' 

type Location = 'North' | 'Central' | 'South 1st/Lamar' | 'East Side' | 'Downtown' | 'West' | 'South' | 'Cedar Park';

const restaurants: Restaurant[] = [
    {name: "Perry's Steakhouse", categories: ['drinks', 'fancy'], location: 'North', menu: 'https://perryssteakhouse.com/locations/tx/austin/domain-northside/#'},
    {name: "Tiki Tatsu-Ya", categories: ['drinks', 'weekend', 'tiki drinks'], location: 'South 1st/Lamar', menu: 'https://www.tiki-tatsuya.com/menu-qr'},
    {name: "Here Nor There", categories: ['drinks', 'weekend'], location: 'Downtown', menu: 'http://hntaustin.com/'},
    {name: "Slackers", categories: ['drinks', 'beer', 'kid friendly', 'vegan friendly'], location: 'North', menu: 'https://www.slackersbrewing.com/'},
    {name: "Pour House", categories: ['drinks', 'pizza', 'dog friendly', 'kid friendly', 'patio', 'vegan friendly'], location: 'North', menu: 'https://www.pourhousepintsandpies.com/'},
    {name: "The Dig Pub", categories: ['drinks'], location: 'North', menu: 'https://www.thedigpub.com/dining'},
    {name: "Prohibition", categories: ['drinks', 'weekend'], location: 'North', menu: 'https://www.instagram.com/prohibition.atx/?hl=en'},
    {name: "Bosses Office", categories: ['drinks', 'weekend', 'fancy'], location: 'East Side', menu: 'https://bossesofficeaustin.com/'},
    {name: "Whip My Soul", categories: ['southern'], location: 'North', menu: 'https://www.instagram.com/whipmysoul/?hl=en'},
    {name: "Garbos", categories: ['seafood', 'tiki drinks'], location: 'North', menu: 'http://garboslobsteratx.com/'},
    {name: "Jewboy Burgers", categories: ['burgers', 'dog friendly', 'patio'], location: 'Central', menu: 'http://www.jewboyburgers.com/'},
    {name: "Otherside Deli", categories: ['sandwiches'], location: 'Central', menu: 'http://othersidedeliatx.com/'},
    {name: "Sour Duck Market", categories: ['american', 'dog friendly', 'patio', 'brunch'], location: 'East Side', menu: 'http://sourduckmarket.com/'},
    {name: "Birdie's", categories: ['american', 'fancy'], location: 'East Side', menu: 'https://www.birdiesaustin.com/menus/#dinner'},
    {name: "Anything's Baked Potato", categories: ['quick/casual', 'foodtruck'], location: 'East Side', menu: 'http://www.anythingsaustin.com/'},
    {name: "Ike's Love & Sandwiches", categories: ['sandwiches', 'quick/casual', 'vegan friendly'], location: 'North', menu: 'https://locations.ikessandwich.com/tx/austin/419/'},
    {name: "Foxhold Culinary Tavern", categories: ['american', 'fancy'], location: 'North', menu: 'http://www.foxholeaustin.com/wp-content/uploads/2020/05/2020-Foxhole-Spring-Menu.pdf'},
    {name: "Bon Aire", categories: ['american', 'vegan friendly'], location: 'North', menu: 'https://www.bonaireatx.com/menu'},
    {name: "Juliet", categories: ['italian', 'fancy', 'happy hour food'], location: 'North', menu: 'https://www.juliet-austin.com/arboretum-menu'},
    {name: "Roaring Fork", categories: ['american', 'fancy'], location: 'North', menu: 'https://foxholeaustin.com/austin-foxhole-culinary-tavern-food-menu'},
    {name: "Uchibā", categories: ['japanese', 'fancy', 'happy hour food', 'vegan friendly'], location: 'Downtown', menu: 'https://uchiba.uchirestaurants.com/'},
    {name: "Hanks", categories: ['american', 'happy hour food', 'frozen drinks', 'dog friendly'], location: 'East Side', menu: 'https://www.hanksaustin.com/menus'},
    {name: "Bulevar", categories: ['mexican', 'fancy', 'happy hour food'], location: 'North', menu: 'https://www.bulevaratx.com/'},
    {name: "Salty Sow", categories: ['american', 'fancy', 'happy hour food'], location: 'Central', menu: 'http://www.saltysow.com/'},
    {name: "Loro (coming to domain)", categories: ['japanese', 'fancy', 'bbq', 'happy hour food'], location: 'North', menu: 'http://loroaustin.com/'},
    {name: "Uchiko", categories: ['japanese', 'fancy', 'happy hour food', 'vegan friendly'], location: 'Central', menu: 'https://uchikoaustin.com/wp-content/uploads/Uchiko_To_Go.pdf'},
    {name: "Peached Tortilla", categories: ['asian', 'fancy', 'happy hour food'], location: 'North', menu: 'http://www.thepeachedtortilla.com/'},
    {name: "Justine's", categories: ['french', 'fancy'], location: 'East Side', menu: 'https://www.justines1937.com/'},
    {name: "Comedor", categories: ['mexican', 'fancy'], location: 'Downtown', menu: 'https://comedortx.com/'},
    {name: "Nomade", categories: ['mexican', 'fancy', 'vegan friendly'], location: 'South 1st/Lamar', menu: 'https://www.nomadecocina.com/'},
    {name: "Lutie's", categories: ['american', 'fancy'], location: 'Central', menu: 'https://www.luties.com/'},
    {name: "Lenoir", categories: ['french', 'american', 'fancy'], location: 'South 1st/Lamar', menu: 'https://www.lenoirrestaurant.com/menu'},
    {name: "Honey Moon Spirit Lounge", categories: ['american', 'fancy'], location: 'Central', menu: 'http://www.honeymoonatx.com/'},
    {name: "gràcia mediterranean", categories: ['mediterranean', 'fancy'], location: 'North', menu: 'http://www.graciamediterranean.com/'},
    {name: "Yamas Greek", categories: ['mediterranean', 'fancy'], location: 'West', menu: 'http://www.yamasatx.com/'},
    {name: "Soupleaf Hotpot", categories: ['asian'], location: 'Central', menu: 'http://soupleafhotpot.com/'},
    {name: "Kiin Di", categories: ['thai', 'asian'], location: 'South 1st/Lamar', menu: 'https://www.kiindiatx.com/'},
    {name: "Jade Restaurant", categories: ['chinese', 'asian'], location: 'West', menu: 'http://www.jaderestaurantaustin.com/'},
    {name: "Bunboy", categories: ['asian', 'foodtruck'], location: 'North', menu: 'http://bunboyaustin.com/'},
    {name: "Banh Mi Galang", categories: ['vietnamese', 'asian'], location: 'North', menu: 'https://www.banhmigalang.com/'},
    {name: "Hot Pot Alley", categories: ['asian'], location: 'North', menu: 'https://www.hotpotalley.com/'},
    {name: "Sunflower", categories: ['vietnamese', 'asian', 'vegan friendly'], location: 'North', menu: 'https://www.sunflowerrestaurants.com/'},
    {name: "Zoé Tong", categories: ['chinese', 'asian'], location: 'South 1st/Lamar', menu: 'https://www.zoetong.com/'},
    {name: "Fat Dragon", categories: ['chinese', 'asian'], location: 'North', menu: 'http://fatdragonatx.com/'},
    {name: "Din Ho", categories: ['chinese', 'asian'], location: 'North', menu: 'http://www.dinhochinesebbq.com/'},
    {name: "Wu Chow", categories: ['chinese', 'asian', 'fancy'], location: 'North', menu: 'https://www.wuchowaustin.com/north-lamar-menu/'},
    {name: "Lotus Chinese", categories: ['chinese', 'asian'], location: 'North', menu: 'http://www.lotuschineseatx.com/'},
    {name: "Giovanni's Table", categories: ['italian'], location: 'South', menu: 'https://giovannistable.com/'},
    {name: "Slapbox", categories: ['pizza', 'quick/casual', 'kid friendly', 'dog friendly', 'vegan friendly'], location: 'North', menu: 'https://parmer.600degreespizzeria.com/'},
    {name: "Boss Pizza", categories: ['pizza', 'quick/casual'], location: 'North', menu: 'http://www.bosspizza.co/'},
    {name: "Tony C's Pizza", categories: ['pizza', 'quick/casual', 'vegan friendly'], location: 'North', menu: 'https://www.tonycsbeergarden.com/'},
    {name: "Desano", categories: ['pizza', 'quick/casual'], location: 'North', menu: 'http://www.desanopizza.com/'},
    {name: "Conan's Pizza", categories: ['pizza', 'quick/casual', 'vegan friendly'], location: 'North', menu: 'http://conanspizza.com/'},
    {name: "Cedro", categories: ['italian', 'fancy'], location: 'North', menu: 'https://www.cedroaustin.com/menu'},
    {name: "Sammie's", categories: ['italian', 'fancy'], location: 'Downtown', menu: 'https://sammiesitalian.com/'},
    {name: "Patrizi's", categories: ['italian', 'dog friendly', 'foodtruck'], location: 'Central', menu: 'http://patrizis.com/'},
    {name: "The Backspace", categories: ['pizza'], location: 'North', menu: 'http://backspacepizza.com/'},
    {name: "Pedrosos", categories: ['pizza', 'foodtruck'], location: 'North', menu: 'http://pedrosospizza.com/'},
    {name: "Rosati's", categories: ['pizza'], location: 'Cedar Park', menu: 'https://myrosatis.com/cedarpark/'},
    {name: "Curry Pizza House", categories: ['pizza', 'vegan friendly'], location: 'Cedar Park', menu: 'https://www.currypizzahouse.com/'},
    {name: "i Fratelli", categories: ['pizza'], location: 'North', menu: 'https://www.ifratellipizza.com/'},
    {name: "Aviator Pizza", categories: ['pizza', 'patio', 'dog friendly', 'kid friendly', 'vegan friendly'], location: 'North', menu: 'http://www.aviatorpizza.com/'},
    {name: "Lucky Robot", categories: ['japanese', 'vegan friendly'], location: 'South 1st/Lamar', menu: 'https://www.luckyrobotatx.com/'},
    {name: "Kane", categories: ['japanese'], location: 'Cedar Park', menu: 'http://kanerestaurants.com/'},
    {name: "Miyo", categories: ['japanese'], location: 'North', menu: 'https://www.miyoatx.com/'},
    {name: "Zen", categories: ['japanese', 'quick/casual'], location: 'North', menu: 'https://www.eatzen.com/'},
    {name: "Soto", categories: ['japanese', 'fancy'], location: 'North', menu: 'http://www.sotoaustin.com/?y_source=1_MTYyMDc1MzMtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D'},
    {name: "Kanji Ramen", categories: ['japanese'], location: 'North', menu: 'http://www.kanjiramen.com/'},
    {name: "Michi Ramen", categories: ['japanese'], location: 'North', menu: 'http://michiramen.com/'},
    {name: "Haru", categories: ['japanese'], location: 'North', menu: 'https://ichiumisushitx.com/menu/18710912'},
    {name: "Ramen Tatsu-Ya", categories: ['japanese'], location: 'North', menu: 'https://www.ramen-tatsuya.com/'},
    {name: "Kobako Katsu (Hmart)", categories: ['japanese'], location: 'North', menu: 'https://kobakokatsuaustin.com/'},
    {name: "Don Don Express", categories: ['japanese'], location: 'North', menu: 'https://dondonexpress.com/'},
    {name: "Nori", categories: ['japanese'], location: 'Central', menu: 'http://www.noriaustin.com/'}, 
    {name: "Ramen512", categories: ['japanese'], location: 'Cedar Park', menu: 'http://ramen512.com/'},
    {name: "Sazan Ramen", categories: ['japanese'], location: 'Central', menu: 'http://sazanramen.com/'},
    {name: "Choo Sando", categories: ['japanese', 'sandwiches'], location: 'Central', menu: 'https://chooatx.com/'},
    {name: "Fukumoto", categories: ['japanese', 'fancy'], location: 'East Side', menu: 'http://fukumotoaustin.com/'},
    {name: "Honey Pig BBQ", categories: ['korean'], location: 'North', menu: 'https://www.honeypigbbq.com/austin-tx'},
    {name: "Paik's Noodles (Hmart)", categories: ['korean'], location: 'North', menu: 'https://www.paiksnoodletx.com/menu'},
    {name: "Charm Korean BBQ", categories: ['korean'], location: 'North', menu: 'https://www.charmkoreanbbq.com/'},
    {name: "K-Pub Chicken", categories: ['korean'], location: 'North', menu: 'http://www.kpubatx.com/'},
    {name: "Jan Chi Korean Cuisine & BBQ", categories: ['korean'], location: 'North', menu: 'https://www.janchikoreanbbqtx.com/'},
    {name: "Korean Grill", categories: ['korean'], location: 'North', menu: 'https://koreangrill.wixsite.com/koreangrill'},
    {name: "Seoulju", categories: ['korean'], location: 'North', menu: 'http://www.seouljuatx.com/'},
    {name: "Mom's Taste", categories: ['korean'], location: 'Central', menu: 'http://www.austinbanchan.com/'},
    {name: "Oseyo", categories: ['korean', 'fancy', 'vegan friendly'], location: 'East Side', menu: 'https://www.oseyoaustin.com/'},
    {name: "Underdog", categories: ['korean', 'fancy'], location: 'South 1st/Lamar', menu: 'http://underdog-atx.com/'},
    {name: "Korea House", categories: ['korean'], location: 'North', menu: 'http://koreahouseaustin.com/#menu'},
    {name: "Wolf and Wheat", categories: ['brunch', 'bakery'], location: 'East Side', menu: 'https://www.instagram.com/wolfandwheatatx/'},
    {name: "Original Pancake House", categories: ['brunch'], location: 'North', menu: 'https://www.austinoph.com/'},
    {name: "Casper Fermentables", categories: ['brunch', 'bakery', 'bagels', 'vegan friendly'], location: 'South', menu: 'http://www.casperfermentables.com/'},
    {name: "Paris Baguette", categories: ['bakery'], location: 'Central', menu: 'https://www.parisbaguette.com/'},
    {name: "Cafe Java", categories: ['brunch'], location: 'North', menu: 'http://places.singleplatform.com/cafe-java/menu?ref=google'},
    {name: "Heaven's Bistro", categories: ['brunch', 'bakery'], location: 'North', menu: 'https://www.heavensbistrobakery.com/'},
    {name: "First Light Book Shop", categories: ['coffeeshop'], location: 'Central', menu: 'https://www.firstlightaustin.com/'},
    {name: "Illuminate Coffee Bar", categories: ['coffeeshop'], location: 'North', menu: 'https://www.illuminatecoffeebar.com/menu'},
    {name: "Coffee Shark Espresso and Pints", categories: ['coffeeshop'], location: 'North', menu: 'http://www.coffeeshark.com/'},
    {name: "Bennu Highland", categories: ['coffeeshop'], location: 'Central', menu: 'http://www.bennucoffee.com/'},
    {name: "Civil Goat", categories: ['coffeeshop'], location: 'Central', menu: 'http://www.civilgoats.com/'},
    {name: "Medici", categories: ['coffeeshop', 'dog friendly'], location: 'East Side', menu: 'https://mediciroasting.com/pages/springdale-general'},
    {name: "Central Machine Works", categories: ['coffeeshop', 'patio', 'dog friendly', 'kid friendly'], location: 'East Side', menu: 'https://www.cmwbrewery.com/menu'},
    {name: "Vintage Books and Wine", categories: ['coffeeshop'], location: 'East Side', menu: 'http://vintagebooksandwine.com/'},
    {name: "Palomino", categories: ['coffeeshop', 'dog friendly'], location: 'East Side', menu: 'https://palominocoffee.com/pages/menu'},
    {name: "Terrible Love", categories: ['coffeeshop', 'foodtruck'], location: 'Central', menu: 'http://instagram.com/terriblelovecoffee'},
    {name: "Lucky Lab", categories: ['coffeeshop', 'dog friendly'], location: 'Central', menu: 'http://www.luckylabcoffee.com/'},
    {name: "Lola Savannah Coffee Lounge", categories: ['coffeeshop', 'patio'], location: 'Cedar Park', menu: 'http://www.lolacoffee.com/'},
    {name: "Rocheli Patisserie", categories: ['desserts', 'fancy'], location: 'East Side', menu: 'http://www.rocheli.com/'},
    {name: "Pineview Coffee", categories: ['coffeeshop'], location: 'North', menu: 'http://pineviewcoffee.com/'},
    {name: "Cuppa", categories: ['coffeeshop'], location: 'North', menu: 'http://cuppaaustin.com/'},
    {name: "Epoch", categories: ['coffeeshop', 'patio', 'dog friendly'], location: 'North', menu: 'https://epochcoffee.com/'},
    {name: "Cure", categories: ['coffeeshop', 'bakery'], location: 'North', menu: 'https://www.instagram.com/curebakerycoffee/?hl=en'},
    {name: "Radio", categories: ['coffeeshop', 'patio', 'dog friendly', 'kid friendly'], location: 'South', menu: 'https://www.radiocoffeeandbeer.com/'},
    {name: "Brentwood Social House", categories: ['coffeeshop', 'bakery', 'kid friendly'], location: 'Central', menu: 'https://brentwoodsocial.com/'},
    {name: "Sa-ten", categories: ['coffeeshop'], location: 'East Side', menu: 'https://www.sa-ten.com/'},
    {name: "Cosmic Coffee", categories: ['coffeeshop', 'beer', 'frozen drinks'], location: 'South', menu: 'https://cosmichospitalitygroup.com/locations/'},
    {name: "Kinda Tropical", categories: ['drinks', 'patio', 'dog friendly', 'frozen drinks'], location: 'East Side', menu: 'https://kindatropical.com/'},
    {name: "Sunny's Backyard", categories: ['drinks', 'patio', 'dog friendly'], location: 'East Side', menu: 'https://www.sunnysbackyard.com/'},
    {name: "Austin Beerworks", categories: ['patio', 'dog friendly', 'beer'], location: 'North', menu: 'https://austinbeerworks.com/'},
    {name: "Brewtorium", categories: ['patio', 'beer'], location: 'Central', menu: 'https://www.thebrewtorium.com/'},
    {name: "Double Trouble", categories: ['patio', 'beer', 'mexican', 'coffeeshop', 'dog friendly'], location: 'Central', menu: 'https://www.instagram.com/double_trouble_atx/?hl=en'},
    {name: "Curra's", categories: ['mexican'], location: 'Central', menu: 'https://currashydepark.com/'},
    {name: "Lazarus", categories: ['beer', 'patio', 'mexican', 'dog friendly', 'kid friendly'], location: 'Central', menu: 'https://www.lazarusbrewing.com/'},
    {name: "Meanwhile", categories: ['beer', 'patio', 'dog friendly', 'kid friendly'], location: 'South', menu: 'https://www.meanwhilebeer.com/'},
    {name: "Emerald Tavern", categories: ['pub food', 'patio', 'dog friendly'], location: 'North', menu: 'http://www.emeraldtaverngames.com/'},
    {name: "B.D. Riley's", categories: ['pub food', 'patio', 'dog friendly'], location: 'Central', menu: 'https://bdrileys.com/aldrich/'},
    {name: "Kelly's Irish Pub", categories: ['pub food'], location: 'South 1st/Lamar', menu: 'https://kellysirishpubatx.com/'},
    {name: "Kenney Fort Pub", categories: ['pub food'], location: 'North', menu: 'http://www.thekenneyfort.com/'},
    {name: "Taqueria Jessica", categories: ['mexican', 'quick/casual', 'patio', 'foodtruck'], location: 'North', menu: 'https://www.taqueriajessica.com/'},
    {name: "El Chile", categories: ['mexican'], location: 'Central', menu: 'http://www.elchilecafe.com/'},
    {name: "Habana", categories: ['latin american'], location: 'South 1st/Lamar', menu: 'http://www.habanaaustin.com/'},
    {name: "Ezov", categories: ['mediterranean', 'fancy'], location: 'East Side', menu: 'https://ezovatx.com/'},
    {name: "La Cocina de Consuelo", categories: ['mexican'], location: 'Central', menu: 'http://www.consueloskitchen.com/'},
    {name: "Enchiladas Y Mas", categories: ['mexican'], location: 'North', menu: 'https://www.facebook.com/enchiladasymasaustin/'},
    {name: "Nissi Vegan Mexican Cuisine", categories: ['mexican'], location: 'North', menu: 'http://nissivegmex.com/'},
    {name: "Blue Corn Harvest", categories: ['mexican', 'vegan friendly'], location: 'Cedar Park', menu: 'http://www.bluecornharvest.com/'},
    {name: "Mama Betty's Tex-Mex", categories: ['mexican'], location: 'North', menu: 'http://www.ilovemamabettys.com/'},
    {name: "Sabor Colombia", categories: ['latin american'], location: 'North', menu: 'http://www.saborcolombia512.com/'},
    {name: "OneTaco", categories: ['mexican', 'quick/casual'], location: 'North', menu: 'http://www.eatonetaco.com/'},
    {name: "Taco Flats", categories: ['mexican', 'quick/casual'], location: 'North', menu: 'http://www.tacoflats.com/'},
    {name: "Aleidas", categories: ['latin american'], location: 'Cedar Park', menu: 'http://aleidas.com/'},
    {name: "Thai Cuisine", categories: ['thai'], location: 'North', menu: 'http://www.thaicuisineaustin.com/'},
    {name: "Thai Lada", categories: ['thai'], location: 'North', menu: 'https://www.thailadaatx.com/'},
    {name: "Sip Saam Thai", categories: ['thai', 'vegan friendly'], location: 'North', menu: 'https://www.sipsaamthai.com/menu'},
    {name: "Chaba Thai", categories: ['thai', 'foodtruck', 'vegan friendly'], location: 'North', menu: 'https://chaba.kitchen/'},
    {name: "Madam Mam's", categories: ['thai'], location: 'North', menu: 'http://www.madammam.com/'},
    {name: "Titaya", categories: ['thai', 'vegan friendly'], location: 'Central', menu: 'http://titayasthaicuisine.com/'},
    {name: "Sway", categories: ['thai', 'fancy', 'vegan friendly'], location: 'North', menu: 'https://swaythai.com/'},
    {name: "Thai Fresh", categories: ['thai'], location: 'South 1st/Lamar', menu: 'https://www.thai-fresh.com/menu-hours'},
    {name: "Pho Tin", categories: ['vietnamese'], location: 'North', menu: 'https://www.photinaustin.com/'},
    {name: "MezzeMe", categories: ['mediterranean', 'vegan friendly'], location: 'Central', menu: 'https://www.mezzeme.com/menu'},
    {name: "Shandeez", categories: ['mediterranean'], location: 'North', menu: 'http://shandeez.com/menu/'},
    {name: "Reem's", categories: ['mediterranean', 'foodtruck'], location: 'South 1st/Lamar', menu: 'https://www.reemsfalafel.com/'},
    {name: "Levant Cafe", categories: ['mediterranean', 'vegan friendly'], location: 'Cedar Park', menu: 'http://levantgrille.com/'},
    {name: "Falafel Burger", categories: ['mediterranean', 'quick/casual'], location: 'North', menu: 'http://www.falafelburgeraustin.com/'},
    {name: "Caspian Grill", categories: ['mediterranean', 'vegan friendly'], location: 'North', menu: 'http://caspiangrillaustin.com/'},
    {name: "Stiles Switch BBQ", categories: ['bbq'], location: 'Central', menu: 'http://stilesswitchbbq.com/'},
    {name: "Moreno BBQ", categories: ['bbq'], location: 'South 1st/Lamar', menu: 'https://www.morenobbq.com/'},
    {name: "KG BBQ", categories: ['bbq'], location: 'Central', menu: 'https://www.kgbbq.com/'},
    {name: "Interstellar BBQ", categories: ['bbq'], location: 'North', menu: 'http://www.theinterstellarbbq.com/'},
    {name: "Quacks", categories: ['bakery', 'desserts', 'coffeeshop', 'dog friendly'], location: 'Central', menu: 'https://quacks43rd.com/'},
    {name: "Sweet Memes", categories: ['desserts'], location: 'South 1st/Lamar', menu: 'https://order.toasttab.com/online/sweetmemes-austin'},
    {name: "Merry Monarch", categories: ['desserts'], location: 'North', menu: 'https://www.merrymonarchcreamery.com/'},
    {name: "Handel's Ice Cream", categories: ['desserts'], location: 'North', menu: 'https://handelsicecream.com/store/anderson-mill/'},
    {name: "1417 French Bistro", categories: ['french', 'fancy'], location: 'South 1st/Lamar', menu: 'https://1417frenchbistro.com/'},
    {name: "Vic and Al's", categories: ['cajun', 'fancy'], location: 'Central', menu: 'http://www.vicandals.com/'},
    {name: "Hopfields", categories: ['french', 'fancy', 'vegan friendly'], location: 'Central', menu: 'http://hopfieldsaustin.com/'},
    {name: "Bureau de Poste", categories: ['french'], location: 'Central', menu: 'https://bureaudeposteatx.com/'},
    {name: "Mouton's Bistro", categories: ['cajun'], location: 'Cedar Park', menu: 'http://www.moutonsbistro.com/'},
    {name: "Louis' Jamaican Cuisine", categories: ['jamaican', 'foodtruck'], location: 'North', menu: 'http://louissignaturecakes.com/'},
    {name: "Neptune Coffee/Bittersweet Galaxy", categories: ['coffeeshop', 'foodtruck', 'dog friendly', 'kid friendly'], location: 'North', menu: 'https://www.instagram.com/bittersweetgalaxy_coffee/'},
    {name: "Bayleaf", categories: ['indian', 'vegan friendly'], location: 'North', menu: 'http://www.bayleafaustin.com/'},
    {name: "New Sitara", categories: ['indian'], location: 'North', menu: 'http://sitaraaustin.com/'},
    {name: "Aha Indian", categories: ['indian'], location: 'North', menu: 'https://ahaindian.com/'},
    {name: "Sangham Chettinad", categories: ['indian', 'vegan friendly'], location: 'North', menu: 'https://www.sangamchettinad.com/'},
    {name: "Godavari", categories: ['indian'], location: 'North', menu: 'https://godavarius.com/austin'},
    {name: "Desilicious", categories: ['indian', 'vegan friendly'], location: 'North', menu: 'https://www.desiliciouscafe.com/'},
    {name: "Little Ola's Biscuits", categories: ['southern'], location: 'North', menu: 'https://www.littleolasbiscuits.com/'},
    {name: "Holiday", categories: ['drinks', 'fancy'], location: 'East Side', menu: 'https://www.holidayon7th.com/'},
    {name: "Turnstile Coffee & Beer", categories: ['beer', 'coffeeshop', 'patio', 'dog friendly'], location: 'North', menu: 'https://turnstilebrews.com/'},
    {name: "Big City Bagels", categories: ['sandwiches', 'bakery', 'bagels'], location: 'North', menu: 'https://bigcitybagelsandsubs.com/'},
    {name: "Beard Papa's", categories: ['desserts'], location: 'North', menu: 'https://www.beardpapas.com/austin'},
    {name: "OMG Squee", categories: ['desserts'], location: 'East Side', menu: 'https://www.squeeclub.com/'},
    {name: "Proud Mary Coffee", categories: ['coffeeshop', 'brunch', 'vegan friendly'], location: 'South 1st/Lamar', menu: 'https://proudmarycoffee.com/pages/proud-mary-cafe-austin'},
    {name: "Bouldin Creek", categories: ['american', 'brunch', 'patio', 'dog friendly', 'vegan friendly'], location: 'South 1st/Lamar', menu: 'https://bouldincreekcafe.com/'},
    {name: "Cork and Screw", categories: ['drinks'], location: 'East Side', menu: 'https://www.corkandscrewatx.com/about-us'},
    {name: "Tigress", categories: ['drinks'], location: 'Central', menu: 'http://thetigresspub.com/'},
    {name: "Garage", categories: ['drinks'], location: 'Downtown', menu: 'http://www.garagetx.com/'},
    {name: "Milonga Room", categories: ['drinks'], location: 'East Side', menu: 'https://www.buenosairescafe.com/'},
    {name: "Buenos Aires Cafe", categories: ['latin american'], location: 'East Side', menu: 'https://www.buenosairescafe.com/'},
    {name: "Watertrade", categories: ['drinks', 'fancy'], location: 'South 1st/Lamar', menu: 'https://otokoaustin.com/watertrade'},
    {name: "Mozart's", categories: ['coffeeshop', 'patio', 'dog friendly'], location: 'West', menu: 'https://mozartscoffee.com/'},
    {name: "Moonie's", categories: ['burgers', 'quick/casual'], location: 'North', menu: 'https://www.moonies-andersonmill.com/'},
    {name: "Mutt's Cantina", categories: ['patio', 'dog friendly'], location: 'North', menu: 'https://muttscantina.com/tx-austin/'},
    {name: "Canje", categories: ['jamaican', 'fancy'], location: 'East Side', menu: 'https://canjeatx.com/'},
    {name: "Kome", categories: ['japanese'], location: 'Central', menu: 'https://www.kome-austin.com/miso/'},
    {name: "Pflour", categories: ['desserts'], location: 'North', menu: 'https://www.yourcarbdealer.com/'},
    {name: "Rosen's Bagels", categories: ['brunch', 'bagels'], location: 'North', menu: 'https://www.rosensbagels.com/'},
    {name: "Nervous Charlie's", categories: ['brunch', 'bagels'], location: 'Central', menu: 'https://www.nervouscharlies.com/'},
    {name: "Tiny Minotaur", categories: ['drinks', 'weekend'], location: 'East Side', menu: 'https://www.tinyminotaur.com/participation'},
    {name: "The Rose Bakery", categories: ['bakery', 'desserts'], location: 'North', menu: 'https://www.instagram.com/therosebakeryatx/'},
    {name: "Lazeez", categories: ['mediterranean', 'quick/casual'], location: 'North', menu: 'https://www.lazeezaustin.com'},
    {name: "Asados Mission Style Burritos", categories: ['mexican', 'foodtruck'], location: 'Central', menu: 'https://www.asadostaqueria.com'},
    {name: "Taco Palenque", categories: ['mexican', 'quick/casual'], location: 'North', menu: 'https://tacopalenque.com'},
    {name: "Cypress Grill", categories: ['cajun'], location: 'South', menu: 'https://cypressgrill.net'},
    {name: "Mattie's", categories: ['fancy', 'american'], location: 'South 1st/Lamar', menu: 'https://mattiesaustin.com/'},
    {name: "Swift's Attic", categories: ['fancy', 'american', 'vegan friendly'], location: 'Downtown', menu: 'https://swiftsattic.com/menu/'},
    {name: "Cavalier", categories: ['drinks', 'brunch', 'dog friendly', 'patio', 'cajun'], location: 'East Side', menu: 'https://www.thecavalieratx.com/'},
    {name: "Hi Hat", categories: ['american', 'drinks', 'brunch'], location: 'East Side', menu: 'https://www.hihatpublichouse.com/food'},
    {name: "Peace Bakery", categories: ['mediterranean'], location: 'North', menu: 'https://peacebakerydeliaustin.com/austin-peace-bakery-food-menu'},
    {name: "Usta Kababgy", categories: ['mediterranean'], location: 'North', menu: 'https://www.ustakababgy.com/'},
    {name: "Hadramout", categories: ['mediterranean'], location: 'Central', menu: 'https://hadramoutresturant.com/appetizer/'},
    {name: "Uncle Tetsu", categories: ['desserts'], location: 'Central', menu: 'https://uncletetsu-us.com/index.php/our-menu'},
    {name: "Redbud Icehouse", categories: ['american', 'patio', 'dog friendly', 'drinks'], location: 'Central', menu: 'https://www.redbudicehouse.com/#food'},
    {name: "Bep Saigon", categories: ['vietnamese', 'asian'], location: 'North', menu: 'https://mybepsaigon.com/menu'},
    {name: "Laod Bar", categories: ['drinks', 'asian'], location: 'East Side', menu: 'https://www.laodbar.com/eat-1'},
    {name: "Inka Chicken", categories: ['quick/casual'], location: 'North', menu: 'https://inka-chicken.com/menu'},
    {name: "The Fika", categories: ['desserts', 'bakery'], location: 'North', menu: 'https://www.thefikatable.com/order-online'},
    {name: "The Golden Horn", categories: ['drinks'], location: 'Central', menu: 'https://www.instagram.com/the.golden.horn.atx/'},
    {name: "Yellow Ranger", categories: ['asian', 'drinks'], location: 'Central', menu: 'https://www.yellowrangeratx.com'},
    {name: "Casa Bianca", categories: ['italian', 'fancy'], location: 'East Side', menu: 'https://www.casabiancaatx.com'},
    {name: "Dumpling World", categories: ['asian'], location: 'Central', menu: 'https://www.dumplingworldtx.com'},
    {name: "Palm Pizza", categories: ['pizza', 'fancy'], location: 'East Side', menu: 'https://www.palm.pizza'},
    {name: "Red Farm", categories: ['asian', 'fancy', 'chinese'], location: 'Downtown', menu: 'https://www.redfarmnyc.com/location/austin/'},
    {name: "Dog Day Coffee", categories: ['coffeeshop'], location: 'North', menu: 'https://www.dogdaynitro.com/menu'},
    {name: "Mikado Ryotei", categories: ['asian', 'japanese', 'fancy'], location: 'North', menu: 'https://www.mikadoaustin.com/japanese-food-menu'},
    {name: "New Fortune", categories: ['asian', 'chinese', 'brunch'], location: 'North', menu: 'https://www.newfortune2.com/menu'},
    {name: "Phoebe's Diner", categories: ['brunch', 'weekend'], location: 'North', menu: 'https://www.phoebesdiner.com/menu-at-phoebes-garcyfarms'},
    {name: "Teal House", categories: ['coffeeshop', 'bakery', 'weekend'], location: 'South', menu: 'https://www.tealhouse.co/_files/ugd/d034f5_f050bb25a42d4d1888ff161172129449.pdf'},
    {name: "Mums Foods", categories: ['bbq'], location: 'East Side', menu: 'https://static1.squarespace.com/static/6105c7164fcfc237671c8f40/t/6392a413968b643b5ee41dd4/1670554643458/MUM_FOOD_MENUS_2022_1129.pdf'},
    {name: "Dang Hot 89", categories: ['foodtruck', 'american'], location: 'North', menu: 'https://howdy-89-llc.square.site'},
    {name: "Golden Hour", categories: ['drinks', 'patio', 'brunch', 'weekend'], location: 'South', menu: 'https://www.goldenhouratx.com/menus'},
    {name: "Lovebirds", categories: ['drinks', 'patio', 'dog friendly'], location: 'East Side', menu: 'https://www.heylovebirds.com/menu'},
    {name: "Toasty Badger", categories: ['brunch', 'weekend'], location: 'South', menu: 'https://www.loboshospitality.com/toastybadger'},
    {name: "KPOT Korean BBQ & Hot Pot", categories: ['korean', 'asian'], location: 'South', menu: 'https://thekpot.com/menu/'},
    {name: "Special Noodle", categories: ['chinese', 'asian'], location: 'North', menu: 'https://onlineorder.bestfood.today/Restaurant/details/MTAwMzg='},
    {name: "Suzi's", categories: ['chinese', 'asian'], location: 'Central', menu: 'https://www.suzischinese.com/menu'},
    {name: "KPOT Korean BBQ & Hot Pot", categories: ['korean'], location: 'South', menu: 'https://thekpot.com/menu/'},

]

export default restaurants