<!--------------------------- Learning Phase 7 ----------------->
<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="h3">Customer</p>
          <ul class="list-group">
            <li class="list-group-item">
              Name: {{name}}
            </li>
            <li class="list-group-item">
              Age: {{age}}
            </li>
            <li class="list-group-item">
              designation: {{designation}}
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'VueCustomer',
  props: {
    name: {type: String, required: true},
    age: {type: Number, required: true},
    designation: {type: String, required: true},
  }
};
</script>

<style>

</style>

<!--------------------------- Learning Phase 6 ----------------->
<!-- <template>
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="h3">Customer</p>
          <ul class="list-group">
            <li class="list-group-item">
              Name: {{name}}
            </li>
            <li class="list-group-item">
              Age: {{age}}
            </li>
            <li class="list-group-item">
              designation: {{designation}}
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'VueCustomer',
  props: {
    name: {type: String, required: true},
    age: {type: Number, required: true},
    designation: {type: String, required: true},
  }
};
</script>

<style>

</style> -->

<!--------------------------- Learning Phase 5 ----------------->
<!-- <template>
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="h3">Customer</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'VueCustomer',
  props: {
    name: {type: String, required: true},
    age: {type: Number, required: true},
    designation: {type: String, required: true},
  }
};
</script>

<style>

</style> -->

<!--------------------------- Learning Phase 4 ----------------->
<!-- <template>
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="h3">Customer</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'VueCustomer',
};
</script>

<style>

</style> -->
