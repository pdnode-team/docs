# Register
::: tip
For more info please refer to: [Supabase Docs](https://supabase.com/docs/guides/auth/passwords?queryGroups=language&language=js&queryGroups=flow&flow=implicit#signing-up-with-an-email-and-password)
:::

::: warning
You must guide user to check their email so that they could verify their email address (You should send a link to their email).

**If the user haven't verified his/her email address** then he/she can't **Login**。

*Must requires user to verify their email adderss!*
:::

```ts
async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: '<email>', // Email address
    password: '<password>', // Password
    options: {
      emailRedirectTo: 'https://localhost:5173/welcome', // Redirect link (optional).
    },
  })
}
```
