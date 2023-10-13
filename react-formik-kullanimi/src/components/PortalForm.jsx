import { Form, Formik } from "formik";
import React from "react";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  }),
  actions.resetForm()
}

function PortalForm() {
  
  return (<>
  <div className="App">
    <Formik
        initialValues={{ userName: '', university: '', isAcceppted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
          >          
        {({isSubmitting}) => (
          <Form>
              <CustomInput 
              label="Kullanıcı Adı" 
              name="userName" 
              type="text" 
              placeholder="Kullanıcı adını gir"/>

              <CustomSelect 
                label="Your University"
                name="university"
                placeholder="Select Your University"
              >
                <option value="">Select</option>
                <option value="bogazici">Bogazici University</option>
                <option value="itu">İTÜ</option>
                <option value="marmara">Marmara University</option>
                <option value="esogu">ESOGÜ</option>
              </CustomSelect>

              <CustomCheckbox 
              type="checkbox"
              name="isAcceppted"/>
              <button  disabled={isSubmitting} type="submit">Save</button>
              <Link to="/" className="formLink">Main form</Link>
          </Form>
        )}
    </Formik>  
  </div>      
  </>)
}

export default PortalForm;
