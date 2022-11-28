<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
       
      </span>
      <span v-else>
        <img src="@/assets/logo1.png" alt="">
      </span>
    </h1>

   
    <SidebarLink to="/dashboard" icon="bi bi-columns-gap">Dashboard</SidebarLink>
    <SidebarLink to="/admin/customer/index" icon="bi bi-people">Customers</SidebarLink>
    <SidebarLink to="/products" icon="bi bi-cart"> Products</SidebarLink>
    <SidebarLink to="/order" icon="bi bi-cart"> Products</SidebarLink>
    <SidebarLink to="/transactions" icon="bi bi-cash">Transaction</SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
    <i class="bi bi-chevron-double-left"></i>
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #7DAB2E;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>