import {cloneDeep} from "lodash";
import { api } from 'boot/axios'

export function updateGlobal({state, commit}) {
  commit('setting/SET_ITEMS', {module: state.module, items: cloneDeep(state.items[state.module])}, {root:true})
}

export function fetchForm(context, payload) {
  api.get(
    'settingForm/'+payload.module,
    {}
  ).then(response => {
    context.commit('SET_SETTING_FORM', response.data.data)
    context.commit('UPDATE_ELEMENTS')
  }).catch((error) => {
    console.log(error)
  })
}
