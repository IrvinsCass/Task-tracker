export default {
  state: {
    tasks: [
      {
        'id': 0,
        'title': 'Create site',
        'description': 'Use Vue. js and Bootstrap',
        'urgencyLevel': 'attention',
        'completed': true
      },
      {
        'id': 1,
        'title': 'Create Auth functions',
        'description': 'Database incoming!',
        'urgencyLevel': 'attention',
        'completed': false
      },
      {
        'id': 2,
        'title': 'Make validations',
        'description': 'All input forms must be fill',
        'urgencyLevel': 'warning',
        'completed': false
      },
      {
        'id': 3,
        'title': 'Make other fancy things',
        'description': 'Everything can be improved',
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
