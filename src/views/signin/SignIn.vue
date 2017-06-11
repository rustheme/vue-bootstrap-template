<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 offset-md-4">
      <div class="signin-form">
        <h2 class="signin-form__heading">Sign in</h2>
          <vue-form :state="formstate" v-model="formstate" @submit.prevent="onSubmit">
            <validate class="form-group required-field" :class="fieldClassName(formstate.name)" auto-label>
              <label class="sr-only" for="name">Name</label>
              <input class="form-control" name="name" type="text" placeholder="Name" required v-model.lazy="model.name">

              <field-messages name="name" show="$touched || $submitted" class="form-control-feedback">
                <div>Success!</div>
                <div slot="required">Name is a required field</div>
              </field-messages>
            </validate>

            <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.password)">
              <label class="sr-only" for="password">Password</label>
              <input class="form-control" name="password" type="password" placeholder="Password" password-strength required v-model.lazy="model.password">

              <field-messages class="form-control-feedback" auto-label name="password" show="$touched || $submitted">
                <div>Success!</div>
                <div slot="required">Password is a required field</div>
                <div slot="password-strength">Password requires UpperCase, LowerCase, Number/SpecialChar and min 8 Chars</div>
              </field-messages>
            </validate>

            <validate auto-label class="form-group required-field" :class="fieldClassName(formstate.confirmPassword)">
              <label class="sr-only" for="confirmPassword">Confirm Password</label>
              <input class="form-control" name="confirmPassword" type="password" placeholder="Confirm password" :matches="model.password" required v-model.lazy="model.confirmPassword">

              <field-messages auto-label name="confirmPassword" show="$touched || $submitted" class="form-control-feedback">
                <div>Success!</div>
                <div slot="required">Confirm password is a required field</div>
                <div slot="matches">Passwords do not match</div>
              </field-messages>
            </validate>

            <div class="py-2">
              <button class="btn btn-primary btn-block" type="submit">Sign in</button>
            </div>
          </vue-form>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formstate: {},
      model: {
        name: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    fieldClassName: function (field) {
      if (!field) {
        return ''
      }
      if ((field.$touched || field.$submitted) && field.$valid) {
        return 'has-success'
      }
      if ((field.$touched || field.$submitted) && field.$invalid) {
        return 'has-danger'
      }
    },
    onSubmit: function () {
      console.log(this.formstate.$valid)
    }
  }
}
</script>
