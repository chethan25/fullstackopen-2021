const Course = ({ courses }) => {
  return courses.map((course) => {
    return (
      <>
        <Header name={course.name}></Header>
        <Content parts={course.parts}></Content>
      </>
    );
  });
};

const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part part={part}></Part>
      ))}
      <Total parts={parts}></Total>
    </>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      Total of {parts.reduce((total, part) => total + part.exercises, 0)}{' '}
      exercises
    </p>
  );
};

export default Course;
