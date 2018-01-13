export default {
    getItem: function (key) {
        let value;
        try {
            // ios safari无痕模式下，直接使用localStorage.setItem会报错
            value = localStorage.getItem(key);
        } catch (ex) {
            // 开发环境下提示error
            console.log(process.env.NODE_ENV)
            if (process.env.NODE_ENV === 'dev') {
                console.error('localStroage.getItem报错,', ex.message);
            }
        } finally {
            return value;
        }
    },

    setItem: function (key, value) {
        try {
            // ios safari无痕模式下，直接使用localStorage.setItem会报错
            localStorage.setItem(key, value);
        } catch (ex) {
            // 开发环境下提示error
            if (process.env.NODE_ENV === 'dev') {
                console.error('localStorage.setItem报错, ', ex.message);
            }
        }
    }
}