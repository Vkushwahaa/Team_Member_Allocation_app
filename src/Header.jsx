const Header = ({ teamMemberCount, selectedTeam }) => {
  return (
    <header>
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-4">
          <h1>
            {selectedTeam} has {teamMemberCount} Members
          </h1>
        </div>
      </div>
    </header>
  );
};
export default Header;
