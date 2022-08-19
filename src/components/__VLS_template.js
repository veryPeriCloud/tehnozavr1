// import categories from '../data/categories';
// import colors from '../data/colors';

// export default (await import('vue')).defineComponent({
// data() {
// return {
// currentPriceFrom: 0,
// currentPriceTo: 0,
// currentCategoryId: 0,
// currentColorId: 0,
// };
// },
// props: ['priceFrom', 'priceTo', 'categoryId', 'colorId'],
// computed: {
// categories() {
// return categories;
// },
// colors() {
// return colors;
// },
// },
// watch: {
// priceFrom(value) {
// this.currentPriceFrom = value;
// },
// priceTo(value) {
// this.currentPriceTo = value;
// },
// categoryId(value) {
// this.currentCategoryId = value;
// },
// colorId(value) {
// this.currentColorId = value;
// },
// },
// methods: {
// submit() {
// this.$emit('update:priceFrom', this.currentPriceFrom);
// this.$emit('update:priceTo', this.currentPriceTo);
// this.$emit('update:categoryId', this.currentCategoryId);
// this.$emit('update:colorId', this.currentColorId);
// },
// reset() {
// this.$emit('update:priceFrom', 0);
// this.$emit('update:priceTo', 0);
// this.$emit('update:categoryId', 0);
// this.$emit('update:colorId', 0);
// },
// },
// });
// const __VLS_template = () => ({});
