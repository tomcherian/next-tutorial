import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  async function fetchDashboardData() {
    const response = await fetch("http://localhost:4000/dashboard");
    const data = await response.json();
    setDashboardData(data);
    setIsLoading(false);
  }
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h1>{dashboardData.posts}</h1>
      <h1>{dashboardData.likes}</h1>
      <h1>{dashboardData.followers}</h1>
      <h1>{dashboardData.following}</h1>
    </>
  );
};

export default Dashboard;
