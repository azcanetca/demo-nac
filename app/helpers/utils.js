// set data from sesion
export const setSession = (name, data) => {
    return localStorage.setItem(name, JSON.stringify(data));
};

// get data from sesion
export const getSession = (name) => {
    return localStorage.getItem(name);
};

export const setFilterData = (data, section) => {
    const filteredData = section.reduce((acc, curr) => {
        acc[curr] = data?.[curr];
        return acc;
    }, {});
    return filteredData
}