# Login
::: tip
For more info please refer to: [Supabase Docs](https://supabase.com/docs/guides/auth/passwords?queryGroups=language&language=js&queryGroups=flow&flow=implicit#signing-in-with-an-email-and-password)
:::

```ts
async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: '<email>',
    password: '<password>',
  })
}
```
