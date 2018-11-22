<template>
  <div id = "rules">
    <h1 class = "title">{{$t('rules.titlu')}}</h1>
		<rule v-for="(item, index) in rules" :key="index" :rule="item" class = "column"></rule>
  </div>
</template>

<script>
import rules from '@/assets/resources/rules.js'
import rule from '@/components/registration-components/Rule'
import Introduction from '@/components/registration-components/Introduction'
  export default{
    components: {
      rule,
      Introduction
    },
    data () {
      return {
				rules
      }
    }
  }
</script>

<style lang="scss" scoped>
	#rules {
		margin-top: 50px;
	}

	.title{
		font-weight: bold;
		font-size: 58px;
    text-align: center;
	}
</style>