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
            h5 Status:
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

</template>

<script>
export default {
  data () {
    return {
      taskTitle: '',
      taskDescription: '',
      taskUrgencyLevel: ''
    }
  },
  methods: {
    newTask () {
      if (!this.taskTitle) {
        return
      }
      const task = ({
        title: this.taskTitle,
        description: this.taskDescription,
        urgencyLevel: this.taskUrgencyLevel,
        completed: false,
        editing: false
      })
      this.$store.dispatch('newTask', task)

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
      margin-bottom 0
      user-select: none
      cursor pointer
  .radio-wrapper
    display flex
    align-items center
    h5
      margin-bottom 5px

</style>
