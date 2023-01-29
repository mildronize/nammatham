# Nammatham
Nammatham (นามธรรม in Thai, pronounced `/naam ma tham/`) is Azure Function Nodejs Lightweight frameworks with Dependency Injection, 

[![npm version](https://img.shields.io/npm/v/nammatham)](https://www.npmjs.com/package/nammatham) [![npm download](https://img.shields.io/npm/dt/nammatham)](https://www.npmjs.com/package/nammatham)

## Introduction

Azure Functions is a platform for building event-driven and serverless applications. **Nammatham** is a framework that allows you to use Azure Functions with TypeScript and decorators. It provides pre-defined JSON binding objects and utility functions, such as `httpTrigger`, to make it easier to create Azure Functions.

One example of using Nammatham with Azure Functions is an HTTP trigger function, where the `httpTrigger` function returns a JSON binding object that defines the function's input and output. The `@controller` and `@functionName` decorators are used to define the function and specify its bindings.

```ts
import { AuthorizationLevel, BaseController, controller, functionName, httpTrigger } from "nammatham";
import { HttpRequest } from "@azure/functions";

@controller()
export class UserController extends BaseController {

  @functionName("GetUsers", httpTrigger(AuthorizationLevel.Anonymous, ["get"]))
  public getUsers(req: HttpRequest): void {
    const name = req.query.name;  
    this.res.send(`hello get user with ${name}`);
  }
}
```

## Features
- Provide basic utility for writing Azure Functions
- Only support TypeScript and [InversifyJS](https://github.com/inversify/Inversify) as the [Most Popular Inversion of Control Container and Dependency Injection Approach](https://npmtrends.com/awilix-vs-bottlejs-vs-inversify-vs-node-dependency-injection-vs-tsyringe-vs-typedi-vs-typescript-ioc) 
- Built-in support HTTP trigger, and also [support all types of Trigger](docs/define-azure-function.md#custom-binding)
- Build Tool Agnostic, this framework just provide the library. It can work with all TypeScript build tool e.g. tsc, esbuild, etc.

## Installation
You can install nammatham using npm:

```
npm install nammatham inversify reflect-metadata --save
```

The `nammatham` type definitions are included in the npm module and require TypeScript 2.0 and above. Please refer to the [InversifyJS](https://github.com/inversify/InversifyJS#-installation) documentation to learn more about the installation process.

## Motivation

This framework aims to improve the development experience for Azure Functions using Node.js by providing a clear project structure, built-in Azure Function Configuration with the code, and built-in Dependency Injection.

.NET is a first-class supported in Azure Function which ... (Write Later)

We heavily get inspired from Azure Functions .NET version which provide clearly project strucutre, built-in Azure Function Configuration with the Code, and also provide built-in Dependency Injection.

- **Ugly Project Structure** -The Azure Functions Node.js library only provides basic tools to connect with the Azure Function Runtime. All function endpoints are located in the root of the project and only accept one export in the `index.js` file, which is the Azure Function Runtime will inject runtime object for that such as `Context`. Other code such as services, constants, and middleware must be located at the same level as the function endpoints.
- **Separate JS Code and the Function configuration** - The separation of JS code and function configuration makes it harder to understand how the function app works. In contrast, the [.NET version also provide configuration inline of the C# Code](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-csharp?tabs=azure-cli%2Cin-process#httpexamplecs), no type support when binding input and output from `function.json`
    - To create an Azure Function endpoint, two files are required:
        1. [index.js](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-node?tabs=azure-cli%2Cbrowser#indexjs) which must have only one export.
        2. [function.json](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-node?tabs=azure-cli%2Cbrowser#functionjson) which is a plain JSON file with no autocomplete or easy-to-use configuration, requiring the user to open the documentation to configure it.
- **No Dependecy Injection** - Azure Functions Node.js does not provide any built-in Dependency Injection tool, unlike the [.NET Azure Function provides built-in Dependency Injection](https://learn.microsoft.com/en-us/azure/azure-functions/functions-dotnet-dependency-injection)

## Getting Started

Full examples please, go to [examples](examples) directory

### 1. Basic

This is basic to use partially type support, you can follow steps below:

1. define `main.ts` (or any name)
    ```ts
    // File: main.ts
    import 'reflect-metadata';
    import { bootstrap } from 'nammatham';
    import { UserController } from './controllers/user.controller';

    bootstrap({
      // Require passing `__filename` to `bootstrapPath` prop
      bootstrapPath: __filename,
      // Add Controller to register function
      controllers: [UserController],
    });
    ```
   
2. Write controller, extend with `BaseController` we will auto inject Azure Function's Context
    ```ts
    // src/user.controller.ts
    import {
      AuthorizationLevel,
      BaseController,
      controller,
      functionName,
      httpTrigger,
    } from "nammatham";
    import { HttpRequest } from "@azure/functions";

    @controller()
    export class UserController extends BaseController {

      @functionName("GetUsers", httpTrigger(AuthorizationLevel.Anonymous, ["get"]))
      public getUsers(_: any, req: HttpRequest): void {
        const name = req.query.name;  
        const message = `hello get user with ${name}`;
        this.context.log(message);
        this.res.send(message);
      }
    }
    ```
3. Add Azure Functions files at root
    - `host.json`
    - `local.settings.json`
4. Run `ts-node` to generate all Azure Functions 
    ```ts
    ts-node src/main.ts && tsc
    ```
5. Start Azure Functions
    ```
    func start
    ```

### 2. Handle `function.json` config by yourself

This method will support full support type when bindings config is set, for example below:

you can define your own `function.json` in Typescript object (as you can see the variable `functionConfig`), this will binding type into `ContextBindings` by using type utility `GetContextBindings`

```ts
import { BaseController, controller, functionName, GetContextBindings, HttpTriggerRequestBinding, HttpTriggerResponseBinding, CustomFunctionBinding } from 'nammatham';

const functionConfig = [
  {
    name: 'req',
    type: 'httpTrigger',
    direction: 'in',
  } as HttpTriggerRequestBinding<'req'>,
  {
    name: 'res',
    direction: 'out',
    type: 'http',
  } as HttpTriggerResponseBinding<'res'>,
];

@controller()
export class HelloTypeController extends BaseController {
  @functionName('HelloType', ...functionConfig)
  public getName({ req }: GetContextBindings<typeof functionConfig>): void {
    const name = req.query.name;
    // this context will have the correct type of Response
    this.context.res = {
      body: `hello HelloType with ${name}`,
    };
  }
}
```

## Documentation

Please read the [full documentation in the repo](docs)

## TODO
- [ ] Add Log at boostrap level
- [X] Inject **Context** in Class Dependency
- [ ] `@controller()` should accept prefix path, e.g. `@controller('users')`
- [ ] allow to add Middleware
- [ ] Unit Test
- [ ] functionName must be unique
- [ ] Clean generated function endpoint (already remove controller)
- [ ] Cannot Resolve Serivce from Bootstrap script


## Inspiration 
- [Azure Functions .NET](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-csharp?tabs=azure-cli%2Cin-process)
- [inversify-express-utils](https://github.com/inversify/inversify-express-utils) - We use inversify as a Dependency Injection Tool.
- [Nestjs](https://nestjs.com/)
- [typestack/routing-controllers](https://github.com/typestack/routing-controllers)

## Author
- Thada Wangthammang, Software Engineer, Thailand