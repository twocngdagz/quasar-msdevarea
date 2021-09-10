function updateElements(elements, items) {
  for (let element of elements) {
    if (element.depends) {
      let [module, token] = element.depends.key.split('.')
      element['active'] = false

      if (!element.depends.values) {
        if (items[module][token]) {
          element['active'] = true
        }
      } else {
        element.depends.values.forEach(expectedValue => {
          if (expectedValue === items[module][token]) {
            element['active'] = true
          }
        })
      }
    } else {
      element['active'] = true
    }

    if (element.elements) {
      element.componentType = 'SettingElements'
      updateElements(element.elements, items)
      continue
    }
    let mapping = {
      checkbox: 'SettingCheckbox',
      text: 'SettingText',
      number: 'SettingNumber',
      select: 'SettingSelect',
      default: 'OutputText'
    }
    let cast = element.cast ?? '';
    element['componentType'] = (mapping[cast.toLowerCase()] || mapping.default)
  }
}

export function ADD_ITEMS(state, items) {
  for(let item of items) {
    let [module,token] = item.token.split('.')
    if (state.module == module) {
      if(!state.items[module]) {
        state.items[module] = {}
      }
      state.items[module][token] = item.payload
    }
  }
}

export function SET_SETTING_FORM(state, data) {
  state.settingForm = data
}

export function UPDATE_ELEMENTS(state) {
  updateElements(state.settingForm.elements, state.items)
}

export function UPDATE_ITEM_VALUE(state, data) {
  state.items[data.module][data.token] = data.value
}
