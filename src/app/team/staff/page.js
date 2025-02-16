import StaffCard from "../components/stafflist";

const StaffPage = () => {
  const staffMembers = [
    {
      id: 1,
      name: "John Smith",
      role: "Head Coach",
      department: "Coaching",
      image: "/coach.jpg",
      yearsOfService: 5,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Physiotherapist",
      department: "Medical",
      image: "/physio.jpg",
      yearsOfService: 8,
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Head of Scouting",
      department: "Recruitment",
      image: "/scout.jpg",
      yearsOfService: 12,
    },
    // Add more staff members...
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Technical Staff
          </h1>
          <p className="text-gray-600">Behind the Success</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {staffMembers.map((member) => (
            <StaffCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffPage;
