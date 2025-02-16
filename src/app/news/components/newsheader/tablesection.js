import React from "react";

function TableSection() {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800 mb-2">Standings</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-3 text-gray-600">Team</th>
            <th className="py-2 px-3 text-gray-600">Pts</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2 px-3">ARS</td>
            <td className="py-2 px-3">25</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-3">CHE</td>
            <td className="py-2 px-3">23</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableSection;
