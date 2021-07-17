import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Checkbox } from "@material-ui/core";
import { Field, Form, Formik, ErrorMessage, useField } from "formik";
import * as yup from "yup";

const MyTextField = ({ label, required, multiline, ...props }) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <TextField
            {...field}
            label={label}
            helperText={errorText}
            error={!!errorText}
            size="small"
            required={required}
            multiline={multiline || false}
            maxRows={3}
        />
    );
};

const Contact = () => {
    return (
        <div className="contact-container">
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    mobile: "",
                    message: "",
                }}
                validate={(values) => {
                    const errors = {};
                    if (values.name.includes("yesu")) {
                        errors.name = "no yesu";
                    }
                    return errors;
                }}
                onSubmit={(data, { setSubmitting }) => {
                    // setSubmitting(false);
                    // const request = await fetch('/')
                    setTimeout(() => {
                        console.log(JSON.stringify(data, null, 2));
                        setSubmitting(false);
                    }, 400);
                    setSubmitting(true);
                }}
                validationSchema={yup.object({
                    name: yup.string(),
                    email: yup.string().email(),
                    mobile: yup.number(),
                    message: yup.string(),
                })}
            >
                {({ values, isSubmitting }) => (
                    <Form className="form">
                        <div>
                            <MyTextField
                                name="name"
                                label="name"
                                required={true}
                            />
                        </div>
                        <div>
                            <MyTextField
                                name="email"
                                label="email"
                                required={true}
                            />
                        </div>
                        <div>
                            <MyTextField
                                name="mobile"
                                label="mobile"
                                required={true}
                            />
                        </div>
                        <div>
                            <MyTextField
                                name="message"
                                label="mesage"
                                required={true}
                                multiline={true}
                            />
                        </div>
                        <Button
                            disabled={isSubmitting}
                            color="primary"
                            type="submit"
                        >
                            send
                        </Button>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Contact;
