import EventDetails from './components/event-details'
import EventList from './components/event-list'
import EventFilter from './components/event-filter'


export default {
  name: 'events',
  eventsFilter: { name: '' },
  props: [],
  mounted() {

  },
  data() {
    return {
      events: [],
      filterdEvents: []
    }
  },
  methods: {
   openDetails(eventId) {
     this.$router.push(`/events/${eventId}`);
     console.log('Pushing eventId to Router', eventId);
   },
   eventsFilter(val) {
      console.log('val', JSON.parse(JSON.stringify(val)));
      this.filterdEvents = val;
    },
   reloadEvents() {
                // fetch('http://localhost:3003/item')
                 this.$http.get('events')
                    .then(res => res.json())
                    .then(events => this.events = events);
                    // console.log(this.events);
                //  this.EventToEdit = undefined;   
                //  this.showEventEdit = false;
            }
  },
  computed: {

  },
  created() {
    console.log('dfghfsdg');
    this.reloadEvents();
    this.filterdEvents = this.events;
  },
  components: {
    'event-details': EventDetails,
    'event-list': EventList,
    'event-filter': EventFilter,

  },
}

