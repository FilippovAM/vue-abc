<template>
  <div class="stud-report__main_item">
    <main class="report-comments-block_main">
      <div class="report-comments-block_main_title-container">
        <h4 class="report-comments-block_main_title">
          {{formatedDate}}
      </h4>
      </div>
      <p class="report-comments-block_main_text">
        {{text}}
      </p>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'StudMonthlyReportNote',
    props: ['text', 'date'],
    data() {
      return {
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'September',
          'October',
          'November',
          'December'
        ]
      }
    },
    computed: {
      formatedDate: function () {



        return this.date
      }
    }
  }
</script>
