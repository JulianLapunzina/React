import data from "../Data";

const getBooks = ()=> {
    return new Promise ((res, rej) => {
        setTimeout(()=>{
            res(data);
            rej('allá le están trayendo los datos');
        }, 1500); 
    })
}
export default getBooks;