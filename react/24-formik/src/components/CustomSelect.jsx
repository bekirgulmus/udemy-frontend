import { useField } from "formik";

export const CustomSelect = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <select {...field} {...props} className={meta.error && 'input-error'} />
      {meta.error && <div className="error">{meta.error}</div>}
    </>
  )
}
