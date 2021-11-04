const Contacts = ({ person, onBtnClick }) => {
  return (
    <li>
      {person.name} - {person.number}{' '}
      <button onClick={onBtnClick}>Delete</button>
    </li>
  );
};

export default Contacts;
