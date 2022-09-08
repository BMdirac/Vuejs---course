<!--------------------------- Learning Phase 8 ----------------->
<template>
  <div class="container" >
    <div class="row">
        <div class="card-md-4">
            <div class="card shadow-lg">
                <div class="card-body">
                    <p class="h3 display-3">{{this.count}}</p> <!-- to bind state -->
                    <!-- to make event handling (using @click and function is called inside of it) -->
                    <button class="btn btn-success m-1" @click="incr">Increment</button>
                    <button class="btn btn-warning m-1" @click="decr">Decrement</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    // name, data, methods, are predefined properties of vuejs component
  name: 'VueCounter',
    // to declare state
  data: function() {
    return {
        count: 0
    }
  },
    // to declare a function
  methods: {
    incr: function() {
        this.count = this.count + 1;
    },
    decr: function() {
        this.count = this.count - 1;
    }
  }
}; 
</script>

<style>

</style>