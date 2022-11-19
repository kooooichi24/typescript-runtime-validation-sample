# zod sample

## Usage

```sh
$ yarn install

# start server
$ yarn start

# correct request
$ curl localhost:3000 -X POST -d '{ "name": "name", "age": 42, "sex": "female" }'

# wrong request
$ curl localhost:3000 -X POST -d '{ "name": "name" }'
```

## Create zod-schema from d.ts file

```sh
$ yarn gen:zod-schema
```
