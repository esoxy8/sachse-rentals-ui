import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify, {
    options: {
        customProperties: true
    }
});

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: colors.lightGreen,
                secondary: colors.green,
                accent: colors.indigo,
                warning: colors.amber,
                error: colors.red,
            }
        },
        options: {
            customProperties: true
        },
    },

});