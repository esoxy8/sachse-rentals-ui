<template>
  <v-container>
    <property-card 
      :property-id="1"
    />
  </v-container>
</template>

<script>
import PropertyCard from '@/components/PropertyCard.vue';

export default {
  name: 'HomeView',
  components: {
    PropertyCard
  }
}
</script>
