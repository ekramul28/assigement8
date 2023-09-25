const getItemOfLocalStor = () => {
    const get = localStorage.getItem('donate');
    if (get) {
        return JSON.parse(get);
    }
    return [];
}
const setItemOfLocalStor = (id) => {
    const stored = getItemOfLocalStor();
    const exist = stored.find(stordId => stordId === id);
    if (!exist) {
        stored.push(id);
        localStorage.setItem('donate', JSON.stringify(stored));
    }


}



export { setItemOfLocalStor, getItemOfLocalStor }