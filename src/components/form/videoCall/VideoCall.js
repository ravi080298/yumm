import React from "react";
import { Formik, Form, useField } from "formik";
import { Field } from "formik";

const VideoCall = () => {
  // const [field, meta] = useField("");
  // console.log(field);
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        about: "",
      }}
      onSubmit={(values, { setSubmitting }) => {}}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="">
            <h1>Let's plan a video call.</h1>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                value={values.name}
                placeholder="Name"
                className="name"
              />
              <input
                type="email"
                name="email"
                value={values.email}
                placeholder="Email"
                className="name"
              />
              <textarea
                type="text"
                name="text"
                value={values.text}
                className="textarea"
                placeholder="What do you want to talk about?"
              />
              <button type="submit">Send Query</button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default VideoCall;
