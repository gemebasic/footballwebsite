import Image from "next/image";

const StaffCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={member.id <= 3}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-bold">{member.name}</h3>
            <p className="text-gray-200 text-sm">{member.role}</p>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">
            {member.department}
          </span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
            {member.yearsOfService} years
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>📧 {member.name.split(" ")[0].toLowerCase()}@club.com</span>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
