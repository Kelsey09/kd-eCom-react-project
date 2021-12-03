import React, { Component } from 'react';

import PageTitle from '../page-title';
import AccountInfoForm from './account-information-form';

class AccountInfo extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='account-information'>
                <PageTitle className='account-information' title='Account Information' />
                <AccountInfoForm onSubmit={this.onSubmit} className='account-information__form' />
            </div>
        )
    }
}

export default AccountInfo;