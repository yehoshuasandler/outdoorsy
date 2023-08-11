import { PropertyListings } from './components/PropertyListings'
import { Search } from './components/Search'

export default function Page() {
  return <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-3xl">
    <Search />
    <PropertyListings />
  </div>
</div>
}