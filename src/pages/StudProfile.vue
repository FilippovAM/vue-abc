<template>
  <main class="main">
    <div class="container">
      <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#js-student-profile">
        Open Modal
      </button>
      <!-- Modal -->
      <div id="js-student-profile" class="modal fade" role="dialog">
        <div class="modal-dialog modal-lg">

          <!-- Modal content-->
          <div class="modal-content">
            <div class="close-icon_container">
              <button type="button" class="close close-icon" data-dismiss="modal">X</button>
            </div>

            <div class="modal-body">

              <form action="#" @submit.prevent="validateBeforeSubmit">
                <div class="row row-sm-padding-10">
                  <div class="col-md-8">
                    <div class="form-section">
                      <span class="form-label">Student Information</span>
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
                            <div class="select-container">
                              <select
                                name="gender"
                                v-model="gender"
                                v-validate="'required'"
                                :class="{'input': true, 'is-danger': errors.has('gender') }"
                                class="form-control">
                                <option disabled selected value>Gender...</option>
                                <option v-for="option in genderOptions" :value="option.value">
                                  {{ option.label }}
                                </option>
                              </select>
                              <span v-show="errors.has('gender')"
                                    class="help is-danger">{{ errors.first('gender')}}</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div :class="{'input': true, 'is-danger': errors.has('day-of-birth') }">
                            <date-picker
                              name="day-of-birth"
                              v-model="dayOfBirth"
                              format="dd-MM-yyyy"
                              data-vv-as="date"
                              v-validate="'required'"
                              placeholder="Date of Birth"
                              lang="en">
                            </date-picker>
                          </div>
                          <span v-show="errors.has('day-of-birth')"
                                class="help is-danger">{{ errors.first('day-of-birth')}}</span>
                        </div>
                      </div>
                    </div>

                    <div class="form-section">
                      <span class="form-label">Parent / Guardian Information</span>
                      <div class="row row-sm-padding-10">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="text"
                                   name="parent-first-name"
                                   v-model="parentFirstName"
                                   class="form-control"
                                   v-validate="'required'"
                                   :class="{'input': true, 'is-danger': errors.has('parent-first-name') }"
                                   placeholder="Parent First Name">
                            <span v-show="errors.has('parent-first-name')"
                                  class="help is-danger">{{ errors.first('parent-first-name')}}</span>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="text"
                                   name="parent-last-name"
                                   v-model="parentLastName"
                                   class="form-control"
                                   v-validate="'required'"
                                   :class="{'input': true, 'is-danger': errors.has('parent-last-name') }"
                                   placeholder="Parent Last Name">
                            <span v-show="errors.has('parent-last-name')"
                                  class="help is-danger">{{ errors.first('parent-last-name')}}</span>
                          </div>
                        </div>
                      </div>
                      <div class="row row-sm-padding-10">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="email"
                                   name="parent-email"
                                   v-model="parentEmail"
                                   class="form-control"
                                   v-validate="'required|email'"
                                   :class="{'input': true, 'is-danger': errors.has('parent-email') }"
                                   placeholder="Parent Email Address">
                            <span v-show="errors.has('parent-email')"
                                  class="help is-danger">{{ errors.first('parent-email')}}</span>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="tel"
                                   name="parent-phone"
                                   v-model="parentPhone"
                                   class="form-control"
                                   v-validate="'required|numeric'"
                                   :class="{'input': true, 'is-danger': errors.has('parent-phone') }"
                                   placeholder="Parent Phone">
                            <span v-show="errors.has('parent-phone')"
                                  class="help is-danger">{{ errors.first('parent-phone')}}</span>
                          </div>
                        </div>
                      </div>
                      <div class="row row-sm-padding-10">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <input type="text"
                                   name="parent-weChat"
                                   v-model="parentWeChat"
                                   class="form-control"
                                   placeholder="Parent WeChat">
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="col-md-4">
                    <span class="form-label">Student Avatar</span>
                    <template>
                      <div class="picture-input-container">
                        <!--    <picture-input
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
                            </picture-input>-->

                      </div>
                    </template>
                  </div>
                </div>

                <span class="form-label">Update Password</span>
                <div class="row row-sm-padding-10">
                  <div class="col-md-4 col-sm-6">
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
                  <div class="col-md-4 col-sm-6">
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
                  <div class="col-md-4 col-sm-6 col-sm-offset-3 col-md-offset-0">
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
    name: 'StudProfile',
    data () {
      return {
        gender: '',
        genderOptions: [
          {value: 'male', label: 'Male'},
          {value: 'female', label: 'Female'}
        ],
        dayOfBirth: '',
        firstName: '',
        lastName: '',
        parentFirstName: '',
        parentLastName: '',
        parentEmail: '',
        parentPhone: '',
        parentWeChat: '',
        password: '',
        confirmPassword: ''
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
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            // eslint-disable-next-line
            console.log('From Submitted!');
            return;
          }

          console.log('Correct them errors!');
        });
      }
    }
  }
</script>
