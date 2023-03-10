import type { PartialBy } from '../../types';
import {
  CosmosDBBinding_Output_V2,
  CosmosDBBinding_Output_V4,
  CosmosDBBinding_Input_V2,
  CosmosDBBinding_Input_V4,
} from '../interfaces';
/**
 * Create cosmosDB type binding for Bundle Extension v2 or v3. It requires to install [Bundle extension v2 or v3](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2?tabs=in-process%2Cfunctionsv2&pivots=programming-language-javascript#install-bundle)
 * 
 * Use for Binding output with [cosmosDB Type](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger?tabs=in-process%2Cextensionv4&pivots=programming-language-javascript#configuration)
 * 
 * @example
 *  ```
    // Option 1: Using cosmosDB implicitly 
    Binding.cosmosDB_output_v2({ name: 'documents' as const })

    // Option 2: Using cosmosDB explicitly
    Binding.cosmosDB_output_v2({ 
      name: 'documents' as const,
      direction: 'out',
      type: 'cosmosDB'
    })
    ```

    Passing that object into `@functionName` decorator, At boostrap phase, Nammatham will generate binding `function.json` like:
    ```json
    {
      "bindings": [
        {
          "name": "documents",
          "direction": "out",
          "type": "cosmosDB"
        }
      ]
    }
    ```
   @remark Always mark the name prop `as const`, to convert the string into literal type. So, the Nammatham will detect only literal type to map the binding object in `Context`

 * @param bindings - `CosmosDBBinding_Output_V2`
 * @returns `CosmosDBBinding_Output_V2` Object with `{ type: 'cosmosDB', direction: 'out' }`
 */
export function cosmosDB_output_v2<Binding extends CosmosDBBinding_Output_V2<unknown>, Name extends Binding['name']>(
  bindings: PartialBy<CosmosDBBinding_Output_V2<Name>, 'type' | 'direction'>
): CosmosDBBinding_Output_V2<Name> {
  return {
    ...bindings,
    type: 'cosmosDB',
    direction: 'out',
  };
}

/**
   * Create cosmosDB type binding for Bundle Extension v4. It required to install [Bundle extension v4](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2?tabs=in-process%2Cextensionv4&pivots=programming-language-javascript#install-bundle)
   * 
   * Use for Binding output with [cosmosDB Type](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger?tabs=in-process%2Cextensionv4&pivots=programming-language-javascript#configuration)
   * 
   * @example
   *  ```
      // Option 1: Using cosmosDB implicitly 
      Binding.cosmosDB_output_v4({ name: 'documents' as const })
  
      // Option 2: Using cosmosDB explicitly
      Binding.cosmosDB_output_v4({ 
        name: 'documents' as const,
        direction: 'out',
        type: 'cosmosDB'
      })
      ```
  
      Passing that object into `@functionName` decorator, At boostrap phase, Nammatham will generate binding `function.json` like:
      ```json
      {
        "bindings": [
          {
            "name": "documents",
            "direction": "out",
            "type": "cosmosDB"
          }
        ]
      }
      ```
      @remark Always mark the name prop `as const`, to convert the string into literal type. So, the Nammatham will detect only literal type to map the binding object in `Context`
  
    * @param bindings - `CosmosDBBinding_Output_V4`
    * @returns `CosmosDBBinding_Output_V4` Object with `{ type: 'cosmosDB', direction: 'out' }`
    */
export function cosmosDB_output_v4<Binding extends CosmosDBBinding_Output_V4<unknown>, Name extends Binding['name']>(
  bindings: PartialBy<CosmosDBBinding_Output_V4<Name>, 'type' | 'direction'>
): CosmosDBBinding_Output_V4<Name> {
  return {
    ...bindings,
    type: 'cosmosDB',
    direction: 'out',
  };
}

/**
   * Create cosmosDB type binding for Bundle Extension v4. It required to install [Bundle extension v4](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2?tabs=in-process%2Cextensionv4&pivots=programming-language-javascript#install-bundle)
   * 
   * Use for Binding output with [cosmosDB Type](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger?tabs=in-process%2Cextensionv4&pivots=programming-language-javascript#configuration)
   * 
   * @example
   *  ```
      // Option 1: Using cosmosDB implicitly 
      Binding.cosmosDB_output({ name: 'documents' as const })
  
      // Option 2: Using cosmosDB explicitly
      Binding.cosmosDB_output({ 
        name: 'documents' as const,
        direction: 'out',
        type: 'cosmosDB'
      })
      ```
  
      Passing that object into `@functionName` decorator, At boostrap phase, Nammatham will generate binding `function.json` like:
      ```json
      {
        "bindings": [
          {
            "name": "documents",
            "direction": "out",
            "type": "cosmosDB"
          }
        ]
      }
      ```
      @remark Always mark the name prop `as const`, to convert the string into literal type. So, the Nammatham will detect only literal type to map the binding object in `Context`
  
    * @param bindings - `CosmosDBBinding_Output_V4`
    * @returns `CosmosDBBinding_Output_V4` Object with `{ type: 'cosmosDB', direction: 'out' }`
    */
export function cosmosDB_output<Binding extends CosmosDBBinding_Output_V4<unknown>, Name extends Binding['name']>(
  bindings: PartialBy<CosmosDBBinding_Output_V4<Name>, 'type' | 'direction'>
): CosmosDBBinding_Output_V4<Name> {
  return cosmosDB_output_v4(bindings);
}

/**
   * Create cosmosDB type binding for Bundle Extension v2 or v3. It requires to install [Bundle extension v2 or v3](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2?tabs=in-process%2Cfunctionsv2&pivots=programming-language-javascript#install-bundle)
   * 
   * Use for Binding input with [cosmosDB Type](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger?tabs=in-process%2Cextensionv4&pivots=programming-language-javascript#configuration)
   * 
   * @example
   *  ```
      // Option 1: Using cosmosDB implicitly 
      Binding.cosmosDB_input_v2({ name: 'documents' as const })
  
      // Option 2: Using cosmosDB explicitly
      Binding.cosmosDB_input_v2({ 
        name: 'documents' as const,
        direction: 'out',
        type: 'cosmosDB'
      })
      ```
  
      Passing that object into `@functionName` decorator, At boostrap phase, Nammatham will generate binding `function.json` like:
      ```json
      {
        "bindings": [
          {
            "name": "documents",
            "direction": "out",
            "type": "cosmosDB"
          }
        ]
      }
      ```
     @remark Always mark the name prop `as const`, to convert the string into literal type. So, the Nammatham will detect only literal type to map the binding object in `Context`
  
   * @param bindings - `CosmosDBBinding_Input_V2`
   * @returns `CosmosDBBinding_Input_V2` Object with `{ type: 'cosmosDB', direction: 'out' }`
   */
export function cosmosDB_input_v2<Binding extends CosmosDBBinding_Input_V2<unknown>, Name extends Binding['name']>(
  bindings: PartialBy<CosmosDBBinding_Input_V2<Name>, 'type' | 'direction'>
): CosmosDBBinding_Input_V2<Name> {
  return {
    ...bindings,
    type: 'cosmosDB',
    direction: 'in',
  };
}

/**
    * Create cosmosDB type binding for Bundle Extension v4. It required to install [Bundle extension v4](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2?tabs=in-process%2Cextensionv4&pivots=programming-language-javascript#install-bundle)
    * 
    * Use for Binding input with [cosmosDB Type](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger?tabs=in-process%2Cextensionv4&pivots=programming-language-javascript#configuration)
    * 
    * @example
    *  ```
       // Option 1: Using cosmosDB implicitly 
       Binding.cosmosDB_input_v4({ name: 'documents' as const })
   
       // Option 2: Using cosmosDB explicitly
       Binding.cosmosDB_input_v4({ 
         name: 'documents' as const,
         direction: 'out',
         type: 'cosmosDB'
       })
       ```
   
       Passing that object into `@functionName` decorator, At boostrap phase, Nammatham will generate binding `function.json` like:
       ```json
       {
         "bindings": [
           {
             "name": "documents",
             "direction": "out",
             "type": "cosmosDB"
           }
         ]
       }
       ```
       @remark Always mark the name prop `as const`, to convert the string into literal type. So, the Nammatham will detect only literal type to map the binding object in `Context`
   
     * @param bindings - `CosmosDBBinding_Input_V4`
     * @returns `CosmosDBBinding_Input_V4` Object with `{ type: 'cosmosDB', direction: 'out' }`
     */
export function cosmosDB_input_v4<Binding extends CosmosDBBinding_Input_V4<unknown>, Name extends Binding['name']>(
  bindings: PartialBy<CosmosDBBinding_Input_V4<Name>, 'type' | 'direction'>
): CosmosDBBinding_Input_V4<Name> {
  return {
    ...bindings,
    type: 'cosmosDB',
    direction: 'in',
  };
}

/**
    * Create cosmosDB type binding for Bundle Extension v4. It required to install [Bundle extension v4](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2?tabs=in-process%2Cextensionv4&pivots=programming-language-javascript#install-bundle)
    * 
    * Use for Binding input with [cosmosDB Type](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger?tabs=in-process%2Cextensionv4&pivots=programming-language-javascript#configuration)
    * 
    * @example
    *  ```
       // Option 1: Using cosmosDB implicitly 
       Binding.cosmosDB_input({ name: 'documents' as const })
   
       // Option 2: Using cosmosDB explicitly
       Binding.cosmosDB_input({ 
         name: 'documents' as const,
         direction: 'out',
         type: 'cosmosDB'
       })
       ```
   
       Passing that object into `@functionName` decorator, At boostrap phase, Nammatham will generate binding `function.json` like:
       ```json
       {
         "bindings": [
           {
             "name": "documents",
             "direction": "out",
             "type": "cosmosDB"
           }
         ]
       }
       ```
       @remark Always mark the name prop `as const`, to convert the string into literal type. So, the Nammatham will detect only literal type to map the binding object in `Context`
   
     * @param bindings - `CosmosDBBinding_Input_V4`
     * @returns `CosmosDBBinding_Input_V4` Object with `{ type: 'cosmosDB', direction: 'out' }`
     */
export function cosmosDB_input<Binding extends CosmosDBBinding_Input_V4<unknown>, Name extends Binding['name']>(
  bindings: PartialBy<CosmosDBBinding_Input_V4<Name>, 'type' | 'direction'>
): CosmosDBBinding_Input_V4<Name> {
  return cosmosDB_input_v4(bindings);
}
