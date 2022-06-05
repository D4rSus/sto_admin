<template>
  <header class="p-3 bg-light text-dark form-control border-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src="../../img/logotip.png" width="60" height="60">
        </a>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 text-dark">Главная</a></li>
          <li><a href="/orders" class="nav-link px-2 text-dark">Заказы</a></li>
        </ul>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a class="nav-link px-2 text-dark">+7(914) 440 19-21</a></li>
          <li><a class="nav-link px-2 text-dark">michailpopov03@mail.ru</a></li>
        </ul>
        <div class="text-end">
          <a href="/login" type="button" class="btn btn-outline-dark me-2">Войти</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader"
}
</script>

<style scoped>

</style>