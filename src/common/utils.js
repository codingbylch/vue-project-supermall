export function debounce(func, delay = 200) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            console.log('refresh防抖处理')
            func.apply(this, args);
            // console.log(func)
        }, delay);
    };
}