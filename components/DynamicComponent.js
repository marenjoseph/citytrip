import Placeholder from './Placeholder'
import EmailOptin from './EmailOptin'
import Title from './Title'
import Text from './Text'
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
import ResidenceList from './ResidenceList'
import Restaurant from './Restaurant'
import RestaurantList from './RestaurantList'

const Components = {
  'text': Text,
  'productcategory':Placeholder,
  'title':Title,
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
  'Emailoptin':EmailOptin,
  'Residence' : Residence,
  'residencelist' : ResidenceList,
  "Restaurant" : Restaurant,
  "Restaurantlist" : RestaurantList
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
