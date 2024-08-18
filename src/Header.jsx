const Header = ({ teamMemberCount, selectedTeam }) => {
  return (
    <header>
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-4">
          <h1>Team Member Allocation</h1>
          <h2>
            {selectedTeam} has {teamMemberCount}{" "}
            {teamMemberCount === 1 ? "Member" : "Members"}
          </h2>
        </div>
      </div>
    </header>
  );
};
export default Header;
