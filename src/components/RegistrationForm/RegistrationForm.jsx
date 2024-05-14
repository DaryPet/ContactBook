import { Formik, Form, Field } from "formik";
import css from "./RegistrationForm.module.css";
// import { useDispatch } from "react-redux";

export default function RegistrationForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Username <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
