export default function Debounce(value, delay) {
    if(typeof delay === 'number') {
        setTimeout(()=> {
            return(value);
        }, delay);
    }
}