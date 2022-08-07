// declare global {
//     namespace NodeJS {
//       interface ProcessEnv {
//         INFURA_ID: string;
//         NODE_ENV: 'development' | 'production';
//         PORT?: string;
//         PWD: string;
        
//       }
//     }
//   }

  declare namespace NodeJS {
    interface ProcessEnv {
        INFURA_ID: string;
    }
  }