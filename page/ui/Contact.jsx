import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import { Field, Form, Formik, ErrorMessage, useField } from "formik";
import * as yup from "yup";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";
import green from "@material-ui/core/colors/green";

const theme = createTheme({
    palette: {
        primary: {
            main: deepOrange[500],
        },
    },
});

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

        "& input,textarea": {
            color: "white",
            fontSize: "0.9rem",
        },
        "& textarea:focus,input:focus": {
            backgroundColor: "#2B2E2F",
        },
        "& input:hover,textarea:hover": {},
    },
    focused: {},
}));

const MyTextField = ({ label, required, multiline, ...props }) => {
    const classes = useStyles();
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <ThemeProvider theme={theme}>
            <TextField
                {...field}
                className={classes.root}
                label={label}
                helperText={errorText}
                error={!!errorText}
                size="small"
                color="primary"
                required={required}
                multiline={multiline || false}
                maxRows={3}
                variant="filled"
            />
        </ThemeProvider>
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
                        }, 1000);
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
                            type="submit"
                            size="small"
                            endIcon={<SendIcon />}
                            variant="contained"
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
