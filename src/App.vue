<template>
  <div class="app-shell layout-column flex">
    <div class="layout-column flex-none">
      <!-- Global message -->
      <b-alert class="global-alert" variant="info" dismissible :show="showGlobalMessage" @dismissed="dismissGlobalMessage()">
        This is an alert. You can dismiss it for current browser tab session.
      </b-alert>
    </div>

    <div class="app-layout layout-column">
      <div class="layout-row flex-none">
        <!-- Header Toolbar -->
        <header class="app-toolbar mdc-toolbar mdc-elevation--z3 theme--dark" role="banner">
          <div class="app-toolbar__row mdc-toolbar__row layout-row">
            <section class="app-toolbar__start mdc-toolbar__section mdc-toolbar__section--align-start">
              <button class="app-toolbar__drawer-toggle material-icons" @click="$refs.drawer.open()">menu</button>
              <span class="app-toolbar__title mdc-toolbar__title">Vue Bootstrap Template</span>
            </section>

            <section class="app-toolbar__end mdc-toolbar__section mdc-toolbar__section--align-end align-items-center" role="toolbar">
              <a class="app-toolbar__btn btn btn-outline-success btn-sm" @click="toggleRTL" aria-label="Toggle RTL" alt="Toggle RTL">Toggle RTL</a>
              <a class="app-toolbar__btn material-icons hidden-sm-down" @click="$root.$emit('show::modal', 'settingsModal')" aria-label="Settings" alt="Settings">settings</a>
              <a class="app-toolbar__btn material-icons hidden-sm-down" @click="$root.$emit('show::modal', 'notificationsModal')" aria-label="Notifications" alt="Notifications">notifications</a>
              <a href="#" title="Account: John Doe">
                <img class="avatar avatar--small" src="/static/images/avatar_003.jpg" alt="Account: John Doe" role="presentation" aria-hidden="true">
              </a>
            </section>
          </div>
        </header>
      </div>

      <div class="layout-row flex">
        <!-- Sidenav -->
        <div class="app-navigation-panel">
          <temporary-drawer class="app-sidenav" ref="drawer" style="z-index: 20;">
            <nav class="mdc-list-group">
              <div class="mdc-list">
                <div class="list-subheader">Views</div>
                <router-link class="mdc-list-item" to="/">
                  <i class="material-icons mdc-list-item__start-detail">dashboard</i>Dashboard
                </router-link>
                <router-link class="mdc-list-item" to="/axios">
                  <i class="material-icons mdc-list-item__start-detail">people</i>Axios Request
                </router-link>
                <router-link class="mdc-list-item" to="/signin">
                  <i class="material-icons mdc-list-item__start-detail">exit_to_app</i>Sign In
                </router-link>
                <router-link class="mdc-list-item" to="/blog">
                  <i class="material-icons mdc-list-item__start-detail">view_module</i>Blog
                </router-link>
                <router-link class="mdc-list-item" to="/blog/article">
                  <i class="material-icons mdc-list-item__start-detail">archive</i>Article
                </router-link>
              </div>
            </nav>
            <div class="app-sidenav__footer">
              <a class="btn btn-success btn-block"
                href="https://shapebootstrap.net/item/1525731/?ref=rustheme"
                @click="gaSendEvent('Sidenav Footer', 'Get Premium Template Click')">
                Get a premium template
              </a>
            </div>
          </temporary-drawer>
        </div>

        <!-- Content -->
        <div class="app-content-panel layout-column flex">
          <div class="actionbar" v-if="['Profile'].indexOf($route.name) === -1">
            <div class="actionbar__main">
              <div class="actionbar__title-lockup actionbar__space-consumer">
                <div class="actionbar__title">{{ routeName }}</div>
              </div>
              <div class="actionbar__help-container">
                <a class="btn btn-success hidden-xs-down"
                  href="https://shapebootstrap.net/item/1525731/?ref=rustheme"
                  @click="gaSendEvent('Actionbar', 'Get Premium Template Click')">
                  Get a premium template
                </a>
                <b-popover
                  :placement="'left'"
                  :triggers="'click'">
                  <div slot="content">
                    Here is a premium Bootstrap Template available on ShapeBootstrap marketplace.
                  </div>
                  <b-btn class="btn btn-link actionbar__help-button" variant="link">
                    <i class="material-icons">help</i>
                  </b-btn>
                </b-popover>
              </div>
            </div>
          </div>

          <router-view class="view"></router-view>
        </div>
      </div>
    </div>
    <!-- .app-layout -->

    <!-- Settings Modal -->
    <b-modal id="settingsModal" title="Settings">
      <div class="text-danger">Nothing to customize :(</div>
    </b-modal>

    <!-- Notifications Modal -->
    <b-modal id="notificationsModal" title="Notifications">
      <b-alert variant="success" :show="true" dismissible>
        Something is good.
      </b-alert>
      <b-alert variant="info" :show="true" dismissible>
        Something is ok.
      </b-alert>
      <b-alert class="mb-0" variant="danger" :show="true" dismissible>
        Something is wrong.
      </b-alert>
    </b-modal>
  </div>
</template>

<script>
import TemporaryDrawer from '@/components/mdc-drawer/TemporaryDrawer'

export default {
  data () {
    return {
      routeName: this.$router.currentRoute.name,
      showGlobalMessage: this.showGlobalMessage()
    }
  },
  components: {
    TemporaryDrawer
  },
  watch: {
    '$route': function (newRoute, oldRoute) {
      this.routeName = newRoute.name
    }
  },
  mounted () {
    this.routeName = this.$router.currentRoute.name.bind(this)
  },
  methods: {
    dismissGlobalMessage () {
      window.sessionStorage.setItem('globalMessageClosed', true)
    },
    // Helper function for sending Google Analytics events on click
    gaSendEvent (eventCategory, eventAction, eventLabel, eventValue) {
      this.$ga.event(eventCategory, eventAction, eventLabel, eventValue)
    },
    // DEMO: Check if global message visible
    showGlobalMessage () {
      if (!window.sessionStorage.getItem('globalMessageClosed')) {
        return true
      } else {
        return false
      }
    },
    // DEMO: Toggle RTL
    toggleRTL () {
      let body = document.documentElement
      if (body.getAttribute('dir') !== 'rtl') {
        body.setAttribute('dir', 'rtl')
      } else {
        body.setAttribute('dir', 'ltr')
      }
    }
  }
}
</script>

<style lang="scss">
@import './scss/variables';

$mdc-theme-primary: $brand-primary;
$mdc-theme-accent: $brand-info;
$mdc-theme-background: $body-bg;

@import '@material/elevation/mdc-elevation';
@import '@material/list/mdc-list';
@import '@material/theme/mdc-theme';
@import '@material/toolbar/mdc-toolbar';

</style>
