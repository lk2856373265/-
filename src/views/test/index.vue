<template>
  <div>
    <p>test page</p>
    <input v-validate="'required|email'" name="email" type="text">
    <span>{{ errors.first('email') }}</span>
  </div>
</template>

<script>
export default {
  name: 'TextIndex',
  data () {
    return {}
  },
  components: {}
}
</script>

<style>
</style>
