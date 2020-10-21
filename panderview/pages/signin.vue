<template>
  <div class="signin__container">
    <div class="pandaImage">
      <PandaImage />
    </div>
    <div class="input__elements">
      <vs-input
        v-model="username"
        class="username-input"
        primary
        label-placeholder="Username"
      />
      <vs-input
        v-model="password"
        type="password"
        primary
        label-placeholder="Password"
        class="password-input"
      />
    </div>
    <div class="signInButton">
      <vs-button square @click="submitForm()"> Sign In </vs-button>
    </div>
  </div>
</template>

<script>
import PandaImage from '~/components/Panda.vue';

export default {
  components: {
    PandaImage,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      console.log(this.username);
    },
  },
};
</script>

<style lang="css" scoped>
.signin__container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgb(224, 224, 224);
  width: 22rem;
  height: 17rem;
  transition: box-shadow 0.5s ease;
}

.signin__container:hover {
  box-shadow: 1px 3px 4px #ccc;
}

.signin__container:hover .pandaImage {
  animation: moving 3s infinite both;
}

.pandaImage {
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 1rem;
}

.input__elements {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 9rem;
}

input.vs-input {
  width: 300px !important;
  padding: 13px 14px !important;
}

.username-input {
  margin-bottom: 1rem;
}

.signInButton {
  display: flex;
  justify-content: center;
  margin-top: -1.5rem;
}

@keyframes moving {
  0% {
    left: -2px;
  }
  50% {
    left: 2px;
  }
  100% {
    left: -2px;
  }
}
</style>
