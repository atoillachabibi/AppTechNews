import { useState, useEffect } from 'react';
import newsAPI from '../../api/newsApi';

const useNews = () => {
    const [featuredNews, setFeaturedNews] = useState({});
    const [breakingNews, setBreakingNews] = useState({});
    const [hardwareNews, setHardwareNews] = useState([]);
    const [softwareNews, setSoftwareNews] = useState([]);
    const [inovasiNews, setInovasiNews] = useState([]);
    const qty = 5;
  
    const filterFeatured = data => {
      return data.filter(item => item.featured === 'on').reverse()[0];
    };
  
    const filterByCategory = (data, category) => {
      const result = data
        .filter(item => item.category === category)
        .reverse()
        .splice(0, qty);
  
      if (result.length) {
        result.push({ type: 'viewMore', category: category, id: category });
      }
  
      return result;
    };
  
    const filterMultipleNews = async () => {
      setLoading(true);
      const allNews = await newsApi.getAll();
      
      setFeaturedNews(filterFeatured(allNews));
      setBreakingNews(filterByCategory(allNews, 'breaking-news'));
      setHardwareNews(filterByCategory(allNews, 'hardware'));
      setSoftwareNews(filterByCategory(allNews, 'Software'));
      setInovasiNews(filterByCategory(allNews, 'inovasi'));
    }
  
    useEffect(() => {
      filterMultipleNews()   
    }, [])

    return [
        featuredNews, 
        hardwareNews, 
        softwareNews, 
        inovasiNews, 
        breakingNews,
    ];
}

export default useNews;