<!--------------------------- Learning Phase 4 ----------------->
<!-- About learning phase 4 -->
<!-- Data binding (props and state) and all of its concept -->
<!-- Customer.vue component is created and imported -->
<template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iste aliquam illum voluptatum tempora est mollitia? Nostrum quisquam nam itaque illum laboriosam eaque repellat voluptatum! Sint quidem illum fugit voluptate.</p>
        </div>
      </div>
    </div>

    <Customer />
  </div>
</template>

<script>
import Customer from "./components/Customer.vue";

export default {
  components: { Customer }
}
</script>

<style>
  @import "./styles.css";
</style>

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
