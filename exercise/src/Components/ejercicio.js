async function fetchData(url) {
    await fetch(url)
        .then((response)=>{
            if (!response.ok){
                throw new Error(`API Not Found`);
                
            }
            return response.json
        })
        .then()
}