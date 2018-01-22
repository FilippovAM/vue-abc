<template>
  <header class="header-bg_blue">
    <div class="container">
      <div class="header__container">
        <div class="logo header__container_column header__container_column-m">
          <img class="img-responsive" src="static/img/logo.png" alt="ABC Logo">
        </div>
        <student-nav v-if="isStudNav()"></student-nav>
        <teacher-nav v-else></teacher-nav>
        <div class="header__container_column header__container_column-b text-right">
          <div class="header__container_column_msg-shape">
            <a href="#" class="header-welcome__msg-container">
              <span class="header-welcome__msg-text">4</span>
              <img class="header-welcome__msg-img" src="static/img/msg-shape.png" alt="">
            </a>
          </div>
          <div class="header__container_column_msg-avatar">
            <div class="welcome-avatar-container">
              <img class="img-responsive welcome-avatar" src="static/img/welcome-avatar.png" alt="">
            </div>
          </div>
          <div class="header__container_column_text">
            <div class="header-welcome__text">
              Hello,
              <br>
              <a class="header-welcome__text_link" href="">Zhang :)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import TeacherNav from '../TeacherNav'
  import StudentNav from '../StudentNav.vue'

  export default {
    name: 'AppHeader',
    components: {TeacherNav, StudentNav},
    data () {
      return {
      }
    },
    methods: {
      isStudNav: function () {
        return this.$route.path.indexOf('/student') !== -1
      }
    }
  }
</script>
