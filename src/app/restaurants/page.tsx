import restaurants from "./restaurants";


export default function Restaurants() {

  return (
    <div className="container home">
      <main>
        <div className="space-y-4">
          <h1 className="text-center text-5xl">Restaurants</h1>
        </div>

        <div>
          {restaurants.map((restaurant) => (
            <div key={restaurant.name}>
              <p>{restaurant.name}</p>
              <div>
                {restaurant.categories.map(category => <p>{category}</p>)}
              </div>
              <div className="h-12"></div>
            </div>
          ))}
        </div>
        
      </main>
    </div>
  );
}