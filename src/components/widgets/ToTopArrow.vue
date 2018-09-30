<template>
    <div class="nav-up-arrow">
        <font-awesome-icon icon="faChevronUp"/>
    </div>
</template>


<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronUp)

export default {
}
</script>

<style lang="scss" scoped>
.nav-up-arrow {
  text-align: center;
  width: 8vh;
  height: 8vh;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 9999999;
  background-color: #555555;
  opacity: 0.8;
  filter: alpha(opacity=80);
  border: 0px solid;
  border-radius: 1vh;
}
.nav-up-arrow:hover {
  opacity: 1;
  filter: alpha(opacity=100);
}
.hiddenbutton {
  display: none;
}
.markerr {
  position: absolute;
  top: 160vh;
}
.fa.fa-angle-up {
  font-size: 7vh;
  color: white;
}
.nav-up-arrow span.icon {
  margin-top: 2.2vh;
}
</style>



