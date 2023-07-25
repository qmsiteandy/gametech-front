import { useEffect } from "react";
import actionType from "../constants";

const initialAppState = {
  // aside: {
  //   open: false,
  // },
  courses: {
    items: [],
    loading: false,
    error: "",
  },
  course: {
    item: {},
    loadingg: false,
    error: "",
  },
  ReserveItems: [],
  userSignin: {
    loading: false,
    userInfo: null,
    error: "",
  },
  userRegister: {
    loading: false,
    userInfo: null,
    error: "",
  },
};

let ReserveItems = {};

const appReducer = (state, action) => {
  switch (action.type) {

    case actionType.BookClass_LIST_REQUEST:
      return { ...state, courses: { ...state.courses, loading: true } };
    case actionType.BookClass_List_LIST_SUCCESS:
      return {
        ...state,
        courses: { ...state.courses, items: action.payload, loading: false },
      };
    case actionType.BookClass_List_LIST_FAIL:
      return {
        ...state,
        courses: { ...state.courses, error: action.payload, loading: false },
      };

    case actionType.Reserve_INIT_ITEMS:
      ReserveItems = action.payload;

      return { ...state, ReserveItems };

    case actionType.Reserve_ADD_ITEM:
      const item = action.payload;
      const course = state.ReserveItems.find((x) => x.courseID === item.courseID);
      if (course) {
        alert("已預訂此課程，至我的課程查看")
      } else {
        ReserveItems = [...state.ReserveItems, item];
        alert("預訂課程成功，至我的課程查看")
        return { ...state, ReserveItems };
      }

    // eslint-disable-next-line no-fallthrough
    case actionType.Reserve_REMOVE_ITEM:
      ReserveItems = state.ReserveItems.filter((x) => x.courseID !== action.payload);
      console.log("remove "+action.payload)
      return { ...state, ReserveItems };


    case actionType.USER_INIT_INFO:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          userInfo: action.payload,
        },
      };
    case actionType.USER_SIGNIN_REQUEST:
      return { ...state, userSignin: { ...state.userSignin, loading: true } };
    case actionType.USER_SIGNIN_SUCCESS:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          userInfo: action.payload,
        },
      };
    case actionType.USER_SIGNIN_FAIL:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          error: action.payload,
        },
      };
    case actionType.USER_LOGOUT:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          userInfo: null,
        },
      };

    case actionType.USER_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: { ...state.userRegister, loading: true },
      };

    case actionType.USER_REGISTER_SUCCESS:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          userInfo: action.payload,
        },
        userRegister: {
          ...state.userRegister,
          loading: false,
          userInfo: action.payload,
        },
      };
    case actionType.USER_REGISTER_FAIL:
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export { initialAppState, appReducer };
