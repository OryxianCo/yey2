<template>
<div class="login-container">
        <form class="form" @submit.prevent="handleLogin">
        <p class="form-title">Silahkan Masukkan Akun Anda</p>

        <div class="input-container">
                <input v-model="email" placeholder="Enter email" type="email" required />
                <span>
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                </span>
        </div>

        <div class="input-container">
                <input v-model="password" placeholder="Enter password" type="password" required />
                <span>
                <svg stroke="currentColor" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round"
                        stroke-linecap="round"></path>
                                <path
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
                                </path>
                </svg>
                </span>
        </div>

        <div class="login-btn-container">
                <button class="login-button" type="submit">LOGIN</button>
                </div>
                        <p class="signup-link">
                                No account?
                                <router-link to="/signup">Sign up</router-link>
                        </p>
                </form>
        </div>
</template>

<script setup>
import { ref } from "vue"

const email = ref("")
const password = ref("")

function handleLogin() {
console.log("LOGIN:", email.value, password.value)}
</script>

<style scoped>
.login-container {
display: flex;
justify-content: center;
margin-top: 4rem;}

.form {
background-color: #fff;
display: block;
padding: 1rem;
max-width: 399px;
border-radius: 0.5rem;
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
0 4px 6px -2px rgba(0, 0, 0, 0.05);}

.form-title {
font-size: 1.25rem;
font-weight: 600;
text-align: center;
color: #000;}

.input-container {
position: relative;}

.input-container input,
.form button {
outline: none;
border: 1px solid #e5e7eb;
margin: 8px 0;}

.input-container input {
background-color: #fff;
padding: 1rem;
padding-right: 3rem;
font-size: 0.875rem;
width: 300px;
border-radius: 0.5rem;
box-shadow: 0 1px 2px rgba(0,0,0,0.05);}

.input-container span {
display: grid;
position: absolute;
top: 0; bottom: 0;
right: 0;
padding-left: 1rem;
padding-right: 1rem;
place-content: center;}

.input-container span svg {
color: #9CA3AF;
width: 1rem;
height: 1rem;}

.submit {
display: block;
padding: 0.75rem 1.25rem;
background-color: #C31432;
color: #ffffff;
font-size: 0.875rem;
font-weight: 500;
width: 100%;
border-radius: 0.5rem;
text-transform: uppercase;}

.signup-link {
color: #6B7280;
font-size: 0.875rem;
text-align: center;}

.signup-link a {
text-decoration: underline;}

.login-btn-container {
width: 100%;
display: flex;
justify-content: center; 
margin-top: 15px;
}

.login-button {
font-size: 18px;
letter-spacing: 2px;
text-transform: uppercase;  display: inline-block;
text-align: center;
font-weight: bold;
padding: 0.7em 2em;
border: 3px solid #C31432;
border-radius: 2px;
position: relative;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
color: #C31432;
background: none;
text-decoration: none;
transition: 0.4s ease all;
z-index: 1;
}

.login-button:before {
transition: 0.5s all ease;
position: absolute;
top: 0;
left: 50%;
right: 50%;
bottom: 0;
opacity: 0;
content: '';
background-color: #C31432;
z-index: -1;
}

.login-button:hover,
.login-button:focus {
color: white;
}

.login-button:hover:before,
.login-button:focus:before {
left: 0;
right: 0;
opacity: 1;
}

.login-button:active {
transform: scale(0.9);
}
</style>
