
import { AboutUs } from './features/aboutUs/AboutUs';
import { Banner } from './features/banner/Banner';
import Layout from './Layout';

function HomePage() {
  return (
    <Layout>
      <Banner />
      <AboutUs />
    </Layout>
  );
}

export default HomePage;
