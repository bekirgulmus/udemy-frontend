import Course from "./Course.jsx";

function Courses({courses, removeCourse}) {
  return (
    <div className="courseMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="cardDiv">
        {
          courses.map(course => (
            <Course key={course.id} {...course} removeOneCourse={removeCourse}/>
          ))
        }
      </div>
    </div>
  )
}

export default Courses;
