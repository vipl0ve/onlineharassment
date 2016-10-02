const FilterReducer = function(state = true, action) {
  console.log('in filter reducer');
  switch(action.type){
    case 'TOGGLE':
      return !state.filter_on;
      break;
    default:
      return state;
  }
}

export default FilterReducer;
