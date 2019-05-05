<template>
    <div :style="'background: url('+bgImg+') no-repeat center '+bgColor+';background-size: 100% 100%;'+';width:'+width+';height:'+height">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props:{
            bgImg:{
                type:String,
                default:''
            },
            bgColor:{
                type:String,
                default:''
            },
            width:{
                type:String,
                default:'100%'
            },
            height:{
                type:String,
                default:'100%;'
            }
        }
    }
</script>
<style lang="less">

</style>