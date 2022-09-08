<!--------------------------- Learning Phase 11 ----------------->
<template>
    <pre>{{this.user}}</pre>
    <div class="container">
      <div class="row">
          <div class="card-md-3">
              <div class="card shadow-lg">
                  <div class="card-header bg-success text-white">
                      <p class="h3">Register Here</p> 
                  </div>
                  <div class="card-body bg-light">
                    <form>
                        <!-- v-model is used to bind the input data into the methods below for rendering -->
                        <div class="mb-2">
                            <input v-model="user.name" class="form-control" placeholder="Name" type="text">
                        </div>
                        <div class="mb-2">
                            <input  v-model="user.email" class="form-control" placeholder="Email" type="email">
                        </div>
                        <div class="mb-2">
                            <input  v-model="user.password" class="form-control" placeholder="Password" type="password">
                        </div>
                        <div class="mb-2">
                            <input class="btn btn-success" value="Register" type="submit">
                        </div>
                    </form>
                  </div>
              </div>
          </div>
      </div>  
    </div>
  </template>
  
  <script>
  export default {
    name: 'VueRegister',
    data: function() {
        return {
            user: {
                name: "",
                email: "",
                password: ""
            }
        }
    }
  }; 
  </script>
  
  <style>
  
  </style>
  
<!--------------------------- Learning Phase 10 ----------------->
<!-- <template>
    <pre>{{this.user}}</pre>
    <div class="container">
      <div class="row">
          <div class="card-md-3">
              <div class="card shadow-lg">
                  <div class="card-header bg-success text-white">
                      <p class="h3">Register Here</p> 
                  </div>
                  <div class="card-body bg-light">
                    <form>
                        <div class="mb-2">
                            <input v-model="user.name" class="form-control" placeholder="Name" type="text">
                        </div>
                        <div class="mb-2">
                            <input  v-model="user.email" class="form-control" placeholder="Email" type="email">
                        </div>
                        <div class="mb-2">
                            <input  v-model="user.password" class="form-control" placeholder="Password" type="password">
                        </div>
                        <div class="mb-2">
                            <input class="btn btn-success" value="Register" type="submit">
                        </div>
                    </form>
                  </div>
              </div>
          </div>
      </div>  
    </div>
  </template>
  
  <script>
  export default {
    name: 'VueRegister',
    data: function() {
        return {
            user: {
                name: "",
                email: "",
                password: ""
            }
        }
    }
  }; 
  </script>
  
  <style>
  
  </style> -->