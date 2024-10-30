import { Formik, Form} from "formik";
import { CustomInput } from "./CustomInput.jsx";
import { advancedSchema } from "../schemas/index.js";
import {CustomSelect} from "./CustomSelect.jsx";
import CustomCheckbox from "./CustomCheckbox.jsx";
import {Link} from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  actions.resetForm();
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

export const PortalForm = () => {
  return (
    <>
      <Formik
        initialValues={{ username: '', university: '', isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullancı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Kullanıcı Üniversitenizi Seçiniz"
            >
              <option value="">Lütfen Üniversiteniz Seçiniz</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="gsu">Galatasaray Üniversitesi</option>
              <option value="odtü">ODTÜ</option>
              <option value="itü">İTÜ</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Kaydet
            </button>
            <Link to='/' className="formLink">Ana Forma Git</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}
