import { useEffect, useState } from "react";
import { api, type Employee } from "../../services/api";

export function ListEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [errorMEssage, setErrorMessage] = useState("");

  async function fetchEmployees() {
    try {
      const data: Employee[] = await api.employees.getAllEmployees();
      setEmployees(data);
    } catch (error) {
      console.error("Failed to fetch employees:", error);
      setErrorMessage("Failed to get Employees. Please try again later.");
    }
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  const columns = [
    { key: "id", label: "Employee Id" },
    { key: "firstName", label: "Employee First Name" },
    { key: "lastName", label: "Employee Last Name" },
    { key: "email", label: "Employee Email" },
  ] as const;

  return (
    <div className="overflow-x-auto p-6 md:p-10">
      <h1 className=" text-center text-4xl font-bold text-cyan-600 m-5">
        List of Employees
      </h1>
      <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="divide-x divide-gray-200 bg-teal-500 text-white">
              {columns.map((col) => (
                <th key={col.key} className="p-2">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className="divide-x divide-gray-200 text-center odd:bg-zinc-300"
              >
                {columns.map((col) => (
                  <td key={col.key} className="p-2">
                    {employee[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
