const Dialog = {
  alert: (params) => {
    if(!params.button) {
      console.warn("Alert needs a button");
      return;
    }

    const alert = document.createElement('ion-alert');
    alert.header = params.title || '';
    alert.subHeader = params.subtitle || '';
    alert.message = params.message || '';
    alert.buttons = [params.button];

    document.body.appendChild(alert);
    return alert.present();
  },

  confirm: (params) => {
    if(!params.button || !params.button2) {
      console.warn("Alert needs a button");
      return;
    }

    const alert = document.createElement('ion-alert');
    alert.header = params.title || '';
    alert.subHeader = params.subtitle || '';
    alert.message = params.message || '';
    let buttons = [];
    if(params.button) {
      buttons.push(Object.freeze({
        text: params.button,
        handler: params.onPress || (() => {})
      }))
    }
    if(params.button2) {
      buttons.push(Object.freeze({
        text: params.button2,
        cssClass: 'secondary',
        handler: params.onPress2 || (() => {})
      }))
    }
    alert.buttons = buttons;

    document.body.appendChild(alert);
    return alert.present();
  }
}

export default Dialog;
