<template>
<div class="signup-container">
    <div class="form-box">
<form class="form" @submit.prevent="handleSignup">
        <span class="title">Sign up</span>
        <span class="subtitle">Create a free account with your email.</span>

        <div class="form-container">
<input v-model="fullname" type="text" class="input" placeholder="Full Name" required />
<input v-model="email" type="email" class="input" placeholder="Email" required />
<input v-model="password" type="password" class="input" placeholder="Password" required />
        </div>

        <button type="submit">Sign up</button>
</form>

<div class="form-section">
        <p>Have an account? <router-link to="/login">Log in</router-link></p>
</div>
    </div>
</div>
</template>

<script setup>
import { ref } from "vue"

const fullname = ref("")
const email = ref("")
const password = ref("")

function handleSignup() {
console.log("SIGNUP:", fullname.value, email.value, password.value)}
</script>

<style scoped>
.signup-container {
display: flex;
justify-content: center;
margin-top: 4rem;}

.form-box {
max-width: 300px;
background: #f1f7fe;
overflow: hidden;
border-radius: 16px;
color: #010101;}

.form {
display: flex;
flex-direction: column;
padding: 32px 24px 24px;
gap: 16px;
text-align: center;}

.title {
font-weight: bold;
font-size: 1.6rem;}

.subtitle {
font-size: 1rem;
color: #666;}

.form-container {
overflow: hidden;
border-radius: 8px;
background-color: #fff;
margin: 1rem 0 .5rem;
width: 100%;}

.input {
background: none;
outline: 0;
height: 40px;
width: 100%;
border-bottom: 1px solid #eee;
font-size: .9rem;
padding: 8px 15px;}

.form-section {
padding: 16px;
font-size: .85rem;
background-color: #e0ecfb;
box-shadow: rgba(0,0,0,0.08) 0 -1px;}

.form-section a {
font-weight: bold;
color: #0066ff;}

.form button {
background-color: #0066ff;
color: #fff;
border: 0;
border-radius: 24px;
padding: 10px 16px;
font-size: 1rem;
font-weight: 600;
cursor: pointer;}
</style>
