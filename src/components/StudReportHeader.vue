<template>
  <header class="stud-report__header">
    <h1 class="stud-report__header_title">{{name}}'S JANUARY REPORT</h1>

    <div class="stud-report__header___text_container">
      <span class="stud-report__header_label">STAR RATING:</span>
      <rating-star :rating="rating"></rating-star>
      <span class="stud-report__header_label">{{name}} FOUND THE LESSONS: </span>
      <span class="stud-report__header_label js-lesson-evaluation">{{level}}</span>
    </div>
  </header>
</template>

<script>
  import RatingStar from '../components/RatingStar'

  export default {
    name: 'StudReportHeader',
    components: {RatingStar},
    props: ['rating', 'name', 'level'],
    data () {
      return {}
    }
  }
</script>
