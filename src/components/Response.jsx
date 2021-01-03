import PropTypes from 'prop-types';

const Response = ({from, message}) => {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">
        {message.text}
      </div>
    </li>
  )
};

Response.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string
  }),
  message: PropTypes.shape({
    time: PropTypes.string,
    text: PropTypes.string,
  })
};

export default Response;