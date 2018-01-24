<template>
  <div id="app">
    <class-header v-if="isClassRoom()"></class-header>
    <app-header v-else></app-header>

    <router-view/>

    <div class="container">
      <router-link class="test-preview__link" v-bind:to="'/class-room'">Class Room</router-link>
      <router-link class="test-preview__link" v-bind:to="'/student/classes'">Student Classes</router-link>
      <router-link class="test-preview__link" v-bind:to="'/teacher/classes'">Teacher Classes</router-link>
      <router-link class="test-preview__link" v-bind:to="'/student/profile'">Student Profile</router-link>
      <router-link class="test-preview__link" v-bind:to="'/teacher/profile'">Teacher Profile</router-link>
      <router-link class="test-preview__link" v-bind:to="'/teacher/notifications'">Teacher Notifications</router-link>
      <router-link class="test-preview__link" v-bind:to="'/student/notifications'">Student Notifications</router-link>
      <router-link class="test-preview__link" v-bind:to="'/class-room/post-report'">Post Class Report</router-link>
      <router-link class="test-preview__link" v-bind:to="'/student/monthly-report/1'">Student Monthly Report</router-link>
      <router-link class="test-preview__link" v-bind:to="'/student/monthly-report/2'">Student Monthly Report Notes</router-link>
    </div>

  </div>
</template>

<script>
  import AppHeader from './components/common/AppHeader'
  import ClassHeader from './components/common/ClassHeader'

  export default {
    name: 'App',
    components: {AppHeader, ClassHeader},
    data() {
      return {}
    },
    methods: {
      isClassRoom: function () {
        return this.$route.path.indexOf('/class-room') !== -1
      }
    }
  }
</script>

<style>
  /* Normalize CSS */
  @import "../node_modules/normalize.css/normalize.css";
  /* Fonts */
  @import "https://fonts.googleapis.com/css?family=Gochi+Hand";
  /* font-family: 'Gochi Hand'; */
  @import "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600";
  /* font-family: 'Open Sans'; */
  @import "https://fonts.googleapis.com/css?family=Titan+One";
  /* font-family: 'Titan One'; */
  /* Bootstrap CSS */
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  /* App CSS */
  @import "../static/css/style.css";
</style>

<style>
  #app {

  }

  .test-preview__link {
    display: block;
  }
</style>
