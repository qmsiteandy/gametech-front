const actionType = {
  // // UI Actions
  // OPEN_ASIDE: "OPEN_ASIDE",
  // CLOSE_ASIDE: "CLOSE_ASIDE",

   //Class Actions
   BookClass_List_FAIL: "BookClass_List_FAIL",
   BookClass_List_REQUEST: "BookClass_List_REQUEST",
   BookClass_List_SUCCESS: "BookClass_List_SUCCESS",
   ClassBook_FAIL: "ClassBook_FAIL",
   ClassBook_REQUEST: "ClassBook_REQUEST",
   ClassBook_SUCCESS: "ClassBook_SUCCESS",
 
   //Reserve Actions
   Reserve_INIT_ITEMS: "Reserve_INIT_ITEMS",
   Reserve_ADD_ITEM: "Reserve_ADD_ITEM",
   Reserve_REMOVE_ITEM: "Reserve_REMOVE_ITEM",

  //SignIn Actions
  USER_SIGNIN_REQUEST: 'USER_SIGNIN_REQUEST',
  USER_SIGNIN_SUCCESS: 'USER_SIGNIN_SUCCESS',
  USER_SIGNIN_FAIL: 'USER_SIGNIN_FAIL',

  //SignUp Actions
  USER_REGISTER_REQUEST: 'USER_REGISTER_REQUEST',
  USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  USER_REGISTER_FAIL: 'USER_REGISTER_FAIL',
};
export const SERVER_URL = "http://127.0.0.1:5000";
export default actionType;

