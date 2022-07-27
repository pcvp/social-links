interface ButtonProps {
  callbackFunction: Function;
  text: String;
}
export default function Botao(props: ButtonProps) {
  function handleClick() {
    typeof props.callbackFunction === "function"
      ? props.callbackFunction()
      : console.log("Callback não definida");
  }
  return (
    <button
      onClick={handleClick}
      className="text-white text-xl p-3 mb-5 rounded-lg border border-green-400 hover:bg-green-400 transition-colors "
    >
      {props.text}
    </button>
  );
}
