import { useAppContext } from "../hooks/useAppContext";

function Filters() {
  const { filter, setProductFilter } = useAppContext();

  const handleChange = (e) => {
    if (e.target.value === "reset") {
      setProductFilter("");
    }
    setProductFilter(e.target.value);
  };

  return (
    <select
      value={filter}
      className='form-select-sm p-3'
      aria-label='Select a filter'
      onChange={handleChange}
    >
      <option defaultValue disabled value=''>
        Select a filter
      </option>
      <option value='asc'>A-Z - asc</option>
      <option value='desc'>Z-A - desc</option>
      <option value='price'>Price - desc</option>
      <option value=''>Reset filters</option>
    </select>
  );
}
export default Filters;
