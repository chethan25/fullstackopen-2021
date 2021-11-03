const Filter = ({ handleSearchInput, searchFilter }) => {
  return (
    <div>
      Search: <input onChange={handleSearchInput} value={searchFilter} />
    </div>
  );
};

export default Filter;
