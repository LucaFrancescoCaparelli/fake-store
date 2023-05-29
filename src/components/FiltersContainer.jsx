import Filters from "./Filters";
import Search from "./Search";

function FiltersContainer() {
  return (
    <div className='container mb-4'>
      <div className='row justify-content-between'>
        <div className='col-12 col-md-4'>
          <Search />
        </div>
        <div className='col-12 col-md-4'>
          <Filters />
        </div>
      </div>
    </div>
  );
}

export default FiltersContainer;
