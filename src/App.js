import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

const services =[
  {
    id:1,
    name:'Eye care',
    img: 'https://www.devsnews.com/wp/medidove/wp-content/uploads/2019/05/service-1.jpg',
    desc:'VEH has been established with the slogan “Mission for Vision”. Its journey has been commenced to introduce advanced technologies in eye care field of Bangladesh at an affordable cost and ensure skillness, sincerity and devotion in eye care service. It has been working for prevention of blindness from the society and restoring perfect vision along with the programs of ‘Vision 2020’ run by WHO. It serves purposes of national eye care (NEC) of People’s Republic of Bangladesh in this context.'  
  },
  {
    id:2,
    name:'Blood Cancer',
    img: 'https://www.devsnews.com/wp/medidove/wp-content/uploads/2019/05/service-6.jpg',
    desc:'Leukemia is a type of cancer of the blood and bone marrow,largely affecting children. In this disease, the blood cells being produced remain immature. There are excellent treatment forms available for this cancer, but the rate of success proportionately decreases with the increasing age of the patient.'
  },
  {
    id:3,
    name:'Neurology Surgery',
    img: 'https://www.devsnews.com/wp/medidove/wp-content/uploads/2019/05/service-7.jpg',
    desc:'In Bangladesh,most best neuro seurgeon, we take a consultation before opening the hospital and he received us in a very good manner and explains well about the chronic pain.Faihan hassan Great doctor, we met him at home for consultation and now we came to know that hospital has everything that will treat neuro conditions unlike other hospitals.'  
  },
  {
    id:4,
    name:'Alargyc Issue',
    img: 'https://www.devsnews.com/wp/medidove/wp-content/uploads/2019/05/service-4.jpg',
    desc:'Most people with allergic reactions can go home and require no emergency blood tests.It is a clinical diagnosis.If you have a severe allergic reaction,anaphylaxis or require adrenaline then you will be admitted for monitoring and may require blood tests.'  
  },
  {
    id:5,
    name:'Body Surgery',
    img: 'https://www.devsnews.com/wp/medidove/wp-content/uploads/2019/05/service-5.jpg',
    desc:'Department of Plastic, Reconstructive & Cosmetic Surgery of our hospital provides exceptional and extensive services to its patients in several aspects of Plastic Surgery. Our post graduate qualified plastic surgeons utilize the latest techniques and provide a wide variety of aesthetic and reconstructive procedures for both men and women with safe, successful outcomes. The department offers both surgical and non-surgical services to help patients look and feel their best. The diverse works of the Plastic, Reconstructive & Cosmetic Surgery Department is unique to our hospital.'  
  },
  {
    id:6,
    name:'Dental care',
    img: 'https://www.devsnews.com/wp/medidove/wp-content/uploads/2019/05/service-2.jpg',
    desc:'Implants are used to replace missing roots and support artificial replacement teeth. They are comfortable and look like natural teeth. A dental implant is an artificial root made of titanium metal. It is inserted into the jawbone to replace the root of the natural tooth. An artificial replacement tooth is attached to the implant. The implant acts as an anchor to hold the replacement tooth in place.'  
  },
  {
    id:1,
    name:'Eye care',
    img: 'https://www.devsnews.com/wp/medidove/wp-content/uploads/2019/05/service-1.jpg',
    desc:'VEH has been established with the slogan “Mission for Vision”. Its journey has been commenced to introduce advanced technologies in eye care field of Bangladesh at an affordable cost and ensure skillness, sincerity and devotion in eye care service. It has been working for prevention of blindness from the society and restoring perfect vision along with the programs of ‘Vision 2020’ run by WHO. It serves purposes of national eye care (NEC) of People’s Republic of Bangladesh in this context.'  
  },
  {
    id:1,
    name:'Eye care',
    img: 'https://www.devsnews.com/wp/medidove/wp-content/uploads/2019/05/service-1.jpg',
    desc:'VEH has been established with the slogan “Mission for Vision”. Its journey has been commenced to introduce advanced technologies in eye care field of Bangladesh at an affordable cost and ensure skillness, sincerity and devotion in eye care service. It has been working for prevention of blindness from the society and restoring perfect vision along with the programs of ‘Vision 2020’ run by WHO. It serves purposes of national eye care (NEC) of People’s Republic of Bangladesh in this context.'  
  },
  {
    id:1,
    name:'Eye care',
    img: 'https://www.devsnews.com/wp/medidove/wp-content/uploads/2019/05/service-1.jpg',
    desc:'VEH has been established with the slogan “Mission for Vision”. Its journey has been commenced to introduce advanced technologies in eye care field of Bangladesh at an affordable cost and ensure skillness, sincerity and devotion in eye care service. It has been working for prevention of blindness from the society and restoring perfect vision along with the programs of ‘Vision 2020’ run by WHO. It serves purposes of national eye care (NEC) of People’s Republic of Bangladesh in this context.'  
  },
]
