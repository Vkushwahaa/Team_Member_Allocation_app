import TeamMemberCard from "./TeamMemberCard";
const TeamMembers = ({ employees, selectedTeam, handleEmployeeCardClick }) => {
  return employees.map((employee) => (
    <TeamMemberCard
      handleEmployeeCardClick={handleEmployeeCardClick}
      selectedTeam={selectedTeam}
      employee={employee}
    />
  ));
};
export default TeamMembers;
