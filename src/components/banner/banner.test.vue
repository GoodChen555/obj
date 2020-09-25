<template>
  <div id="app">
 <h3>测试轮播图</h3>

<banner :data="list" collectionName="detail"></banner>



  </div>
</template>

<script>


import banner from '../components/banner/banner.vue'
export default {
  name: 'App',
  components: {
   banner,
  },
  data(){
	  return {
		 list:[]
	  }
  },
  mounted(){
	  setTimeout(()=>{
	  	this.list=[
	  	  {_id:1,image:'/images/img_1.jpg',title:'xxx1',sub_title:'xxxx2'},
	  	  {_id:2,image:'/images/img_2.jpg',title:'xxx2',sub_title:'xxxx2'},
	  	  {_id:3,image:'/images/img_3.jpg',title:'xxx3',sub_title:'xxxx2'},
	  	 
		  ]
	     },1000)
      },
 
  }

</script>

<style>

</style>
