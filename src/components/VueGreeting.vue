<!--------------------------- Learning Phase 9 ----------------->
<template>
    <div class="container" >
      <div class="row">
          <div class="card-md-5">
              <div class="card shadow-lg">
                  <div class="card-body">
                      <p class="h3 display-3">Hello <span class="fw-bold">{{this.msg}}</span></p> <!-- to bind state -->
                      <!-- to make event handling (using @click and function is called inside of it) -->
                      <button class="btn btn-success m-1" @click="greet( value='Good Morning')">Good Morning</button>
                      <button class="btn btn-warning m-1" @click="greet( value='Good Afternoon')">Good Afternoon</button>
                      <button class="btn btn-danger m-1" @click="greet( value='Good Evening')">Good Evening</button>
                  </div>
              </div>
          </div>
      </div>  
    </div>
  </template>
  
  <script>
  export default {
      // name, data, methods, are predefined properties of vuejs component
    name: 'VueGreeting',
      // to declare state
    data: function() {
      return {
          msg: ''
      }
    },
      // to declare a function
    methods: {
      greet: function(value) {
          this.msg = value;
      }
    }
  }; 
  </script>
  
  <style>
  
  </style>