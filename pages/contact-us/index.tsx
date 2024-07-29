import { MainLayout } from "@/layouts";
import { ContactUsPage } from "../../components/contactUs/ContactUs";

function index() {
  return (
    <MainLayout title='Contact Us'>
      <ContactUsPage />
      <div className=''>Hello</div>
    </MainLayout>
  );
}

export default index;
