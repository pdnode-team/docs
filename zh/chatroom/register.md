# 注册
::: tip
更多信息请查看此[文档](https://supabase.com/docs/guides/auth/passwords?queryGroups=language&language=js&queryGroups=flow&flow=implicit#signing-up-with-an-email-and-password)
:::

::: warning
你必须引导用户前往他的邮箱去验证邮箱。（会发送一个链接）。

**如果用户没有验证邮箱**那么他不能**登录**。

*请一定要用户验证邮箱！*
:::

```ts
async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: '<email>', // 邮箱
    password: '<password>', // 密码
    options: {
      emailRedirectTo: 'https://localhost:5173/welcome', // 邮箱重定向的地方 | 可选。
    },
  })
}
```

