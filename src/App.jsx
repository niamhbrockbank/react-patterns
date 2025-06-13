import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";

import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];

function App() {
  return (<main>
    <section>
      <h2>Why work with us?</h2>

      <Accordion className="accordion">
        <Accordion.Item 
          id="experience"
          className="accordion-item" >
            <Accordion.Title  className="accordion-item-title">We've got loads of experience</Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You cannot go wrong with us</p>
                <p>We've had ages of time to go wrong and perfect before your vacation.</p>
              </article>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item 
          id="local-guides"
          className="accordion-item" >
            <Accordion.Title className="accordion-item-title">We work with local guides</Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>We are in the field keeping up to date with the hot spots.</p>
              </article>
            </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>
    <section>
      <SearchableList items={PLACES}/>
      <SearchableList items={['item 1', 'item 2', 'item 3']}/>
    </section>
    </main>)
}

export default App;
