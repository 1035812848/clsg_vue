<template>
    <div class="sx-center-box" :style="'padding: 20px 10px;display: flex;align-items: center;flex-grow:1;background-color: #222222;'">
        <a :href="href" v-if="href">
            <img :src="img" style="max-width: 100px;max-height: 100px;">
        </a>
        <div style="padding-left: 10px;font-family: '宋体';" v-if="href">
            <div style="font-size: 16px;color: #a6937c;font-weight: bold;">{{title}}</div>
            <div style="font-size: 12px;">{{body}}</div>
        </div>
       <!-- <div :class="{'aaa': data.href}">
            <span>师姐你好</span>
        </div>-->
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props:{
            href:false,
            img:'',
            title:'',
            body:''
        }
    }
</script>
<style lang="less">
    .margin-r-10{
        margin-right: 10px;
    }
</style>