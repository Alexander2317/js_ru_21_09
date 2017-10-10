import { SELECT_ARTICLE, RANGE_DATE_ARTICLE } from '../constants';

const defaultFilters = {
  select: [],
  rangeDate: {
    from: null,
    to: null
  }
}

export default function filters(state = defaultFilters, action) {
  const {type, payload} = action;

  switch (type) {
    case SELECT_ARTICLE:
      return {...state, select: payload.select}

    case RANGE_DATE_ARTICLE:
         return {...state, rangeDate: payload.rangeDate}
  }

  return state;
}