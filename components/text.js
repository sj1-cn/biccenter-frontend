
const Text = ({ text,max }) => (
  <>
  {text && text.length>max?text.substr(0,max-3)+"...":text}
  </>
);

export default Text;