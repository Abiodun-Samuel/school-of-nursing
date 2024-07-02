<template>
  <div class="container-fluid p-0 mb-5">
    <SubHeader page="Contact"/>
    <div class="container-fluid">
     
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import SubHeader from "../../components/includes/SubHeader.vue";

const firstName = ref(' ');
const lastName = ref ('');
const Email = ref('');
const phoneNumber = ref('');
const message = ref('')

const isValidEmail = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email.value));
const isValidPhone = computed(() => /^\d{10}$/.test(phoneNumber.value));
const isValidForm = computed(() => firstName.value && isValidPhone.value && isValidEmail.value);

const submitForm = () => {
  const emailAddress =" taiwoakinfenwa2019@gmail.com";
  const subject = "Reach"
  const body = `First Name: ${firstName.value}\nLast Name:${lastName.value}\nPhoneNumber:${phoneNumber.value}\nMessage:${message.value}`

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href=mailtoLink
}
</script>
<style scoped>
.error {
  color: #e74c3c;
  font-size: 0.875em;
}
</style>
