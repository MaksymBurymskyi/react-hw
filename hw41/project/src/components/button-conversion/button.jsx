import './button.css';

function Button({ textBtn, classBtn }) {
  return <><button className={classBtn}>{ textBtn }</button></>
}

export default Button;