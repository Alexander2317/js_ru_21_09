import {INCREMENT, DELETE_ARTICLE, SELECT_ARTICLE, RANGE_DATE_ARTICLE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectArticle(select) {
    return {
        type: SELECT_ARTICLE,
        payload: {select}
    }
}

export function rangeDateArticle(rangeDate) {
    return {
        type: RANGE_DATE_ARTICLE,
        payload: {rangeDate}
    }
}