import { createContext, useContext } from 'react'

export type StateType = {
  provider?: any
  web3Provider?: any
  address?: string
  chainId?: number
  isChainSupported?: boolean
}

export const initialState: StateType = {
  provider: null,
  web3Provider: null,
  address: undefined,
  chainId: undefined,
  isChainSupported: false
}

export type ActionType =
  | {
      type: 'SET_WEB3_PROVIDER'
      provider?: StateType['provider']
      web3Provider?: StateType['web3Provider']
      address?: StateType['address']
      chainId?: StateType['chainId']
      isChainSupported?: StateType['isChainSupported']
    }
  | {
      type: 'SET_ADDRESS'
      address?: StateType['address']
    }
  | {
      type: 'SET_CHAIN_ID'
      chainId?: StateType['chainId']
    }
  | {
      type: 'RESET_WEB3_PROVIDER'
    }

export function reducer(state: StateType, action: ActionType): StateType {
  // console.log('action=', action)
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
        isChainSupported: action.isChainSupported
      }
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address
      }
    case 'SET_CHAIN_ID':
      return {
        ...state,
        chainId: action.chainId
      }
    case 'RESET_WEB3_PROVIDER':
      return initialState
    default:
      throw new Error()
  }
}

// export const connectp = (): JSX.Element => {

// export const Context1 = createContext<StateType>(initialState)
const defaultDispatch: React.Dispatch<ActionType> = () => initialState // we never actually use this
export const Context1 = createContext({
  state: initialState,
  dispatch: defaultDispatch, // just to mock out the dispatch type and make it not optioanl
})

export function useDappContext() {
  const c = useContext(Context1)
  return c //useContext(ctx)
  
// //   // return useContext(Context1)
}

// export function PageContextProvider({ children }) {
//   const [state, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(reducer, initialState)
//   return (
//     <Context1.Provider value={{ state, dispatch }}>{ children }</Context.Provider>
//   )
// }


// create context with no upfront defaultValue
// without having to do undefined check all the time
// export function createCtx<StateType, ActionType>(
//   reducer: React.Reducer<StateType, ActionType>,
//   initialState: StateType,
// ) {
//   const defaultDispatch: React.Dispatch<ActionType> = () => initialState // we never actually use this
//   let ctx 
//   ctx = createContext<>({
//     state: initialState,
//     dispatch: defaultDispatch, // just to mock out the dispatch type and make it not optioanl
//   })
//   function Provider(props: React.PropsWithChildren<{}>) {
//     const [state, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(reducer, initialState)
//     return <ctx.Provider value={{ state, dispatch }} {...props} />
//   }
//   return [ctx, Provider] as const
// }

// const [ctx, CtxProvider] = createCtx(reducer, initialState)
// export {ctx, CtxProvider}

// export function useDappContext() {
//   const context = useContext(ctx)
//   if (context === undefined) throw new Error(`No provider for AppContext given`)
//   return context
// }


