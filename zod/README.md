# zod sample

## Usage

```sh
$ yarn install
$ yarn start
```

```sh
# Once the d.ts file has been modified, run the script.
$ yarn gen:zod-schema
```

## Correct request

### Client

```sh
$ curl localhost:3000 -X POST -d '{ "name": "name", "age": 42, "sex": "female" }'
```

### Server

```sh
POST /
request: { name: 'name', age: 42, sex: 'female' }
validation is successful
```

## Wrong request

### Client

```sh
$ curl localhost:3000 -X POST -d '{ "name": "name", "age": "string" }'
```

### Server

```sh
POST /
request: { name: 'name', age: '42' }
/Users/furukawakoichi/git/training/typescript-runtime-validation-sample/zod/node_modules/zod/lib/types.js:29
        const error = new ZodError_1.ZodError(ctx.common.issues);
                      ^
ZodError: [
  {
    "code": "invalid_type",
    "expected": "number",
    "received": "string",
    "path": [
      "age"
    ],
    "message": "Expected number, received string"
  },
  {
    "code": "invalid_union",
    "unionErrors": [
      {
        "issues": [
          {
            "code": "invalid_literal",
            "expected": "male",
            "path": [
              "sex"
            ],
            "message": "Invalid literal value, expected \"male\""
          }
        ],
        "name": "ZodError"
      },
      {
        "issues": [
          {
            "code": "invalid_literal",
            "expected": "female",
            "path": [
              "sex"
            ],
            "message": "Invalid literal value, expected \"female\""
          }
        ],
        "name": "ZodError"
      }
    ],
    "path": [
      "sex"
    ],
    "message": "Invalid input"
  }
]
    at handleResult (/Users/furukawakoichi/git/training/typescript-runtime-validation-sample/zod/node_modules/zod/lib/types.js:29:23)
    at ZodObject.safeParse (/Users/furukawakoichi/git/training/typescript-runtime-validation-sample/zod/node_modules/zod/lib/types.js:140:16)
    at ZodObject.parse (/Users/furukawakoichi/git/training/typescript-runtime-validation-sample/zod/node_modules/zod/lib/types.js:120:29)
    at validate (/Users/furukawakoichi/git/training/typescript-runtime-validation-sample/zod/src/validate.ts:11:12)
    at post (/Users/furukawakoichi/git/training/typescript-runtime-validation-sample/zod/src/controller.ts:6:11)
    at IncomingMessage.<anonymous> (/Users/furukawakoichi/git/training/typescript-runtime-validation-sample/zod/src/server.ts:11:13)
    at IncomingMessage.emit (events.js:400:28)
    at IncomingMessage.emit (domain.js:475:12)
    at IncomingMessage.Readable.read (internal/streams/readable.js:504:10)
    at flow (internal/streams/readable.js:987:34) {
  issues: [
    {
      code: 'invalid_type',
      expected: 'number',
      received: 'string',
      path: [Array],
      message: 'Expected number, received string'
    },
    {
      code: 'invalid_union',
      unionErrors: [Array],
      path: [Array],
      message: 'Invalid input'
    }
  ],
  addIssue: [Function (anonymous)],
  addIssues: [Function (anonymous)]
}
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
13:20:57 : ~/git/training/typescript-runtime-validation-sample/zod (main *=)
```
