declare module "*.css" {
  const resource: { [key: string]: string };
  export = resource;
}

declare module "*.less" {
  const resource: { [key: string]: string };
  export = resource;
}

declare module "*.scss" {
  const resource: { [key: string]: string };
  export = resource;
}

declare module "*.sass" {
  const resource: { [key: string]: string };
  export = resource;
}

declare module "*.svg";

declare module "*.png";

declare module "*.jpg";

declare module "*.jpeg";

declare module "*.gif";

declare module "*.md" {
  const content: string;
  export default content;
}

interface Window {
  eruda: any;
  VConsole: any;
  wx: any;
  AndroidHupuLiveJS: any;
  requestAnimationFrame: any;
  io: any;
  Aliplayer: any;
  Clappr: any;
  deepinfo: any;
  RongIMLib: any;
  DeepBridge: any;
  clipboardData: any;
  canPop: any;
}
