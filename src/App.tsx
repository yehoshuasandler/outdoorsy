import { PropertyListings } from './propertyList/PropertyListings'
import { Search } from './search/Search'

function App() {
  return (
    <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Search />
        <PropertyListings />
      </div>
    </div>
  );
}

export default App;
