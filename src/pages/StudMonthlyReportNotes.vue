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
          <div class="stud-report__main_container">
            <h3 class="report-comments-block_header_title text-center">TEACHER’S NOTES</h3>

            <div v-for="note in sortedNotes">
              <report-note :text="note.text" :date="note.date"></report-note>
            </div>

          </div>
        </main>
      </div>
    </div>
  </main>
</template>

<script>
  import StudReportHeader from '../components/StudReportHeader'
  import ReportNote from '../components/StudMonthlyReportNote'

  export default {
    name: 'StudMonthlyReportNotes',
    components: {StudReportHeader, ReportNote},
    data () {
      return {
        studentName: 'Zhang',
        level: 'easy',
        notes: [
          {
            date: '2017-01-05',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper tincidunt mi. Curabitur egestas posuere ultricies. Mauris tempor arcu sed turpis blandit dapibus.'
          },
          {
            date: '2017-01-02',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper tincidunt mi. Curabitur egestas posuere ultricies. Mauris tempor arcu sed turpis blandit dapibus.'
          },
          {
            date: '2017-01-10',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper tincidunt mi. Curabitur egestas posuere ultricies. Mauris tempor arcu sed turpis blandit dapibus.'
          },
          {
            date: '2017-01-07',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper tincidunt mi. Curabitur egestas posuere ultricies. Mauris tempor arcu sed turpis blandit dapibus.'
          },
          {
            date: '2017-01-20',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper tincidunt mi. Curabitur egestas posuere ultricies. Mauris tempor arcu sed turpis blandit dapibus.'
          }
        ]
      }
    },
    computed: {
      sortedNotes: function () {
        this.notes.sort(function (a, b) {
          return new Date(a.date) - new Date(b.date)
        })

        return this.notes
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Handlee');

  .stud-report__main_container {
    border: 2px solid #4c75b1;
    border-radius: 5px;
    background: #fff;
    padding: 25px 35px;
  }

  .stud-report__main_item {
    border: none;
    border-radius: 0;
    padding: 0;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  .report-comments-block_main {
    margin-top: 0;
  }

  .report-comments-block_main_title {
    padding-left: 30px;
    padding-right: 30px;
  }

  .report-comments-block_main_text {
    font-family: 'Handlee';
    font-size: 24px;
    text-align: center;
    color: #4c75b1;
  }

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
