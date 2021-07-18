import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Field, Form, Formik, ErrorMessage, useField } from "formik";
import * as yup from "yup";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
    root: {
        "& *": {
            fontFamily: "inherit",
            marginBottom: "0.1rem",
        },
        "& label ": {
            fontFamily: "inherit",
            color: "#63A814",
            fontWeight: "bold",
        },

        "& input": {
            color: "white",
        },
        "& textarea": {
            color: "white",
        },
        "& textarea:focus": {
            backgroundColor: "#2B2E2F",
        },
        "& input:focus": {
            backgroundColor: "#2B2E2F",
        },
        "& input:hover": {
            // backgroundColor: "blue",
        },
    },
    focused: {},
}));

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
            color="secondary"
            required={required}
            multiline={multiline || false}
            maxRows={3}
            // variant="outlined"
        />
    );
};

const Contact = () => {
    let [mailStatus, setMailStatus] = useState("");
    const classes = useStyles();
    return (
        <div className="contact-container">
            <h4>ContactMe</h4>
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
                onSubmit={(data, { setSubmitting, resetForm }) => {
                    (async () => {
                        const request = await fetch("/api/mail", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(data),
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
                    mobile: yup.number().typeError("number is required"),
                    message: yup.string(),
                })}
            >
                {({ values, isSubmitting }) => (
                    <Form className={classes.root}>
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
                                label="message"
                                required={true}
                                multiline={true}
                            />
                        </div>
                        <Button
                            className="button"
                            disabled={isSubmitting}
                            color="primary"
                            type="submit"
                            size="small"
                        >
                            send
                        </Button>
                        <div>{mailStatus}</div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Contact;
