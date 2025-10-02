# 工作区

::: tip
用户需要登录并验证邮箱。
:::

## 创建工作区
::: tip
工作区名称不应该超过**20个字符**

每个人只能有一个工作区，这是硬性限制。
:::

```ts
const { data: { user } } = await supabase.auth.getUser()
const { error } = await supabase
  .from('countries')
  .insert({ name: "<NAME>", owner: user.id  })
```

::: warning
你需要处理错误。
:::

::: tip 更多信息
[获取用户（id）](https://supabase.com/docs/reference/javascript/auth-getuser)

[插入数据](https://supabase.com/docs/reference/javascript/insert)

[错误处理 - Auth](https://supabase.com/docs/guides/auth/debugging/error-codes)
:::

## 更改工作区
暂无文档

## 删除工作区
**你目前无法自主删除工作区，需要联系客服。**