<template>
    <div style="display: flex; justify-content:space-between">
        <SXCenterBox :href="d.href" :img="d.img" :title="d.title" :body="d.body" :class="{'margin-r-10':i !== data.length-1}" v-for="(d,i) in data"> </SXCenterBox>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                data:[
                    {
                        href:'http://www.baidu.com',
                        img:'/static/test/bg.png',
                        title:'标题1',
                        body:'内容1'
                    },
                    {
                        href:'http://www.baidu.com',
                        img:'/static/test/bg.png',
                        title:'标题2',
                        body:'内容2'
                    },
                    {
                        href:'http://www.baidu.com',
                        img:'/static/test/bg.png',
                        title:'标题3',
                        body:'内容3'
                    }
                ]
            }
        }
    }
</script>
<style>
</style>