export const STR =
  'A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,q,w,e,r,t,y,u,i,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m';
export const DATA = STR.split(',');
export const DATA_LENGTH = DATA.length;

/**
 * 生成随机色
 * @returns
 */
export const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isFunction = (FunName: any) => {
  return typeof FunName === 'function';
};

// 随机数字
export const randomNum = (m: number, n: number) => {
  return Math.floor(Math.random() * (n - m + 1) + m);
};
