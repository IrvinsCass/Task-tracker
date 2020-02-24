export default {
  state: {
    tasks: [
      {
        'id': 0,
        'title': 'Create site',
        'description': 'Use Vue. js and Bootstrap',
        'urgencyLevel': 'attention',
        'completed': false
      },
      {
        'id': 1,
        'title': 'Publish site on Firebase',
        'description': 'Dont forget create database and Auth!',
        'urgencyLevel': 'attention',
        'completed': false
      },
      {
        'id': 2,
        'title': 'Pet your cat',
        'description': 'He totally deserve it',
        'urgencyLevel': 'warning',
        'completed': false
      }
    ]
  },
  mutations: {
    newTask (state, payload) {
      state.tasks.push(payload)
    }
  },
  actions: {
    newTask ({ commit }, payload) {
      payload.id = Math.random()
      commit('newTask', payload)
    }
  },
  getters: {
    tasks (state) {
      return state.tasks
    },
    taskCompleted (state) {
      return state.tasks.filter(task => {
        return task.completed
      })
    },
    taskNotCompleted (state) {
      return state.tasks.filter(task => {
        return task.completed === false
      })
    }
  }
}
