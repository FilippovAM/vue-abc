<template>
  <nav class="nav-header header__container_column header__container_column-b header__sidebar-menu">
    <router-link v-bind:to="'/teacher/classes'" class="nav-header__item nav-header__item_first">
      <div class="nav-header__item_img-container">
        <img class="nav-header__item_img nav-header__item_img-clasess" src="static/img/classes.png" alt="">
      </div>
      <a class="nav-header__item_link">Classes</a>
    </router-link>
    <router-link v-bind:to="'/teacher/tasks'" class="nav-header__item">
      <div class="nav-header__item_img-container">
        <img class="nav-header__item_img nav-header__item_img-reports" src="static/img/reports.png" alt="">
      </div>
      <a class="nav-header__item_link">Tasks</a>
    </router-link >
    <router-link v-bind:to="'/teacher/hours'" class="nav-header__item">
      <div class="nav-header__item_img-container">
        <img class="nav-header__item_img nav-header__item_img-awards" src="static/img/awards.png" alt="">
      </div>
      <a class="nav-header__item_link">Hours</a>
    </router-link>
    <router-link v-bind:to="'/teacher/help'" class="nav-header__item">
      <div class="nav-header__item_img-container">
        <img class="nav-header__item_img nav-header__item_img-awards" src="static/img/awards.png" alt="">
      </div>
      <a class="nav-header__item_link">Help</a>
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: 'TeacherNav',
    data () {
      return {
      }
    }
  }
</script>
