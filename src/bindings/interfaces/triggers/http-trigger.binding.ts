import { BaseFunctionBinding } from '../base-function-binding';

export type RequestMethod = 'get' | 'post' | 'delete' | 'options' | 'put';
export enum AuthorizationLevel {
  Anonymous = 'anonymous',
}

/**
 * HttpTrigger Binding
 * 
 * read more: [HttpTrigger Configuration](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=in-process%2Cfunctionsv2&pivots=programming-language-javascript#configuration)
 */
export interface HttpTriggerRequestBinding extends BaseFunctionBinding<'httpTrigger'> {
  /**
   * Required - must be set to `httpTrigger`.
   */
  type: 'httpTrigger';
  /**
   * Required - must be set to in.
   */
  direction: 'in';
  /**
   * Determines what keys, if any, need to be present on the request in order
   * to invoke the function. For supported values, see [Authorization level](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=in-process%2Cfunctionsv2&pivots=programming-language-javascript#http-auth).
   */
  authLevel?: AuthorizationLevel;
  /**
   * An array of the HTTP methods to which the function responds. If not specified, 
   * the function responds to all HTTP methods. See [customize the HTTP endpoint](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=in-process%2Cfunctionsv2&pivots=programming-language-javascript#customize-the-http-endpoint).
   */
  methods?: RequestMethod[];
  /**
   * Defines the route template, controlling to which request URLs your function responds. 
   * The default value if none is provided is `<functionname>`. For more information, see [customize the HTTP endpoint](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=in-process%2Cfunctionsv2&pivots=programming-language-javascript#customize-the-http-endpoint).
   */
  route?: string;
}

export interface HttpTriggerResponseBinding extends BaseFunctionBinding<'http'> {
  type: 'http';
  direction: 'out';
}
