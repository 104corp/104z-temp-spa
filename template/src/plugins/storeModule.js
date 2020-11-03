
const registerModule = function (store, modules) {
  for (const name in modules) {
    const isRegistered = store._modules.root._children[name] !== undefined
    if (!isRegistered) {
      const preserveState = store.state[name] !== undefined
      store.registerModule(name, modules[name], { preserveState })
    }
  }
}

const unregisterModule = function (store, modules) {
  for (const name of modules) {
    const isRegistered = store._modules.root._children[name] !== undefined
    if (isRegistered) {
      store.unregisterModule(name)
    }
  }
}

export default {
  install (Vue, options) {
    Vue.prototype.$registerModule = registerModule
    Vue.prototype.$unregisterModule = unregisterModule
  }
}
