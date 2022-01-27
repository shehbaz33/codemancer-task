import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
      name:'Shehbaz',
      desc:'random description about random things',
      url:'https://media4.giphy.com/media/3o6Zt481isNVuQI1l6/200.gif?cid=a171e4016lcgidmakv7kmf2wrnhqjxjs849v4hzdunpyvn0k&rid=200.gif&ct=g'
    },
    {
      name:'Arbaz',
      desc:'random description about random things',
      url:'https://media4.giphy.com/media/EIV7o5wWLOd26lmeI2/200.gif?cid=a171e401b7gsnhl5472rbwucnnvx0uootsbsnsy2ex7f56jg&rid=200.gif&ct=g'
    },
    {
      name:'Sunil',
      desc:'random description about random things',
      url:'https://media0.giphy.com/media/SwIMZUJE3ZPpHAfTC4/200.gif?cid=a171e401b7gsnhl5472rbwucnnvx0uootsbsnsy2ex7f56jg&rid=200.gif&ct=g'
    },
  ]

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
      updatePost: (state,action) => {
        state = state.push(action.payload)
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { updatePost } = postSlice.actions
  
  export default postSlice.reducer