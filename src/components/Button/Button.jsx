import { Icon } from '@iconify/react';
import PropType, { func } from 'prop-types'

const Button = ({ onClick, title, iconName }) => {
  return (
    <button
      className="action"
      type="button"
      title={title}
      onClick={onClick}
    >
      <Icon icon={`ion:${iconName}`} />
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropType.func,
  title: PropType.string,
  iconName: PropType.string
}