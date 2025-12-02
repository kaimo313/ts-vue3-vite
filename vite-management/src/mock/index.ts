import { type MockMethod } from 'vite-plugin-mock'
import loginMock from './login'

export default [
    ...loginMock
] as MockMethod[]

