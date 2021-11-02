const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <Course courses={courses} />;
};

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
export default App;
