<!--------------------------- Learning Phase 13b ----------------->
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div v-if="isLoggedIn">
                            <p class="h3 fw-bold text-success">Welcome User</p>
                            <p class="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis unde aut, assumenda facilis porro eligendi quae libero, distinctio eveniet, ratione reprehenderit reiciendis expedita. Illo, laboriosam?</p>
                        </div>
                        <div v-if="!isLoggedIn">
                            <p class="h3 fw-bold text-danger">Thank You!!</p>
                            <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nesciunt. Eos, magni quam facilis, soluta accusantium voluptatem voluptas quia iusto modi deserunt obcaecati id? Rem provident a qui repellendus magni?</p>
                        </div>
                        <!-- @click makes state changes when event click happens -->
                        <button v-if="!isLoggedIn" class="btn btn-success btn-sm m-1" @click="login()">Login</button>
                        <button v-if="isLoggedIn" class="btn btn-danger btn-sm m-1" @click="logout()">LogOut</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AuthUser',
    data: function() {
        return {
            isLoggedIn: false
        };
    },
    methods: {
        login: function() {
            this.isLoggedIn = true;
        },
        logout: function() {
            this.isLoggedIn = false;
        },
    }
  }; 
  </script>
  
  <style>
  
  </style>
<!--------------------------- Learning Phase 13a ----------------->
<!-- <template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div v-if="isLoggedIn">
                            <p class="h3 fw-bold text-success">Welcome User</p>
                            <p class="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis unde aut, assumenda facilis porro eligendi quae libero, distinctio eveniet, ratione reprehenderit reiciendis expedita. Illo, laboriosam?</p>
                        </div>
                        <div  v-if="!isLoggedIn">
                            <p class="h3 fw-bold text-danger">Thank You!!</p>
                            <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nesciunt. Eos, magni quam facilis, soluta accusantium voluptatem voluptas quia iusto modi deserunt obcaecati id? Rem provident a qui repellendus magni?</p>
                        </div>
                        <button class="btn btn-success btn-sm m-1" @click="login()">Login</button>
                        <button class="btn btn-danger btn-sm m-1" @click="logout()">LogOut</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AuthUser',
    data: function() {
        return {
            isLoggedIn: false
        };
    },
    methods: {
        login: function() {
            this.isLoggedIn = true;
        },
        logout: function() {
            this.isLoggedIn = false;
        },
    }
  }; 
  </script>
  
  <style>
  
  </style> -->

<!--------------------------- Learning Phase 12 ----------------->
<!-- <template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <p class="h3 fw-bold text-success">Welcome User</p>
                            <p class="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis unde aut, assumenda facilis porro eligendi quae libero, distinctio eveniet, ratione reprehenderit reiciendis expedita. Illo, laboriosam?</p>
                        </div>
                        <div>
                            <p class="h3 fw-bold text-danger">Thank You!!</p>
                            <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nesciunt. Eos, magni quam facilis, soluta accusantium voluptatem voluptas quia iusto modi deserunt obcaecati id? Rem provident a qui repellendus magni?</p>
                        </div>
                        <button class="btn btn-success btn-sm m-1" @click="login()">Login</button>
                        <button class="btn btn-danger btn-sm m-1" @click="logout()">LogOut</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AuthUser',
    data: function() {
        return {
            isLoggedIn: false
        };
    },
    methods: {
        login: function() {
            this.isLoggedIn = true;
        },
        logout: function() {
            this.isLoggedIn = false;
        },
    }
  }; 
  </script>
  
  <style>
  
  </style> -->