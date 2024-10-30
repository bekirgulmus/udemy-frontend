import './App.css'
import { CourseForm } from "./components/CourseForm.jsx";
import { CourseSearch } from "./components/CourseSearch.jsx";
import { CourseList } from "./components/CourseList.jsx";
import { CourseValue } from "./components/CourseValue.jsx";

function App() {

  return (
    <div className="container is-fluid">
      <CourseForm/>
      <CourseSearch/>
      <CourseList/>
      <CourseValue/>
    </div>
  )
}

export default App
