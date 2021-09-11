import { TYPES } from "../Actions/CRUDActions";

export const CRUDInitialState = {
     db: null
} 

export function CRUDReducer(state, action){
     switch (action.type) {
          case TYPES.READ_ALL_DATA: {

          }

          case TYPES.CREATE_DATA: {

          }

          case TYPES.READ_ONE_DATA: {

          }

          case TYPES.UPDATE_DATA: {

          }

          case TYPES.DELETE_DATA: {

          }

          case TYPES.NO_DATA: 
               return CRUDInitialState;
     
          default:
               return state;
     }
}