import React,{useState} from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Checkbox } from "@material-ui/core";
import { Field, Form, Formik, ErrorMessage, useField } from "formik";
import * as yup from "yup";
import Link from "next/link";

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
    let [mailStatus,setMailStatus]=useState('');
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
                        // errors.name = "no yesu";
                    }
                    return errors;
                }}
                onSubmit={(data, { setSubmitting ,resetForm}) => {
                    (async ()=>{
                    const request = await fetch('/api/mail',
                    {
                        method:"POST",
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body:JSON.stringify(data)
                    });
                    const response = await request.text();
                    setMailStatus(response);
                    setSubmitting(false);
                    setTimeout(() => {
                    resetForm();
                       setMailStatus(""); 
                    }, 2000);
                    })();
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
                        <pre>{mailStatus}</pre>
                       
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Contact;
