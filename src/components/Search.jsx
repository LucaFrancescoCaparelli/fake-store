import { useState } from "react";
import { useAppContext } from "../hooks/useAppContext";

function Search() {
  const [keyword, setKeyword] = useState("");
  const { filterProductsByKeyword } = useAppContext();

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    if (!keyword) return;
    e.preventDefault();
    console.log("submit", keyword);
    filterProductsByKeyword(keyword);
  };

  const handleReset = () => {
    if (keyword) {
      filterProductsByKeyword("");
    }
    setKeyword("");
  };

  return (
    <>
      <form className='row' onSubmit={handleSubmit}>
        <div className='col-8'>
          <input
            type='text'
            autoComplete='off'
            className='form-control'
            id='search-product'
            placeholder='Disk...'
            value={keyword}
            onChange={handleKeyword}
          />
        </div>
        <div className='col-2'>
          <div className='d-flex'>
            <button
              type='submit'
              className='btn btn-primary mb-3'
              disabled={!keyword}
            >
              <i className='fa-sharp fa-solid fa-magnifying-glass' />
            </button>
            {keyword && (
              <button
                onClick={handleReset}
                className='btn btn-danger mb-3 ms-2'
              >
                <i className='fa-solid fa-x' />
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default Search;
