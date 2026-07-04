import { useState } from 'react';
import CartoonAvatar from './CartoonAvatar';

// Drop a real avatar image at `public/avatar.png` (or .jpg/.webp and update the
// path below) and it shows automatically. If the file is missing or fails to
// load, we fall back to the built-in flat cartoon so the site never breaks.
const AVATAR_SRC = '/avatar.png';

export default function Avatar() {
  const [failed, setFailed] = useState(false);

  if (failed) return <CartoonAvatar />;

  return (
    <img
      src={AVATAR_SRC}
      alt="Ritchie Nalam"
      className="avatar-photo"
      onError={() => setFailed(true)}
      draggable={false}
    />
  );
}
