import Adapter from './adapter';

import { UniswapV2 } from './uniswap-v2';
import { UniswapV1 } from './uniswap-v1';
import { Kyber } from './kyber';
import { Bancor } from './bancor';
import { Zerox } from './zerox';
import { Curve } from './curve';
import { Aave } from './aave';
import { Compound } from './compound';
import { Weth } from './weth';
import { Balancer } from './balancer';
import { Shell } from './shell';
import { Cofix } from './cofix';
import { DODO } from './dodo';
import { DODOV2 } from './dodov2';
import { Nerve } from './nerve';
import { UniswapV3 } from './uniswap-v3';
import { OneBit } from './onebit';

export const DEXS: { [dex: string]: typeof Adapter } = {
  uniswap: UniswapV1,
  uniswapv2: UniswapV2,
  sushiswap: UniswapV2,
  defiswap: UniswapV2,
  linkswap: UniswapV2,
  pancakeswap: UniswapV2,
  pancakeswapv2: UniswapV2,
  apeswap: UniswapV2,
  julswap: UniswapV2,
  streetswap: UniswapV2,
  bakeryswap: UniswapV2,
  quickswap: UniswapV2,
  cometh: UniswapV2,
  kyber: Kyber,
  bancor: Bancor,
  paraswappool: Zerox,
  paraswappool3: Zerox,
  zerox: Zerox,
  curve: Curve,
  curve3: Curve,
  swerve: Curve,
  acryptos: Curve,
  ellipsis: Curve,
  beltfi: Curve,
  aave: Aave,
  aave2: Aave,
  compound: Compound,
  weth: Weth,
  wbnb: Weth,
  wmatic: Weth,
  balancer: Balancer,
  shell: Shell,
  cofix: Cofix,
  dodov1: DODO,
  dodov2: DODOV2,
  nerve: Nerve,
  saddle: Nerve,
  uniswapv3: UniswapV3,
  onebit: OneBit,
};

export function getDEX(dex: string): typeof Adapter {
  return dex.toLowerCase().match(/^paraswappool(.*)/)
    ? DEXS.paraswappool
    : DEXS[dex.toLowerCase()];
}
