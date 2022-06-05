<template>
  <body class="text-center m-5">
  <div class="container form-control border-dark">
    <h1 class="h3 mb-3 font-weight-normal">Авторизуйтесь</h1>
    <div class="mb-3">
      <input type="email" id="inputEmail" class="form-control" placeholder="Email адрес" required="" autofocus="">
    </div>
    <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" required="">
    <button class="btn btn-lg btn-dark m-2" type="submit">Войти</button>
  </div>
  </body>
</template>

<script>
export default {
  name: "MyAccount"
}
</script>

<style scoped>
input {
  margin: auto;
  width: 50%;
}

.container {
  width: 30%;
}
</style>