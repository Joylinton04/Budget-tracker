




const useLocalStorage = (key) => {
    const getItems = () => {
        try{
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : []
        }
        catch(err) {
            console.log(err)
        }
    }

    const setItem = (value) => {
        try{
            window.localStorage.setItem(key, JSON.stringify(value))
        }
        catch(err) {
            console.log(err)
        }
    }

    return { getItems, setItem }    
}

export default useLocalStorage;