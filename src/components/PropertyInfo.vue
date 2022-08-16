<template>
    <div class="property-info-container">
        <v-layout row>
            <v-flex class="info-item"
                md-6 
                v-for="(info, i) in information"
                :key="i"
            >
                <v-list>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>{{ info.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ info.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    name: 'PropertyInfo',
    props: {
        information: {
            type: Array,
            required: true,
        }
    },
    mounted() {
        console.log(this.information);
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped lang="scss">
    // .property-info-container {
    //     width: 75%;
    // }

    .info-item {
        width: 50%;
    }
</style>