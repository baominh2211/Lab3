import PropTypes from 'prop-types';

function Card({ children, title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <hr />
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
