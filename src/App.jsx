import Accordion from "./components/Accordion/Accordion";

function App() {
  return (<main>
    <section>
      <h2>Why work with us?</h2>

      <Accordion className="accordion">
        <Accordion.Item 
          id="experience"
          className="accordion-item" 
          title="We've got loads of experience">
            <article>
              <p>You cannot go wrong with us</p>
              <p>We've had ages of time to go wrong and perfect before your vacation.</p>
            </article>
        </Accordion.Item>
        <Accordion.Item 
          id="local-guides"
          className="accordion-item" 
          title="We work with local guides">
          <article>
            <p>We are in the field keeping up to date with the hot spots.</p>
          </article>
        </Accordion.Item>
      </Accordion>
    </section>
    </main>)
}

export default App;
