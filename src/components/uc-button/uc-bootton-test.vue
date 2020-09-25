<template>
  <div id="app">
 <h3>按钮测试</h3>

<uc-button/>
<UcButton/>
<uc-button text="登录"/>
<uc-button text="注册"/>
<uc-button  bg-color="red"/>
<uc-button @xx="show">点击</uc-button>
  </div>
</template>

<script>


import UcButton from '../components/uc-button/uc-botton.vue'
export default {
  name: 'App',
  components: {
   UcButton,
  },
  methods:{
	  show(ev){
		  console.log(ev)
	  }
  }
}
</script>

<style>

</style>
