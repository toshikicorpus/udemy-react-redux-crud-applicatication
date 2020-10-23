import {READ_EVENTS,CREATE_EVENT} from "../actions"
import _ from "lodash"


export default (state = {},action) => {
  switch (action.type){
    case READ_EVENTS:
      return _.mapKeys(action.response.data,"id")
    default:
      return state
  }
}
