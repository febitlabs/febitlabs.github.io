import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../Components';
import ContactComponent from '../Components/About/ContactComponent';
import FounderComponent from '../Components/About/FounderComponent';
import AIMLDataopsComponent from '../Components/Accelerated/AIMLDataopsComponent';
import DevSecOpsAIOpsComponent from '../Components/Accelerated/DevSecOpsAIOpsComponent';
import DigitalTransformationComponent from '../Components/Accelerated/DigitalTransformationComponent';
import MobileApplicationsComponent from '../Components/Accelerated/MobileApplicationsComponent';
import JobOpeningsComponent from '../Components/Carrers/JobOpeningsComponent';
import ReferralProgramComponent from '../Components/Carrers/ReferralProgramComponent';
import WorkWorldwideComponent from '../Components/Carrers/WorkWorldwideComponent';
import EngagementModelComponent from '../Components/EngagementModel/EngagementModelComponent';
import InsightsComponent from '../Components/Insights/InsightsComponent';
import ConsultingComponent from '../Components/WhatWeDo/ConsultingComponent';
import EngineeringComponent from '../Components/WhatWeDo/EngineeringComponent';
import HealthcareComponent from '../Components/WhatWeDo/HealthcareComponent';
import OperationsComponent from '../Components/WhatWeDo/OperationsComponent';
import OptimizationComponent from '../Components/WhatWeDo/OptimizationComponent';

const Router = () => {
    return (
      <BrowserRouter>
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