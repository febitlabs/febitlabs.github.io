import {Menubar} from 'primereact/menubar';
import {InputText} from 'primereact/inputtext';
import {useNavigate} from 'react-router-dom';

const Tabs = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: 'What We Do',
      icon: 'pi pi-fw pi-file-edit',
      items: [
        {
          label: 'Consulting',
          command: () => {
            navigate('/consulting');
          },
        },
        {
          label: 'Engineering',
          command: () => {
            navigate('/engineering');
          },
        },
        {
          label: 'Operations',
          command: () => {
            navigate('/operations');
          },
        },
        {
          label: 'Optimization',
          command: () => {
            navigate('/optimization');
          },
        },
        {
          label: 'Healthcare',
          command: () => {
            navigate('/healthcare');
          },
        },
      ],
    },
    {
      label: 'Accelerated',
      icon: 'pi pi-fw pi-stopwatch',
      items: [
        {
          label: 'AI/ML & DataOps',
          command: () => {
            navigate('/ai-ml-dataops');
          },
        },
        {
          label: 'DevSecOps, SRE & AIOps',
          command: () => {
            navigate('/devsecops-aiops');
          },
        },
        {
          label: 'Digital Transformation',
          command: () => {
            navigate('/digital-transformation');
          },
        },
        {
          label: 'Mobile Applications',
          command: () => {
            navigate('/mobile-applications');
          },
        },
      ],
    },
    {
      label: 'Engagement Model',
      icon: 'pi pi-fw pi-users',
      command: () => {
        navigate('/engagement-model');
      },
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-info-circle',
      items: [
        {
          label: 'Founder',
          command: () => {
            navigate('/founder');
          },
        },
        {
          label: 'Contact',
          command: () => {
            navigate('/contact');
          },
        },
      ],
    },
    {
      label: 'Carrers',
      icon: 'pi pi-fw pi-th-large',
      items: [
        {
          label: 'Work Worldwide',
          command: () => {
            navigate('/work-worldwide');
          },
        },
        {
          label: 'Referral Program',
          command: () => {
            navigate('/referral-program');
          },
        },
        {
          label: 'Job Openings',
          command: () => {
            navigate('/job-openings');
          },
        },
      ],
    },
    {
      label: 'Insights',
      icon: 'pi pi-fw pi-chart-bar',
      command: () => {
        navigate('/insights');
      },
    },
  ];

  // Logo should be changes once its finalized
  const start = (
    <img
      alt="logo"
      src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
      height="40"
      width="200"
      className="mr-2"
    ></img>
  );
  const end = <InputText placeholder="Search" type="text" />;

  return (
    <div>
      <div className="card">
        <Menubar model={items} start={start} end={end} />
      </div>
    </div>
  );
};

export default Tabs;
