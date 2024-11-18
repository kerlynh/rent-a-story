import { getInitialName } from "../../utils/name";

interface AvatarProps {
  userName: string;
}

export function Avatar({ userName }: AvatarProps) {
  return (
    <div
      className="w-full h-full overflow-hidden bg-slate-500 text-white shadow-md border-spacing-0.5 border-white flex items-center justify-center"
      data-testid="avatar"
    >
      <p>{getInitialName(userName)}</p>
    </div>
  );
}
