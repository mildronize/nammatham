import { Container } from "inversify";
import { TYPE } from "../contants";
import { attachControllers } from "./attach-controllers";
import { AzureFunction, Context } from "@azure/functions";
type AzureFunctionParams = Parameters<AzureFunction>;

export interface IFuncBootstrapOption {
  container?: Container,
  classTarget: NewableFunction,
  methodName: string,
  azureFunctionParams: AzureFunctionParams
}

export function funcBootstrap(
  option: IFuncBootstrapOption
) {
  const container = option.container ?? new Container();
  attachControllers(container);
  // for (const func of azureFunctions) {
  //   console.log(
  //     func.key,
  //     func.name,
  //     (func.target as { constructor: NewableFunction }).constructor
  //   );
  // }
  const [azureFunctionContext, ...azureFunctionArgs] = option.azureFunctionParams;
  
  container.unbind(TYPE.Context);
  // Binding Azure Function Context
  container
    .bind<Context>(TYPE.Context)
    .toConstantValue(azureFunctionContext)

  let controllerInstance = container.getNamed(
    TYPE.Controller,
    option.classTarget.name
  );
  (controllerInstance as any)[option.methodName](...azureFunctionArgs);
  console.log("funcBootstrap");
}
