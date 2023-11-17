import BackgroundImage from '../../assets/background.jpg';
import SearchForm from './components/SearchForm';

export default function Index() {
  const sectionStyle = {
    backgroundImage: `url(${BackgroundImage})`,
  };

  return (
    <section className='min-h-screen bg-cover' style={sectionStyle}>
        <SearchForm/>
    </section>
  );
}
