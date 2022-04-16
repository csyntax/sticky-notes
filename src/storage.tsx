export default {
    get(key: string, defaultValue: any = undefined): any {
        const value = window.localStorage.getItem(key);
        
        return value ? JSON.parse(value) : defaultValue;
    },
    set(key: string, value: any) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
};