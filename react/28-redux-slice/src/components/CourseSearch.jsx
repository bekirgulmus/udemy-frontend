import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/slices/courseSlice.jsx";

export const CourseSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.courses.searchTerm);

  return (
    <div className="listHeader">
      <h3 className="title is-3">Kurslarım</h3>
      <div className="search field is-horizontal">
        <label className="label">Ara</label>
        <input className="input" type="text"
          onChange={(event) => dispatch(changeSearchTerm(event.target.value))}
          value={searchTerm}
        />
      </div>
    </div>
  )
}
