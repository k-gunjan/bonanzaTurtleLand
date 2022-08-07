import '../styles/index.css'
import { Context1, reducer, initialState } from '../lib/context'
import { useReducer } from 'react'
import { AppProps } from "next/app"


export default function MyApp ({ Component, pageProps }: AppProps){
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context1.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
     </Context1.Provider>
  )
}


// const [ctx, CtxProvider] = createCtx(reducer, initialState)
// export const CountContext = ctx
// function MyApp() {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <CtxProvider>
//       <Component  />
//     </CtxProvider>
//   )
// }

