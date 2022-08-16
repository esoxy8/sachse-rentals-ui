<template>
  <v-container>
    <v-card>
      <property-carousel />

      <v-card-title class="primary--text text--darken-3 mx-4">
        {{ propertyAddress }}&nbsp;&ensp;&emsp;
        <span class="grey--text text--darken-1">$100 night</span>
      </v-card-title>
      
      <v-card-text>
        <property-info class="mx-4"
          :information="propertyInformation"
        />
      </v-card-text>

      <v-card-text>
        <property-calendar 
          :property-id="propertyId"
        />
      </v-card-text>

      <v-card-actions class="mx-4">
        <v-btn
          color="primary darken-3"
          outlined
        >
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import PropertyCarousel from '@/components/PropertyCarousel.vue';
  import PropertyInfo from '@/components/PropertyInfo.vue';
  import PropertyCalendar from '@/components/PropertyCalendar.vue';

  export default {
    name: 'PropertyCard',
    components: {
      PropertyCalendar,
      PropertyCarousel,
      PropertyInfo,
    },
    props: {
      propertyId: {
        type: Number,
        required: true,
      }
    },
    data() {
      return {
        showCalendar: false,
        propertyAddress: '14346 Channel Drive Largo, FL',
        propertyInformation: [
          {
            icon: 'mdi-bed-king',
            text: 'master bedroom with king bed',
          }, 
          {
            icon: 'mdi-bed-single',
            text: '2nd bedroom with queen bed',
          },
          {
            icon: 'mdi-bed-single',
            text: '3rd bedroom with queen bed',
          }, 
          {
            icon: 'mdi-shower',
            text: 'master bath with full tub',
          }, 
          {
            icon: 'mdi-shower-head',
            text: '2nd bath with shower',
          },
          {
            icon: 'mdi-wifi',
            text: 'cable and internet',
          },
          {
            icon: 'mdi-hot-tub',
            text: 'hot tub',
          },
          {
            icon: 'mdi-bike',
            text: 'e-bikes, kyaks, and a surf board to use during your stay'
          },
          {
            icon: 'mdi-map-marker',
            text: 'adjacent to John R. Bonner nature park',
          },
          {
            icon: 'mdi-beach',
            text: '1 mile from Indian Rocks Beach',
          },
          {
            icon: 'mdi-beach',
            text: '10 miles from Clear Water Beach',
          },
        ]
      }
    },
    methods: {
      datesSelected() {
        this.showCalendar = !this.showCalendar;
      }
    }
  }
</script>

<style scoped lang="scss">
</style>