const Dialog = {
  alert: params => {
    const button = params.button || {
      text: 'OK',
    };

    const alert = document.createElement('ion-alert');
    alert.header = params.title || '';
    alert.subHeader = params.subtitle || '';
    alert.message = params.message || '';
    alert.buttons = [button];

    document.body.appendChild(alert);
    return alert.present();
  },

  confirm: params => {
    const alert = document.createElement('ion-alert');
    alert.header = params.title || '';
    alert.subHeader = params.subtitle || '';
    alert.message = params.message || '';
    alert.buttons = [
      {
        text: params.button2 || 'Cancel',
        cssClass: 'secondary',
        handler: params.onPress2 || (() => {}),
      },
      {
        text: params.button || 'OK',
        handler: params.onPress || (() => {}),
      },
    ];

    document.body.appendChild(alert);
    return alert.present();
  },
};

export default Dialog;
