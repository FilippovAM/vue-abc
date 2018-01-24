<template>
  <div class="rating-stars" v-html="showStar">
  </div>

</template>

<script>
  export default {
    name: 'RatingStar',
    props: ['rating'],
    data () {
      return {
        starCount: 5
      }
    },
    computed: {
      showStar: function () {
        let result = ''
        let activeStar = 'active-star.png'
        let inActiveStar = 'inactive-star.png'
        let halfStar = 'half-star.png'
        let rating = +this.rating
        let nameImg = ''
        let starCount = this.starCount

        while (starCount--) {
          if (rating > 0.5) {
            nameImg = activeStar
          } else if (rating === 0.5) {
            nameImg = halfStar
          } else {
            nameImg = inActiveStar
          }

          --rating

          result += '<img class="rating-star_item" src="./static/img/' + nameImg + '">'
        }

        return result
      }
    }
  }
</script>
