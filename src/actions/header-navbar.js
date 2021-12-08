import {
    CHANGE_NAVBAR_ACTIVE,
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS
} from './types';

export function setHeaderLinks(links) {
    return ({
        type: SET_HEADER_LINKS,
        payload: links
    })
}

export function setNavbarLinks(links, onClick) {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: {
            links,
            onClick: onClick ? onClick : ''
        }
    })
}

export function changeNavbarActive(_id) {
    return ({
        type: CHANGE_NAVBAR_ACTIVE,
        payload: _id
    })
}