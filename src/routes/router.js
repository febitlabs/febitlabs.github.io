import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../Components';
import ContactComponent from '../Components/about/ContactComponent';
import FounderComponent from '../Components/about/FounderComponent';
import AIMLDataopsComponent from '../Components/accelerated/AIMLDataopsComponent';
import DevSecOpsAIOpsComponent from '../Components/accelerated/DevSecOpsAIOpsComponent';
import DigitalTransformationComponent from '../Components/accelerated/DigitalTransformationComponent';
import MobileApplicationsComponent from '../Components/accelerated/MobileApplicationsComponent';
import JobOpeningsComponent from '../Components/carrers/JobOpeningsComponent';
import ReferralProgramComponent from '../Components/carrers/ReferralProgramComponent';
import WorkWorldwideComponent from '../Components/carrers/WorkWorldwideComponent';
import EngagementModelComponent from '../Components/engagement-model/EngagementModelComponent';
import InsightsComponent from '../Components/insights/InsightsComponent';
import Tabs from '../Components/Navbar/Tabs';
import ConsultingComponent from '../Components/what-we-do/ConsultingComponent';
import EngineeringComponent from '../Components/what-we-do/EngineeringComponent';
import HealthcareComponent from '../Components/what-we-do/HealthcareComponent';
import OperationsComponent from '../Components/what-we-do/OperationsComponent';
import OptimizationComponent from '../Components/what-we-do/OptimizationComponent';

const Router = () => {
    return (
      <BrowserRouter>
      <Tabs/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/consulting" element={<ConsultingComponent/>} />
          <Route path="/engineering" element={<EngineeringComponent/>} />
          <Route path="/operations" element={<OperationsComponent/>} />
          <Route path="/optimization" element={<OptimizationComponent/>} />
          <Route path="/healthcare" element={<HealthcareComponent/>} />

          <Route path="/ai-ml-dataops" element={<AIMLDataopsComponent/>} />
          <Route path="/devsecops-aiops" element={<DevSecOpsAIOpsComponent/>} />
          <Route path="/digital-transformation" element={<DigitalTransformationComponent/>} />
          <Route path="/mobile-applications" element={<MobileApplicationsComponent/>} />

          <Route path="/engagement-model" element={<EngagementModelComponent/>} />

          <Route path="/founder" element={<FounderComponent/>} />
          <Route path="/contact" element={<ContactComponent/>} />

          <Route path="/work-worldwide" element={<WorkWorldwideComponent/>} />
          <Route path="/referral-program" element={<ReferralProgramComponent/>} />
          <Route path="/job-openings" element={<JobOpeningsComponent/>} />

          <Route path="/insights" element={<InsightsComponent/>} />
        </Routes>
      </BrowserRouter>
    );
  }

export default Router
