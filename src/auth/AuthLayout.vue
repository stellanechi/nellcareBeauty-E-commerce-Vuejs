<template>
  <div>
    <navigation-bar />
    <router-view />
  </div>
</template>

<script setup>
import NavigationBar from "@/components/navbar/NavigationBar.vue";

// You can add any layout-specific logic here
// For example, checking authentication, analytics, etc.
</script>

<!-- <template>
  <div>
    <Login
      v-if="currentPage === 'login'"
      @navigate="handleNavigation"
      @login="handleLogin"
    />

    <CreateAccount
      v-if="currentPage === 'create'"
      @navigate="handleNavigation"
      @create="handleCreateAccount"
    />

    <ResetPassword
      v-if="currentPage === 'reset'"
      @navigate="handleNavigation"
      @reset="handleResetPassword"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Login from "@/auth/Login.vue";
import CreateAccount from "@/auth/CreateAccount .vue";
import ResetPassword from "@/auth/ResetPassword.vue";

const currentPage = ref("login");

const handleNavigation = (page) => {
  currentPage.value = page;
};

const handleLogin = (credentials) => {
  console.log("Login attempt:", credentials);
  // Here you would typically make an API call to authenticate
  // For example:
  // try {
  //   const response = await fetch('/api/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(credentials)
  //   });
  //   const data = await response.json();
  //   // Handle success (e.g., store token, redirect to dashboard)
  // } catch (error) {
  //   // Handle error
  // }
};

const handleCreateAccount = (userData) => {
  console.log("Create account:", userData);
  // Here you would typically make an API call to register
  // For example:
  // try {
  //   const response = await fetch('/api/register', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(userData)
  //   });
  //   const data = await response.json();
  //   // Handle success
  // } catch (error) {
  //   // Handle error
  // }
};

const handleResetPassword = (emailData) => {
  console.log("Reset password for:", emailData);
  // Here you would typically make an API call to send reset email
  // For example:
  // try {
  //   const response = await fetch('/api/reset-password', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(emailData)
  //   });
  //   const data = await response.json();
  //   // Handle success
  // } catch (error) {
  //   // Handle error
  // }
};
</script> -->
