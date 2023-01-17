import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {
  Dashboard,
  Tabs,
  JobOpeningsComponent,
  InsightsComponent,
  OptimizationComponent,
  HealthcareComponent,
  OperationsComponent,
  ConsultingComponent,
  EngineeringComponent,
  EngagementModelComponent,
  ReferralProgramComponent,
  WorkWorldwideComponent,
  MobileApplicationsComponent,
  DigitalTransformationComponent,
  ContactComponent,
  AIMLDataopsComponent,
  DevSecOpsAIOpsComponent,
  FounderComponent,
} from '../Components';

const Router = () => {
  return (
    <BrowserRouter>
      <Tabs />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/consulting" element={<ConsultingComponent />} />
        <Route path="/engineering" element={<EngineeringComponent />} />
        <Route path="/operations" element={<OperationsComponent />} />
        <Route path="/optimization" element={<OptimizationComponent />} />
        <Route path="/healthcare" element={<HealthcareComponent />} />

        <Route path="/ai-ml-dataops" element={<AIMLDataopsComponent />} />
        <Route path="/devsecops-aiops" element={<DevSecOpsAIOpsComponent />} />
        <Route
          path="/digital-transformation"
          element={<DigitalTransformationComponent />}
        />
        <Route
          path="/mobile-applications"
          element={<MobileApplicationsComponent />}
        />

        <Route
          path="/engagement-model"
          element={<EngagementModelComponent />}
        />

        <Route path="/founder" element={<FounderComponent />} />
        <Route path="/contact" element={<ContactComponent />} />

        <Route path="/work-worldwide" element={<WorkWorldwideComponent />} />
        <Route
          path="/referral-program"
          element={<ReferralProgramComponent />}
        />
        <Route path="/job-openings" element={<JobOpeningsComponent />} />

        <Route path="/insights" element={<InsightsComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
