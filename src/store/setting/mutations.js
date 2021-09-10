export function ADD_ITEMS(state, items) {
  for(let item of items) {
    let [module,token] = item.token.split('.')
    if(!state.items[module]) {
      state.items[module] = {}
    }
    state.items[module][token] = item.payload
  }
}

export function SET_DATA_LOADED(state, DATALOADED) {
  state.dataLoaded = DATALOADED
}
