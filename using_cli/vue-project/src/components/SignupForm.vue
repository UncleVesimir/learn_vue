<template>
    <form action="" @submit.prevent="handleSubmit">
        <label>Email</label>
        <input type="email" required v-model="email" />
        <div class="error" v-if="emailError">{{ emailError }}</div>
        <label>Password</label>
        <input type="password" required v-model="pword" />
        <div class="error" v-if="passError">{{ passError }}</div>
        <label>Role: </label>
        <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>

        <label>Skills: </label>
        <input type="text" v-model="tempSkill" @keyup="addSkill">
        <div class="pill" v-for="skill in skills" :key="skill" @click="removeSkill(skill)">
            <span >{{ skill }}</span>
        </div>


        <label for="terms">Please Accept the Terms & Conditions</label>
        <input type="checkbox" v-model="terms" id="terms">

        <div class="submit"><button>Submit</button></div>
        <div class="formSuccess" v-if="formSubmissionSuccess">Form Successfully Submitted</div>
    </form>

    <p>Email: {{ email }}</p>
    <p>Password: {{ pword }}</p>
    <p>Terms accepted?: {{ terms }}</p>
    <p>Name: {{ names }}</p>
</template>
    
<script setup>
import { ref } from 'vue';
let email = ref("");
let pword = ref("");
let terms = ref(false);
let role = ref("");
let tempSkill = ref("");
let skills = ref([]);
let emailError = ref("");
let passError = ref("");
let formSubmissionSuccess = ref(false);

const addSkill = (e) => {
    if (e.key === "," && tempSkill.value) {
        if(skills.value.includes(tempSkill.value.slice(0, -1))) {
            tempSkill.value = "";
        }
        if(!skills.value.includes(tempSkill.value.slice(0, -1))) {
            skills.value.push(tempSkill.value.slice(0, -1));
            tempSkill.value = "";
        }
    }
}

const removeSkill = (skillToRemove) => {
    skills.value = skills.value.filter( (skill) => skill !== skillToRemove )
}

const handleSubmit = () => {
    //validate email 
    emailError.value = (email.value.length > 4 & email.value.includes("@"))  ?
     "" : "Email must be at least 3 chars long and contain an '@' character"; 
    //validate password
    passError.value = pword.value.length > 5 ?
     "" : "Password must be at least 5 characters long"; 
    //terms accepted
    if(emailError.value.length === 0  & passError.value.length === 0 & terms.value ) {
        formSubmissionSuccess.value = true;
    }
}


</script>
<style lang="css">
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #aaa;
    color: #555;
}
input[type="checkbox"] {
    width: 50%;
    display: inline-block;
}

input[type="checkbox"] + label {
    display: inline-block;
}

.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;

}
.submit {
    text-align: center;
}
.error {
    color: #ff0062;
    margin-top:10px;
    font-size:0.8em;
    font-weight: bold;
}
.formSuccess {
    background-color: #48c262;
    color: #eee;
    margin: 20px auto 0 auto;
    font-size:1em;
    font-weight: bold;
    text-align: center;
    border-radius: 20px;
    width: 65%;
    height: auto;
    padding: 7px;
}
</style>