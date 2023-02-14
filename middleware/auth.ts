export default defineNuxtRouteMiddleware((to, from) => {
  // 命名中间件
  // 需要再vue文件中加如下代码
  // definePageMeta({
  //   middleware: 'auth'
  // })
  console.log(123)
})
