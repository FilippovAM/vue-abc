<template>
  <tr>
    <td width="21%">{{text}}</td>
    <td>
      <div class="btn-group btn-group-radio">
        <input type="radio" :name="text" :id="text + '-1'" value="great">
        <label class="btn" :for="text + '-1'">
          GREAT
        </label>
        <input type="radio" :name="text" :id="text + '-2'" value="good">
        <label class="btn" :for="text + '-2'">
          GOOD
        </label>
        <input type="radio" :name="text" :id="text + '-3'" value="poor">
        <label class="btn" :for="text + '-3'">
          POOR
        </label>
      </div>
    </td>
    <td width="32%">
      Choose Comment...
    </td>
  </tr>
</template>

<script>
  export default {
    name: 'TeacherReportItem',
    props: ['text'],
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
