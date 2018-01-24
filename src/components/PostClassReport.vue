<template>
  <main class="main">
    <div class="container">
      <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#js-post-class-report">
        Open Modal
      </button>
      <!-- Modal -->
      <div id="js-post-class-report" class="modal fade" role="dialog">
        <div class="modal-dialog modal-post-class-report">

          <!-- Modal content-->
          <div class="modal-content">
            <div class="close-icon_container">
              <button type="button" class="close close-icon" data-dismiss="modal">X</button>
            </div>

            <div class="modal-header modal-header_post-class-r">
              <h4 class="modal-title modal-secondary_title text-left">POST CLASS REPORT</h4>
              <small class="modal_small-text modal-header_small-text">Give your student a star rating for this lesson:
              </small>
              <rating-star :rating="rating"></rating-star>
            </div>

            <div class="modal-body modal-body_post-class-r">

              <form class="post-class-report_form" action="">
                <div class="form-group">
                  <div class="report-row__container">
                    <table class="report-row__table">
                      <teacher-report-item v-for="report in reportItems" :text="report"></teacher-report-item>
                    </table>
                  </div>
                </div>

                <div class="form-group">
                  <small class="modal_small-text">The student found this lesson to be</small>
                </div>

                <div class="form-group">
                  <textarea placeholder="Optional - add any additional notes you think the student and parents would like to know."
                            v-model="note"
                            name="note"
                            class="form-control teacher-report__note-textarea"></textarea>
                </div>

                <div class="clearfix post-class-report_buttons">
                  <button type="submit" class="btn btn-primary btn-sm pull-left">Submit</button>
                  <button type="button" class="btn btn-primary btn-sm pull-left">Save task for later</button>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import RatingStar from '../components/RatingStar'
  import TeacherReportItem from '../components/TeacherReportItem'

  export default {
    name: 'PostClassReport',
    components: {RatingStar, TeacherReportItem},
    data () {
      return {
        rating: 4.5,
        reportItems: [
          'reading',
          'spelling',
          'pronunciation',
          'grammar',
          'listening',
          'comprehension'
        ],
        note: ''
      }
    },
    methods: {}
  }
</script>
