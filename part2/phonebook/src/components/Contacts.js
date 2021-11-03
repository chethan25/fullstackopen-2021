const Contacts = ({ persons }) => {
  return (
    <>
      {persons.map((person) => (
        <p>
          {person.name} - {person.number}
        </p>
      ))}
    </>
  );
};

export default Contacts;
