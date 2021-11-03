const PersonForm = ({
  handleInputSubmit,
  handleNameChange,
  newName,
  handleNumberChange,
  newNumber,
}) => {
  return (
    <>
      <form onSubmit={handleInputSubmit}>
        <div>
          Name: <input onChange={handleNameChange} value={newName} required />
        </div>
        <br />
        <div>
          Number:{' '}
          <input onChange={handleNumberChange} value={newNumber} required />
        </div>
        <br />
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
