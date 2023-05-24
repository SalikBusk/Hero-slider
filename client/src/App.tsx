import './App.css';

// Components
import Slider from './components/Slider';

// images
import tuttu from './assets/Tuttu-kang.jpg';
import tuttu3 from './assets/Tuttu-2-kang.jpg';
import qimmeq from './assets/Qimmeq.jpg';
import Container from './components/Container';

function App() {
  const slides = [
    {
      url: tuttu,
      label: "slide 1",
      subtitle: "her er slide 1",
    },
    {
      url: tuttu3,
      label: "slide 2",
      subtitle: "her er slide 2",
    },
    {
      url: qimmeq,
      label: "slide 3",
      subtitle: "her er slide 3",
    },
  ];
  return (
    <div className="mt-[50px]">
      <Container>
        <Slider slides={slides}/>
      </Container>
    </div>
  );
}

export default App;
