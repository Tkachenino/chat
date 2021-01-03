import Message from './Message';
import Response from './Response';
import Typing from './Typing';
import PropTypes from 'prop-types';


const MessageHistory = ({list}) => {
  return (
      <ul>
        {list.map(({id, type, from, ...message}) => (
          (type === 'response' && <Response key={id} from={from} message={message} />)
          || (type === 'message' && <Message key={id} from={from} message={message} />)
          || (type === 'typing' && <Typing key={id} from={from} message={message} />)
        ))}
    </ul>  
  )
};

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    from: PropTypes.shape({
      name: PropTypes.string
    }),
    type: PropTypes.string,
    time: PropTypes.string,
    text: PropTypes.string,
  }))
};

export default MessageHistory;