import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormButton } from '../form-fields';
import history from '../../history';

class ReviewForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} review-form`}>
                <div className='review-form__line'></div>
                <Field className='review-form__proceed' name='proceed' type='submit' title='Proceed to Checkout' component={FormButton} onClick={() => history.push('/signin')} />
                <Field className='review-form__back' name='back' type='button' title='Back' short={true} component={FormButton} onClick={() => history.push('/shop')} />
            </form>
        )
    }
}

ReviewForm = reduxForm({
    form: 'SignUp'
})(ReviewForm);

export default ReviewForm;