<!--------------------------- Final Learning Phase ----------------->
<template>
    <div class="container mt-3">
        <div v-if="loading">
            <VueSpinner />
        </div>
        <div class="row" v-if="!loading && Object.keys(user).length > 0">
            <div class="col">
                <pre>{{ user }}</pre>
            </div>
        </div>
        <div class="row">
            <div class="col">
                 <router-link to="/users" class="btn btn-success ms-3">Back</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { UserService } from "@/services/UserService";
import VueSpinner from "./VueSpinner.vue";

export default {
    name: "UserDetails",
    data: function () {
        return {
            loading: false,
            user: {},
            errorMessage: null
        };
    },
    created: async function () {
        let userId = this.$route.params.userId;
        try {
            this.loading = true;
            let response = await UserService.getUser(userId);
            this.loading = false;
            this.user = response.data;
        }
        catch (error) {
            this.loading = false;
            this.errorMessage = error;
        }
    },
    components: { VueSpinner }
};
</script>

<style scoped>

</style>

<!--------------------------- Learning Phase 19 ----------------->
<!-- <template>
    <h2>User Details</h2>
</template>

<script>
import { UserService } from "@/services/UserService";

export default {
    name: "UserDetails",
    created: async function() {
        let userId = this.$route.params.userId;
        try {
            let response = await UserService.getUser(userId);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
};
</script>

<style scoped>

</style> -->