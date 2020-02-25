<template lang="pug">
  .container
    section.auth-container.container-fluid.d-flex.flex-column.align-items-center
      h1.auth-header Sign in
      form.auth-form.container-fluid.d-flex.flex-column.align-items-end(
        @submit.prevent="onSubmit"
      )
        .form-item(
          :class="{ inputError: $v.email.$error }"
        )
          input.form-control.form-input(
            type="email"
            placeholder="Email"
            v-model="email"
            :class="{ error: $v.email.$error }"
            @change="$v.email.$touch()"
          )
          .error-label(v-if="!$v.email.required") Field is required
          .error-label(v-if="!$v.email.email") Email incorrect
        .form-item(
          :class="{ inputError: $v.password.$error }"
        )
          input.form-control.form-input(
            type="password"
            placeholder="Password"
            v-model="password"
            :class="{ error: $v.password.$error }"
            @change="$v.password.$touch()"
          )
          .error-label(v-if="!$v.password.required") Field is required
          .error-label(v-if="!$v.password.minLength") Must be at least {{ $v.password.$params.minLength.min }} symbols
        button.btn.btn-primary(
          type='submit'
          :disabled="submitStatus === 'PENDING'"
        ) Sign up fo free
        p.typo__p(v-if="submitStatus === 'OK'") Thanks for your submission!
        p.typo__p(v-if="submitStatus === 'ERROR'") Please fill the form correctly.
        p.typo__p(v-if="submitStatus === 'PENDING'") Sending...
      p.auth-container__footer Need account?
        router-link(
          to="/registration"
        )  Sign up
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      submitStatus: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
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
  .form-item
    width 100%
    margin-bottom 20px
    &:last-child
      margin-bottom 0
    &.inputError
      .error-label
        display block
    .error-label
      text-align center
      display none
      color #ec6c6c
      font-size 14px
      padding-top 5px
      margin-bottom 0
  &__footer
    margin-top 20px

input
  &.error
    border-color #ec6c6c
    color #ec6c6c
    &:focus
      box-shadow 0 0 0 0.2rem rgba(226, 23, 23, 0.3)
</style>
