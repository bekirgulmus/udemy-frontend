import { useSelector, useDispatch } from "react-redux";
import { removeCourse } from "../store/slices/courseSlice.jsx";

export const CourseList = () => {
  const { courses } = useSelector(({form, courses:{data, searchTerm}}) => {
    const filteredCourses = data.filter((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return {
      courses: filteredCourses
    }
  });

  // const {data: courses, searchTerm} = useSelector((state) => state.courses);

  const dispatch = useDispatch();

  const renderedCourses = courses.map((course) => (
    <div key={course.id} className="panel">
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <p>{course.cost} TL</p>
      <button className="button is-danger" onClick={() => dispatch(removeCourse(course.id))}>Sil</button>
    </div>
  ));

  return (
    <div className="courseList">
      {renderedCourses}
    </div>
  )
}
