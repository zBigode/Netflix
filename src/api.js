const API_KEY="c140abae692a4ebb1d882db3d91b781e";

const categories = [
    {
      name: "trending",
      title: "Em alta",
      path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
      isLarge: true,
    },
    {
      name: "netflixOriginals",
      title: "Originais Netflix",
      path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
      isLarge: false,
    },
    {
      name: "topRated",
      title: "Populares",
      path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
      isLarge: false,
    },
    {
      name: "comedy",
      title: "Comédias",
      path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
      isLarge: false,
    },
    {
      name: "romances",
      title: "Romances",
      path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
      isLarge: false,
    },
    {
      name: "documentaries",
      title: "Documentários",
      path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
      isLarge: false,
    },
  ];

  //metodo para pegar as informacoes

  export const getMovies = async (path) =>{
      try {
        let url = `https://api.themoviedb.org/3${path}`
        const response = await fetch(url)
        return  await response.json()
        
    } catch (error) {
        console.log("error getMovies ",error)
    }
  }

  export default categories;