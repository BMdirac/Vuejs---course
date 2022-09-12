<!--------------------------- Final Learning Phase ----------------->
<!-- About -->
<!-- 
  User detail is received in the console log 

  this learning phase is to display it by the use of "data" 
  function in UserDetail component

  spinner is also added for loading display 
 -->
<template>
    <NavBar />
    <router-view />
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: { NavBar }
}
</script>

<style>
  @import "./styles.css";
</style>

<!--------------------------- Learning Phase 19 ----------------->
<!-- About learning phase 19 -->
<!-- 
  UserDetails component is created
  which can be accessed via user name in UserList component
 -->
<!-- <template>
    <NavBar />
    <router-view />
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: { NavBar }
}
</script>

<style>
  @import "./styles.css";
</style> -->

<!--------------------------- Learning Phase 18 ----------------->
<!-- About learning phase 18 -->
<!-- 
  It's about vue router
 -->
<!-- <template>
    <NavBar />
    <router-view />
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: { NavBar }
}
</script>

<style>
  @import "./styles.css";
</style>
 -->
<!--------------------------- Learning Phase 17 ----------------->
<!-- About learning phase 17 -->
<!-- 
  is to assign the data to a local variable for display

  loading: for spinner, and errorMessage: to display error, are established

  spinner gif (image) is also added. (use wrong url and reload to see the effect)
 -->
<!-- <template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div> 
      </div>
    </div>

    <UserList />
  </div>
</template>

<script>
import UserList from './components/UserList.vue';

export default {
  components: { UserList }
}
</script>

<style>
  @import "./styles.css";
</style>
 -->

<!--------------------------- Learning Phase 16 ----------------->
<!-- About learning phase 16 -->
<!-- 
  is about geting data from server instead of having it locally ( and request for usage)

  to achieve this "axios package has to be installed"
 -->
<!-- <template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div> 
      </div>
    </div>

    <UserList />
  </div>
</template>

<script>
import UserList from './components/UserList.vue';


export default {
  components: { UserList }
}
</script>

<style>
  @import "./styles.css";
</style>
 -->
<!--------------------------- Learning Phase 15 ----------------->
<!-- About learning phase 15 -->
<!-- 
  refracturing to have a service provider by creating a folder called service
  and in it we also create a file called UserService.js
  this file is imported in UserList.vue file
  
  In this case the code in UserList (learning phase 14) will be reduced
 -->
<!-- <template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div> 
      </div>
    </div>

    <UserList />
  </div>
</template>

<script>
import UserList from './components/UserList.vue';


export default {
  components: { UserList }
}
</script>

<style>
  @import "./styles.css";
</style> -->

<!--------------------------- Learning Phase 14 ----------------->
<!-- About learning phase 14 -->
<!-- 
  It's about List looping and rendering
  (list is gotten from 'json placeholder website': https://jsonplaceholder.typicode.com/users)

  v-for is used here
  and static list is formed
 -->
<!-- <template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div> 
      </div>
    </div>

    <UserList />
  </div>
</template>

<script>
import UserList from './components/UserList.vue';


export default {
  components: { UserList }
}
</script>

<style>
  @import "./styles.css";
</style> -->

<!--------------------------- Learning Phase 13b ----------------->
<!-- About learning phase 13b -->
<!-- 
  It's about Conditional rendering

  We want one button to show at a time
  v-if is applied on both buttons
 -->
<!-- <template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div> 
      </div>
    </div>

    <AuthUser />
  </div>
</template>

<script>
import AuthUser from './components/AuthUser.vue';


export default {
  components: { AuthUser }
}
</script>

<style>
  @import "./styles.css";
</style> -->

<!--------------------------- Learning Phase 13a ----------------->
<!-- About learning phase 13a -->
<!-- 
  It's about Conditional rendering

  We want some part of AuthUser to be display on condition
  this is done using the 'v-if' which is apply on some div
 -->
<!-- <template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div> 
      </div>
    </div>

    <AuthUser />
  </div>
</template>

<script>
import AuthUser from './components/AuthUser.vue';


export default {
  components: { AuthUser }
}
</script>

<style>
  @import "./styles.css";
</style> -->

<!--------------------------- Learning Phase 12 ----------------->
<!-- About learning phase 12 -->
<!-- 
  It's about Conditional rendering
 -->
<!-- <template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div> 
      </div>
    </div>

    <AuthUser />
  </div>
</template>

<script>
import AuthUser from './components/AuthUser.vue';


export default {
  components: { AuthUser }
}
</script>

<style>
  @import "./styles.css";
</style> -->

<!--------------------------- Learning Phase 11 ----------------->
<!-- About learning phase 11 -->
<!-- 
  It's about how to submit form
 -->
<!-- <template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div> 
      </div>
    </div>

    <VueRegister />
  </div>
</template>

<script>
import VueRegister from './components/VueRegister.vue';


export default {
  components: { VueRegister }
}
</script>

<style>
  @import "./styles.css";
</style> -->

<!--------------------------- Learning Phase 10 ----------------->
<!-- About learning phase 10 -->
<!-- 
  It's about form handling (two ways data binding)
  this is achieve using v-model
 -->
<!-- <template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div> 
      </div>
    </div>

    <VueRegister />
  </div>
</template>

<script>
import VueRegister from './components/VueRegister.vue';


export default {
  components: { VueRegister }
}
</script>

<style>
  @import "./styles.css";
</style> -->

<!--------------------------- Learning Phase 9 ----------------->
<!-- About learning phase 9 -->
<!-- 
  It's about  Event Handling with function that pass in parameter
 -->
<!-- <template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div>
      </div>
    </div>

    <VueGreeting />
  </div>
</template>

<script>
import VueGreeting from './components/VueGreeting.vue';



export default {
  components: { VueGreeting }
}
</script>

<style>
  @import "./styles.css";
</style> -->

<!--------------------------- Learning Phase 8 ----------------->
<!-- About learning phase 8 -->
<!-- 
  It's about  Event Handling
  (state declaration)
  (function declaration)
 -->
<!-- <template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div>
      </div>
    </div>

    <VueCounter />
  </div>
</template>

<script>
import VueCounter from './components/VueCounter.vue';


export default {
  components: { VueCounter }
}
</script>

<style>
  @import "./styles.css";
</style>
 -->
<!--------------------------- Learning Phase 7 ----------------->
<!-- About learning phase 7 -->
<!-- 
  How to make state data. (data: is used to make state data)
  VueEmployee.vue component is created and data function
  is used to return state

  the state is also used (using 'this.')
 -->
<!-- <template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div>
      </div>
    </div>

    <VueCustomer name="Rajan" age="25" designation="Software Engineer" />
    <VueEmployee />
  </div>
</template>

<script>
import VueCustomer from "./components/VueCustomer.vue";
import VueEmployee from "./components/VueEmployee.vue";

export default {
  components: { VueCustomer, VueEmployee }
}
</script>

<style>
  @import "./styles.css";
</style> -->

<!--------------------------- Learning Phase 6 ----------------->
<!-- About learning phase 6 (to learn about props) -->
<!-- 
  How to use the props received in VueComponent via App component
 -->
<!-- <template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div>
      </div>
    </div>

    <VueCustomer name="Rajan" age="25" designation="Software Engineer" />
  </div>
</template>

<script>
import VueCustomer from "./components/VueCustomer.vue";

export default {
  components: { VueCustomer }
}
</script>

<style>
  @import "./styles.css";
</style> -->

<!--------------------------- Learning Phase 5 ----------------->
<!-- About learning phase 5 -->
<!-- 
  To provide some props to the VueCustomer component.
  They are defined in the App.vue and received in VueCustomer component
 -->
<!-- <template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div>
      </div>
    </div>

    <VueCustomer name="Rajan" age="25" designation="Software Engineer" />
  </div>
</template>

<script>
import VueCustomer from "./components/VueCustomer.vue";

export default {
  components: { VueCustomer }
}
</script>

<style>
  @import "./styles.css";
</style> -->

<!--------------------------- Learning Phase 4 ----------------->
<!-- About learning phase 4 -->
<!-- Data binding (props and state) and all of its concept -->
<!-- VueCustomer.vue component is created and imported -->
<!-- <template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div>
      </div>
    </div>

    <VueCustomer />
  </div>
</template>

<script>
import VueCustomer from "./components/VueCustomer.vue";

export default {
  components: { VueCustomer }
}
</script>

<style>
  @import "./styles.css";
</style> -->

<!--------------------------- Learning Phase 3 ----------------->
<!-- About learning phase 3 -->
<!-- applying global style sheet -->
<!-- installation of bootstrap and @fortawesome/fontawesome-free -->
<!-- configuration of the installation is done in main.js -->
<!-- importing google font (this is use in styles.css) -->

<!-- <template>
  <h2>App Component</h2>
  <button class="btn btn-success">hello</button>
  <i class="fa fa-home text-success fa-4x"></i>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, exercitationem incidunt rerum perferendis alias tempore?</p>
</template>

<script>

</script>

<style>
  @import "./styles.css";
</style> -->

<!--------------------------- Learning Phase 2 ----------------->
<!-- applying internal styles -->

<!-- <template>
  <h2>App Component</h2>
  
</template>

<script>

</script>

<style>
  h2{
    font-family: Calibri, sans-serif;
    color: blue;
  }
</style> -->

<!--------------------------- Learning Phase 1 ----------------->
<!-- applying inline style -->

<!-- <template>
  <h2 style="color: red">App Component</h2>
  
</template>

<script>

</script>

<style>
 
</style> -->
