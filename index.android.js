import {ToastAndroid} from 'react-native';

var SimpleToast = {
  SHORT: ToastAndroid.SHORT,
  LONG: ToastAndroid.LONG,
  show: function (message:string, duration:number):void {
    ToastAndroid.show(message, duration === undefined ? this.SHORT : duration);
  }
};

export default SimpleToast;
