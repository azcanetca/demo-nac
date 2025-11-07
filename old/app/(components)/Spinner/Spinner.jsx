const Spinner = ({ count = 10 }) => {
  const spinnerItems = Array.from({ length: count }, (_, index) => (
    <div key={index}></div>
  ));

  return <div className="spinner">{spinnerItems}</div>;
};

export default Spinner;
