import ApiErrors from './api-errors.js'

export function mul(a,b){
  if(typeof a !== 'number' || typeof b !== 'number')return 0
  return a*b
}

export default {
  ApiErrors,
  mul
}
