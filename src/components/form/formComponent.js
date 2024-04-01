import React, { Component } from 'react';
import { Field, Form } from "react-final-form";
import TextAreaFieldComponent from "../formField/textAreaFieldComponent";
import TextInputFieldComponent from "../formField/textInputFieldComponent";


class FormComponent extends Component {
    submit = (values) => {
        console.log("SUBMIT");
    }
    validate = (values) => {
        const errors = {};
        if (
            !values ||
            !values.email ||
            values.email === "" ||
            !/^([a-zA-Z0-9!#$%&'*-`{|}~_.]{1}[a-zA-Z0-9!#$%&'*-`{|}~_.]*)(@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6})$/i.test(
                values.email
            )
        ) {
            errors.email = "E-mail address incorrect";
        }

        if (
            !values ||
            !values.name ||
            values.name === "" 
        ) {
            errors.name = "Name incorrect";
        }

        return errors;
    }
    render() {
        return (
            <div className='form-content-block'>
                <Form
                    onSubmit={this.submit}
                    validate={this.validate}
                    render={({ handleSubmit, submitFailed, errors }) => (
                        <form onSubmit={handleSubmit}>
                            <Field
                                type="text"
                                name="name"
                                placeholder={"Your name*"}
                                component={TextInputFieldComponent}
                            />
                            {
                                submitFailed && errors.name &&
                                <span>The field is required.</span>
                            }
                            <Field
                                type="text"
                                name="email"
                                placeholder={"Your email address*"}
                                component={TextInputFieldComponent}
                            />
                            {
                                submitFailed && errors.email &&
                                <span>The field is required.</span>
                            }
                            <Field
                                type="text"
                                name="referred"
                                placeholder={"Who you referred*"}
                                component={TextInputFieldComponent}
                            />
                            <Field
                                name="comments"
                                placeholder={"Additional comments"}
                                component={TextAreaFieldComponent}
                            />
                            <div className='btn-item'>
                                <button type="submit">
                                    <span>SEND</span>
                                </button>
                            </div>
                        </form>
                    )}
                ></Form>
            </div>
        );
    }
}

export default FormComponent;