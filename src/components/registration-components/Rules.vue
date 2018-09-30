<template>
  <div id = "rules">
    <h1 class = "title center">{{$t('rules.titlu')}}</h1>
		<rule v-for="item in rules" :rule="item" class = "column"></rule>
  </div>
</template>

<script>
import rules from '@/assets/resources/rules.json'
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

<style lang="scss">
	#rules {
		margin-top: 50px;
	}
	.center{
		text-align: center;
	}
	.title{
		font-weight: bold;
		font-size: 58px;
	}
</style>