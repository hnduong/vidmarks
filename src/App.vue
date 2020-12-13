<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleNavigation">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">VidMarks</span>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="showNavigation">
        <md-button class="md-icon-button" @click="toggleNavigation">
          <md-icon>menu</md-icon>
        </md-button>
        <md-list>
          <md-list-item v-if="authenticated">
            <amplify-sign-out></amplify-sign-out>
          </md-list-item>
          <md-list-item v-else>
            <router-link to="auth">Auth</router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify';
import * as UIMutations from '@/store/ui/mutations';
import * as UIGetters from '@/store/ui/getters';
import * as AuthMutations from '@/store/auth/mutations';
import * as AuthGetters from '@/store/auth/getters';

import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'app',
  async created() {
    const user = await Auth.currentCredentials();
    this.setUser(user);
  },
  methods: {
    ...mapMutations({
      setUser: AuthMutations.SET_USER,
      toggleNavigation: UIMutations.TOGGLE_NAVIGATION
    })
  },
  computed: {
    ...mapGetters({
      authenticated: AuthGetters.GET_USER_AUTHENTICATED,
      showNavigation: UIGetters.GET_SHOW_NAVIGATION
    })
  }
};
</script>

<style lang="scss" scoped>
.md-app {
  min-height: 350px;
  border: 1px solid rgba(#000, 0.12);
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
