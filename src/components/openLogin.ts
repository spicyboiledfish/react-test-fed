import bridge from '../utils/bridge';

const isIOS = /iPhone|iPad|iPod/i.test(
  navigator.userAgent.toLowerCase()
);

const isInHupu = /kanqiu/.test(navigator.userAgent.toLowerCase());

if (!isIOS) {
  setTimeout(() => {
    //@ts-ignore
    if (typeof HupuBridge !== 'undefined') {
      //@ts-ignore
      HupuBridge.register('s11-login', function (res) {
          location.reload();
      });
    }
  }, 66);
}

export default function () {
  if (isInHupu) {
    bridge.getUserInfo().then(res => {
      const { islogin } = res as any;
      if (!islogin) {
        if (isIOS) {
          bridge.register('hupu.common.userbindinfo', () => {
            location.reload()
          })
          bridge.openLogin()
        } else {
          // @ts-ignore
          androidBridge.callNativeAsync('hupu.user.login', '{"data":{}}', 's11-login');
        }
      }
    })
  }
}