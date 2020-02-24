<template lang="pug">
  .container
    section.tasks-header
      h1 Tasks
      .task-filter
        .buttons-list
          button.btn.btn-warning(@click='filter="active"') Active
          button.btn.btn-success(@click='filter="completed"') Completed
          button.btn.btn-secondary(@click='filter="all"') All tasks
    section.container-fluid
      .task-list
        .task-item(
          v-for="task in tasksFilter"
          :key="task.id"
          :class="{ completed: task.completed }"
        )
          .card
            h5.card-header {{ task.title }}
              span.button-close
                i.fas.fa-times
            .card-body
              .card-body__text
                p {{ task.description }}
                .button-wrapper(
                  v-if="task.completed == false"
                )
                  button.btn.btn-success(
                    @click="task.completed = !task.completed"
                    ) Done
              .card-body__label
                .urgency-label(
                  v-if="task.urgencyLevel == 'attention'"
                )
                  span.badge.badge-warning Attention
                .urgency-label(
                  v-else="task.urgencyLevel == 'warning'"
                )
                  span.badge.badge-danger Warning
                .urgency-label(
                  v-if="task.urgencyLevel == 'complete'"
                )
                  span.badge.badge-success Success
</template>

<script>
export default {
  data () {
    return {
      filter: 'active'
    }
  },
  computed: {
    tasksFilter () {
      if (this.filter === 'active') {
        return this.$store.getters.taskNotCompleted
      } else if (this.filter === 'completed') {
        return this.$store.getters.taskCompleted
      } else if (this.filter === 'all') {
        return this.$store.getters.tasks
      }
      return this.filter === 'active'
    }
  }
}
</script>

<style lang="stylus" scoped>
.tasks-header
  display flex
  align-items center
  justify-content space-between
  button
    margin-right 15px
    &:last-child
      margin-right 0

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
    justify-content space-between
    p
      margin-bottom 0
    span
      margin 0
      padding 0
      margin-right 8px
      padding-top 2px
</style>
