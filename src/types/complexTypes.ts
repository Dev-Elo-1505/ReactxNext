type Stats = Record<string, number>;

interface User {
  name: string;
  email: string;
  avatar: string;
  role: string;
  status: string;
  stats: Stats;
}

interface Theme {
  backgroundColor: string;
  textColor: string;
  avatarBg: string;
  badgeBg: string;
}

interface ActionButton {
  label: string;
  onClick: () => void;
  className: string;
}

interface Actions {
  primary: ActionButton;
  secondary: ActionButton;
}

export interface UserProfileCardProps {
  user: User;
  theme: Theme;
  actions: Actions;
}
