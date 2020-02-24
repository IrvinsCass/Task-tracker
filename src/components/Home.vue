<template lang="pug">
  .container
    section
      h1.home-header Home
      .add-task-form.container-fluid
        input.form-control.add-task-form__element.add-task-form__input(
          type="text"
          placeholder="Things need to be done"
          v-model="taskTitle"
        )
        textarea.form-control.add-task-form__element.add-task-form__textarea(
          rows='3'
          placeholder="Any details you shouldn't forget?"
          v-model="taskDescription"
        )
        .container-fluid.add-task-form__element.add-task-form__footer
          .radio-wrapper
            input(
              type="radio"
              id="attention"
              value="attention"
              v-model="taskUrgencyLevel"
            )
            label(
              for="attention"
            ) Attention
            input(
              type="radio"
              id="warning"
              value="warning"
              v-model="taskUrgencyLevel"
            )
            label(
              for="warning"
            ) Warning
          button.btn.btn-primary(
            type="button"
            @click="newTask"
            ) Add task
    section.container-fluid
      .task-list
        .task-item(
          v-for="task in tasks"
          :key="task.id"
          :class="{ completed: task.completed }"
        )
          .card
            h5.card-header {{ task.title }}
              span.button-close
                i.fas.fa-times
            .card-body
              .card-body__text
                span.form-check
                  input(
                    type='checkbox'
                    v-model="task.completed"
                  )
                p {{ task.description }}
              .card-body__label
                .urgency-label(
                  v-if="task.urgencyLevel == 'attention'"
                )
                  span.badge.badge-warning Attention
                .urgency-label(
                  v-else="task.urgencyLevel == 'warning'"
                )
                  span.badge.badge-danger Warning

</template>

<script>
export default {
  data () {
    return {
      taskTitle: '',
      taskId: 3,
      taskDescription: '',
      taskUrgencyLevel: '',
      tasks: [
        {
          'id': 1,
          'title': 'Clean table',
          'description': 'Table dirty like you mom, clean it now fag!',
          'urgencyLevel': 'attention',
          'completed': false,
          'editing': false
        },
        {
          'id': 2,
          'title': 'Pet a cat',
          'description': 'Or he will eat your face at you sleep',
          'urgencyLevel': 'warning',
          'completed': false,
          'editing': false
        }
      ]
    }
  },
  methods: {
    newTask () {
      if (!this.taskTitle) {
        return
      }
      this.tasks.push({
        title: this.taskTitle,
        id: this.taskId,
        description: this.taskDescription,
        urgencyLevel: this.taskUrgencyLevel,
        completed: false,
        editing: false
      })

      this.taskId++
      this.taskTitle = ''
      this.taskDescription = ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.add-task-form
  margin 15px 0 35px 0
  &__element
    margin-bottom 15px
  &__textarea
    resize none
  &__footer
    display flex
    justify-content space-between
    input
      margin-left 15px
    label
      margin-left 5px
      user-select: none
      cursor pointer

.task-item
  margin-bottom 15px
  &:last-child
    margin-bottom 0

.card-header
  display flex
  justify-content space-between
  i
    cursor pointer
    &:hover
      color gray

.card-body
  &__text
    display flex
    align-items center
    margin-bottom 8px
    p
      margin-bottom 0
    span
      margin 0
      padding 0
      margin-right 8px
      padding-top 2px
</style>
