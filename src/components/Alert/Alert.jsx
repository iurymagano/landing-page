export function Alert(props) {
  return(
    <>
      <div className={`w-full h-full ${props.sucesso && 'bg-green-500 '} ${props.erro && 'bg-red-500 '} ${props.className}`}>{props.label}</div>
    </>
  );
}