
import { AboutUs } from './aboutUs/AboutUs';
import { Banner } from './banner/Banner';
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
