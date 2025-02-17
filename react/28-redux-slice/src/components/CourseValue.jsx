import { useSelector } from "react-redux";

export const CourseValue = () => {
  const totalCost = useSelector(({form, courses:{data, searchTerm}}) => {

    return data.filter((course) => course.name.toLowerCase()
      .includes(searchTerm.toLowerCase()))
      .reduce((acc, course) => acc + course.cost ,0)
  });

  return (
    <div className="coursePrice">Toplam Tutar: {totalCost} TL</div>
  )
}
