import { api } from 'boot/axios'
export function fetch(context, payload) {
  if (payload?.reset) {
    context.commit('RESET');
  }
  if (context.state.dataLoaded) {
    return;
  }
  context.commit('SET_DATA_LOADED', true)

  api.get('settings', {}
  ).then(response => {
    context.commit('ADD_ITEMS', response.data.data)
    context.commit('settingform/ADD_ITEMS', response.data.data, {root:true})
  }).catch((error) => {
    console.log(error)
  })
}

