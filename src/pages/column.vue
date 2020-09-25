<template>
 <div class="column pd-top">
    	<uc-cell
    	v-for="(item,index) of  list"
    	:key="item._id"
    	:data="item" 
    	:index="index" 
    	collectionName="column"
    	></uc-cell>
 </div>
</template>

<script>
	import UcCell from "../components/uc-cell/uc-cell.vue"
export default {
  name: 'column',
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
		  url:'/api/column',
		  params:{_limit:10,_page:1}
	  }).then(
	  res=> this.list=res.data.data
	  )
  },
  updated() {},
  methods: {}
};
</script>

<style>
.column{
	 padding: 0.3 0.54rem;
	 
}
.column div{
	padding: 0.1rem 0.4rem ;
}
</style>
