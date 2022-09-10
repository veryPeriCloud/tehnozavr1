export default (await import('vue')).defineComponent({
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
    prevPage(page) {
      this.$emit('paginate', page - 1);
    },
    nextPage(page) {
      this.$emit('paginate', page + 1);
    },
  },
});
const __VLS_template = () => ({});
