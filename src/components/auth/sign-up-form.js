import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../form-fields';
import Details from '../details';
import history from '../../history';

class SignUpForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const info = [
            {
                _id: 0,
                title: 'At least 6 characters',
            },
            {
                _id: 1,
                title: 'At least one number',
            },
            {
                _id: 2,
                title: 'At least one symbol',
            }
        ]
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field className='sign-up-form__email' name='email' type='email' title='Email' placeholder='Email' component={FormInput} />
                <Field className='sign-up-form__name' name='name' type='name' title='Name' placeholder='Name' component={FormInput} />
                <Field className='sign-up-form__password' name='password' type='password' title='Password' placeholder='Password' component={FormInput} />
                <Field className='sign-up-form__confirm' name='confirm' type='password' title='Confirm Password' placeholder='Confirm Password' component={FormInput} />
                <div className='sign-up-form__line'></div>
                <Field className='sign-up-form__login' name='login' type='submit' title='Create Account' component={FormButton} onClick={() => history.push('account')} />
                <Field className='sign-up-form__back' name='back' type='button' title='Back' short={true} component={FormButton} onClick={() => history.push('signin')} />
                <Details className='sign-up-form__details' title='Password Requirements' info={info} />
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUp'
})(SignUpForm);

export default SignUpForm;