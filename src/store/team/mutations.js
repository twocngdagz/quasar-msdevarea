export function SET_DATA_LOADED (state, DATALOADED) {
  state.dataLoaded = DATALOADED
}

export function INCREMENT_CURRENT_PAGE(state) {
  state.currentPage += 1
}

export function ADD_ITEMS(state, items) {
  state.items = [...state.items, ...items]
}
