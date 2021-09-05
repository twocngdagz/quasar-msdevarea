export function teams (state) {
  return state.items
}

export function byId (state) {
  return (id) => {
    return state.items.find(item => item.id == id)
  }
}

export function options(state) {
  return state.items.map(team => {
    return {
      key: team.id,
      name: team.name,
      color: team.color
    }
  })
}
