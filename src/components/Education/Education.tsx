import { Table } from "@chakra-ui/react";
import educationData from "../../data/education.json";

const Education = () => {
  return (
    <section
      className="md:flex flex-col justify-center font-custom p-4 md:p-8 max-w-5xl lg:mx-auto text-gray-300"
      id="education"
    >
      <div className="flex justify-center p-4">
        <h2 className="text-4xl md:text-5xl">EDUCATION</h2>
      </div>
      <Table.Root size="sm" interactive className="!rounded-xl">
        <div className="rounded-xl bg-slate-50 p-1">
          <Table.Header className="rounded-xl">
            <Table.Row className="rounded-xl">
              <Table.ColumnHeader className="bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100 font-bold">
                Degree
              </Table.ColumnHeader>
              <Table.ColumnHeader className="bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100 font-bold">
                School
              </Table.ColumnHeader>
              <Table.ColumnHeader className=" bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100 font-bold hidden md:table-cell">
                Specialization
              </Table.ColumnHeader>
              <Table.ColumnHeader className="bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100 font-bold hidden md:table-cell">
                Gpa
              </Table.ColumnHeader>
              <Table.ColumnHeader
                textAlign="end"
                className="bg-gradient-to-b from-gray-900 to-blue-900 text-gray-100 font-bold"
              >
                Year
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {educationData.map((education) => (
              <Table.Row
                key={education.id}
                className="text-gray-100 bg-blue-900"
              >
                <Table.Cell>{education.degreeName}</Table.Cell>
                <a href={education.url}>
                  <Table.Cell className="bg-blue-900">
                    {education.schoolName}
                  </Table.Cell>
                </a>
                <Table.Cell className="hidden md:table-cell">
                  {education.areaOfSpecialization}
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {education.gpa}
                </Table.Cell>

                <Table.Cell textAlign="end">
                  {education.yearsOfStudy}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </div>
      </Table.Root>
    </section>
  );
};

export default Education;
