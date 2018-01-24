<template>
  <div class="stud-report__main_item">
    <header class="report-comments-block_header clearfix">
      <h3 class="report-comments-block_header_title pull-left">{{title}}</h3>
      <div class="pull-right">
        <rating-star :rating="rating"></rating-star>
      </div>
    </header>
    <main class="report-comments-block_main">

      <div class="report-comments-block_main_title-container">
        <h4 class="report-comments-block_main_title">Teachers comments:</h4>
      </div>
      <p class="report-comments-block_main_text">
        {{comment}}
      </p>
    </main>
  </div>
</template>

<script>
  import RatingStar from '../components/RatingStar'

  export default {
    name: 'StudMonthlyReportReview',
    components: {RatingStar},
    props: ['title', 'comment', 'rating'],
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
