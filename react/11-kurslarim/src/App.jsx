import './App.css'
import { useEffect, useState } from "react";
import Courses from "./Courses.jsx";
import axios from "axios";
import Loading from "./Loading.jsx";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter(course => course.id !== id);
    setCourses(afterDeletedCourses);
  }

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="App">
      {
        loading ? (
          <Loading/>
        ) : (
          <>
            {
              courses.length === 0 ? (
                <div className="refreshDiv">
                  <h2>Kursların hepsini sildin</h2>
                  <button className="cardDeleteBtn" onClick={() => fetchCourses()}>Yenile</button>
                </div>
              ) : (
                <Courses courses={courses} removeCourse={deleteCourse} />
              )
            }
          </>
        )
      }
    </div>
  )
}

export default App
