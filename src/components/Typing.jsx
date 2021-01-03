import PropTypes from 'prop-types';

const Typing = ({from, message}) => {
  return (
    <li>
    <div className="message-data">
      <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
      <span className="message-data-time">{message.time}</span>
    </div>
    <div className="typing">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </li>
  )
};

Typing.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string
  }),
  message: PropTypes.shape({
    time: PropTypes.string
  })
};


export default Typing;