<template lang="pug">
  .container
    section.auth-container.container-fluid.d-flex.flex-column.align-items-center
      h1.auth-header Sign up
      .auth-form.container-fluid.d-flex.flex-column.align-items-end
        input.form-control.form-input(
          type="email"
          placeholder="Email"
        )
        input.form-control.form-input(
          type="password"
          placeholder="Password"
        )
        input.form-control.form-input(
          type="password"
          placeholder="Confirm password"
        )
        input.btn.btn-primary(
          type='button'
          value="Sign up fo free"
        )
      p.auth-container__footer Already have account?
        router-link(
          to="/login"
        )  Sign in
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.auth-container
  min-width 320px
  .auth-header
    margin-bottom 20px
  .auth-form
    width 100%
    max-width 400px
  &__footer
    margin-top 20px

.form-input
  margin-bottom 20px
  &:last-child
    margin-bottom 0
</style>
