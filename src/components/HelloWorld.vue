<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <button @click="newUser()"></button>
  </div>
</template>

<script>
import {createUser} from '../firebase';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data : function() {
    return {
      newuser : {
        nom : 'niakate', 
        prenom : 'Madi', 
        telephone : '0747474747', 
        mail : 'aaaa@gmail.com', 
        password :'azerty',
        pseudo :'dimso'
      }
    }
    
  },
  methods: {
    newUser (){
      createUser(this.newuser)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
