import TeamMembers from "./TeamMembers";
import Teams from "./Teams";
const Employees = ({
  employees,
  selectedTeam,
  handleTeamSelectionChange,
  handleEmployeeCardClick,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange}/>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
          <TeamMembers employees={employees} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick}/>
        </div>
        </div>
      </div>
    </main>
  );
};
export default Employees;
