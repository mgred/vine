import { Tryte, t2n, n2t, TRYTE_NUM_VALUES, MAX_TRYTE } from './ALU.js'

// Memory interface. Has TRYTE_NUM_VALUES (19683) 9-trit addresses by default,
// each holding a tryte. All addresses are initialized to zero.
//
// Rather than using binary-coded ternary[0], we just convert all trytes given
// to us into JS numbers with the same numerical value. This is probably less
// efficient than using BCT.
//
// [0] http://homepage.divms.uiowa.edu/~jones/ternary/bct.shtml
//
// TODO: support negative ram addresses
export default class Memory {
  // Signed 32-bit integers fit our 9841 through -9841 tryte values.
  block: Int32Array

  constructor(size = TRYTE_NUM_VALUES) {
    this.block = new Int32Array(TRYTE_NUM_VALUES)
  }

  load(addr: Tryte): Tryte {
    return n2t(this.block[t2n(addr)])
  }

  store(addr: Tryte, value: Tryte) {
    this.block[t2n(addr)] = t2n(value)
  }
}
