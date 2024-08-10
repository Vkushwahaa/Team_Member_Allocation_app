const Footer = () => {
  let today = new Date();
  return (
    <footer>
      <h2> Team Member Allocation App - {today.getFullYear()} </h2>
    </footer>
  );
};
export default Footer;
