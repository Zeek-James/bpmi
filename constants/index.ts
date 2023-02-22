export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "categories",
    title: "Categories",
  },
  {
    id: "judging",
    title: "Judging",
  },
  {
    id: "winners",
    title: "Winners",
  },
];

export const footer = {
  logo: "logo",
  links: [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "categories",
      title: "Award Categories",
    },
    {
      id: "judging",
      title: "Judging",
    },
    {
      id: "winners",
      title: "Winners",
    },
  ],
  copyRight: "Ⓒ BPMI, Inc. 2023. excellenceaward!",
};

// become a nominee
export const industries = [
  {
    text: "Banking and finance",
    name: "banking-and-finance",
  },
  {
    text: "Telecommunication",
    name: "telecommunication",
  },
  {
    text: "Hospitality and Tourism",
    name: "hospitality-and-tourism",
  },
  {
    text: "Transport (Airline and Road)",
    name: "transport",
  },
  {
    text: "Real Estate",
    name: "real-estate",
  },
  {
    text: "Fast Food and Restaurant",
    name: "fast-food-and-restaurant",
  },
  {
    text: "Government Agencies",
    name: "government-agencies",
  },
  {
    text: "Malls & Supermarkets",
    name: "malls-&-supermarkets",
  },
  {
    text: "Insurance",
    name: "insurance",
  },
  {
    text: "Pharmaceutical",
    name: "pharmaceutical",
  },
  {
    text: "Health Management Organizations",
    name: "health-management-organizations",
  },
  {
    text: "Courier services",
    name: "courier-services",
  },
  {
    text: "Pension fund adminstrators",
    name: "pension-fund-adminstrators",
  },
  {
    text: "Travel and Tour",
    name: "travel-and-tour",
  },
];

// Banks
export const banks = [
  { title: "Access Bank Plc", vote: 15, rating: 15 },
  { title: "Ecobank Nigeria", vote: 15, rating: 15 },
  { title: "Fidelity Bank Plc", vote: 15, rating: 15 },
  { title: "First Bank of Nigeria Limited", vote: 15, rating: 15 },
  { title: "First City Monument Bank Limited", vote: 15, rating: 15 },
  { title: "Guaranty Trust Holding Company Plc", vote: 15, rating: 15 },
  { title: "Keystone Bank Limited", vote: 15, rating: 15 },
  { title: "Kuda microfinance bank", vote: 15, rating: 15 },
  { title: "Opay", vote: 15, rating: 15 },
  { title: "Stanbic IBTC Bank Plc", vote: 15, rating: 15 },
];

export const responses = {
  labels: ["Januaray", "Januaray", "Januaray", "Januaray"],
  datasets: [
    {
      labe: "Lon",
      borderRadius: 30,
      data: [0.1, 0.4, 0.5],
      backgroundColor: "blue",
      barThickness: 10,
    },
  ],
};

export const barChart = {
  plugins: {
    legend: {
      position: "top",
      align: "center",
      labels: {
        boxWidth: 7,
        usePointStyles: true,
      },
      title: {
        text: "S",
        display: true,
        color: "#000",
      },
    },
  },
  scales: {
    xAxis: {
      display: false,
    },
    yAxis: {
      max: 1,
    },
  },
  elements: {
    bar: {
      barPercentage: 0.3,
      categoryPercentage: 1,
    },
  },
};
