
export const paginate = (users) => {
    const itemsPerPage = 5;
    const pages = Math.ceil(users.length / itemsPerPage);
    const newUser = [];

    Array.from({length:pages},(_,index) => {
        const start = index * itemsPerPage;
        newUser.push(users.slice(start,start + itemsPerPage))
    })
    return [{...newUser},pages];
    
    
}




