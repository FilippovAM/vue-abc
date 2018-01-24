<template>
  <main class="main">
    <div class="container">
      <div class="stud-report_container">
        <stud-report-header
          :name="studentName"
          :rating="5"
          :level="level">
        </stud-report-header>

        <main class="stud-report__main">
          <stud-report-review
            v-for="report in reportItems"
            :title="report.title"
            :rating="report.rating"
            :comment="report.comment">
          </stud-report-review>
        </main>
      </div>
    </div>
  </main>
</template>

<script>
  import RatingStar from '../components/RatingStar'
  import StudReportReview from '../components/StudMonthlyReportReview'
  import StudReportHeader from '../components/StudReportHeader'

  export default {
    name: 'StudMonthlyReport',
    components: {RatingStar, StudReportReview, StudReportHeader},
    data () {
      return {
        studentName: 'Zhang',
        level: 'easy',
        reportItems: [
          {
            title: 'reading',
            rating: 5,
            comment: 'Struggled with understanding, Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Curabitur nec convallis, Mauris id odio fringilla, Gravida enim finibus lobortis, Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Curabitur nec convallis'
          },
          {
            title: 'spelling',
            rating: 4.5,
            comment: 'Struggled with understanding, Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Curabitur nec convallis, Mauris id odio fringilla, Gravida enim finibus lobortis, Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Curabitur nec convallis'
          },
          {
            title: 'pronunciation',
            rating: 4,
            comment: 'Struggled with understanding, Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Curabitur nec convallis, Mauris id odio fringilla, Gravida enim finibus lobortis, Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Curabitur nec convallis'
          },
          {
            title: 'grammar',
            rating: 5,
            comment: 'Struggled with understanding, Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Curabitur nec convallis, Mauris id odio fringilla, Gravida enim finibus lobortis, Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Curabitur nec convallis'
          },
          {
            title: 'listening',
            rating: 5,
            comment: 'Struggled with understanding, Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Curabitur nec convallis, Mauris id odio fringilla, Gravida enim finibus lobortis, Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Curabitur nec convallis'
          },
          {
            title: 'comprehension',
            rating: 5,
            comment: 'Struggled with understanding, Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Curabitur nec convallis, Mauris id odio fringilla, Gravida enim finibus lobortis, Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Curabitur nec convallis'
          }
        ]
      }
    }
  }
</script>

<style>
  .stud-report__header___text_container .rating-stars {
    margin-left: 10px;
    margin-right: 50px;
  }

  .rating-stars {
    display: inline-block;
    vertical-align: middle;
  }

  .rating-star_item {
    max-height: 37px;
    margin-right: 8px;
  }
</style>
