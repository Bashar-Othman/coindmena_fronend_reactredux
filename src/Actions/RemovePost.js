import {REMOVE_POST} from './Actions'

export function removePost (data) {
    return {
        type: REMOVE_POST,
        payLoad:data
    }
}