export const exerciseOptions ={
  method: 'GET',
  params: {limit: '900'},
  headers: {
    'X-RapidAPI-Key': '780775f209msh764ecafb990ece2p18505fjsn2037f2f2b505',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '780775f209msh764ecafb990ece2p18505fjsn2037f2f2b505',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

  
export const fetchData = async (url,options) =>  
 {
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
};