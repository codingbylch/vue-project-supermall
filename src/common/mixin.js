export const backTopMixin = {
    // 会自动进行合并, 但不建议抽取methods里面的函数
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0, 300)
        }
    }
}