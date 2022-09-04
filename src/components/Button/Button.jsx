export function Button(props) {
  return(
    <button
      disabled={props.disabled}
      onClick={props.onClick} 
      className={` ${props.className} text-white font-semibold ${props.default && ' bg-red-600 px-14 py-3 rounded-3xl shadow-md hover:bg-red-900'} `}>
      {props.label || props.children}
    </button>

  );
}