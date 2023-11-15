import img1 from './images/arabic-img.webp';
import img2 from './images/portuguese.webp';
import img3 from './images/russian-img.jpeg';
import img4 from './images/chinese-img.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>
        This is My Grid Practice
      </h3>
      <div className='container'>
      <section className='item item-1'>
        <h4>
          Arabic
        </h4>
        <img src={img1} alt='arabic alphabet'/>
        <p>
          As many people know, Arabic is one of the hardest languages to learn as a non-native speaker. 
          This language is rich and beautiful in a unique way. One of the letters literally 'smiles' at you. 
        </p>
      </section>
      <section className='item item-2'>
        <h4>
          Portuguese
        </h4>
        <img src={img2} alt='portuguese words' />
        <p>
          What country comes to your mind first when you hear the word 'portuguese'? For me, it always is Brazil. 
        </p>
      </section>
      <section className='item item-3'>
      <h4>
        Russian
      </h4>
      <img src={img3} alt='russian alphabet' />
      <p>
      This languages is also considered extremely difficult. Some of the letters continue being mocked by new learners. 
      </p>
      </section>
      <section className='item item-4'>
      <h4>
        Chinese
      </h4>
      <img src={img4} alt='chinese characters' />
      <p>
        Arguably, the richest and most complex language is Chinese. There are so many characters where each one of them is a seperate piece of art.
      </p>
      </section>
      </div>
    </div>
  );
}

export default App;
