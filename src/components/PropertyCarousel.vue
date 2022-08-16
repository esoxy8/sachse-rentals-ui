<template>
    <v-carousel hide-delimiters>
        <v-carousel-item
        v-for="(img,i) in imgs"
        :key="i"
        :src="img"
        />
  </v-carousel>
</template>

<script>
export default {
    name: 'PropertyCarousel',
    data() {
        return {
            imgs: [
                {
                    src: require(`../assets/channelDrive/frontYard.jpeg`),
                }, {
                    src: require(`../assets/channelDrive/kitchen.jpeg`),
                }, {
                    src: require(`../assets/channelDrive/livingRoom1.jpeg`),
                }, {
                    src: require(`../assets/channelDrive/livingRoom2.jpeg`),
                }, {
                    src: require(`../assets/channelDrive/bedroom1.jpeg`),
                }, {
                    src: require(`../assets/channelDrive/masterBath1.jpeg`),
                }, {
                    src: require(`../assets/channelDrive/masterBathShower.jpeg`),
                }, {
                    src: require(`../assets/channelDrive/sunRoom.jpeg`),
                }, {
                    src: require(`../assets/channelDrive/bedroom2.jpeg`),
                }, {
                    src: require(`../assets/channelDrive/bedroom3.jpeg`),
                }, {
                    src: require(`../assets/channelDrive/secondBath.jpeg`),
                }, {
                    src: require(`../assets/channelDrive/backyard1.jpeg`),
                }, {
                    src: require(`../assets/channelDrive/backyard2.jpeg`),
                }, {
                    src: require(`../assets/channelDrive/hottub.jpeg`),
                }, {
                    src: require(`../assets/channelDrive/park1.jpeg`),
                }, {
                    src: require(`../assets/channelDrive/park2.jpeg`),
                },
            ]
        }
    }
}
</script>