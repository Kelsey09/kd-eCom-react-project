import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormButton, FormInput, LongGrayButton } from '../form-fields';

class AccountInfoForm extends Component {
    constructor(props) {
        super();

        this.state = {
            showPasswords: false
        }
    }
    render() {
        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field 
                    className='account-information-form__name' 
                    name='name' 
                    type='name' 
                    title='Name' 
                    placeholder='Name' 
                    component={FormInput} 
                />
                <Field 
                    className='account-information-form__email' 
                    name='email' 
                    type='email' 
                    title='Email' 
                    placeholder='Email' 
                    component={FormInput} 
                />
                <Field 
                    className='account-information-form__street-address' 
                    name='address' 
                    type='address' 
                    title='Street Address' 
                    placeholder='Street Address' 
                    component={FormInput} 
                />
                <Field 
                    className='account-information-form__city' 
                    name='city' 
                    type='city' 
                    title='City' 
                    placeholder='City' 
                    component={FormInput} 
                />
                <Field 
                    className='account-information-form__state' 
                    name='state' 
                    type='state' 
                    title='State' 
                    placeholder='State' 
                    component={FormInput} 
                />
                <Field 
                    className='account-information-form__zipcode' 
                    name='zipcode' 
                    type='zipcode' 
                    title='Zipcode' 
                    placeholder='Zipcode' 
                    component={FormInput} 
                />

                {
                    this.state.showPasswords ? 
                    [
                        <Field 
                        key={0}
                        className='account-information-form__current' 
                        name='current' 
                        type='password' 
                        title='Current Password' 
                        placeholder='Current Password'
                        component={FormInput} 
                        />,
                        <Field 
                        key={1}
                        className='account-information-form__new' 
                        name='new' 
                        type='password' 
                        title='New Password' 
                        placeholder='New Password'
                        component={FormInput} 
                        />,
                        <Field 
                        key={2}
                        className='account-information-form__confirm' 
                        name='confirm' 
                        type='password' 
                        title='Confirm Password' 
                        placeholder='Confirm Password'
                        component={FormInput} 
                        />,
                        <div key={3} className='account-information-form__line'></div>,
                        <Field 
                        key={4}
                        className='account-information-form__update-information' 
                        name='update information' 
                        type='submit' 
                        title='Update Information' 
                        component={FormButton} 
                        onClick={() => this.setState({ showPasswords: false })} 
                        />,
                        <Field 
                        key={5}
                        className='account-information-form__cancel' 
                        name='cancel' 
                        type='button' 
                        title='Cancel' 
                        short={true}
                        component={FormButton} 
                        onClick={() => this.setState({ showPasswords: false })} 
                        />
                    ]
                    :
                        <Field 
                        className='account-information-form__change-password' 
                        onClick={() => this.setState({ showPasswords: true })}
                        name='change-password' 
                        type='button' 
                        labelTitle='Password'
                        title='Change Password' 
                        component={LongGrayButton} 
                        />
                }
            </form>
        )
    }
}

AccountInfoForm = reduxForm({
    form: 'AccountInfo'
})(AccountInfoForm);

export default AccountInfoForm;