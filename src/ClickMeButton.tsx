export interface ClickMeButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ClickMeButton({ onClick }: ClickMeButtonProps) {
  return (
    <button
      className="select-none font-black bg-purple-500 px-16 py-2 text-white transition-all hover:opacity-80 active:opacity-70"
      onClick={onClick}
    >
      Clique aqui
    </button>
  );
}
