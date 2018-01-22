<template>
  <header class="header-bg_blue">
    <div class="container">
      <div class="header__container">
        <div class="logo header__container_column header__container_column-m">
          <img class="img-responsive" src="static/img/logo.png" alt="ABC Logo">
        </div>
        <ul class="nav-header nav-info list-unstyled header__container_column header__container_column-b hidden-sm hidden-xs">
          <li class="nav-info__item nav-header__item_first">
            <span class="nav-info__item__text_primary nav-info__item__text">LESSON STARTED:</span>
            <span class="nav-info__item__text_small nav-info__item__text js-lesson-started">3rd Jan. 6:00pm</span>
          </li>
          <li class="nav-info__item">
            <span class="nav-info__item__text_primary nav-info__item__text">Remaining Time:</span>
            <span class="nav-info__item__text_small nav-info__item__text js-remaining-time">14:35 mins.</span>
          </li>
          <li class="nav-info__item">
            <span class="nav-info__item__text_primary nav-info__item__text">Mins. Late:</span>
            <span class="nav-info__item__text_small nav-info__item__text js-mins-late">01 mins.</span>
          </li>
        </ul>
        <div class="header__container_column header__container_column-m text-right">
          <button type="button" class="btn btn-primary">REFRESH</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#js-class-modal">CLASS OVER</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'ClassHeader',
    data () {
      return {}
    }
  }
</script>
