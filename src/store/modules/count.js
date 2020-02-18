const state = {
    count: 1
}
const actions = {
    incrementCount(context, counting) {
        context.commit('INCREMENT_COUNT', counting)
    }
}
const mutations = {
    INCREMENT_COUNT(state, counting) {
        state.count += counting
    }
    
}

export default {
    namespaced: true, //避免命名衝突
    state,
    actions,
    mutations
}