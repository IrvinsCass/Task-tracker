<template lang="pug">
  .container
    section
      h1.home-header Home
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
                  v-if="task.urgencyLevel == 1"
                )
                  span.badge.badge-warning Attention
                .urgency-label(
                  v-else="task.urgencyLevel == 2"
                )
                  span.badge.badge-danger Warning

</template>

<script>
export default {
  data () {
    return {
      tasks: [
        {
          'id': 1,
          'title': 'Clean table',
          'description': 'Table dirty like you mom, clean it now fag!',
          'urgencyLevel': 1,
          'completed': false,
          'editing': false
        },
        {
          'id': 2,
          'title': 'Pet a cat',
          'description': 'Or he will eat your face at you sleep',
          'urgencyLevel': 2,
          'completed': false,
          'editing': false
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-header
  margin-bottom 15px

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
