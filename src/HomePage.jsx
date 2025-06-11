
import { AboutUs } from './features/aboutUs/AboutUs';
import { Courses } from './features/courses/Courses';
import { Categories } from './features/categories/Categories';
import Layout from './Layout';
import { WhyChooseUs } from './features/whyChooseUs/WhyChooseUs';
import { Educations } from './features/educations/Educations';
import { Banner } from './features/banner/Banner';
import { Teachers } from './features/teachers/Teachers';
import { StudentsFeedback } from './features/feedback/StudentsFeedback';
import { AboutCampus } from './features/campus/AboutCampus';

function HomePage() {
  return (
    <Layout>
      <Banner />
      <AboutUs />
      <Categories />
      <Courses />
      <WhyChooseUs />
      <Teachers />
      <Educations />
      <StudentsFeedback />
      <AboutCampus />
    </Layout>
  );
}

export default HomePage;