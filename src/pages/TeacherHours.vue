<template>
  <main class="main">
    <div class="container">
      <ul class="teacher-hours__info list-inline list-unstyled">
        <li class="teacher-hours__info_item">Hours this month (Jan): <span
          class="teacher-hours__info_text js-teacher-hours__info_text-hours">45.5</span></li>
        <li class="teacher-hours__info_item">Hourly Rate: <span
          class="teacher-hours__info_text js-teacher-hours__info_text-rate">$20</span></li>
        <li class="teacher-hours__info_item">Current Earnings: <span
          class="teacher-hours__info_text js-teacher-hours__info_text-earnings">$910.00</span></li>
      </ul>

      <div class="primary-table-container">
        <table class="primary-table">
          <thead>
          <tr>
            <th class="primary-table__th primary-table__th-first">Hours:</th>
            <th class="primary-table__th">Date + Time:</th>
            <th class="primary-table__th primary-table__th-last">Student:</th>
            <th class="primary-table__th primary-table__th-last">Penalty:</th>
            <th class="primary-table__th primary-table__th-last">Earnings:</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              0.25
            </td>
            <td>
              3rd Jan. 5:30 - 5:45pm
            </td>
            <td>
              Alexey Semeney
            </td>
            <td>
              1 min. late
            </td>
            <td>
              $5.00
            </td>
          </tr>
          <tr>
            <td>
              0.25
            </td>
            <td>
              3rd Jan. 5:30 - 5:45pm
            </td>
            <td>
              Alexey Semeney
            </td>
            <td>
              1 min. late
            </td>
            <td>
              $5.00
            </td>
          </tr>
          <tr>
            <td>
              0.25
            </td>
            <td>
              3rd Jan. 5:30 - 5:45pm
            </td>
            <td>
              Alexey Semeney
            </td>
            <td>
              1 min. late
            </td>
            <td>
              $5.00
            </td>
          </tr>
          <tr>
            <td>
              0.25
            </td>
            <td>
              3rd Jan. 5:30 - 5:45pm
            </td>
            <td>
              Alexey Semeney
            </td>
            <td>
              1 min. late
            </td>
            <td>
              $5.00
            </td>
          </tr>
          <tr>
            <td>
              0.25
            </td>
            <td>
              3rd Jan. 5:30 - 5:45pm
            </td>
            <td>
              Alexey Semeney
            </td>
            <td>
              1 min. late
            </td>
            <td>
              $5.00
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <button class="btn btn-primary btn_show-more">Show More</button>
      <div class="download-hours__control">
        <label class="label-select">Download Hours FOR:</label>

        <button class="btn btn-primary">Jan 18</button>
        <button class="btn btn-primary">Download</button>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'TeacherHours',
    data () {
      return {}
    }
  }
</script>

<style>
  @media screen and (max-width: 780px) {
    .primary-table {
      min-width: 780px;
    }

    .primary-table-container {
      overflow-x: auto;
    }
  }

  @media screen and (max-width: 767px) {
    .primary-table th {
      padding: 20px 10px 15px 10px;
    }
  }

  @media screen and (max-width: 750px) {
    .download-hours__control {
      float: none;
      text-align: center;
      margin-top: 10px;
    }

    .download-hours__control .label-select {
      display: block;
      margin-bottom: 10px;
    }

    .download-hours__control {
      margin-top: 25px;
    }

    .download-hours__control .btn {
      margin-left:0;
      margin-bottom:10px;
    }

    .btn_show-more {
      display: block;
      margin: 0 auto;
    }
  }
</style>
