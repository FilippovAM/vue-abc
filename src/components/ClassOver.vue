<template>
  <!-- Modal -->
  <div id="js-class-modal" class="modal fade modal-secondary" role="dialog">
    <div class="modal-dialog modal-md">

      <!-- Modal content-->
      <div class="modal-content text-center">
        <div class="close-icon_container">
          <button type="button" class="close close-icon" data-dismiss="modal">X</button>
        </div>

        <div class="modal-header">
          <h4 class="modal-title modal-secondary_title text-center">FINISH THIS CLASS?</h4>
        </div>

        <div class="modal-body">
          <p class="modal-body_text">
            Are you sure you want to set the bookmark here, at page XX, and finish the class?
          </p>

          <button class="btn btn-primary btn-sm modal-body__btn_bottom">Bookmark and finish class</button>

          <a href="#" class="modal-body__btn-cancel" data-dismiss="modal">Cancel</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'ClassOver',
    data () {
      return {
      }
    }
  }
</script>
