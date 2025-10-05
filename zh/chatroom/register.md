# 注册

```ts
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://chatapi.pdnode.com');


const data = {
    "email": "test@example.com",
    "emailVisibility": true,
    "name": "test",
    "password": "12345678",
    "passwordConfirm": "12345678"
};

const record = await pb.collection('users').create(data);

await pb.collection('users').requestVerification('test@example.com');
```