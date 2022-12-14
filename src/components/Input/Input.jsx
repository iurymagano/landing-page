 function Input(props) {
  return(
    <div className="flex flex-col">
      <label className="text-sm text-zinc-200 mb-1">{props.label}</label>
      <input
        className={`text-white ${props.className ? props.className : 'bg-transparent placeholder:text-zinc-500 border-zinc-500 focus:border-2 '}  pl-4 py-3 rounded-lg  border-2 outline-0 focus-within:border-white ${props.erro && 'border-red-500'}`} 
        type={props.type} 
        placeholder={props.placeholder} 
        value={props.value}
        onChange={props.onChange}
        />
    </div>

  );
}

export default Input;