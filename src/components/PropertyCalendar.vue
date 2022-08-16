<template>
    <div>
        <v-date-picker
            v-model="dates"
            full-width
            :landscape="$vuetify.breakpoint.smAndUp"
            class="mt-4"
            color="primary"
            range
            :selected-items-text="getSelectedDates"
            :min="getCurrentDate()"
        />
        <v-card-text v-if="dates">
            Check In: {{ getFormattedDate(dates[0]) }} after 1 PM
            <br>
            Check Out: {{ getFormattedDate(dates[dates.length - 1], true) }} before 9 AM
            <br>
            Cost: ${{ getCostOfStay }}
        </v-card-text>
    </div>
</template>

<script>
import dayjs from 'dayjs';
import SachseRentalsApiClient from '@/js/api/sachseRentalsApiClient.js';

export default {
    name: 'PropertyCalendar',
    data() {
        return {
            sachseRentalsApiClient: new SachseRentalsApiClient(),
            dates: null,
            daysOfWeek: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        }
    },
    props: {
        propertyId: {
            type: Number,
            required: true,
        },
        costPerNight: {
            type: Number,
            default: 100,
        }
    },
    mounted() {
        this.getBlackoutDates()
    },
    computed: {
        getCalendarFormattedDates() {
            if (this.dates) {
                const start = new dayjs(this.dates[0]);
                const end = new dayjs(this.dates[1]);
                return `${start} - ${end}`;
            }
            return null;
        },
        getCostOfStay() {
            return this.costPerNight * this.getReservationDuration();
        }
    },
    methods: {
        getDay(date){
            const i = date.getDay(date)
            return this.daysOfWeek[i]
        },
        getMonth(date) {
            const i = date.getMonth(date);
            return this.months[i];
        },
        getFormattedDate(dateStr, checkout=false) {
            const date = new Date(dateStr);
            if (checkout) {
                date.setDate(date.getDate() + 1)
            }

            const day = this.getDay(date);
            const month = this.getMonth(date);
            const dayOfMonth = date.getDate(date) + 1;
            return `${day}, ${month} ${dayOfMonth}`;
        },
        getReservationDuration() {
            if (this.dates.length == 1) {
                return 1;
            }

            const endDate = new Date(this.dates[1]);
            const startDate = new Date(this.dates[0]);
            const difference= Math.abs(endDate-startDate);
            return difference/(1000 * 3600 * 24) + 1;
        },
        getCurrentDate() {
            return dayjs().toISOString();
        },
        getBlackoutDates() {
            //console.log(this.sachseRentalsApiClient.name);
        }
    }
}
</script>

<style>

</style>