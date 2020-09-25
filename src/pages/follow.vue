<template>
 <div class="follow pd-top">
    	<uc-cell
    	v-for="(item,index) of  list"
    	:key="item._id"
    	:data="item" 
    	:index="index" 
    	collectionName="follow"
    	></uc-cell>
 </div>
</template>

<script>
	import UcCell from "../components/uc-cell/uc-cell.vue"
export default {
  name: 'follow',
  props: {
    
  },
  data() {
    return {
		list:[]
	};
  },
  components: {
	  UcCell
  },
  mounted() {
	 
	  this.$axios({
	  		  url:'/api/follow',
	  		  params:{_limit:15,_page:1}
	  }).then(
	  res=> 
		  this.list=res.data.data
		  
	
	  
	  )
  },
  updated() {},
  methods: {}
};
</script>

<style>
.follow{
    padding: 0.3 0.34rem;
  }
  .follow div{
      padding: 0.1rem 0.4rem ;
    }
  
</style>
