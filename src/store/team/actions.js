import {api} from 'boot/axios'

export function remove (context, payload) {
  context.commit('REMOVE',payload.id);
}

export function _fetchTeamsPageByPage(context, params) {
  api.get('teams', {params: {page: context.state.currentPage}}
  ).then(response => {
    context.commit('ADD_ITEMS', response.data.data)
    if (response.data.meta.last_page > response.data.meta.current_page) {
      context.commit('INCREMENT_CURRENT_PAGE')
      context.dispatch('_fetchTeamsPageByPage');
    }
  }).catch((error) => {
    console.log(error)
  })
}

export function fetch(context, payload) {
  if (payload?.reset) {
    context.commit('RESET');
  }
  if (context.state.dataLoaded) {
    return;
  }
  context.commit('SET_DATA_LOADED', true)
  context.dispatch('_fetchTeamsPageByPage');
}
