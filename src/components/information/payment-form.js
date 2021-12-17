import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../form-fields';
import history from '../../history';

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} payment-form`}>
                <Field className='payment-form__email' name='email' type='email' title='Email' placeholder='Email' component={FormInput} />
                <Field className='payment-form__password' name='password' type='password' title='Password' placeholder='Password' component={FormInput} />
                <div className='payment-form__line'></div>
                <Field className='payment-form__login' name='login' type='submit' title='Login' component={FormButton} onClick={() => history.push('/account')} />
            </form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'SignIn'
})(PaymentForm);

export default PaymentForm;