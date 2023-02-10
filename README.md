# Node.js CLI application

## How to install node projects locally

- Clone repository
- Navigate to root folder of the project
- Run

```git
   npm install
```

- Run one of the following examples command

## Action exampes

- Recieve list of contacts and print it to console table

```cli
node index --action list
```

![List of contacts](https://monosnap.com/image/mWhe8cp5Qt0AGaN38gwLSLsw0oJnBC)

- Get contact by id

```cli
node index --action get --id 5
```

![Get contact](https://monosnap.com/image/aJEnK3zHql4GGyVIJgS35gj5MrLtgW)

- Add contact

```cli
node index --action add --name Mango --email mango@gmail.com --phone 322-22-22
```

![Add contact](https://monosnap.com/image/S4dlDjT8G4X2aROkJxOqA1sGxWgvIg)

- Remove contact

```cli
node index --action remove --id 3
```

![Remove contact](https://monosnap.com/image/JQXCcgdL4lMYRMUcmatUgRT6BCku5p)
