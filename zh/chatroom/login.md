# 登录
```ts
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://chatapi.pdnode.com');

const authData = await pb.collection('users').authWithPassword(
    'YOUR_USERNAME_OR_EMAIL',
    'YOUR_PASSWORD',
);

// after the above you can also access the auth data from the authStore
console.log(pb.authStore.isValid);
console.log(pb.authStore.token);
console.log(pb.authStore.record.id);

// "logout" the last authenticated record
pb.authStore.clear();
```