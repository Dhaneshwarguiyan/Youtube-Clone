const url1 = 'https://youtube-v31.p.rapidapi.com';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_API_KEY,
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};


const getData = async (url2)=>{
    try {
        const response = await fetch(`${url1}/${url2}`, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}


export default getData;







