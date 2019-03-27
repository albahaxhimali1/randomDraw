<template>
  <div class="menu-container" id="top-nav">
    <div class="top-container">
      <div class="menu-icon" @click="toggleMenu">
        <img src="~/static/menu-options.svg" alt="menu-burger-icon">
      </div>
      <div class="notification-icon">
        <nuxt-link :to="{name: 'tournaments'}" class="home-notification-link">
          <!--<img src="~/static/logo-head.svg" class="home-menu-icon" alt="" style="margin-right: 3px;">-->
        </nuxt-link>
      </div>
    </div>

    <div class="slider-container" ref="slider-container" id="slider-container">
      <div class="slider-wrapper">
        <!--<div class="slider-item" :class="activeSidebar ? 'slider-item-not-active' : ''">-->
        <div class="slider-menu">
          <div class="sidebar-menu reviewersWithScroll">
            <!--
            <div class="sidebar-username">
              <nuxt-link :to="{name: 'profile', params:{username: user.username}}">
              <img v-lazy="`${baseImageUrl}user/avatar/${user.avatar}`"
              :key="`sidebar-main-avatar-${user.username}-${user.avatar}`"
              @click="toggleMenu">
              <h5 @click="toggleMenu">{{user.username}}</h5>
              </nuxt-link>
            </div>
            -->
            <ul>
              <li @click="toggleMenu">
                <nuxt-link :to="{name: 'tournaments'}" exact>
                  <div class="sidebar-icon swiper-no-swiping">
                    <!--<img src="~/assets/svg/tournament-icon.svg" alt="tournament-icon">-->
                  </div>
                  <span class="swiper-no-swiping">Tournaments</span>
                </nuxt-link>
              </li>
              <li class="horizontal-line-wrapper">
                <div class="horizontal-line"></div>
              </li>
              <li>
                <div class="copyright-container">
                  <p>{{new Date().getFullYear()}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="slider-dummy" :class="activeSidebar ? 'slider-dummy-visible' : ''">
          <div class="test-slider-slide" @click="toggleMenu"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    name: 'menuContainer',

    data () {
      return {
        activeSidebar: false
      }
    },

    methods: {
      toggleMenu () {
        const slidesHolder = this.$refs['slider-container'];
        this.activeSidebar = !this.activeSidebar;
        const slideNumber = this.activeSidebar ? '0' : '1';
        slidesHolder.style.setProperty('--page', slideNumber);
        document.getElementsByTagName('BODY')[0].style.overflow = this.activeSidebar ? 'hidden' : 'auto';
      }
    }
  }
</script>
<style lang="scss" scoped>
  .menu-container {
    /*<!--background: $game-darker-bg;-->*/
    width: 100%;
    height: 50px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 4;

    .top-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      i {
        /*<!--color: $primary-text-color;-->/*/
        cursor: pointer;
        font-size: 22px;
      }

      h5 {
        font-size: 12px;
        /*<!--font-family: $game-p-ff;-->*/
        /*<!--color: $standard-text-color;-->*/
        text-transform: uppercase;
      }

      .menu-icon, .notification-icon, .tournament-name {
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
      }

      .home-notification-link {
        display: flex;
        width: 100%;
        justify-content: center;
      }

      img.home-menu-icon {
        width: 22px !important;
      }

      .menu-icon, .notification-icon {
        width: 50px;
        height: 50px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 30px;
        }
      }

      .notification-icon-holder {
        width: 22px;
        position: relative;
      }

      .notifications-number {
        width: 10px;
        height: 10px;
        background: #d60330;
        position: absolute;
        display: flex;
        top: 3px;
        right: 0;
        border-radius: 50%;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        span {
          font-size: 6px;
          /*<!--font-family: $game-p-ff;-->*/
          /*<!--color: $standard-text-color;-->*/
        }
      }

      .fa-bell-o {
        /*<!--color: $game-light-bg !important;-->*/
      }
    }

    .slider-menu {
      width: 70% !important;
      height: 100vh !important;
      /*<!--background: $game-tournaments;-->*/

      .sidebar-menu {
        width: 100%;
        /*<!--background: $game-tournaments;-->*/
        background: #f4ddb2;
        height: 100%;
        max-height: 90%;
        overflow: auto !important;
        position: relative;

        .copyright-container {
          //padding-top: 20px;
          width: 100%;

          p {
            width: 100%;
            color: #fff;
            text-align: center;
            font-size: 12px;
            /*<!--font-family: $game-p-ff;-->*/
            padding-top: 15px;
          }
        }

        ul {
          list-style: none;

          .horizontal-line-wrapper {
            margin: 5px 7%;

            .horizontal-line {
              height: 1px;
              background-color: #2f426c;
            }
          }

          .data-retrieving-text {
            height: 100%;
            font-size: 13px;
            /*<!--font-family: $game-p-ff;-->*/
            color: white;
            padding: 0 7% 0 calc(10% + 4px);
            display: flex;
            justify-content: center;
            flex-direction: column;
          }

          a, .logout-wrapper {
            width: 100%;
            height: 50px;
            display: flex;
            /*<!--color: $standard-text-color;-->*/
            padding: 0 7% 0 calc(10% + 4px);
            /*<!--@include transition(all .2s);-->*/

            .sidebar-icon {
              margin-right: 21px;
              justify-content: center;
            }

            span {
              height: 100%;
              font-size: 14px;
              /*<!--font-family: $game-p-ff;-->*/
              display: flex;
              justify-content: center;
              flex-direction: column;
            }
          }

          .router-link-active ,.router-link-exact-active {
            background: rgba(0, 0, 0, 0.2);

            .st0 {
              /*<!--fill: $sidebar-icon-color;-->*/
            }
          }
        }
      }
    }

    .slider-dummy {
      width: 0;
      height: 100vh;

      .test-slider-slide {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0);
      }
    }

    .slider-dummy-visible {
      width: 30% !important;

      .test-slider-slide {
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }

  .slider-container {
    --page: 1;
    position: relative;
    overflow: hidden;

    .slider-wrapper {
      overflow: hidden;
      display: flex;
      flex-wrap: nowrap;
      position: fixed;
      top: 0;
      left: 0;
      --slide-width: 100%;
      width: var(--slide-width);
      --translate-value: calc(var(--page) * var(--slide-width) * -1);
      transform: translateX(var(--translate-value));
      -webkit-transition: all .3s cubic-bezier(0.7, 0, 0.3, 1);
      -moz-transition: all .3s cubic-bezier(0.7, 0, 0.3, 1);
      -ms-transition: all .3s cubic-bezier(0.7, 0, 0.3, 1);
      -o-transition: all .3s cubic-bezier(0.7, 0, 0.3, 1);
      transition: all .3s cubic-bezier(0.7, 0, 0.3, 1);
    }
  }
</style>
