import { Account } from '@template-nextjs-expressjs-minimal/db';
import { useState } from 'react';

export function Index() {
  const [account, setAccount] = useState<Account>({
    id: 'id',
    username: 'username',
    email: 'email',
  });

  return <div></div>;
}

export default Index;
