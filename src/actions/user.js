import  {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A0048248000',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Ayden Cole',
                    shippingAddress: '1234 West City Street'
                }
            },            {
                _id: 1,
                total: 8.40,
                orderNumber: 'A0048248111',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },            {
                _id: 2,
                total: 4.40,
                orderNumber: 'A0048248222',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Kelsey Liz',
                    shippingAddress: '6759 West State Street'
                }
            },            {
                _id: 3,
                total: 3.33,
                orderNumber: 'A0048248333',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'James Paul',
                    shippingAddress: '516 West State Street'
                }
            },            {
                _id: 4,
                total: 4.44,
                orderNumber: 'A0048248444',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Hope Nicole',
                    shippingAddress: '444 West State Street'
                }
            },            {
                _id: 5,
                total: 5.55,
                orderNumber: 'A0048248555',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Adam Scott',
                    shippingAddress: '555 West State Street'
                }
            },            {
                _id: 6,
                total: 6.66,
                orderNumber: 'A0048248666',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jane Doe',
                    shippingAddress: '666 West State Street'
                }
            },            {
                _id: 7,
                total: 8.88,
                orderNumber: 'A0048248777',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jon Snow',
                    shippingAddress: '888 West State Street'
                }
            }
        ]
    })
}