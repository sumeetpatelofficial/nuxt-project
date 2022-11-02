<template>
    <div>
        product detail
        <!-- {{product}} -->
    </div>
</template>

<script>
    export default {
        async asyncData ({ params, $axios }) {
            console.log({params})
            const data = await $axios.$get(`/products/${params.slug}`)
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
        }
    }
</script>

<style lang="scss" scoped>

</style>