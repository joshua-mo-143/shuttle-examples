interface Props {
  message: string;
  role: string;
}

export const ChatMessage = ({ message, role }: Props) => {
  const color = role === "user" ? "bg-slate-300" : "bg-cyan-300";
  const align = role === "user" ? "self-end" : "self-start";
  return (
    <div className={`${color} ${align} text-black p-4 rounded-xl w-[80%]`}>
      {message}
    </div>
  );
};
