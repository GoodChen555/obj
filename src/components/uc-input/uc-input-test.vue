<template>
  <div id="app">
 <h3>测试输入框</h3>

<UcInput/>
<uc-input type="text" v-model="msg1" label="账户"/>
<!-- <uc-input :value="value" @input="show"/> -->
<uc-input type="password" v-model="msg2" label="密码"/>
  </div>
</template>

<script>


import UcInput from '../components/uc-input/uc-input.vue'
export default {
  name: 'App',
  components: {
   UcInput,
  },
  methods:{
	 show(ev){
		 console.log(ev)
	 }
  },
  data(){
	return {
		  msg1:'121',
		  msg2:'345'
	}
  }
}
</script>

<style>

</style>
