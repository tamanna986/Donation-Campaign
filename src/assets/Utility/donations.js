

const getStoredDonations = () =>{
    const storedDonations = localStorage.getItem('recievedDonations')
    if(storedDonations){
        return JSON.parse(storedDonations)
    }
    return [];
}


const SavedDonations = id =>{
    const storedDonations = getStoredDonations();
    const doesConatin = storedDonations.find(donatedId => donatedId === id)
    if(!doesConatin){
        storedDonations.push(id)
        localStorage.setItem('recievedDonations' , JSON.stringify(storedDonations))
    }
        
        
}

export{getStoredDonations ,SavedDonations }