import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../form-fields';
import history from '../../history';

class AccountInfoForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field className='account-information-form__email' name='email' type='email' title='Email' placeholder='Email' component={FormInput} />
                <Field className='account-information-form__password' name='password' type='password' title='Password' placeholder='Password' component={FormInput} />
                <div className='account-information-form__line'></div>
                <Field className='account-information-form__login' name='login' type='submit' title='Login' component={FormButton} onClick={() => history.push('/account')} />
            </form>
        )
    }
}

AccountInfoForm = reduxForm({
    form: 'AccountInfo'
})(AccountInfoForm);

export default AccountInfoForm;