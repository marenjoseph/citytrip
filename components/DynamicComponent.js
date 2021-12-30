import Teaser from './Teaser'
import Feature from './Feature'
import FeaturedPosts from './FeaturedPosts'
import Grid from './Grid'
import Placeholder from './Placeholder'
import PostsList from './PostsList'
import BlogPost from './BlogPost'
import Text from './Text'
import Movie from './Movie'
import Personality from './Personality'
import Studio from './Studio'
import Genre from './Genre'
import NewsItem from './NewsItem'
import MovieList from './MovieList'
import NewsItemList from './NewsItemList'
import PersonalityList from './PersonalityList'
import ProductList from './ProductList'
import Product from './Product'
import EmailOptin from './EmailOptin'
import TwoCol from './TwoCol'
import Title from './Title'
import TopMovies from './TopMovies'
import AgeRating from './AgeRating'

import City from './City'
import Country from './Country'
import Transport from './Transport'
import Page from './Page'
import FrontpageSlideshow from './FrontpageSlideshow.js'
import CityList from './CityList'
import CountryList from './CountryList'
import Activity from './Activity'
import Intro from './Intro'
import ActivityList from './ActivityList'
import Residence from './Residence'

const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'featured-posts': FeaturedPosts,
  'post': BlogPost,
  'text': Text,
  'selected-posts': PostsList,
  'movie': Movie,
  'personality': Personality,
  'studio': Studio,
  'genre' : Genre,
  'newsitem': NewsItem,
  'movielist':MovieList,
  'newsitemlist':NewsItemList,
  'productlist':ProductList,
  'productcategory':Placeholder,
  'personalitylist':PersonalityList,
  'product':Product,
  'twocol':TwoCol,
  'title':Title,
  'topmovies':TopMovies,
  'agerating':AgeRating,
  
  'City' : City,
  'Country' : Country,
  'Transport' : Transport,
  'Page': Page,
  'intro':Intro,
  'frontpageslideshow' : FrontpageSlideshow,
  'citylist' : CityList,
  'countrylist' : CountryList,
  'Activity' : Activity,
  'activitylist' : ActivityList,
  'emailoptin':EmailOptin,
  'Residence' : Residence
}


const DynamicComponent = ({ data, locale }) => {
  let componentType='undefined';
  let level = 'undefined';
  if(data&&data.story&&data.story.content){
    componentType = data.story.content.component;
    level='data';
  } else if(data&&data.component){
    componentType = data.component;
    level='content';
  }
  if (componentType !== 'undefined') {
    const Component = Components[componentType]
    return <Component data={data} level={level} locale={locale}  />
  }
  return <Placeholder componentName={componentType}/>
}

export default DynamicComponent
