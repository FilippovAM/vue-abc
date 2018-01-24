<style scoped>
  .primary-table td {
    padding-top: 30px;
    padding-bottom: 24px;
  }

  .primary-table a {
    color: #616161;
  }

  .primary-table tr td:last-child {
    text-align: right;
  }
</style>

<template>
  <main class="main">
    <div class="container">
      <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#js-student-notifications">
        Open Modal
      </button>
      <!-- Modal -->
      <div id="js-student-notifications" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg">

          <!-- Modal content-->
          <div class="modal-content">
            <div class="close-icon_container">
              <button type="button" class="close close-icon" data-dismiss="modal">X</button>
            </div>

            <div class="modal-header">
              <h4 class="modal-title">Notifications</h4>
            </div>

            <div class="modal-body">
              <div class="modal-body__table_container">
                <table class="primary-table modal-table">
                  <tbody>
                  <tr>
                    <td width="25%">
                      23 January, 2018
                    </td>
                    <td>
                      *Notificatoin copy*
                    </td>
                    <td><a href="">Mark as read</a></td>
                  </tr>
                  <tr>
                    <td>
                      23 January, 2018
                    </td>
                    <td>
                      *Notificatoin copy*
                    </td>
                    <td><a href="">Mark as read</a></td>
                  </tr>
                  <tr>
                    <td>
                      23 January, 2018
                    </td>
                    <td>
                      *Notificatoin copy*
                    </td>
                    <td><a href="">Mark as read</a></td>
                  </tr>
                  <tr>
                    <td>
                      23 January, 2018
                    </td>
                    <td>
                      *Notificatoin copy*
                    </td>
                    <td><a href="">Mark as read</a></td>
                  </tr>
                  <tr>
                    <td>
                      23 January, 2018
                    </td>
                    <td>
                      *Notificatoin copy*
                    </td>
                    <td><a href="">Mark as read</a></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'StudentNotifications',
    data () {
      return {}
    }
  }
</script>
