<template>
    <div>
        product detail
        <!-- {{product}} -->
    </div>
</template>

<script>
    export default {
        async asyncData ({ params, $axios }) {
            const { data } = await $axios.$get(`/products/${params.id}`)
            console.log('data',data)
            const product = data
            return { product }
        },
        data(){
            return{
                productId:''
            }            
        },
        created(){
            console.log('route',this.$route)
        }
    }
</script>

<style lang="scss" scoped>

</style>