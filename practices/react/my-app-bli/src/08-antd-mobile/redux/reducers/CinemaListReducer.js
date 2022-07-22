const CinemaListReducer = (prevState={
  // list:[1,2,3,4]
  list:[]
},action)=>{
  let newState = {...prevState}
  switch(action.type){
    case "change-list":
      newState.list = action.payload
      return {...newState}
    default:
      return prevState
  }
}

export default CinemaListReducer