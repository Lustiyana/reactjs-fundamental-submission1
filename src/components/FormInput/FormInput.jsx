import PropType from "prop-types"

const FormInput = ({label, type, onChange, value}) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input type={type} onChange={onChange} value={value}/>
    </>
  );
};

export default FormInput

FormInput.propTypes = {
  label: PropType.string,
  type: PropType.string,
  onChange: PropType.func
}
