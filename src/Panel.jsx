import PropTypes from 'prop-types';

function Panel({ title, children, isActive, onShow }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h3>{title}</h3>
        {isActive ? (
          <button onClick={onShow}>Hide</button>
        ) : (
          <button onClick={onShow}>Show</button>
        )}
      </div>
      {isActive && (
        <div className="panel-content">
          {children}
        </div>
      )}
    </div>
  );
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
};

export default Panel;
