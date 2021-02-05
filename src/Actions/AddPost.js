import { func } from 'prop-types';
import {EDIT_POST, GET_POST} from '../Actions/Actions';

export function editPost(data){
    return {
        type:EDIT_POST,
        payLoad:data
    }
}

export function getPost(id) {
    return {
        type: GET_POST,
        payLoad:id
    }
}

 