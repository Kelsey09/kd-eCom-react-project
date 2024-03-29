import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import PaymentForm from './payment-form';;
import PageTitle from '../page-title';

class Payment extends Component {
    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='payment'>
                <PageTitle className='payment__page-title' title='Payment Information' />
                <PaymentForm onSubmit={this.onSubmit} className='payment__form' />
            </div>
        )
    }
}

Payment = connect(null, actions)(Payment);

export default Payment;