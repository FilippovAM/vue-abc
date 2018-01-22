<template>
  <div>
    <class-over></class-over>
    <main class="main">
      <div class="container">
        <ul class="nav-header nav-info list-unstyled hidden-md hidden-lg nav-info_xs">
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

        <div class="row row-sm-padding-8"
             v-match-heights="{el: ['[data-mh-video-group]']}">
          <div class="col-sm-4" data-mh-video-group>
            <div class="column__video-preview js-video-preview_apprentice">
              <span class="js-video-preview_text">Zhang</span>
              <img src="static/img/Zhang.png" class="img-responsive" alt="">
            </div>
            <div class="column__video-preview js-video-preview_teacher">
              <span class="js-video-preview_text">Eugene</span>
              <img src="static/img/Eugene.png" class="img-responsive" alt="">
            </div>
            <div class="js-chat">
              <ul class="list-unstyled chat__messages clearfix">
                <li class="chat__messages__msg pull-right">
                  <div class="chat__messages__msg_text">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Architecto deserunt ducimus ea fugit impedit obcaecati quae repellat
                    reprehenderit soluta vitae. Culpa deleniti earum illum iste nam non quo similique sunt.
                  </div>
                  <img class="chat__messages__msg_avatar" src="static/img/avatar.jpg" alt="">
                </li>
                <li class="chat__messages__msg pull-right">
                  <div class="chat__messages__msg_text">Lorem ipsum dolor sit amet.</div>
                  <img class="chat__messages__msg_avatar" src="static/img/avatar.jpg" alt="">
                </li>
                <li class="chat__messages__msg pull-right">
                  <div class="chat__messages__msg_text">Lorem ipsum dolor.</div>
                  <img class="chat__messages__msg_avatar" src="static/img/avatar.jpg" alt="">
                </li>
                <li class="chat__messages__msg pull-left">
                  <div class="chat__messages__msg_text">Ok</div>
                  <img class="chat__messages__msg_avatar" src="static/img/avatar.jpg" alt="">
                </li>
                <li class="chat__messages__msg pull-left">
                  <div class="chat__messages__msg_text">Lorem ipsum dolor.</div>
                  <img class="chat__messages__msg_avatar" src="static/img/avatar.jpg" alt="">
                </li>
                <li class="chat__messages__msg pull-right">
                  <div class="chat__messages__msg_text">Lorem ipsum dolor sit amet.</div>
                  <img class="chat__messages__msg_avatar" src="static/img/avatar.jpg" alt="">
                </li>
              </ul>
              <div class="chat__control">
                <input class="chat__control_input form-control js-chat-input" placeholder="Type to chat..."/>
                <button type="button" class="btn btn-primary btn-small chat__control_btn js-send-msg">SEND</button>
              </div>
            </div>
          </div>
          <div class="col-sm-8" data-mh-video-group="video-group">
            <div class="kam">
              <span class="kam__preview_text">(KAMI)</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import ClassOver from '../components/ClassOver'

  export default {
    name: 'ClassRoom',
    components: { ClassOver },
    data () {
      return {
      }
    }
  }
</script>
