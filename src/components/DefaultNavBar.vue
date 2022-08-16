<template>
    <div>
        <v-app-bar app>
            <v-app-bar-nav-icon 
                @click="drawer = true"
                color="primary darken-3"
            />
            <v-app-bar-title
                class="primary--text text--darken-3"
            >
                Sachse Rentals
            </v-app-bar-title>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="group"
                    class="primary--text"
                >
                    <v-list-item @click="navigateTo('/')">
                        <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="navigateTo('/admin')">
                        <v-list-item-icon>
                        <v-icon>mdi-file-multiple</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Admin</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'DefaultNavBar',
    data() {
         return {
            drawer: false,
            group: null,
         }
    },
    methods: {
        navigateTo(url) {
            if (this.$route.path != url) {
                this.$router.push(url);
            }
        }
    }
}
</script>
