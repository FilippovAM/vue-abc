<template>
  <main class="main">
    <div class="container">
      <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#js-teacher-profile">
        Open Modal
      </button>
      <!-- Modal -->
      <div id="js-teacher-profile" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg">

          <!-- Modal content-->
          <div class="modal-content">
            <div class="close-icon_container">
              <button type="button" class="close close-icon" data-dismiss="modal">X</button>
            </div>

            <div class="modal-body">

              <form action="#" @submit.prevent="validateBeforeSubmit">
                <div class="row row-sm-padding-10">
                  <div class="col-md-8 col-sm-12">
                    <div class="form-section">
                      <span class="form-label">Teacher Information</span>
                      <div class="row row-sm-padding-10">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="text"
                                   name="first-name"
                                   v-model="firstName"
                                   v-validate="'required'"
                                   class="form-control"
                                   :class="{'input': true, 'is-danger': errors.has('first-name') }"
                                   placeholder="First Name">
                            <span v-show="errors.has('first-name')"
                                  class="help is-danger">{{ errors.first('first-name')}}</span>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="text"
                                   name="last-name"
                                   v-model="lastName"
                                   v-validate="'required'"
                                   class="form-control"
                                   :class="{'input': true, 'is-danger': errors.has('last-name') }"
                                   placeholder="Last Name">
                            <span v-show="errors.has('last-name')"
                                  class="help is-danger">{{ errors.first('last-name')}}</span>
                          </div>
                        </div>
                      </div>

                      <div class="row row-sm-padding-10">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="email"
                                   name="email"
                                   v-model="email"
                                   class="form-control"
                                   v-validate="'required|email'"
                                   :class="{'input': true, 'is-danger': errors.has('email') }"
                                   placeholder="Email Address">
                            <span v-show="errors.has('email')"
                                  class="help is-danger">{{ errors.first('email')}}</span>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="tel"
                                   name="phone"
                                   v-model="phone"
                                   class="form-control"
                                   v-validate="'required|numeric'"
                                   :class="{'input': true, 'is-danger': errors.has('phone') }"
                                   placeholder="Phone +XX XXX XXX XXX">
                            <span v-show="errors.has('phone')"
                                  class="help is-danger">{{ errors.first('phone')}}</span>
                          </div>
                        </div>
                      </div>

                      <div class="row row-sm-padding-10">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="text"
                                   name="weChat"
                                   v-model="weChat"
                                   class="form-control"
                                   placeholder="WeChat">
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="text"
                                   name="weChat"
                                   v-model="weChat"
                                   class="form-control"
                                   placeholder="WeChat">
                          </div>
                        </div>
                      </div>

                      <div class="row row-sm-padding-10">
                        <div class="col-xs-12">
                      <textarea class="form-control bio-textarea"
                                placeholder="Bio.."
                                name="bio"
                                v-model="bio"
                                v-validate="'required'"
                                :class="{'input': true, 'is-danger': errors.has('bio') }"
                                id=""></textarea>
                          <span v-show="errors.has('bio')"
                                class="help is-danger">{{ errors.first('bio')}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="form-section">
                      <span class="form-label">Update Password</span>
                      <div class="row row-sm-padding-10">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="password"
                                   name="password"
                                   v-model="password"
                                   class="form-control"
                                   v-validate="'required|min:6'"
                                   :class="{'input': true, 'is-danger': errors.has('password') }"
                                   placeholder="New Password">
                            <span v-show="errors.has('password')"
                                  class="help is-danger">{{ errors.first('password')}}</span>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="password"
                                   name="confirm-password"
                                   v-model="confirmPassword"
                                   v-validate="'required|confirmed:password'"
                                   :class="{'input': true, 'is-danger': errors.has('confirm-password') }"
                                   class="form-control"
                                   placeholder="Confirm New Password">
                            <span v-show="errors.has('confirm-password')"
                                  class="help is-danger">{{ errors.first('confirm-password')}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-section form-section_last">
                      <span class="form-label">Bank Payment Information</span>
                      <div class="row row-sm-padding-10">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="text"
                                   name="bank-name"
                                   v-model="bankInfo.name"
                                   class="form-control"
                                   v-validate="'required'"
                                   :class="{'input': true, 'is-danger': errors.has('bank-name') }"
                                   placeholder="Bank Name">
                            <span v-show="errors.has('bank-name')"
                                  class="help is-danger">{{ errors.first('bank-name')}}</span>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="text"
                                   name="bank-account"
                                   v-model="bankInfo.account"
                                   v-validate="'required'"
                                   :class="{'input': true, 'is-danger': errors.has('bank-account') }"
                                   class="form-control"
                                   placeholder="Bank Account #">
                            <span v-show="errors.has('bank-account')"
                                  class="help is-danger">{{ errors.first('bank-account')}}</span>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="text"
                                   name="bank-swift-code"
                                   v-model="bankInfo.swiftCode"
                                   v-validate="'required'"
                                   :class="{'input': true, 'is-danger': errors.has('bank-swift-code') }"
                                   class="form-control"
                                   placeholder="Bank Swift Code">
                            <span v-show="errors.has('bank-swift-code')"
                                  class="help is-danger">{{ errors.first('bank-swift-code')}}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                    <span class="form-label">Teacher Photo</span>
                    <template>
                      <div class="picture-input-container">
                        <picture-input
                          v-if="showPictureInput"
                          ref="pictureInput"
                          @change="onChangePicture"
                          width="600"
                          height="600"
                          margin="2"
                          accept="image/jpeg,image/png"
                          size="10"
                          buttonClass="btn btn-primary btn-change-photo"
                          :customStrings="{
                            }">
                        </picture-input>
                      </div>
                    </template>
                  </div>
                </div>
                <div class="row row-sm-padding-10">
                  <div class="col-md-8">
                    <p class="modal-note__text">
                      Note: overseas bank account will incur a US$25 international transfer fee. This is charged by the banks, not by ABC Stars</p>
                  </div>
                  <div class="col-md-4 col-sm-6">
                    <button type="submit" class="btn btn-secondary btn-block">Update Profile</button>
                  </div>
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
  import DatePicker from 'vue2-datepicker'
  import PictureInput from 'vue-picture-input'

  export default {
    components: {DatePicker, PictureInput},
    name: 'TeacherProfile',
    data () {
      return {
        showPictureInput: false,

        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        weChat: '',
        country: '',
        bio: '',
        password: '',
        confirmPassword: '',
        bankInfo: {
          name: '',
          account: '',
          swiftCode: ''
        }
      }
    },
    methods: {
      onChangePicture () {
        console.log('New picture selected!')
        if (this.$refs.pictureInput.image) {
          console.log('Picture loaded.')
        } else {
          console.log('FileReader API not supported: use the <form>, Luke!')
        }
      },
      validateBeforeSubmit () {
        this.$validator.validateAll().then((result) => {
          if (result) {
            // eslint-disable-next-line
            console.log('From Submitted!')
            return
          }

          console.log('Correct them errors!')
        });
      }
    },
    mounted () {
      var self = this;

      $('.modal').bind('shown.bs.modal', function () {
        self.showPictureInput = true;

        $(this).unbind('shown.bs.modal');
      })
    }
  }
</script>

<style>
  @media screen and (max-width: 767px) {
    .picture-input-container {
      margin-bottom: 15px;
    }
  }
</style>
